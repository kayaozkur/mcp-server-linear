#!/usr/bin/env node

/**
 * Linear Intelligence Parser
 * 
 * Extracts comprehensive project management intelligence patterns from Linear documentation
 * following the proven pattern established in Phases 1-3 of Serena ecosystem integration.
 * 
 * Similar to parse-doppler-intelligence.js but focused on Linear project management intelligence
 */

const fs = require('fs');
const path = require('path');

// Intelligence pattern categories
const INTELLIGENCE_CATEGORIES = {
    PROJECT_MANAGEMENT: 'project_management',
    ISSUE_WORKFLOWS: 'issue_workflows', 
    TEAM_COLLABORATION: 'team_collaboration',
    PLANNING_STRATEGY: 'planning_strategy',
    PRODUCTIVITY_OPTIMIZATION: 'productivity_optimization',
    STATUS_TRACKING: 'status_tracking',
    AUTOMATION_WORKFLOWS: 'automation_workflows',
    INTEGRATION_PATTERNS: 'integration_patterns',
    BEST_PRACTICES: 'best_practices',
    TROUBLESHOOTING: 'troubleshooting',
    API_USAGE: 'api_usage',
    KEYBOARD_SHORTCUTS: 'keyboard_shortcuts'
};

// Safety assessment levels
const SAFETY_LEVELS = {
    SAFE: 'safe',
    MODERATE: 'moderate',
    HIGH_RISK: 'high_risk'
};

// Complexity levels
const COMPLEXITY_LEVELS = {
    LOW: 'low',
    MODERATE: 'moderate',
    HIGH: 'high'
};

class LinearIntelligenceParser {
    constructor() {
        this.intelligence = [];
        this.stats = {
            filesProcessed: 0,
            totalPatterns: 0,
            categoryCounts: {},
            complexityCounts: {},
            safetyLevels: {},
            lastUpdate: new Date().toISOString()
        };
        
        // Initialize category counts
        Object.values(INTELLIGENCE_CATEGORIES).forEach(category => {
            this.stats.categoryCounts[category] = 0;
        });
        
        Object.values(COMPLEXITY_LEVELS).forEach(level => {
            this.stats.complexityCounts[level] = 0;
        });
        
        Object.values(SAFETY_LEVELS).forEach(level => {
            this.stats.safetyLevels[level] = 0;
        });
    }

    /**
     * Parse Linear documentation and extract intelligence patterns
     */
    async parseLinearDocs() {
        const docsPath = path.join(__dirname, '../../docs/linear/linear_docs');
        
        if (!fs.existsSync(docsPath)) {
            console.error(`Linear docs directory not found: ${docsPath}`);
            return;
        }

        const files = fs.readdirSync(docsPath).filter(file => file.endsWith('.md'));
        
        console.log(`Found ${files.length} Linear documentation files to parse`);

        for (const file of files) {
            const filePath = path.join(docsPath, file);
            await this.parseDocumentationFile(filePath, file);
        }

        this.generateSummaryStats();
        console.log(`\nParsing complete! Extracted ${this.stats.totalPatterns} intelligence patterns from ${this.stats.filesProcessed} files.`);
        console.log('Category distribution:', this.stats.categoryCounts);
    }

    /**
     * Parse individual documentation file
     */
    async parseDocumentationFile(filePath, fileName) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            console.log(`Processing ${fileName}...`);
            
            this.stats.filesProcessed++;
            
