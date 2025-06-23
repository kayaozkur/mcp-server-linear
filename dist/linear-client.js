/**
 * Linear API Client
 *
 * Wrapper for Linear GraphQL API with intelligent features
 */
import { z } from 'zod';
// Zod schemas for validation
export const LinearTeamSchema = z.object({
    id: z.string(),
    name: z.string(),
    key: z.string(),
    description: z.string().optional()
});
export const LinearIssueSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    state: z.object({
        id: z.string(),
        name: z.string(),
        type: z.string()
    }),
    priority: z.number().optional(),
    assignee: z.object({
        id: z.string(),
        name: z.string(),
        email: z.string()
    }).optional(),
    project: z.object({
        id: z.string(),
        name: z.string()
    }).optional(),
    labels: z.array(z.object({
        id: z.string(),
        name: z.string(),
        color: z.string()
    })).optional()
});
export const LinearProjectSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    state: z.string(),
    health: z.string().optional(),
    startDate: z.string().optional(),
    targetDate: z.string().optional(),
    progress: z.number().optional(),
    lead: z.object({
        id: z.string(),
        name: z.string()
    }).optional()
});
export class LinearClient {
    constructor(apiKey) {
        this.baseUrl = 'https://api.linear.app/graphql';
        this.apiKey = apiKey;
    }
    /**
     * Execute GraphQL query
     */
    async query(query, variables = {}) {
        try {
            const response = await fetch(this.baseUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            if (result.errors) {
                throw new Error(`GraphQL error: ${result.errors[0].message}`);
            }
            return result.data;
        }
        catch (error) {
            console.error('Linear API error:', error);
            throw error;
        }
    }
    /**
     * Get teams
     */
    async getTeams() {
        const query = `
      query {
        teams {
          nodes {
            id
            name
            key
            description
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.teams.nodes.map((team) => LinearTeamSchema.parse(team));
    }
    /**
     * Get issues with filters
     */
    async getIssues(filters = {}) {
        const filterConditions = [];
        if (filters.teamId)
            filterConditions.push(`team: { id: { eq: "${filters.teamId}" } }`);
        if (filters.assigneeId)
            filterConditions.push(`assignee: { id: { eq: "${filters.assigneeId}" } }`);
        if (filters.stateId)
            filterConditions.push(`state: { id: { eq: "${filters.stateId}" } }`);
        if (filters.projectId)
            filterConditions.push(`project: { id: { eq: "${filters.projectId}" } }`);
        const filterString = filterConditions.length > 0 ? `filter: { ${filterConditions.join(', ')} }` : '';
        const first = filters.first || 50;
        const query = `
      query {
        issues(${filterString} first: ${first}) {
          nodes {
            id
            title
            description
            state {
              id
              name
              type
            }
            priority
            assignee {
              id
              name
              email
            }
            project {
              id
              name
            }
            labels {
              nodes {
                id
                name
                color
              }
            }
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.issues.nodes.map((issue) => {
            // Transform labels array
            if (issue.labels) {
                issue.labels = issue.labels.nodes;
            }
            return LinearIssueSchema.parse(issue);
        });
    }
    /**
     * Get projects
     */
    async getProjects(filters = {}) {
        const filterConditions = [];
        if (filters.teamId)
            filterConditions.push(`team: { id: { eq: "${filters.teamId}" } }`);
        if (filters.state)
            filterConditions.push(`state: { eq: "${filters.state}" }`);
        const filterString = filterConditions.length > 0 ? `filter: { ${filterConditions.join(', ')} }` : '';
        const first = filters.first || 50;
        const query = `
      query {
        projects(${filterString} first: ${first}) {
          nodes {
            id
            name
            description
            state
            health
            startDate
            targetDate
            progress
            lead {
              id
              name
            }
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.projects.nodes.map((project) => LinearProjectSchema.parse(project));
    }
    /**
     * Create issue
     */
    async createIssue(input) {
        const mutation = `
      mutation IssueCreate($input: IssueCreateInput!) {
        issueCreate(input: $input) {
          success
          issue {
            id
            title
            description
            state {
              id
              name
              type
            }
            priority
            assignee {
              id
              name
              email
            }
            project {
              id
              name
            }
            labels {
              nodes {
                id
                name
                color
              }
            }
          }
        }
      }
    `;
        const data = await this.query(mutation, { input });
        if (!data.issueCreate.success) {
            throw new Error('Failed to create issue');
        }
        const issue = data.issueCreate.issue;
        if (issue.labels) {
            issue.labels = issue.labels.nodes;
        }
        return LinearIssueSchema.parse(issue);
    }
    /**
     * Update issue
     */
    async updateIssue(issueId, input) {
        const mutation = `
      mutation IssueUpdate($id: String!, $input: IssueUpdateInput!) {
        issueUpdate(id: $id, input: $input) {
          success
          issue {
            id
            title
            description
            state {
              id
              name
              type
            }
            priority
            assignee {
              id
              name
              email
            }
            project {
              id
              name
            }
            labels {
              nodes {
                id
                name
                color
              }
            }
          }
        }
      }
    `;
        const data = await this.query(mutation, { id: issueId, input });
        if (!data.issueUpdate.success) {
            throw new Error('Failed to update issue');
        }
        const issue = data.issueUpdate.issue;
        if (issue.labels) {
            issue.labels = issue.labels.nodes;
        }
        return LinearIssueSchema.parse(issue);
    }
    /**
     * Get issue states for a team
     */
    async getIssueStates(teamId) {
        const query = `
      query {
        team(id: "${teamId}") {
          states {
            nodes {
              id
              name
              type
            }
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.team.states.nodes;
    }
    /**
     * Get team labels
     */
    async getTeamLabels(teamId) {
        const query = `
      query {
        team(id: "${teamId}") {
          labels {
            nodes {
              id
              name
              color
            }
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.team.labels.nodes;
    }
    /**
     * Get issue comments
     */
    async getIssueComments(issueId) {
        const query = `
      query {
        issue(id: "${issueId}") {
          comments {
            nodes {
              id
              body
              user {
                id
                name
              }
              createdAt
            }
          }
        }
      }
    `;
        const data = await this.query(query);
        return data.issue.comments.nodes;
    }
    /**
     * Add comment to issue
     */
    async addComment(issueId, body) {
        const mutation = `
      mutation CommentCreate($input: CommentCreateInput!) {
        commentCreate(input: $input) {
          success
          comment {
            id
            body
          }
        }
      }
    `;
        const data = await this.query(mutation, {
            input: {
                issueId,
                body
            }
        });
        if (!data.commentCreate.success) {
            throw new Error('Failed to create comment');
        }
        return data.commentCreate.comment;
    }
    /**
     * Health check - verify API connection
     */
    async healthCheck() {
        try {
            const query = `
        query {
          viewer {
            id
            name
          }
        }
      `;
            const data = await this.query(query);
            return {
                status: 'healthy',
                user: data.viewer
            };
        }
        catch (error) {
            return {
                status: 'error'
            };
        }
    }
}
//# sourceMappingURL=linear-client.js.map