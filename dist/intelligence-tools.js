/**
 * Linear Intelligence Tools
 *
 * Defines the MCP tools that provide AI-powered Linear project management intelligence
 */
import { z } from 'zod';
// Tool parameter schemas
export const ProjectHealthAnalysisSchema = z.object({
    projectId: z.string().describe('Linear project ID to analyze'),
    includeIssues: z.boolean().default(true).describe('Include issue analysis in health assessment'),
    teamId: z.string().optional().describe('Optional team ID to filter issues')
});
export const IssueIntelligenceSchema = z.object({
    issueId: z.string().describe('Linear issue ID to analyze'),
    includeRecommendations: z.boolean().default(true).describe('Include workflow recommendations'),
    analysisDepth: z.enum(['basic', 'detailed', 'comprehensive']).default('detailed').describe('Level of analysis detail')
});
export const TeamWorkflowOptimizationSchema = z.object({
    teamId: z.string().describe('Linear team ID to optimize'),
    analysisTimeframe: z.number().default(30).describe('Number of days to analyze (default: 30)'),
    includeProductivity: z.boolean().default(true).describe('Include productivity analysis'),
    focusArea: z.enum(['efficiency', 'collaboration', 'bottlenecks', 'automation']).optional().describe('Specific optimization focus')
});
export const WorkflowRecommendationsSchema = z.object({
    context: z.object({
        teamId: z.string().optional().describe('Team context'),
        projectId: z.string().optional().describe('Project context'),
        focus: z.string().optional().describe('Specific focus area for recommendations')
    }).describe('Context for generating recommendations'),
    maxRecommendations: z.number().default(5).describe('Maximum number of recommendations to return'),
    priority: z.enum(['high', 'medium', 'low', 'all']).default('all').describe('Filter by recommendation priority')
});
export const ProjectPredictionSchema = z.object({
    projectId: z.string().describe('Linear project ID for prediction'),
    predictionHorizon: z.number().default(90).describe('Days into future for prediction'),
    includeRiskAnalysis: z.boolean().default(true).describe('Include risk factor analysis'),
    confidenceLevel: z.enum(['basic', 'standard', 'detailed']).default('standard').describe('Prediction confidence level')
});
export const PatternSearchSchema = z.object({
    query: z.string().describe('Search query for Linear patterns'),
    category: z.string().optional().describe('Specific category to search within'),
    maxResults: z.number().default(10).describe('Maximum number of patterns to return'),
    includeContext: z.boolean().default(false).describe('Include pattern context in results')
});
export const AutomationOpportunitiesSchema = z.object({
    teamId: z.string().describe('Team ID to analyze for automation opportunities'),
    workflowType: z.enum(['issue_management', 'project_tracking', 'team_collaboration', 'all']).default('all').describe('Type of workflow to analyze'),
    complexityFilter: z.enum(['low', 'medium', 'high', 'all']).default('all').describe('Filter by automation complexity')
});
export const IntegrationOptimizationSchema = z.object({
    teamId: z.string().describe('Team ID to optimize integrations for'),
    integrationType: z.enum(['git', 'slack', 'external_tools', 'all']).default('all').describe('Type of integration to optimize'),
    currentIntegrations: z.array(z.string()).optional().describe('List of currently used integrations')
});
export const KeyboardShortcutTrainingSchema = z.object({
    userRole: z.enum(['developer', 'designer', 'manager', 'general']).default('general').describe('User role for targeted shortcuts'),
    skillLevel: z.enum(['beginner', 'intermediate', 'advanced']).default('beginner').describe('Current Linear skill level'),
    focusArea: z.string().optional().describe('Specific area to focus training on')
});
export const LinearIntelligenceStatsSchema = z.object({
    includeBreakdown: z.boolean().default(true).describe('Include detailed category breakdown'),
    showPatternCounts: z.boolean().default(true).describe('Show pattern counts by category')
});
export const ContextualHelpSchema = z.object({
    operation: z.string().describe('Current operation or task being performed'),
    context: z.object({
        teamId: z.string().optional(),
        projectId: z.string().optional(),
        issueId: z.string().optional()
    }).optional().describe('Optional context information')
});
// Intelligence Tools Definition
export const INTELLIGENCE_TOOLS = [
    {
        name: 'linear_analyze_project_health',
        description: 'Analyze project health using AI intelligence patterns from Linear documentation. Provides comprehensive health scoring, risk assessment, and actionable recommendations.',
        inputSchema: {
            type: 'object',
            properties: {
                projectId: {
                    type: 'string',
                    description: 'Linear project ID to analyze'
                },
                includeIssues: {
                    type: 'boolean',
                    default: true,
                    description: 'Include issue analysis in health assessment'
                },
                teamId: {
                    type: 'string',
                    description: 'Optional team ID to filter issues'
                }
            },
            required: ['projectId']
        }
    },
    {
        name: 'linear_analyze_issue_intelligence',
        description: 'Provide AI-powered analysis of individual issues including complexity scoring, priority recommendations, effort estimation, and workflow suggestions.',
        inputSchema: {
            type: 'object',
            properties: {
                issueId: {
                    type: 'string',
                    description: 'Linear issue ID to analyze'
                },
                includeRecommendations: {
                    type: 'boolean',
                    default: true,
                    description: 'Include workflow recommendations'
                },
                analysisDepth: {
                    type: 'string',
                    enum: ['basic', 'detailed', 'comprehensive'],
                    default: 'detailed',
                    description: 'Level of analysis detail'
                }
            },
            required: ['issueId']
        }
    },
    {
        name: 'linear_optimize_team_workflow',
        description: 'Analyze and optimize team workflows using Linear best practices. Identifies bottlenecks, efficiency opportunities, and collaboration improvements.',
        inputSchema: {
            type: 'object',
            properties: {
                teamId: {
                    type: 'string',
                    description: 'Linear team ID to optimize'
                },
                analysisTimeframe: {
                    type: 'number',
                    default: 30,
                    description: 'Number of days to analyze (default: 30)'
                },
                includeProductivity: {
                    type: 'boolean',
                    default: true,
                    description: 'Include productivity analysis'
                },
                focusArea: {
                    type: 'string',
                    enum: ['efficiency', 'collaboration', 'bottlenecks', 'automation'],
                    description: 'Specific optimization focus'
                }
            },
            required: ['teamId']
        }
    },
    {
        name: 'linear_generate_workflow_recommendations',
        description: 'Generate intelligent workflow recommendations based on Linear best practices and current team/project context.',
        inputSchema: {
            type: 'object',
            properties: {
                context: {
                    type: 'object',
                    properties: {
                        teamId: { type: 'string', description: 'Team context' },
                        projectId: { type: 'string', description: 'Project context' },
                        focus: { type: 'string', description: 'Specific focus area for recommendations' }
                    },
                    description: 'Context for generating recommendations'
                },
                maxRecommendations: {
                    type: 'number',
                    default: 5,
                    description: 'Maximum number of recommendations to return'
                },
                priority: {
                    type: 'string',
                    enum: ['high', 'medium', 'low', 'all'],
                    default: 'all',
                    description: 'Filter by recommendation priority'
                }
            },
            required: ['context']
        }
    },
    {
        name: 'linear_predict_project_outcome',
        description: 'Predict project completion probability and timeline using AI analysis of current progress, team velocity, and historical patterns.',
        inputSchema: {
            type: 'object',
            properties: {
                projectId: {
                    type: 'string',
                    description: 'Linear project ID for prediction'
                },
                predictionHorizon: {
                    type: 'number',
                    default: 90,
                    description: 'Days into future for prediction'
                },
                includeRiskAnalysis: {
                    type: 'boolean',
                    default: true,
                    description: 'Include risk factor analysis'
                },
                confidenceLevel: {
                    type: 'string',
                    enum: ['basic', 'standard', 'detailed'],
                    default: 'standard',
                    description: 'Prediction confidence level'
                }
            },
            required: ['projectId']
        }
    },
    {
        name: 'linear_search_intelligence_patterns',
        description: 'Search through 414 extracted Linear intelligence patterns to find relevant project management insights, best practices, and solutions.',
        inputSchema: {
            type: 'object',
            properties: {
                query: {
                    type: 'string',
                    description: 'Search query for Linear patterns'
                },
                category: {
                    type: 'string',
                    description: 'Specific category to search within'
                },
                maxResults: {
                    type: 'number',
                    default: 10,
                    description: 'Maximum number of patterns to return'
                },
                includeContext: {
                    type: 'boolean',
                    default: false,
                    description: 'Include pattern context in results'
                }
            },
            required: ['query']
        }
    },
    {
        name: 'linear_identify_automation_opportunities',
        description: 'Identify workflow automation opportunities using Linear integration patterns and team analysis.',
        inputSchema: {
            type: 'object',
            properties: {
                teamId: {
                    type: 'string',
                    description: 'Team ID to analyze for automation opportunities'
                },
                workflowType: {
                    type: 'string',
                    enum: ['issue_management', 'project_tracking', 'team_collaboration', 'all'],
                    default: 'all',
                    description: 'Type of workflow to analyze'
                },
                complexityFilter: {
                    type: 'string',
                    enum: ['low', 'medium', 'high', 'all'],
                    default: 'all',
                    description: 'Filter by automation complexity'
                }
            },
            required: ['teamId']
        }
    },
    {
        name: 'linear_optimize_integrations',
        description: 'Optimize Linear integrations with external tools using intelligence patterns for maximum productivity.',
        inputSchema: {
            type: 'object',
            properties: {
                teamId: {
                    type: 'string',
                    description: 'Team ID to optimize integrations for'
                },
                integrationType: {
                    type: 'string',
                    enum: ['git', 'slack', 'external_tools', 'all'],
                    default: 'all',
                    description: 'Type of integration to optimize'
                },
                currentIntegrations: {
                    type: 'array',
                    items: { type: 'string' },
                    description: 'List of currently used integrations'
                }
            },
            required: ['teamId']
        }
    },
    {
        name: 'linear_generate_shortcut_training',
        description: 'Generate personalized Linear keyboard shortcut training based on user role and skill level using extracted shortcut patterns.',
        inputSchema: {
            type: 'object',
            properties: {
                userRole: {
                    type: 'string',
                    enum: ['developer', 'designer', 'manager', 'general'],
                    default: 'general',
                    description: 'User role for targeted shortcuts'
                },
                skillLevel: {
                    type: 'string',
                    enum: ['beginner', 'intermediate', 'advanced'],
                    default: 'beginner',
                    description: 'Current Linear skill level'
                },
                focusArea: {
                    type: 'string',
                    description: 'Specific area to focus training on'
                }
            },
            required: []
        }
    },
    {
        name: 'linear_get_intelligence_stats',
        description: 'Get comprehensive statistics about the Linear intelligence database including pattern counts, categories, and capabilities.',
        inputSchema: {
            type: 'object',
            properties: {
                includeBreakdown: {
                    type: 'boolean',
                    default: true,
                    description: 'Include detailed category breakdown'
                },
                showPatternCounts: {
                    type: 'boolean',
                    default: true,
                    description: 'Show pattern counts by category'
                }
            },
            required: []
        }
    },
    {
        name: 'linear_get_contextual_help',
        description: 'Get contextual help and suggestions based on current Linear operation or task being performed.',
        inputSchema: {
            type: 'object',
            properties: {
                operation: {
                    type: 'string',
                    description: 'Current operation or task being performed'
                },
                context: {
                    type: 'object',
                    properties: {
                        teamId: { type: 'string' },
                        projectId: { type: 'string' },
                        issueId: { type: 'string' }
                    },
                    description: 'Optional context information'
                }
            },
            required: ['operation']
        }
    }
];
// Schemas are already exported above, no need to re-export
//# sourceMappingURL=intelligence-tools.js.map