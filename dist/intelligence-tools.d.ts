/**
 * Linear Intelligence Tools
 *
 * Defines the MCP tools that provide AI-powered Linear project management intelligence
 */
import { Tool } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';
export declare const ProjectHealthAnalysisSchema: z.ZodObject<{
    projectId: z.ZodString;
    includeIssues: z.ZodDefault<z.ZodBoolean>;
    teamId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    projectId: string;
    includeIssues: boolean;
    teamId?: string | undefined;
}, {
    projectId: string;
    includeIssues?: boolean | undefined;
    teamId?: string | undefined;
}>;
export declare const IssueIntelligenceSchema: z.ZodObject<{
    issueId: z.ZodString;
    includeRecommendations: z.ZodDefault<z.ZodBoolean>;
    analysisDepth: z.ZodDefault<z.ZodEnum<["basic", "detailed", "comprehensive"]>>;
}, "strip", z.ZodTypeAny, {
    issueId: string;
    includeRecommendations: boolean;
    analysisDepth: "basic" | "detailed" | "comprehensive";
}, {
    issueId: string;
    includeRecommendations?: boolean | undefined;
    analysisDepth?: "basic" | "detailed" | "comprehensive" | undefined;
}>;
export declare const TeamWorkflowOptimizationSchema: z.ZodObject<{
    teamId: z.ZodString;
    analysisTimeframe: z.ZodDefault<z.ZodNumber>;
    includeProductivity: z.ZodDefault<z.ZodBoolean>;
    focusArea: z.ZodOptional<z.ZodEnum<["efficiency", "collaboration", "bottlenecks", "automation"]>>;
}, "strip", z.ZodTypeAny, {
    teamId: string;
    analysisTimeframe: number;
    includeProductivity: boolean;
    focusArea?: "automation" | "efficiency" | "collaboration" | "bottlenecks" | undefined;
}, {
    teamId: string;
    analysisTimeframe?: number | undefined;
    includeProductivity?: boolean | undefined;
    focusArea?: "automation" | "efficiency" | "collaboration" | "bottlenecks" | undefined;
}>;
export declare const WorkflowRecommendationsSchema: z.ZodObject<{
    context: z.ZodObject<{
        teamId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
        focus: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        projectId?: string | undefined;
        teamId?: string | undefined;
        focus?: string | undefined;
    }, {
        projectId?: string | undefined;
        teamId?: string | undefined;
        focus?: string | undefined;
    }>;
    maxRecommendations: z.ZodDefault<z.ZodNumber>;
    priority: z.ZodDefault<z.ZodEnum<["high", "medium", "low", "all"]>>;
}, "strip", z.ZodTypeAny, {
    priority: "low" | "high" | "medium" | "all";
    context: {
        projectId?: string | undefined;
        teamId?: string | undefined;
        focus?: string | undefined;
    };
    maxRecommendations: number;
}, {
    context: {
        projectId?: string | undefined;
        teamId?: string | undefined;
        focus?: string | undefined;
    };
    priority?: "low" | "high" | "medium" | "all" | undefined;
    maxRecommendations?: number | undefined;
}>;
export declare const ProjectPredictionSchema: z.ZodObject<{
    projectId: z.ZodString;
    predictionHorizon: z.ZodDefault<z.ZodNumber>;
    includeRiskAnalysis: z.ZodDefault<z.ZodBoolean>;
    confidenceLevel: z.ZodDefault<z.ZodEnum<["basic", "standard", "detailed"]>>;
}, "strip", z.ZodTypeAny, {
    projectId: string;
    predictionHorizon: number;
    includeRiskAnalysis: boolean;
    confidenceLevel: "basic" | "detailed" | "standard";
}, {
    projectId: string;
    predictionHorizon?: number | undefined;
    includeRiskAnalysis?: boolean | undefined;
    confidenceLevel?: "basic" | "detailed" | "standard" | undefined;
}>;
export declare const PatternSearchSchema: z.ZodObject<{
    query: z.ZodString;
    category: z.ZodOptional<z.ZodString>;
    maxResults: z.ZodDefault<z.ZodNumber>;
    includeContext: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    query: string;
    maxResults: number;
    includeContext: boolean;
    category?: string | undefined;
}, {
    query: string;
    category?: string | undefined;
    maxResults?: number | undefined;
    includeContext?: boolean | undefined;
}>;
export declare const AutomationOpportunitiesSchema: z.ZodObject<{
    teamId: z.ZodString;
    workflowType: z.ZodDefault<z.ZodEnum<["issue_management", "project_tracking", "team_collaboration", "all"]>>;
    complexityFilter: z.ZodDefault<z.ZodEnum<["low", "medium", "high", "all"]>>;
}, "strip", z.ZodTypeAny, {
    teamId: string;
    workflowType: "team_collaboration" | "issue_management" | "all" | "project_tracking";
    complexityFilter: "low" | "high" | "medium" | "all";
}, {
    teamId: string;
    workflowType?: "team_collaboration" | "issue_management" | "all" | "project_tracking" | undefined;
    complexityFilter?: "low" | "high" | "medium" | "all" | undefined;
}>;
export declare const IntegrationOptimizationSchema: z.ZodObject<{
    teamId: z.ZodString;
    integrationType: z.ZodDefault<z.ZodEnum<["git", "slack", "external_tools", "all"]>>;
    currentIntegrations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    teamId: string;
    integrationType: "all" | "git" | "slack" | "external_tools";
    currentIntegrations?: string[] | undefined;
}, {
    teamId: string;
    integrationType?: "all" | "git" | "slack" | "external_tools" | undefined;
    currentIntegrations?: string[] | undefined;
}>;
export declare const KeyboardShortcutTrainingSchema: z.ZodObject<{
    userRole: z.ZodDefault<z.ZodEnum<["developer", "designer", "manager", "general"]>>;
    skillLevel: z.ZodDefault<z.ZodEnum<["beginner", "intermediate", "advanced"]>>;
    focusArea: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userRole: "developer" | "designer" | "manager" | "general";
    skillLevel: "beginner" | "intermediate" | "advanced";
    focusArea?: string | undefined;
}, {
    focusArea?: string | undefined;
    userRole?: "developer" | "designer" | "manager" | "general" | undefined;
    skillLevel?: "beginner" | "intermediate" | "advanced" | undefined;
}>;
export declare const LinearIntelligenceStatsSchema: z.ZodObject<{
    includeBreakdown: z.ZodDefault<z.ZodBoolean>;
    showPatternCounts: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    includeBreakdown: boolean;
    showPatternCounts: boolean;
}, {
    includeBreakdown?: boolean | undefined;
    showPatternCounts?: boolean | undefined;
}>;
export declare const ContextualHelpSchema: z.ZodObject<{
    operation: z.ZodString;
    context: z.ZodOptional<z.ZodObject<{
        teamId: z.ZodOptional<z.ZodString>;
        projectId: z.ZodOptional<z.ZodString>;
        issueId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        projectId?: string | undefined;
        teamId?: string | undefined;
        issueId?: string | undefined;
    }, {
        projectId?: string | undefined;
        teamId?: string | undefined;
        issueId?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    operation: string;
    context?: {
        projectId?: string | undefined;
        teamId?: string | undefined;
        issueId?: string | undefined;
    } | undefined;
}, {
    operation: string;
    context?: {
        projectId?: string | undefined;
        teamId?: string | undefined;
        issueId?: string | undefined;
    } | undefined;
}>;
export declare const INTELLIGENCE_TOOLS: Tool[];
//# sourceMappingURL=intelligence-tools.d.ts.map