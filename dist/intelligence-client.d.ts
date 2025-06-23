/**
 * Linear Intelligence Client
 *
 * Provides AI-powered project management intelligence using extracted patterns
 * from Linear documentation to deliver smart recommendations and insights.
 */
import { type LinearIntelligencePattern } from './generated-linear-intelligence';
import type { LinearIssue, LinearProject, LinearTeam } from './linear-client';
export interface ProjectHealthScore {
    overall_score: number;
    health_status: 'healthy' | 'at_risk' | 'critical';
    factors: {
        progress_velocity: number;
        issue_resolution_rate: number;
        team_engagement: number;
        deadline_adherence: number;
    };
    recommendations: string[];
    risk_indicators: string[];
}
export interface IssueIntelligence {
    complexity_score: number;
    priority_recommendation: number;
    estimated_effort: string;
    workflow_suggestions: string[];
    related_patterns: string[];
    automation_opportunities: string[];
}
export interface TeamWorkflowOptimization {
    efficiency_score: number;
    bottlenecks: string[];
    optimization_suggestions: string[];
    productivity_patterns: string[];
    collaboration_improvements: string[];
}
export interface WorkflowRecommendation {
    type: 'project_setup' | 'issue_management' | 'team_collaboration' | 'automation';
    priority: 'high' | 'medium' | 'low';
    title: string;
    description: string;
    implementation_steps: string[];
    expected_impact: string;
    effort_level: 'low' | 'medium' | 'high';
    patterns_used: string[];
}
export interface ProjectPrediction {
    completion_probability: number;
    estimated_completion_date: string;
    risk_factors: string[];
    success_indicators: string[];
    mitigation_strategies: string[];
}
export declare class LinearIntelligenceClient {
    private patterns;
    private categoryIndex;
    constructor();
    /**
     * Analyze project health using intelligence patterns
     */
    analyzeProjectHealth(project: LinearProject, issues: LinearIssue[]): ProjectHealthScore;
    /**
     * Generate intelligent issue analysis
     */
    analyzeIssue(issue: LinearIssue): IssueIntelligence;
    /**
     * Optimize team workflow
     */
    optimizeTeamWorkflow(team: LinearTeam, issues: LinearIssue[]): TeamWorkflowOptimization;
    /**
     * Generate workflow recommendations
     */
    generateWorkflowRecommendations(context: {
        team?: LinearTeam;
        project?: LinearProject;
        issues?: LinearIssue[];
        focus?: string;
    }): WorkflowRecommendation[];
    /**
     * Predict project outcomes
     */
    predictProjectOutcome(project: LinearProject, issues: LinearIssue[], historicalData?: any): ProjectPrediction;
    /**
     * Get contextual help based on current operation
     */
    getContextualHelp(operation: string, _context?: any): {
        patterns: LinearIntelligencePattern[];
        suggestions: string[];
        shortcuts: string[];
    };
    private generateHealthRecommendations;
    private identifyRiskIndicators;
    private calculatePriorityRecommendation;
    private generateWorkflowSuggestions;
    private findRelatedPatterns;
    private identifyAutomationOpportunities;
    private identifyBottlenecks;
    private generateOptimizationSuggestions;
    private extractProductivityPatterns;
    private generateCollaborationImprovements;
    private identifyProjectRiskFactors;
    private identifySuccessIndicators;
    private generateMitigationStrategies;
}
//# sourceMappingURL=intelligence-client.d.ts.map