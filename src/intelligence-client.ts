/**
 * Linear Intelligence Client
 * 
 * Provides AI-powered project management intelligence using extracted patterns
 * from Linear documentation to deliver smart recommendations and insights.
 */

import { 
  LINEAR_INTELLIGENCE_PATTERNS, 
  INTELLIGENCE_CATEGORIES, 
  findPatternsByCategory,
  findPatternsByComplexity,
  searchPatterns,
  type LinearIntelligencePattern 
} from './generated-linear-intelligence';
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

export class LinearIntelligenceClient {
  private patterns: Map<string, LinearIntelligencePattern>;
  private categoryIndex: Map<string, LinearIntelligencePattern[]>;

  constructor() {
    this.patterns = new Map();
    this.categoryIndex = new Map();
    
    // Index all patterns for fast lookup
    LINEAR_INTELLIGENCE_PATTERNS.forEach(pattern => {
      this.patterns.set(pattern.id, pattern);
    });
    
    // Create category index
    Object.values(INTELLIGENCE_CATEGORIES).forEach(category => {
      this.categoryIndex.set(category, findPatternsByCategory(category));
    });
  }

  /**
   * Analyze project health using intelligence patterns
   */
  analyzeProjectHealth(project: LinearProject, issues: LinearIssue[]): ProjectHealthScore {
    const totalIssues = issues.length;
    const completedIssues = issues.filter(issue => 
      issue.state.type === 'completed' || issue.state.name.toLowerCase().includes('done')
    ).length;
    
    const inProgressIssues = issues.filter(issue => 
      issue.state.type === 'started' || issue.state.name.toLowerCase().includes('progress')
    ).length;
    
    const highPriorityIssues = issues.filter(issue => issue.priority && issue.priority <= 2).length;
    const unassignedIssues = issues.filter(issue => !issue.assignee).length;

    // Calculate factor scores
    const progressVelocity = totalIssues > 0 ? (completedIssues / totalIssues) * 100 : 0;
    const issueResolutionRate = totalIssues > 0 ? (completedIssues / (completedIssues + inProgressIssues + 1)) * 100 : 0;
    const teamEngagement = totalIssues > 0 ? ((totalIssues - unassignedIssues) / totalIssues) * 100 : 0;
    
    // Deadline adherence (simplified - based on project health if available)
    const deadlineAdherence = project.health === 'onTrack' ? 85 : 
                             project.health === 'atRisk' ? 60 : 
                             project.health === 'offTrack' ? 30 : 70;

    const overallScore = (progressVelocity + issueResolutionRate + teamEngagement + deadlineAdherence) / 4;
    
    // Determine health status
    let healthStatus: 'healthy' | 'at_risk' | 'critical';
    if (overallScore >= 80) healthStatus = 'healthy';
    else if (overallScore >= 60) healthStatus = 'at_risk';
    else healthStatus = 'critical';

    // Generate recommendations using patterns
    const recommendations = this.generateHealthRecommendations(overallScore, {
      progressVelocity,
      issueResolutionRate,
      teamEngagement,
      deadlineAdherence,
      highPriorityIssues,
      unassignedIssues,
      totalIssues
    });

    const riskIndicators = this.identifyRiskIndicators({
      progressVelocity,
      highPriorityIssues,
      unassignedIssues,
      totalIssues,
      healthStatus
    });

    return {
      overall_score: Math.round(overallScore),
      health_status: healthStatus,
      factors: {
        progress_velocity: Math.round(progressVelocity),
        issue_resolution_rate: Math.round(issueResolutionRate),
        team_engagement: Math.round(teamEngagement),
        deadline_adherence: Math.round(deadlineAdherence)
      },
      recommendations,
      risk_indicators: riskIndicators
    };
  }

