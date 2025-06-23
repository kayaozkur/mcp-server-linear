#!/usr/bin/env node

/**
 * Enhanced Linear MCP Server with Intelligence
 * 
 * Combines Linear API functionality with AI-powered project management intelligence
 * extracted from 414 patterns across 16 Linear documentation files.
 * 
 * Features:
 * - All standard Linear MCP operations
 * - 11 new intelligence-powered tools
 * - Project health analysis and predictions
 * - Team workflow optimization
 * - Intelligent issue analysis
 * - Automation opportunity identification
 * - Contextual help and recommendations
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { 
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool
} from '@modelcontextprotocol/sdk/types.js';
import { LinearClient } from './linear-client.js';
import { LinearIntelligenceClient } from './intelligence-client.js';
import { 
  INTELLIGENCE_TOOLS,
  ProjectHealthAnalysisSchema,
  IssueIntelligenceSchema,
  TeamWorkflowOptimizationSchema,
  WorkflowRecommendationsSchema,
  ProjectPredictionSchema,
  PatternSearchSchema,
  AutomationOpportunitiesSchema,
  IntegrationOptimizationSchema,
  KeyboardShortcutTrainingSchema,
  LinearIntelligenceStatsSchema,
  ContextualHelpSchema
} from './intelligence-tools.js';
import { 
  LINEAR_INTELLIGENCE_PATTERNS,
  INTELLIGENCE_STATS,
  findPatternsByCategory,
  searchPatterns
} from './generated-linear-intelligence.js';

// Standard Linear MCP tools (maintaining compatibility)
const STANDARD_LINEAR_TOOLS: Tool[] = [
  {
    name: 'linear_list_teams',
    description: 'List all teams in the Linear workspace',
    inputSchema: {
      type: 'object',
      properties: {},
      required: []
    }
  },
  {
    name: 'linear_list_issues',
    description: 'List issues with optional filters',
    inputSchema: {
      type: 'object',
      properties: {
        teamId: { type: 'string', description: 'Filter by team ID' },
        assigneeId: { type: 'string', description: 'Filter by assignee ID' },
        stateId: { type: 'string', description: 'Filter by state ID' },
        projectId: { type: 'string', description: 'Filter by project ID' },
        first: { type: 'number', description: 'Number of issues to return (default: 50)' }
      },
      required: []
    }
  },
  {
    name: 'linear_list_projects',
    description: 'List projects with optional filters',
    inputSchema: {
      type: 'object',
      properties: {
        teamId: { type: 'string', description: 'Filter by team ID' },
        state: { type: 'string', description: 'Filter by project state' },
        first: { type: 'number', description: 'Number of projects to return (default: 50)' }
      },
      required: []
    }
  },
  {
    name: 'linear_create_issue',
    description: 'Create a new issue',
    inputSchema: {
      type: 'object',
      properties: {
        teamId: { type: 'string', description: 'Team ID for the issue' },
        title: { type: 'string', description: 'Issue title' },
        description: { type: 'string', description: 'Issue description' },
        priority: { type: 'number', description: 'Priority level (1-4)' },
        assigneeId: { type: 'string', description: 'Assignee ID' },
        projectId: { type: 'string', description: 'Project ID' },
        labelIds: { type: 'array', items: { type: 'string' }, description: 'Label IDs' }
      },
      required: ['teamId', 'title']
    }
  },
  {
    name: 'linear_update_issue',
    description: 'Update an existing issue',
    inputSchema: {
      type: 'object',
      properties: {
        issueId: { type: 'string', description: 'Issue ID to update' },
        title: { type: 'string', description: 'New title' },
        description: { type: 'string', description: 'New description' },
        priority: { type: 'number', description: 'New priority (1-4)' },
        assigneeId: { type: 'string', description: 'New assignee ID' },
        stateId: { type: 'string', description: 'New state ID' },
        projectId: { type: 'string', description: 'New project ID' }
      },
      required: ['issueId']
    }
  },
  {
    name: 'linear_get_issue_states',
    description: 'Get workflow states for a team',
    inputSchema: {
      type: 'object',
      properties: {
        teamId: { type: 'string', description: 'Team ID' }
      },
      required: ['teamId']
    }
  },
  {
    name: 'linear_get_team_labels',
    description: 'Get labels for a team',
    inputSchema: {
      type: 'object',
      properties: {
        teamId: { type: 'string', description: 'Team ID' }
      },
      required: ['teamId']
    }
  },
  {
    name: 'linear_add_comment',
    description: 'Add a comment to an issue',
    inputSchema: {
      type: 'object',
      properties: {
        issueId: { type: 'string', description: 'Issue ID' },
        body: { type: 'string', description: 'Comment body' }
      },
      required: ['issueId', 'body']
    }
  }
];

export class EnhancedLinearMCPServer {
  private server: Server;
  private linearClient: LinearClient;
  private intelligenceClient: LinearIntelligenceClient;

  constructor() {
    // Get Linear API token from environment
    const apiToken = process.env.LINEAR_API_TOKEN;
    if (!apiToken) {
      console.error('LINEAR_API_TOKEN environment variable is required');
      process.exit(1);
    }

    this.server = new Server({
      name: 'linear-intelligence-server',
      version: '1.0.0',
    }, {
      capabilities: {
        tools: {}
      }
    });

    this.linearClient = new LinearClient(apiToken);
    this.intelligenceClient = new LinearIntelligenceClient();

    this.setupToolHandlers();
    
    console.log(`Enhanced Linear MCP Server started with ${INTELLIGENCE_STATS.totalPatterns} intelligence patterns`);
  }

  private setupToolHandlers() {
    // Handle list tools request
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [...STANDARD_LINEAR_TOOLS, ...INTELLIGENCE_TOOLS]
      };
    });

    // Handle tool call requests
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        // Intelligence tools
        switch (name) {
          case 'linear_analyze_project_health':
            return await this.handleAnalyzeProjectHealth(args);
          case 'linear_analyze_issue_intelligence':
            return await this.handleAnalyzeIssueIntelligence(args);
          case 'linear_optimize_team_workflow':
            return await this.handleOptimizeTeamWorkflow(args);
          case 'linear_generate_workflow_recommendations':
            return await this.handleGenerateWorkflowRecommendations(args);
          case 'linear_predict_project_outcome':
            return await this.handlePredictProjectOutcome(args);
          case 'linear_search_intelligence_patterns':
            return await this.handleSearchIntelligencePatterns(args);
          case 'linear_identify_automation_opportunities':
            return await this.handleIdentifyAutomationOpportunities(args);
          case 'linear_optimize_integrations':
            return await this.handleOptimizeIntegrations(args);
          case 'linear_generate_shortcut_training':
            return await this.handleGenerateShortcutTraining(args);
          case 'linear_get_intelligence_stats':
            return await this.handleGetIntelligenceStats(args);
          case 'linear_get_contextual_help':
            return await this.handleGetContextualHelp(args);

          // Standard Linear tools
          case 'linear_list_teams':
            return await this.handleListTeams();
          case 'linear_list_issues':
            return await this.handleListIssues(args);
          case 'linear_list_projects':
            return await this.handleListProjects(args);
          case 'linear_create_issue':
            return await this.handleCreateIssue(args);
          case 'linear_update_issue':
            return await this.handleUpdateIssue(args);
          case 'linear_get_issue_states':
            return await this.handleGetIssueStates(args);
          case 'linear_get_team_labels':
            return await this.handleGetTeamLabels(args);
          case 'linear_add_comment':
            return await this.handleAddComment(args);

          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error executing ${name}: ${error instanceof Error ? error.message : String(error)}`
            }
          ],
          isError: true
        };
      }
    });
  }

  // Intelligence tool handlers

  private async handleAnalyzeProjectHealth(args: any) {
    const { projectId, includeIssues, teamId } = ProjectHealthAnalysisSchema.parse(args);
    
    // Get project data
    const projects = await this.linearClient.getProjects({ first: 100 });
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      throw new Error(`Project not found: ${projectId}`);
    }

    // Get issues if requested
    let issues: any[] = [];
    if (includeIssues) {
      issues = await this.linearClient.getIssues({ 
        projectId,
        teamId,
        first: 200
      });
    }

    const healthAnalysis = this.intelligenceClient.analyzeProjectHealth(project, issues);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            project: {
              id: project.id,
              name: project.name,
              state: project.state
            },
            health_analysis: healthAnalysis,
            issues_analyzed: issues.length,
            intelligence_patterns_used: 'project_management, status_tracking, best_practices'
          }, null, 2)
        }
      ]
    };
  }

  private async handleAnalyzeIssueIntelligence(args: any) {
    const { issueId, includeRecommendations, analysisDepth } = IssueIntelligenceSchema.parse(args);
    
    // Get issue data
    const issues = await this.linearClient.getIssues({ first: 200 });
    const issue = issues.find(i => i.id === issueId);
    
    if (!issue) {
      throw new Error(`Issue not found: ${issueId}`);
    }

    const intelligence = this.intelligenceClient.analyzeIssue(issue);

    const result: any = {
      issue: {
        id: issue.id,
        title: issue.title,
        state: issue.state,
        priority: issue.priority
      },
      intelligence_analysis: intelligence
    };

    if (includeRecommendations) {
      result.workflow_recommendations = this.intelligenceClient.generateWorkflowRecommendations({
        issues: [issue]
      });
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
  }

  private async handleOptimizeTeamWorkflow(args: any) {
    const { teamId, analysisTimeframe, includeProductivity, focusArea } = TeamWorkflowOptimizationSchema.parse(args);
    
    // Get team data
    const teams = await this.linearClient.getTeams();
    const team = teams.find(t => t.id === teamId);
    
    if (!team) {
      throw new Error(`Team not found: ${teamId}`);
    }

    // Get team issues
    const issues = await this.linearClient.getIssues({ teamId, first: 300 });

    const optimization = this.intelligenceClient.optimizeTeamWorkflow(team, issues);

    const result: any = {
      team: {
        id: team.id,
        name: team.name,
        key: team.key
      },
      workflow_optimization: optimization,
      analysis_period: `${analysisTimeframe} days`,
      issues_analyzed: issues.length
    };

    if (focusArea) {
      result.focus_area = focusArea;
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
  }

  private async handleGenerateWorkflowRecommendations(args: any) {
    const { context, maxRecommendations, priority } = WorkflowRecommendationsSchema.parse(args);
    
    let team, project, issues;
    
    // Get context data
    if (context.teamId) {
      const teams = await this.linearClient.getTeams();
      team = teams.find(t => t.id === context.teamId);
    }
    
    if (context.projectId) {
      const projects = await this.linearClient.getProjects();
      project = projects.find(p => p.id === context.projectId);
    }

    if (context.teamId || context.projectId) {
      issues = await this.linearClient.getIssues({
        teamId: context.teamId,
        projectId: context.projectId,
        first: 200
      });
    }

    const recommendations = this.intelligenceClient.generateWorkflowRecommendations({
      team,
      project,
      issues,
      focus: context.focus
    });

    // Filter by priority if specified
    let filteredRecommendations = recommendations;
    if (priority !== 'all') {
      filteredRecommendations = recommendations.filter(rec => rec.priority === priority);
    }

    // Limit results
    filteredRecommendations = filteredRecommendations.slice(0, maxRecommendations);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            context_analyzed: context,
            recommendations: filteredRecommendations,
            total_recommendations: recommendations.length,
            filtered_count: filteredRecommendations.length
          }, null, 2)
        }
      ]
    };
  }

  private async handlePredictProjectOutcome(args: any) {
    const { projectId, predictionHorizon, includeRiskAnalysis, confidenceLevel } = ProjectPredictionSchema.parse(args);
    
    // Get project and issues
    const projects = await this.linearClient.getProjects();
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      throw new Error(`Project not found: ${projectId}`);
    }

    const issues = await this.linearClient.getIssues({ projectId, first: 300 });

    const prediction = this.intelligenceClient.predictProjectOutcome(project, issues);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            project: {
              id: project.id,
              name: project.name,
              current_state: project.state
            },
            prediction,
            prediction_horizon_days: predictionHorizon,
            confidence_level: confidenceLevel,
            data_points_analyzed: issues.length
          }, null, 2)
        }
      ]
    };
  }

  private async handleSearchIntelligencePatterns(args: any) {
    const { query, category, maxResults, includeContext } = PatternSearchSchema.parse(args);
    
    let patterns;
    if (category) {
      patterns = findPatternsByCategory(category);
      patterns = patterns.filter(p => 
        p.pattern.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );
    } else {
      patterns = searchPatterns(query);
    }

    patterns = patterns.slice(0, maxResults);

    const result = {
      query,
      category: category || 'all',
      patterns_found: patterns.length,
      patterns: patterns.map(pattern => ({
        id: pattern.id,
        pattern: pattern.pattern,
        category: pattern.category,
        type: pattern.type,
        description: pattern.description,
        complexity: pattern.complexity,
        safety_level: pattern.safety_level,
        use_cases: pattern.use_cases,
        examples: pattern.examples,
        ...(includeContext && { context: pattern.context })
      }))
    };

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2)
        }
      ]
    };
  }

  private async handleIdentifyAutomationOpportunities(args: any) {
    const { teamId, workflowType, complexityFilter } = AutomationOpportunitiesSchema.parse(args);
    
    // Get team and issues
    const teams = await this.linearClient.getTeams();
    const team = teams.find(t => t.id === teamId);
    
    if (!team) {
      throw new Error(`Team not found: ${teamId}`);
    }

    const issues = await this.linearClient.getIssues({ teamId, first: 200 });

    // Find automation patterns
    const automationPatterns = findPatternsByCategory('automation_workflows');
    const filteredPatterns = complexityFilter === 'all' ? 
      automationPatterns : 
      automationPatterns.filter(p => p.complexity === complexityFilter);

    // Generate opportunities based on team analysis
    const opportunities = issues.slice(0, 10).map(issue => {
      const opportunities = this.intelligenceClient.analyzeIssue(issue).automation_opportunities;
      return {
        issue_id: issue.id,
        issue_title: issue.title,
        opportunities
      };
    }).filter(item => item.opportunities.length > 0);

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            team: { id: team.id, name: team.name },
            workflow_type: workflowType,
            complexity_filter: complexityFilter,
            automation_patterns_available: filteredPatterns.length,
            opportunities_identified: opportunities,
            recommended_patterns: filteredPatterns.slice(0, 5).map(p => ({
              pattern: p.pattern,
              description: p.description,
              complexity: p.complexity
            }))
          }, null, 2)
        }
      ]
    };
  }

  private async handleOptimizeIntegrations(args: any) {
    const { teamId, integrationType, currentIntegrations } = IntegrationOptimizationSchema.parse(args);
    
    // Get integration patterns
    const integrationPatterns = findPatternsByCategory('integration_patterns');
    
    const filteredPatterns = integrationType === 'all' ? 
      integrationPatterns :
      integrationPatterns.filter(p => p.pattern.toLowerCase().includes(integrationType));

    // Generate recommendations
    const recommendations = filteredPatterns.slice(0, 8).map(pattern => ({
      integration_type: pattern.type,
      pattern: pattern.pattern,
      description: pattern.description,
      implementation_complexity: pattern.complexity,
      use_cases: pattern.use_cases,
      already_configured: currentIntegrations?.some(integration => 
        pattern.pattern.toLowerCase().includes(integration.toLowerCase())
      ) || false
    }));

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            team_id: teamId,
            integration_type: integrationType,
            current_integrations: currentIntegrations || [],
            optimization_recommendations: recommendations,
            total_integration_patterns: integrationPatterns.length
          }, null, 2)
        }
      ]
    };
  }

  private async handleGenerateShortcutTraining(args: any) {
    const { userRole, skillLevel, focusArea } = KeyboardShortcutTrainingSchema.parse(args);
    
    // Get keyboard shortcut patterns
    const shortcutPatterns = findPatternsByCategory('keyboard_shortcuts');
    
    // Filter by skill level and role
    let relevantShortcuts = shortcutPatterns;
    
    if (skillLevel === 'beginner') {
      relevantShortcuts = shortcutPatterns.filter(p => p.complexity === 'low');
    } else if (skillLevel === 'advanced') {
      relevantShortcuts = shortcutPatterns.filter(p => p.complexity === 'high');
    }

    if (focusArea) {
      relevantShortcuts = relevantShortcuts.filter(p => 
        p.description.toLowerCase().includes(focusArea.toLowerCase())
      );
    }

    // Create training plan
    const trainingPlan = {
      user_profile: { role: userRole, skill_level: skillLevel },
      focus_area: focusArea,
      essential_shortcuts: relevantShortcuts.slice(0, 5).map(p => ({
        shortcut: p.pattern,
        description: p.description,
        use_cases: p.use_cases
      })),
      intermediate_shortcuts: relevantShortcuts.slice(5, 10).map(p => ({
        shortcut: p.pattern,
        description: p.description,
        use_cases: p.use_cases
      })),
      advanced_shortcuts: relevantShortcuts.slice(10, 15).map(p => ({
        shortcut: p.pattern,
        description: p.description,
        use_cases: p.use_cases
      })),
      practice_recommendations: [
        'Start with essential shortcuts and use them daily',
        'Practice one new shortcut per day',
        'Use command palette (Cmd/Ctrl+K) when unsure',
        'Focus on shortcuts relevant to your daily tasks'
      ]
    };

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(trainingPlan, null, 2)
        }
      ]
    };
  }

  private async handleGetIntelligenceStats(args: any) {
    const { includeBreakdown, showPatternCounts } = LinearIntelligenceStatsSchema.parse(args);
    
    const stats = {
      intelligence_database: {
        total_patterns: INTELLIGENCE_STATS.totalPatterns,
        files_processed: INTELLIGENCE_STATS.filesProcessed,
        last_update: INTELLIGENCE_STATS.lastUpdate,
        categories_available: Object.keys(INTELLIGENCE_STATS.categoryCounts).length
      },
      server_capabilities: {
        standard_linear_tools: STANDARD_LINEAR_TOOLS.length,
        intelligence_tools: INTELLIGENCE_TOOLS.length,
        total_tools: STANDARD_LINEAR_TOOLS.length + INTELLIGENCE_TOOLS.length
      }
    };

    if (includeBreakdown) {
      (stats as any).category_breakdown = INTELLIGENCE_STATS.categoryCounts;
      (stats as any).complexity_distribution = INTELLIGENCE_STATS.complexityCounts;
      (stats as any).safety_distribution = INTELLIGENCE_STATS.safetyLevels;
    }

    if (showPatternCounts) {
      (stats as any).pattern_counts = {
        by_category: INTELLIGENCE_STATS.categoryCounts,
        by_complexity: INTELLIGENCE_STATS.complexityCounts,
        by_safety: INTELLIGENCE_STATS.safetyLevels
      };
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(stats, null, 2)
        }
      ]
    };
  }

  private async handleGetContextualHelp(args: any) {
    const { operation, context } = ContextualHelpSchema.parse(args);
    
    const help = this.intelligenceClient.getContextualHelp(operation, context);
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            operation,
            context: context || {},
            contextual_help: help,
            patterns_matched: help.patterns.length
          }, null, 2)
        }
      ]
    };
  }

  // Standard Linear tool handlers

  private async handleListTeams() {
    const teams = await this.linearClient.getTeams();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ teams }, null, 2)
        }
      ]
    };
  }

  private async handleListIssues(args: any) {
    const issues = await this.linearClient.getIssues(args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ issues }, null, 2)
        }
      ]
    };
  }

  private async handleListProjects(args: any) {
    const projects = await this.linearClient.getProjects(args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ projects }, null, 2)
        }
      ]
    };
  }

  private async handleCreateIssue(args: any) {
    const issue = await this.linearClient.createIssue(args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ issue }, null, 2)
        }
      ]
    };
  }

  private async handleUpdateIssue(args: any) {
    const { issueId, ...updateData } = args;
    const issue = await this.linearClient.updateIssue(issueId, updateData);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ issue }, null, 2)
        }
      ]
    };
  }

  private async handleGetIssueStates(args: any) {
    const { teamId } = args;
    const states = await this.linearClient.getIssueStates(teamId);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ states }, null, 2)
        }
      ]
    };
  }

  private async handleGetTeamLabels(args: any) {
    const { teamId } = args;
    const labels = await this.linearClient.getTeamLabels(teamId);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ labels }, null, 2)
        }
      ]
    };
  }

  private async handleAddComment(args: any) {
    const { issueId, body } = args;
    const comment = await this.linearClient.addComment(issueId, body);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ comment }, null, 2)
        }
      ]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
  }
}

// Start server if run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new EnhancedLinearMCPServer();
  server.run().catch(console.error);
}