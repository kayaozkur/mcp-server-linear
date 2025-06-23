/**
 * Linear API Client
 *
 * Wrapper for Linear GraphQL API with intelligent features
 */
import { z } from 'zod';
export declare const LinearTeamSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    key: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    key: string;
    description?: string | undefined;
}, {
    id: string;
    name: string;
    key: string;
    description?: string | undefined;
}>;
export declare const LinearIssueSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    state: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        type: string;
    }, {
        id: string;
        name: string;
        type: string;
    }>;
    priority: z.ZodOptional<z.ZodNumber>;
    assignee: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        email: string;
    }, {
        id: string;
        name: string;
        email: string;
    }>>;
    project: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        color: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        color: string;
    }, {
        id: string;
        name: string;
        color: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title: string;
    state: {
        id: string;
        name: string;
        type: string;
    };
    description?: string | undefined;
    priority?: number | undefined;
    assignee?: {
        id: string;
        name: string;
        email: string;
    } | undefined;
    project?: {
        id: string;
        name: string;
    } | undefined;
    labels?: {
        id: string;
        name: string;
        color: string;
    }[] | undefined;
}, {
    id: string;
    title: string;
    state: {
        id: string;
        name: string;
        type: string;
    };
    description?: string | undefined;
    priority?: number | undefined;
    assignee?: {
        id: string;
        name: string;
        email: string;
    } | undefined;
    project?: {
        id: string;
        name: string;
    } | undefined;
    labels?: {
        id: string;
        name: string;
        color: string;
    }[] | undefined;
}>;
export declare const LinearProjectSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    state: z.ZodString;
    health: z.ZodOptional<z.ZodString>;
    startDate: z.ZodOptional<z.ZodString>;
    targetDate: z.ZodOptional<z.ZodString>;
    progress: z.ZodOptional<z.ZodNumber>;
    lead: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    state: string;
    description?: string | undefined;
    health?: string | undefined;
    startDate?: string | undefined;
    targetDate?: string | undefined;
    progress?: number | undefined;
    lead?: {
        id: string;
        name: string;
    } | undefined;
}, {
    id: string;
    name: string;
    state: string;
    description?: string | undefined;
    health?: string | undefined;
    startDate?: string | undefined;
    targetDate?: string | undefined;
    progress?: number | undefined;
    lead?: {
        id: string;
        name: string;
    } | undefined;
}>;
export type LinearTeam = z.infer<typeof LinearTeamSchema>;
export type LinearIssue = z.infer<typeof LinearIssueSchema>;
export type LinearProject = z.infer<typeof LinearProjectSchema>;
export interface LinearAPIError {
    message: string;
    extensions?: {
        code: string;
        type: string;
    };
}
export declare class LinearClient {
    private apiKey;
    private baseUrl;
    constructor(apiKey: string);
    /**
     * Execute GraphQL query
     */
    private query;
    /**
     * Get teams
     */
    getTeams(): Promise<LinearTeam[]>;
    /**
     * Get issues with filters
     */
    getIssues(filters?: {
        teamId?: string;
        assigneeId?: string;
        stateId?: string;
        projectId?: string;
        first?: number;
    }): Promise<LinearIssue[]>;
    /**
     * Get projects
     */
    getProjects(filters?: {
        teamId?: string;
        state?: string;
        first?: number;
    }): Promise<LinearProject[]>;
    /**
     * Create issue
     */
    createIssue(input: {
        teamId: string;
        title: string;
        description?: string;
        priority?: number;
        assigneeId?: string;
        projectId?: string;
        labelIds?: string[];
    }): Promise<LinearIssue>;
    /**
     * Update issue
     */
    updateIssue(issueId: string, input: {
        title?: string;
        description?: string;
        priority?: number;
        assigneeId?: string;
        stateId?: string;
        projectId?: string;
    }): Promise<LinearIssue>;
    /**
     * Get issue states for a team
     */
    getIssueStates(teamId: string): Promise<Array<{
        id: string;
        name: string;
        type: string;
    }>>;
    /**
     * Get team labels
     */
    getTeamLabels(teamId: string): Promise<Array<{
        id: string;
        name: string;
        color: string;
    }>>;
    /**
     * Get issue comments
     */
    getIssueComments(issueId: string): Promise<Array<{
        id: string;
        body: string;
        user: {
            id: string;
            name: string;
        };
        createdAt: string;
    }>>;
    /**
     * Add comment to issue
     */
    addComment(issueId: string, body: string): Promise<{
        id: string;
        body: string;
    }>;
    /**
     * Health check - verify API connection
     */
    healthCheck(): Promise<{
        status: string;
        user?: {
            id: string;
            name: string;
        };
    }>;
}
//# sourceMappingURL=linear-client.d.ts.map