  /**
   * Generate intelligent issue analysis
   */
  analyzeIssue(issue: LinearIssue): IssueIntelligence {
    // Complexity scoring based on title/description patterns
    const complexityKeywords = ['integration', 'architecture', 'refactor', 'migration', 'api'];
    const simpleKeywords = ['fix', 'update', 'small', 'quick', 'minor'];
    
    const titleLower = issue.title.toLowerCase();
    const descriptionLower = (issue.description || '').toLowerCase();
    const text = `${titleLower} ${descriptionLower}`;
    
    let complexityScore = 50; // Base score
    
    complexityKeywords.forEach(keyword => {
      if (text.includes(keyword)) complexityScore += 15;
    });
    
    simpleKeywords.forEach(keyword => {
      if (text.includes(keyword)) complexityScore -= 10;
    });
    
    complexityScore = Math.max(0, Math.min(100, complexityScore));

    // Priority recommendation
    const priorityRecommendation = this.calculatePriorityRecommendation(issue, complexityScore);
    
    // Estimated effort
    const estimatedEffort = complexityScore >= 70 ? 'high' : 
                           complexityScore >= 40 ? 'medium' : 'low';

    // Workflow suggestions using patterns
    const workflowSuggestions = this.generateWorkflowSuggestions(issue);
    
    // Related patterns
    const relatedPatterns = this.findRelatedPatterns(text);
    
    // Automation opportunities
    const automationOpportunities = this.identifyAutomationOpportunities(issue);

    return {
      complexity_score: complexityScore,
      priority_recommendation: priorityRecommendation,
      estimated_effort: estimatedEffort,
      workflow_suggestions: workflowSuggestions,
      related_patterns: relatedPatterns,
      automation_opportunities: automationOpportunities
    };
  }

  /**
   * Optimize team workflow
   */
  optimizeTeamWorkflow(team: LinearTeam, issues: LinearIssue[]): TeamWorkflowOptimization {
    const totalIssues = issues.length;
    const assignedIssues = issues.filter(issue => issue.assignee).length;
    const labeledIssues = issues.filter(issue => issue.labels && issue.labels.length > 0).length;
    const inProgressIssues = issues.filter(issue => 
      issue.state.type === 'started' || issue.state.name.toLowerCase().includes('progress')
    ).length;

    // Calculate efficiency score
    const assignmentRate = totalIssues > 0 ? (assignedIssues / totalIssues) * 100 : 0;
    const labelingRate = totalIssues > 0 ? (labeledIssues / totalIssues) * 100 : 0;
    const workflowHealth = totalIssues > 0 ? (inProgressIssues / totalIssues) * 100 : 0;
    
    const efficiencyScore = (assignmentRate + labelingRate + Math.min(workflowHealth, 30)) / 3;

    // Identify bottlenecks
    const bottlenecks = this.identifyBottlenecks({
      assignmentRate,
      labelingRate,
      workflowHealth,
      totalIssues,
      inProgressIssues: inProgressIssues
    });

    // Generate optimization suggestions
    const optimizationSuggestions = this.generateOptimizationSuggestions(efficiencyScore, bottlenecks);
    
    // Find productivity patterns
    const productivityPatterns = this.extractProductivityPatterns();
    
    // Collaboration improvements
    const collaborationImprovements = this.generateCollaborationImprovements(team, issues);

    return {
      efficiency_score: Math.round(efficiencyScore),
      bottlenecks,
      optimization_suggestions: optimizationSuggestions,
      productivity_patterns: productivityPatterns,
      collaboration_improvements: collaborationImprovements
    };
  }

  /**
   * Generate workflow recommendations
   */
  generateWorkflowRecommendations(context: {
    team?: LinearTeam;
    project?: LinearProject;
    issues?: LinearIssue[];
    focus?: string;
  }): WorkflowRecommendation[] {
    const recommendations: WorkflowRecommendation[] = [];
    
    // Project setup recommendations
    if (context.project) {
      const projectPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.PROJECT_MANAGEMENT) || [];
      recommendations.push({
        type: 'project_setup',
        priority: 'high',
        title: 'Optimize Project Structure',
        description: 'Implement proven project management patterns for better organization',
        implementation_steps: [
          'Set clear project milestones using target dates',
          'Establish project health tracking metrics',
          'Configure cross-team collaboration workflows',
          'Set up automated progress reporting'
        ],
        expected_impact: 'Improved project visibility and 20-30% better completion rates',
        effort_level: 'medium',
        patterns_used: projectPatterns.slice(0, 3).map(p => p.pattern)
      });
    }