            // Extract patterns based on file type and content
            this.extractProjectManagementPatterns(content, fileName);
            this.extractIssueWorkflowPatterns(content, fileName);
            this.extractTeamCollaborationPatterns(content, fileName);
            this.extractPlanningStrategyPatterns(content, fileName);
            this.extractProductivityPatterns(content, fileName);
            this.extractStatusTrackingPatterns(content, fileName);
            this.extractAutomationPatterns(content, fileName);
            this.extractIntegrationPatterns(content, fileName);
            this.extractBestPracticesPatterns(content, fileName);
            this.extractTroubleshootingPatterns(content, fileName);
            this.extractAPIUsagePatterns(content, fileName);
            this.extractKeyboardShortcutPatterns(content, fileName);
            
        } catch (error) {
            console.error(`Error processing ${fileName}:`, error.message);
        }
    }

    /**
     * Extract project management intelligence patterns
     */
    extractProjectManagementPatterns(content, fileName) {
        const patterns = [];
        
        // Project lifecycle patterns
        const projectLifecycleRegex = /(?:project|initiative).*?(?:planning|creation|management|tracking|completion)/gi;
        const lifecycleMatches = content.match(projectLifecycleRegex);
        if (lifecycleMatches) {
            lifecycleMatches.forEach(match => {
                patterns.push({
                    type: 'project_lifecycle',
                    pattern: match.toLowerCase(),
                    description: `Project lifecycle management: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        // Project health scoring patterns
        const healthPatterns = [
            'on track', 'at risk', 'off track', 'health tracking', 'progress assessment',
            'milestone tracking', 'completion percentage', 'target date', 'deadline management'
        ];
        
        healthPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'project_health',
                    pattern: pattern,
                    description: `Project health indicator: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        // Multi-team collaboration patterns
        const collaborationRegex = /(?:cross-team|multi-team|shared project|team collaboration).*?(?:workflow|process|management)/gi;
        const collaborationMatches = content.match(collaborationRegex);
        if (collaborationMatches) {
            collaborationMatches.forEach(match => {
                patterns.push({
                    type: 'multi_team_collaboration',
                    pattern: match.toLowerCase(),
                    description: `Multi-team collaboration: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.PROJECT_MANAGEMENT, fileName);
    }

    /**
     * Extract issue workflow intelligence patterns
     */
    extractIssueWorkflowPatterns(content, fileName) {
        const patterns = [];

        // Workflow state patterns
        const workflowStates = [
            'backlog', 'todo', 'in progress', 'in review', 'done', 'canceled',
            'code review', 'qa testing', 'waiting for customer', 'resolved'
        ];
        
        workflowStates.forEach(state => {
            if (content.toLowerCase().includes(state)) {
                patterns.push({
                    type: 'workflow_state',
                    pattern: state,
                    description: `Issue workflow state: ${state}`,
                    context: this.extractSurroundingContext(content, state)
                });
            }
        });

        // Priority patterns
        const priorityPatterns = ['urgent', 'high priority', 'medium priority', 'low priority', 'p0', 'p1', 'p2', 'p3'];
        priorityPatterns.forEach(priority => {
            if (content.toLowerCase().includes(priority)) {
                patterns.push({
                    type: 'priority_management',
                    pattern: priority,
                    description: `Priority level: ${priority}`,
                    context: this.extractSurroundingContext(content, priority)
                });
            }
        });

        // Issue lifecycle patterns
        const lifecycleRegex = /(?:issue|task|bug|feature).*?(?:creation|planning|development|review|completion)/gi;
        const lifecycleMatches = content.match(lifecycleRegex);
        if (lifecycleMatches) {
            lifecycleMatches.forEach(match => {
                patterns.push({
                    type: 'issue_lifecycle',
                    pattern: match.toLowerCase(),
                    description: `Issue lifecycle: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.ISSUE_WORKFLOWS, fileName);
    }

    /**
     * Extract team collaboration intelligence patterns
     */
    extractTeamCollaborationPatterns(content, fileName) {
        const patterns = [];

        // Collaboration features
        const collaborationFeatures = [
            '@mentions', 'notifications', 'comments', 'threads', 'reactions',
            'team communication', 'status updates', 'progress sharing'
        ];
        
        collaborationFeatures.forEach(feature => {
            if (content.toLowerCase().includes(feature)) {
                patterns.push({
                    type: 'collaboration_feature',
                    pattern: feature,
                    description: `Team collaboration feature: ${feature}`,
                    context: this.extractSurroundingContext(content, feature)
                });
            }
        });

        // Team management patterns
        const teamManagementRegex = /(?:team|member).*?(?:management|invitation|roles|permissions|assignment)/gi;
        const teamMatches = content.match(teamManagementRegex);
        if (teamMatches) {
            teamMatches.forEach(match => {
                patterns.push({
                    type: 'team_management',
                    pattern: match.toLowerCase(),
                    description: `Team management: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.TEAM_COLLABORATION, fileName);
    }

    /**
     * Extract planning strategy intelligence patterns
     */
    extractPlanningStrategyPatterns(content, fileName) {
        const patterns = [];

        // Cycle planning patterns
        const cyclePatterns = [
            'cycle planning', 'sprint planning', 'iteration', 'time-boxed',
            'active cycle', 'upcoming cycle', 'cooldown period'
        ];
        
        cyclePatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'cycle_planning',
                    pattern: pattern,
                    description: `Cycle planning strategy: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        // Estimation patterns
        const estimationPatterns = [
            'story points', 'fibonacci', 'complexity', 'estimation', 'sizing',
            't-shirt sizes', 'time-based', 'effort assessment'
        ];
        
        estimationPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'estimation_strategy',
                    pattern: pattern,
                    description: `Estimation strategy: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.PLANNING_STRATEGY, fileName);
    }

    /**
     * Extract productivity optimization patterns
     */
    extractProductivityPatterns(content, fileName) {
        const patterns = [];

        // Template patterns
        const templateTypes = [
            'bug report template', 'feature request template', 'task template',
            'issue template', 'project template', 'document template'
        ];
        
        templateTypes.forEach(template => {
            if (content.toLowerCase().includes(template)) {
                patterns.push({
                    type: 'template_optimization',
                    pattern: template,
                    description: `Productivity template: ${template}`,
                    context: this.extractSurroundingContext(content, template)
                });
            }
        });

        // Automation patterns
        const automationPatterns = [
            'bulk editing', 'bulk operations', 'auto-assignment', 'rule-based automation',
            'workflow automation', 'status transitions', 'label application'
        ];
        
        automationPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'productivity_automation',
                    pattern: pattern,
                    description: `Productivity automation: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.PRODUCTIVITY_OPTIMIZATION, fileName);
    }

    /**
     * Extract status tracking patterns
     */
    extractStatusTrackingPatterns(content, fileName) {
        const patterns = [];

        // Progress tracking patterns
        const progressPatterns = [
            'progress tracking', 'completion percentage', 'visual indicators',
            'progress graphs', 'milestone tracking', 'timeline visualization'
        ];
        
        progressPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'progress_tracking',
                    pattern: pattern,
                    description: `Status tracking method: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        // Analytics patterns
        const analyticsRegex = /(?:analytics|metrics|reporting|dashboard).*?(?:tracking|measurement|insights)/gi;
        const analyticsMatches = content.match(analyticsRegex);
        if (analyticsMatches) {
            analyticsMatches.forEach(match => {
                patterns.push({
                    type: 'analytics_tracking',
                    pattern: match.toLowerCase(),
                    description: `Analytics tracking: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.STATUS_TRACKING, fileName);
    }

    /**
     * Extract automation workflow patterns
     */
    extractAutomationPatterns(content, fileName) {
        const patterns = [];

        // Git integration automation
        const gitPatterns = [
            'git integration', 'pull request linking', 'branch creation',
            'commit linking', 'auto-assignment', 'pr events'
        ];
        
        gitPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'git_automation',
                    pattern: pattern,
                    description: `Git automation: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        // Workflow automation patterns
        const workflowAutomationRegex = /(?:auto|automatic|rule-based).*?(?:assignment|labeling|status|notification)/gi;
        const automationMatches = content.match(workflowAutomationRegex);
        if (automationMatches) {
            automationMatches.forEach(match => {
                patterns.push({
                    type: 'workflow_automation',
                    pattern: match.toLowerCase(),
                    description: `Workflow automation: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.AUTOMATION_WORKFLOWS, fileName);
    }

    /**
     * Extract integration patterns
     */
    extractIntegrationPatterns(content, fileName) {
        const patterns = [];

        // External integrations
        const integrations = [
            'slack integration', 'github integration', 'jira import', 'asana import',
            'figma embedding', 'loom embedding', 'youtube embedding'
        ];
        
        integrations.forEach(integration => {
            if (content.toLowerCase().includes(integration)) {
                patterns.push({
                    type: 'external_integration',
                    pattern: integration,
                    description: `External integration: ${integration}`,
                    context: this.extractSurroundingContext(content, integration)
                });
            }
        });

        // API patterns
        const apiPatterns = ['api', 'webhook', 'rest api', 'graphql', 'integration endpoint'];
        apiPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'api_integration',
                    pattern: pattern,
                    description: `API integration: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.INTEGRATION_PATTERNS, fileName);
    }

    /**
     * Extract best practices patterns
     */
    extractBestPracticesPatterns(content, fileName) {
        const patterns = [];

        // Best practice indicators
        const bestPracticeRegex = /(?:best practice|recommended|pro tip|tip|guideline).*?(?:workflow|process|management)/gi;
        const practiceMatches = content.match(bestPracticeRegex);
        if (practiceMatches) {
            practiceMatches.forEach(match => {
                patterns.push({
                    type: 'best_practice',
                    pattern: match.toLowerCase(),
                    description: `Best practice: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        // Process optimization patterns
        const optimizationPatterns = [
            'issue hygiene', 'workflow optimization', 'team alignment',
            'consistent processes', 'regular cleanup', 'efficient workflows'
        ];
        
        optimizationPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'process_optimization',
                    pattern: pattern,
                    description: `Process optimization: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.BEST_PRACTICES, fileName);
    }

    /**
     * Extract troubleshooting patterns
     */
    extractTroubleshootingPatterns(content, fileName) {
        const patterns = [];

        // Troubleshooting indicators
        const troubleshootingRegex = /(?:troubleshoot|debug|error|issue|problem|fix).*?(?:resolution|solution|workaround)/gi;
        const troubleMatches = content.match(troubleshootingRegex);
        if (troubleMatches) {
            troubleMatches.forEach(match => {
                patterns.push({
                    type: 'troubleshooting_guide',
                    pattern: match.toLowerCase(),
                    description: `Troubleshooting guide: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        // Common issues
        const commonIssues = [
            'permission denied', 'access error', 'sync issue', 'performance problem',
            'integration failure', 'notification not working'
        ];
        
        commonIssues.forEach(issue => {
            if (content.toLowerCase().includes(issue)) {
                patterns.push({
                    type: 'common_issue',
                    pattern: issue,
                    description: `Common issue: ${issue}`,
                    context: this.extractSurroundingContext(content, issue)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.TROUBLESHOOTING, fileName);
    }

    /**
     * Extract API usage patterns
     */
    extractAPIUsagePatterns(content, fileName) {
        const patterns = [];

        // API patterns
        const apiRegex = /(?:api|endpoint|graphql|rest).*?(?:call|request|query|mutation)/gi;
        const apiMatches = content.match(apiRegex);
        if (apiMatches) {
            apiMatches.forEach(match => {
                patterns.push({
                    type: 'api_usage',
                    pattern: match.toLowerCase(),
                    description: `API usage: ${match}`,
                    context: this.extractSurroundingContext(content, match)
                });
            });
        }

        // CLI patterns
        const cliPatterns = ['command line', 'cli', 'linear command', '/linear command'];
        cliPatterns.forEach(pattern => {
            if (content.toLowerCase().includes(pattern)) {
                patterns.push({
                    type: 'cli_usage',
                    pattern: pattern,
                    description: `CLI usage: ${pattern}`,
                    context: this.extractSurroundingContext(content, pattern)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.API_USAGE, fileName);
    }

    /**
     * Extract keyboard shortcut patterns
     */
    extractKeyboardShortcutPatterns(content, fileName) {
        const patterns = [];

        // Keyboard shortcuts
        const shortcutRegex = /(?:`[^`]+`|Cmd\/Ctrl \+ [A-Z]|Alt \+ [A-Z]|Shift \+ [A-Z])/gi;
        const shortcutMatches = content.match(shortcutRegex);
        if (shortcutMatches) {
            shortcutMatches.forEach(match => {
                if (match.includes('Cmd') || match.includes('Ctrl') || match.includes('Alt') || match.includes('Shift')) {
                    patterns.push({
                        type: 'keyboard_shortcut',
                        pattern: match.toLowerCase().replace(/`/g, ''),
                        description: `Keyboard shortcut: ${match}`,
                        context: this.extractSurroundingContext(content, match)
                    });
                }
            });
        }

        // Single key shortcuts
        const singleKeyShortcuts = ['press c', 'press g', 'press e', 'press s', 'press a', 'press l', 'press p', 'press d'];
        singleKeyShortcuts.forEach(shortcut => {
            if (content.toLowerCase().includes(shortcut)) {
                patterns.push({
                    type: 'single_key_shortcut',
                    pattern: shortcut,
                    description: `Single key shortcut: ${shortcut}`,
                    context: this.extractSurroundingContext(content, shortcut)
                });
            }
        });

        this.addIntelligencePatterns(patterns, INTELLIGENCE_CATEGORIES.KEYBOARD_SHORTCUTS, fileName);
    }

    /**
     * Extract surrounding context for a pattern
     */
    extractSurroundingContext(content, pattern) {
        const index = content.toLowerCase().indexOf(pattern.toLowerCase());
        if (index === -1) return '';
        
        const start = Math.max(0, index - 100);
        const end = Math.min(content.length, index + pattern.length + 100);
        return content.substring(start, end).trim();
    }

    /**
     * Add intelligence patterns with metadata
     */
    addIntelligencePatterns(patterns, category, fileName) {
        patterns.forEach(patternData => {
            const intelligence = {
                id: `linear-${category}-${this.intelligence.length + 1}`,
                pattern: patternData.pattern,
                category: category,
                type: patternData.type,
                description: patternData.description,
                source_file: fileName,
                context: patternData.context || '',
                
                // Intelligence metadata
                complexity: this.assessComplexity(patternData.pattern, patternData.description),
                safety_level: this.assessSafety(patternData.pattern, patternData.description),
                use_cases: this.generateUseCases(patternData.pattern, category),
                examples: this.generateExamples(patternData.pattern, category),
                warnings: this.generateWarnings(patternData.pattern, category),
                related_patterns: [],
                
                // Timestamps
                extracted_at: new Date().toISOString(),
                last_verified: new Date().toISOString()
            };

            this.intelligence.push(intelligence);
            this.stats.totalPatterns++;
            this.stats.categoryCounts[category]++;
            this.stats.complexityCounts[intelligence.complexity]++;
            this.stats.safetyLevels[intelligence.safety_level]++;
        });
    }

    /**
     * Assess pattern complexity
     */
    assessComplexity(pattern, description) {
        const complexKeywords = ['automation', 'integration', 'api', 'workflow', 'multi-team', 'custom'];
        const simpleKeywords = ['shortcut', 'click', 'basic', 'simple', 'quick'];
        
        const text = `${pattern} ${description}`.toLowerCase();
        
        if (complexKeywords.some(keyword => text.includes(keyword))) {
            return COMPLEXITY_LEVELS.HIGH;
        } else if (simpleKeywords.some(keyword => text.includes(keyword))) {
            return COMPLEXITY_LEVELS.LOW;
        }
        
        return COMPLEXITY_LEVELS.MODERATE;
    }

    /**
     * Assess safety level
     */
    assessSafety(pattern, description) {
        const highRiskKeywords = ['delete', 'remove', 'admin', 'permission', 'bulk edit'];
        const moderateRiskKeywords = ['automation', 'integration', 'workflow change'];
        
        const text = `${pattern} ${description}`.toLowerCase();
        
        if (highRiskKeywords.some(keyword => text.includes(keyword))) {
            return SAFETY_LEVELS.HIGH_RISK;
        } else if (moderateRiskKeywords.some(keyword => text.includes(keyword))) {
            return SAFETY_LEVELS.MODERATE;
        }
        
        return SAFETY_LEVELS.SAFE;
    }

    /**
     * Generate use cases for patterns
     */
    generateUseCases(pattern, category) {
        const useCaseMap = {
            [INTELLIGENCE_CATEGORIES.PROJECT_MANAGEMENT]: [
                'Feature launch planning',
                'Cross-team coordination',
                'Milestone tracking',
                'Resource allocation'
            ],
            [INTELLIGENCE_CATEGORIES.ISSUE_WORKFLOWS]: [
                'Task management',
                'Bug tracking',
                'Development workflow',
                'Code review process'
            ],
            [INTELLIGENCE_CATEGORIES.TEAM_COLLABORATION]: [
                'Team communication',
                'Status updates',
                'Knowledge sharing',
                'Decision tracking'
            ],
            [INTELLIGENCE_CATEGORIES.PLANNING_STRATEGY]: [
                'Sprint planning',
                'Capacity planning',
                'Estimation',
                'Priority setting'
            ]
        };
        
        return useCaseMap[category] || ['General project management', 'Team coordination'];
    }

    /**
     * Generate examples for patterns
     */
    generateExamples(pattern, category) {
        if (pattern.includes('shortcut')) {
            return [`Use ${pattern} to quickly perform actions`, 'Integrate into daily workflow'];
        }
        
        if (pattern.includes('template')) {
            return ['Create standardized issue format', 'Ensure consistent information capture'];
        }
        
        if (pattern.includes('automation')) {
            return ['Set up automated workflows', 'Reduce manual task overhead'];
        }
        
        return [`Implement ${pattern} in your workflow`, 'Train team on best practices'];
    }

    /**
     * Generate warnings for patterns
     */
    generateWarnings(pattern, category) {
        const warnings = [];
        
        if (pattern.includes('delete') || pattern.includes('remove')) {
            warnings.push('Irreversible action - ensure proper backup');
        }
        
        if (pattern.includes('bulk') || pattern.includes('automation')) {
            warnings.push('Test on small scale before full implementation');
        }
        
        if (pattern.includes('integration') || pattern.includes('api')) {
            warnings.push('Verify API permissions and rate limits');
        }
        
        return warnings;
    }

    /**
     * Generate summary statistics
     */
    generateSummaryStats() {
        console.log('\n=== Linear Intelligence Extraction Summary ===');
        console.log(`Files processed: ${this.stats.filesProcessed}`);
        console.log(`Total patterns extracted: ${this.stats.totalPatterns}`);
        console.log('\nCategory breakdown:');
        
        Object.entries(this.stats.categoryCounts).forEach(([category, count]) => {
            console.log(`  ${category}: ${count} patterns`);
        });
        
        console.log('\nComplexity distribution:');
        Object.entries(this.stats.complexityCounts).forEach(([level, count]) => {
            console.log(`  ${level}: ${count} patterns`);
        });
        
        console.log('\nSafety level distribution:');
        Object.entries(this.stats.safetyLevels).forEach(([level, count]) => {
            console.log(`  ${level}: ${count} patterns`);
        });
    }

    /**
     * Generate TypeScript output file
     */
    generateTypeScriptOutput() {
        const outputPath = path.join(__dirname, '../src/generated-linear-intelligence.ts');
        
        const tsContent = `// Auto-generated Linear intelligence database from ${this.stats.filesProcessed} documentation files
// Generated on: ${new Date().toISOString()}
// Total patterns: ${this.stats.totalPatterns}

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

export const LINEAR_INTELLIGENCE_PATTERNS: LinearIntelligencePattern[] = ${JSON.stringify(this.intelligence, null, 2)};

export const INTELLIGENCE_CATEGORIES = ${JSON.stringify(INTELLIGENCE_CATEGORIES, null, 2)};

export const INTELLIGENCE_STATS = ${JSON.stringify(this.stats, null, 2)};

// Helper functions for intelligent Linear management
export function findPatternsByCategory(category: string): LinearIntelligencePattern[] {
  return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.category === category);
}

export function findPatternsByComplexity(complexity: 'low' | 'moderate' | 'high'): LinearIntelligencePattern[] {
  return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.complexity === complexity);
}

export function searchPatterns(query: string): LinearIntelligencePattern[] {
  const lowerQuery = query.toLowerCase();
  return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => 
    pattern.pattern.toLowerCase().includes(lowerQuery) ||
    pattern.description.toLowerCase().includes(lowerQuery) ||
    pattern.context.toLowerCase().includes(lowerQuery)
  );
}

export function getPatternsByType(type: string): LinearIntelligencePattern[] {
  return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.type === type);
}
`;

        fs.writeFileSync(outputPath, tsContent);
        console.log(`\n✅ Generated TypeScript intelligence database: ${outputPath}`);
        console.log(`📊 Database contains ${this.stats.totalPatterns} intelligence patterns`);
    }
}

// Main execution
async function main() {
    console.log('🚀 Starting Linear Intelligence Extraction...\n');
    
    const parser = new LinearIntelligenceParser();
    await parser.parseLinearDocs();
    parser.generateTypeScriptOutput();
    
    console.log('\n🎉 Linear Intelligence extraction complete!');
    console.log('Next steps:');
    console.log('1. Review generated patterns in src/generated-linear-intelligence.ts');
    console.log('2. Build enhanced Linear MCP server with intelligence tools');
    console.log('3. Create Serena Linear Intelligence plugin');
    console.log('4. Integrate with existing multi-agent and Doppler systems');
}

// Execute if run directly
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { LinearIntelligenceParser };