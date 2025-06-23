export interface LinearIntelligencePattern {
    id: string;
    pattern: string;
    category: string;
    type: string;
    description: string;
    source_file: string;
    context: string;
    complexity: 'low' | 'moderate' | 'high';
    safety_level: 'safe' | 'moderate' | 'high_risk';
    use_cases: string[];
    examples: string[];
    warnings: string[];
    related_patterns: string[];
    extracted_at: string;
    last_verified: string;
}
export declare const LINEAR_INTELLIGENCE_PATTERNS: LinearIntelligencePattern[];
export declare const INTELLIGENCE_CATEGORIES: {
    PROJECT_MANAGEMENT: string;
    ISSUE_WORKFLOWS: string;
    TEAM_COLLABORATION: string;
    PLANNING_STRATEGY: string;
    PRODUCTIVITY_OPTIMIZATION: string;
    STATUS_TRACKING: string;
    AUTOMATION_WORKFLOWS: string;
    INTEGRATION_PATTERNS: string;
    BEST_PRACTICES: string;
    TROUBLESHOOTING: string;
    API_USAGE: string;
    KEYBOARD_SHORTCUTS: string;
};
export declare const INTELLIGENCE_STATS: {
    filesProcessed: number;
    totalPatterns: number;
    categoryCounts: {
        project_management: number;
        issue_workflows: number;
        team_collaboration: number;
        planning_strategy: number;
        productivity_optimization: number;
        status_tracking: number;
        automation_workflows: number;
        integration_patterns: number;
        best_practices: number;
        troubleshooting: number;
        api_usage: number;
        keyboard_shortcuts: number;
    };
    complexityCounts: {
        low: number;
        moderate: number;
        high: number;
    };
    safetyLevels: {
        safe: number;
        moderate: number;
        high_risk: number;
    };
    lastUpdate: string;
};
export declare function findPatternsByCategory(category: string): LinearIntelligencePattern[];
export declare function findPatternsByComplexity(complexity: 'low' | 'moderate' | 'high'): LinearIntelligencePattern[];
export declare function searchPatterns(query: string): LinearIntelligencePattern[];
export declare function getPatternsByType(type: string): LinearIntelligencePattern[];
//# sourceMappingURL=generated-linear-intelligence.d.ts.map