    // Issue management recommendations
    if (context.issues && context.issues.length > 0) {
      const workflowPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.ISSUE_WORKFLOWS) || [];
      recommendations.push({
        type: 'issue_management',
        priority: 'medium',
        title: 'Enhance Issue Workflow',
        description: 'Streamline issue lifecycle management using best practices',
        implementation_steps: [
          'Implement consistent issue labeling strategy',
          'Set up priority-based workflow automation',
          'Create issue templates for common types',
          'Establish clear workflow state definitions'
        ],
        expected_impact: 'Reduced issue processing time by 25-40%',
        effort_level: 'low',
        patterns_used: workflowPatterns.slice(0, 4).map(p => p.pattern)
      });
    }

    // Team collaboration recommendations
    if (context.team) {
      const collaborationPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.TEAM_COLLABORATION) || [];
      recommendations.push({
        type: 'team_collaboration',
        priority: 'medium',
        title: 'Improve Team Communication',
        description: 'Enhance team collaboration using Linear best practices',
        implementation_steps: [
          'Set up team notification preferences',
          'Implement consistent @mention usage',
          'Establish regular status update patterns',
          'Configure team-specific workflow states'
        ],
        expected_impact: 'Better team coordination and reduced communication overhead',
        effort_level: 'low',
        patterns_used: collaborationPatterns.slice(0, 3).map(p => p.pattern)
      });
    }

    // Automation recommendations
    const automationPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.AUTOMATION_WORKFLOWS) || [];
    if (automationPatterns.length > 0) {
      recommendations.push({
        type: 'automation',
        priority: 'high',
        title: 'Implement Workflow Automation',
        description: 'Automate repetitive tasks and improve efficiency',
        implementation_steps: [
          'Set up Git integration for automatic issue linking',
          'Configure rule-based issue assignment',
          'Implement automated status transitions',
          'Set up bulk operation workflows'
        ],
        expected_impact: 'Reduced manual work by 30-50% and improved consistency',
        effort_level: 'high',
        patterns_used: automationPatterns.slice(0, 4).map(p => p.pattern)
      });
    }

    return recommendations.sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });
  }

  /**
   * Predict project outcomes
   */
  predictProjectOutcome(project: LinearProject, issues: LinearIssue[], historicalData?: any): ProjectPrediction {
    const totalIssues = issues.length;
    const completedIssues = issues.filter(issue => 
      issue.state.type === 'completed' || issue.state.name.toLowerCase().includes('done')
    ).length;
    
    const remainingIssues = totalIssues - completedIssues;
    const completionRate = totalIssues > 0 ? completedIssues / totalIssues : 0;
    
    // Simple completion probability based on current progress and health
    let completionProbability = completionRate * 100;
    
    if (project.health === 'onTrack') completionProbability += 10;
    else if (project.health === 'atRisk') completionProbability -= 15;
    else if (project.health === 'offTrack') completionProbability -= 30;
    
    completionProbability = Math.max(0, Math.min(100, completionProbability));
    
    // Estimate completion date (simplified)
    const daysRemaining = remainingIssues * 2; // Assume 2 days per issue average
    const estimatedCompletionDate = new Date();
    estimatedCompletionDate.setDate(estimatedCompletionDate.getDate() + daysRemaining);
    
    // Risk factors
    const riskFactors = this.identifyProjectRiskFactors(project, issues);
    
    // Success indicators
    const successIndicators = this.identifySuccessIndicators(project, issues, completionRate);
    
    // Mitigation strategies
    const mitigationStrategies = this.generateMitigationStrategies(riskFactors);

    return {
      completion_probability: Math.round(completionProbability),
      estimated_completion_date: estimatedCompletionDate.toISOString().split('T')[0],
      risk_factors: riskFactors,
      success_indicators: successIndicators,
      mitigation_strategies: mitigationStrategies
    };
  }

  /**
   * Get contextual help based on current operation
   */
  getContextualHelp(operation: string, _context: any = {}): {
    patterns: LinearIntelligencePattern[];
    suggestions: string[];
    shortcuts: string[];
  } {
    const relevantPatterns = searchPatterns(operation).slice(0, 5);
    const shortcutPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.KEYBOARD_SHORTCUTS) || [];
    
    const suggestions = relevantPatterns.map(pattern => pattern.description);
    const shortcuts = shortcutPatterns
      .filter(pattern => pattern.pattern.includes(operation.toLowerCase()))
      .map(pattern => pattern.pattern)
      .slice(0, 3);

    return {
      patterns: relevantPatterns,
      suggestions,
      shortcuts
    };
  }

  // Private helper methods

  private generateHealthRecommendations(score: number, factors: any): string[] {
    const recommendations: string[] = [];
    
    if (factors.progressVelocity < 50) {
      recommendations.push('Increase issue completion velocity by breaking down large tasks');
    }
    
    if (factors.unassignedIssues > factors.totalIssues * 0.2) {
      recommendations.push('Assign team members to unassigned issues to improve accountability');
    }
    
    if (factors.highPriorityIssues > factors.totalIssues * 0.3) {
      recommendations.push('Review and re-prioritize issues to balance workload');
    }
    
    if (factors.teamEngagement < 70) {
      recommendations.push('Improve team engagement through better task distribution');
    }
    
    if (score < 60) {
      recommendations.push('Consider implementing daily standups and progress check-ins');
    }
    
    return recommendations;
  }

  private identifyRiskIndicators(factors: any): string[] {
    const risks: string[] = [];
    
    if (factors.progressVelocity < 30) {
      risks.push('Very low progress velocity indicates potential blockages');
    }
    
    if (factors.unassignedIssues > factors.totalIssues * 0.4) {
      risks.push('High number of unassigned issues may cause delays');
    }
    
    if (factors.highPriorityIssues > factors.totalIssues * 0.5) {
      risks.push('Too many high-priority issues may indicate poor planning');
    }
    
    if (factors.healthStatus === 'critical') {
      risks.push('Project is in critical state requiring immediate attention');
    }
    
    return risks;
  }

  private calculatePriorityRecommendation(issue: LinearIssue, complexityScore: number): number {
    let priority = issue.priority || 3;
    
    // Adjust based on complexity
    if (complexityScore > 80) priority = Math.max(1, priority - 1);
    if (complexityScore < 30) priority = Math.min(4, priority + 1);
    
    // Adjust based on current state
    if (issue.state.type === 'started') priority = Math.max(1, priority - 1);
    
    return priority;
  }

  private generateWorkflowSuggestions(issue: LinearIssue): string[] {
    const suggestions: string[] = [];
    
    if (!issue.assignee) {
      suggestions.push('Assign team member to improve accountability');
    }
    
    if (!issue.labels || issue.labels.length === 0) {
      suggestions.push('Add relevant labels for better categorization');
    }
    
    if (!issue.project) {
      suggestions.push('Associate with project for better tracking');
    }
    
    if (issue.priority && issue.priority <= 2) {
      suggestions.push('Monitor closely due to high priority');
    }
    
    return suggestions;
  }

  private findRelatedPatterns(text: string): string[] {
    return searchPatterns(text)
      .slice(0, 3)
      .map(pattern => pattern.pattern);
  }

  private identifyAutomationOpportunities(issue: LinearIssue): string[] {
    const opportunities: string[] = [];
    
    if (issue.title.toLowerCase().includes('bug')) {
      opportunities.push('Set up automated bug triage workflow');
    }
    
    if (issue.title.toLowerCase().includes('deploy')) {
      opportunities.push('Configure deployment automation integration');
    }
    
    if (!issue.labels || issue.labels.length === 0) {
      opportunities.push('Implement automated labeling based on title keywords');
    }
    
    return opportunities;
  }

  private identifyBottlenecks(metrics: any): string[] {
    const bottlenecks: string[] = [];
    
    if (metrics.assignmentRate < 70) {
      bottlenecks.push('Low assignment rate - issues sitting unassigned');
    }
    
    if (metrics.labelingRate < 50) {
      bottlenecks.push('Poor labeling practices - hard to categorize work');
    }
    
    if (metrics.workflowHealth > 50) {
      bottlenecks.push('Too many issues in progress - potential context switching');
    }
    
    if (metrics.inProgressIssues > metrics.totalIssues * 0.4) {
      bottlenecks.push('Work in progress limit exceeded');
    }
    
    return bottlenecks;
  }

  private generateOptimizationSuggestions(efficiencyScore: number, bottlenecks: string[]): string[] {
    const suggestions: string[] = [];
    
    if (efficiencyScore < 60) {
      suggestions.push('Implement team workflow training and best practices');
    }
    
    if (bottlenecks.includes('assignment')) {
      suggestions.push('Set up automated assignment rules based on expertise');
    }
    
    if (bottlenecks.includes('labeling')) {
      suggestions.push('Create labeling guidelines and templates');
    }
    
    if (bottlenecks.includes('progress')) {
      suggestions.push('Implement WIP limits and focus on completion');
    }
    
    suggestions.push('Regular team retrospectives to identify improvement areas');
    
    return suggestions;
  }

  private extractProductivityPatterns(): string[] {
    const productivityPatterns = this.categoryIndex.get(INTELLIGENCE_CATEGORIES.PRODUCTIVITY_OPTIMIZATION) || [];
    return productivityPatterns.slice(0, 5).map(pattern => pattern.description);
  }

  private generateCollaborationImprovements(_team: LinearTeam, issues: LinearIssue[]): string[] {
    const improvements: string[] = [];
    
    const unassignedCount = issues.filter(issue => !issue.assignee).length;
    if (unassignedCount > 0) {
      improvements.push('Improve issue assignment process for better ownership');
    }
    
    improvements.push('Implement regular status update workflows');
    improvements.push('Set up cross-team communication patterns');
    improvements.push('Use @mentions effectively for important updates');
    
    return improvements;
  }

  private identifyProjectRiskFactors(project: LinearProject, issues: LinearIssue[]): string[] {
    const risks: string[] = [];
    
    if (project.health === 'offTrack') {
      risks.push('Project marked as off track');
    }
    
    const highPriorityIssues = issues.filter(issue => issue.priority && issue.priority <= 2).length;
    if (highPriorityIssues > issues.length * 0.3) {
      risks.push('High concentration of urgent issues');
    }
    
    const unassignedIssues = issues.filter(issue => !issue.assignee).length;
    if (unassignedIssues > issues.length * 0.2) {
      risks.push('Significant number of unassigned issues');
    }
    
    if (project.targetDate) {
      const targetDate = new Date(project.targetDate);
      const now = new Date();
      const daysUntilDeadline = Math.ceil((targetDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysUntilDeadline < 7) {
        risks.push('Approaching deadline with limited time remaining');
      }
    }
    
    return risks;
  }

  private identifySuccessIndicators(project: LinearProject, issues: LinearIssue[], completionRate: number): string[] {
    const indicators: string[] = [];
    
    if (completionRate > 0.7) {
      indicators.push('High completion rate indicates good progress');
    }
    
    if (project.health === 'onTrack') {
      indicators.push('Project health status is positive');
    }
    
    const assignedIssues = issues.filter(issue => issue.assignee).length;
    if (assignedIssues > issues.length * 0.8) {
      indicators.push('Good issue assignment coverage');
    }
    
    const labeledIssues = issues.filter(issue => issue.labels && issue.labels.length > 0).length;
    if (labeledIssues > issues.length * 0.6) {
      indicators.push('Well-organized issue categorization');
    }
    
    return indicators;
  }

  private generateMitigationStrategies(riskFactors: string[]): string[] {
    const strategies: string[] = [];
    
    if (riskFactors.some(risk => risk.includes('off track'))) {
      strategies.push('Conduct immediate project review and scope adjustment');
    }
    
    if (riskFactors.some(risk => risk.includes('urgent issues'))) {
      strategies.push('Redistribute priorities and focus on critical path');
    }
    
    if (riskFactors.some(risk => risk.includes('unassigned'))) {
      strategies.push('Emergency assignment review and resource allocation');
    }
    
    if (riskFactors.some(risk => risk.includes('deadline'))) {
      strategies.push('Negotiate scope reduction or deadline extension');
    }
    
    strategies.push('Increase communication frequency and transparency');
    
    return strategies;
  }
}