// Auto-generated Linear intelligence database from 16 documentation files
// Generated on: 2025-06-22T12:25:17.461Z
// Total patterns: 414
export const LINEAR_INTELLIGENCE_PATTERNS = [
    {
        "id": "linear-issue_workflows-1",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "account-preferences.md",
        "context": "Git Branch Copy Actions\nWhen copying branch names with `Cmd/Ctrl + Shift + .`:\n\n1. **Move issue to In Progress**: Automatically transitions issue to first \"Started\" workflow status\n2. **Auto-assign to yourself*",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.402Z",
        "last_verified": "2025-06-22T12:25:17.402Z"
    },
    {
        "id": "linear-issue_workflows-2",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "account-preferences.md",
        "context": "lly assigns any issue you create to yourself.\n\n**Use cases**:\n- Creating personal task lists\n- Bulk issue creation for projects\n- Temporary enablement during sprints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter`",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.402Z",
        "last_verified": "2025-06-22T12:25:17.402Z"
    },
    {
        "id": "linear-team_collaboration-3",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "account-preferences.md",
        "context": "n whether you primarily work solo or collaboratively\n\n## Related Topics\n\n- [Profile](profile.md)\n- [Notifications](notifications.md)\n- [Keyboard Shortcuts](../workspace-management/keyboard-shortcuts.md)",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-automation_workflows-4",
        "pattern": "git integration",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: git integration",
        "source_file": "account-preferences.md",
        "context": "Use `Cmd/Ctrl + Shift + Enter` when creating issues to create multiple with the same assignee.\n\n### Git Integration Settings\n\n#### Git Attachment Format\nChoose display format for git attachments:\n- Title only\n- Titl",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement git integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-automation_workflows-5",
        "pattern": "automatically transitions issue to first \"started\" workflow status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatically transitions issue to first \"Started\" workflow status",
        "source_file": "account-preferences.md",
        "context": "y Actions\nWhen copying branch names with `Cmd/Ctrl + Shift + .`:\n\n1. **Move issue to In Progress**: Automatically transitions issue to first \"Started\" workflow status\n2. **Auto-assign to yourself**: Claims ownership when starting work\n\n**Recommendation**: Enable bot",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatically transitions issue to first \"started\" workflow status in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-api_usage-6",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "account-preferences.md",
        "context": "laims ownership when starting work\n\n**Recommendation**: Enable both settings for developers to save clicks and maintain workflow consistency.\n\n## Tips and Best Practices\n\n- Customize your default home vi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-keyboard_shortcuts-7",
        "pattern": "cmd/ctrl + shift + enter",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + Enter`",
        "source_file": "account-preferences.md",
        "context": "ists\n- Bulk issue creation for projects\n- Temporary enablement during sprints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter` when creating issues to create multiple with the same assignee.\n\n### Git Integration Settings\n\n####",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + enter in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-keyboard_shortcuts-8",
        "pattern": "cmd/ctrl + shift + .",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + .`",
        "source_file": "account-preferences.md",
        "context": "s:\n- Title only\n- Title and repository\n\n#### Git Branch Copy Actions\nWhen copying branch names with `Cmd/Ctrl + Shift + .`:\n\n1. **Move issue to In Progress**: Automatically transitions issue to first \"Started\" workflow sta",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + . in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.403Z",
        "last_verified": "2025-06-22T12:25:17.403Z"
    },
    {
        "id": "linear-project_management-9",
        "pattern": "on track",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: on track",
        "source_file": "admin-settings.md",
        "context": "utomatic logout configuration\n- **Device management**: Monitor and revoke active sessions\n- **Location tracking**: Geographic access monitoring\n\n#### Third-Party App Management\n**App Review Process**:\n- **Adm",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement on track in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.405Z",
        "last_verified": "2025-06-22T12:25:17.405Z"
    },
    {
        "id": "linear-issue_workflows-10",
        "pattern": "resolved",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: resolved",
        "source_file": "admin-settings.md",
        "context": "ties\n**Key Questions Answered**:\n- What projects consume the most resources?\n- How quickly are bugs resolved?\n- How consistent is issue prioritization?\n- How accurate are time estimates?\n- What are the team v",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement resolved in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.406Z",
        "last_verified": "2025-06-22T12:25:17.406Z"
    },
    {
        "id": "linear-team_collaboration-11",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "admin-settings.md",
        "context": "Issues**: Complete issue data with relationships\n- **Projects**: Project structure and metadata\n- **Comments**: Discussion threads and history\n- **Attachments**: Files and images\n- **Custom views**: Saved fil",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-team_collaboration-12",
        "pattern": "threads",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: threads",
        "source_file": "admin-settings.md",
        "context": "e data with relationships\n- **Projects**: Project structure and metadata\n- **Comments**: Discussion threads and history\n- **Attachments**: Files and images\n- **Custom views**: Saved filter configurations\n\n##",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement threads in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-team_collaboration-13",
        "pattern": "member permissions",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: member permissions",
        "source_file": "admin-settings.md",
        "context": "security policies, and integrations. Admin access provides additional capabilities beyond standard member permissions.\n\n### Admin-Only Features\n- **User management**: Invite, suspend, and manage member roles\n- **Secur",
        "complexity": "moderate",
        "safety_level": "high_risk",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member permissions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-team_collaboration-14",
        "pattern": "member roles",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: member roles",
        "source_file": "admin-settings.md",
        "context": "ard member permissions.\n\n### Admin-Only Features\n- **User management**: Invite, suspend, and manage member roles\n- **Security settings**: SAML, SCIM, login method configuration\n- **Billing management**: Plan chan",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member roles in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-team_collaboration-15",
        "pattern": "members** | user and role management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Members** | User and role management",
        "source_file": "admin-settings.md",
        "context": "---|---------|---------------|\n| **General** | Basic workspace settings | Name, URL, features |\n| **Members** | User and role management | Invitations, suspensions, roles |\n| **Security** | Authentication and access | SAML, SCIM, login",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement members** | user and role management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-team_collaboration-16",
        "pattern": "member assignment",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: member assignment",
        "source_file": "admin-settings.md",
        "context": "er\n2. **Push groups** to Linear via SCIM\n3. **Link existing teams** to synced groups\n4. **Configure member assignments** through IdP\n\n### SCIM Best Practices\n1. **Test thoroughly**: Verify provisioning with test users",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-planning_strategy-17",
        "pattern": "time-based",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: time-based",
        "source_file": "admin-settings.md",
        "context": "for Analytics**:\n| Filter | Purpose | Use Case |\n|--------|---------|----------|\n| **Created at** | Time-based analysis | Limit to specific periods |\n| **Completed at** | Completion trends | Track delivery patt",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement time-based in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.407Z",
        "last_verified": "2025-06-22T12:25:17.407Z"
    },
    {
        "id": "linear-productivity_optimization-18",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "admin-settings.md",
        "context": "ing** | Payment and plan management | Subscriptions, usage |\n| **Import/Export** | Data migration | Bulk operations |\n| **Integrations** | Third-party connections | OAuth apps, webhooks |\n\n---\n\n## 🔒 Security & Acce",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.408Z",
        "last_verified": "2025-06-22T12:25:17.408Z"
    },
    {
        "id": "linear-status_tracking-19",
        "pattern": "analytics & insights",
        "category": "status_tracking",
        "type": "analytics_tracking",
        "description": "Analytics tracking: Analytics & Insights",
        "source_file": "admin-settings.md",
        "context": "& Access Control](#security-access-control)\n- [SCIM User Provisioning](#scim-user-provisioning)\n- [Analytics & Insights](#analytics-insights)\n- [Billing & Plans](#billing-plans)\n- [Data Management](#data-management)\n- [",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement analytics & insights in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.408Z",
        "last_verified": "2025-06-22T12:25:17.408Z"
    },
    {
        "id": "linear-status_tracking-20",
        "pattern": "analytics-insights",
        "category": "status_tracking",
        "type": "analytics_tracking",
        "description": "Analytics tracking: analytics-insights",
        "source_file": "admin-settings.md",
        "context": "urity-access-control)\n- [SCIM User Provisioning](#scim-user-provisioning)\n- [Analytics & Insights](#analytics-insights)\n- [Billing & Plans](#billing-plans)\n- [Data Management](#data-management)\n- [Enterprise Features](",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement analytics-insights in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.408Z",
        "last_verified": "2025-06-22T12:25:17.408Z"
    },
    {
        "id": "linear-status_tracking-21",
        "pattern": "analytics & insights",
        "category": "status_tracking",
        "type": "analytics_tracking",
        "description": "Analytics tracking: Analytics & Insights",
        "source_file": "admin-settings.md",
        "context": "& Access Control](#security-access-control)\n- [SCIM User Provisioning](#scim-user-provisioning)\n- [Analytics & Insights](#analytics-insights)\n- [Billing & Plans](#billing-plans)\n- [Data Management](#data-management)\n- [",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement analytics & insights in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.408Z",
        "last_verified": "2025-06-22T12:25:17.408Z"
    },
    {
        "id": "linear-status_tracking-22",
        "pattern": "analytics + automation | unlimited users | insights",
        "category": "status_tracking",
        "type": "analytics_tracking",
        "description": "Analytics tracking: Analytics + automation | Unlimited users | Insights",
        "source_file": "admin-settings.md",
        "context": "tracking |\n| **Standard** | Full features | Unlimited users | Advanced workflows |\n| **Business** | Analytics + automation | Unlimited users | Insights, SLA, automation |\n| **Enterprise** | Security + compliance | Unlimited users | SAML, SCIM, audit l",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Set up automated workflows",
            "Reduce manual task overhead"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.408Z",
        "last_verified": "2025-06-22T12:25:17.408Z"
    },
    {
        "id": "linear-integration_patterns-23",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "admin-settings.md",
        "context": "Formats\n- **CSV**: Spreadsheet-compatible format\n- **JSON**: Structured data format\n- **GraphQL**: API-compatible export\n\n### Data Backup Strategies\n1. **Regular exports**: Scheduled data backups\n2. **V",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.409Z",
        "last_verified": "2025-06-22T12:25:17.409Z"
    },
    {
        "id": "linear-integration_patterns-24",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "admin-settings.md",
        "context": "t** | Data migration | Bulk operations |\n| **Integrations** | Third-party connections | OAuth apps, webhooks |\n\n---\n\n## 🔒 Security & Access Control\n\n### Authentication Methods\n\n#### Login Method Configurati",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.409Z",
        "last_verified": "2025-06-22T12:25:17.409Z"
    },
    {
        "id": "linear-integration_patterns-25",
        "pattern": "graphql",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: graphql",
        "source_file": "admin-settings.md",
        "context": "#### Export Formats\n- **CSV**: Spreadsheet-compatible format\n- **JSON**: Structured data format\n- **GraphQL**: API-compatible export\n\n### Data Backup Strategies\n1. **Regular exports**: Scheduled data backups",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement graphql in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.409Z",
        "last_verified": "2025-06-22T12:25:17.409Z"
    },
    {
        "id": "linear-troubleshooting-26",
        "pattern": "issue resolution",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: issue resolution",
        "source_file": "admin-settings.md",
        "context": "- **Premium**: Phone support and custom SLA\n\n#### Support Features\n- **Priority response**: Faster issue resolution\n- **Technical account management**: Dedicated contact\n- **Custom training**: Team onboarding assist",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement issue resolution in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.410Z",
        "last_verified": "2025-06-22T12:25:17.410Z"
    },
    {
        "id": "linear-api_usage-27",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "admin-settings.md",
        "context": "ation management**: Approve and configure workspace integrations\n\n### Accessing Admin Settings\n1. **Click workspace name** in upper left corner\n2. **Select Settings** from dropdown\n3. **Navigate to Admin",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.410Z",
        "last_verified": "2025-06-22T12:25:17.410Z"
    },
    {
        "id": "linear-keyboard_shortcuts-28",
        "pattern": "cmd/ctrl + shift + i",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + I`",
        "source_file": "admin-settings.md",
        "context": "s analysis\n- **Cycles**: Sprint performance metrics\n\n#### Opening Insights\n- **Keyboard shortcut**: `Cmd/Ctrl + Shift + I`\n- **Sidebar**: Click Insights panel in right sidebar\n- **Best location**: Workspace-level custom vi",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + i in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.410Z",
        "last_verified": "2025-06-22T12:25:17.410Z"
    },
    {
        "id": "linear-project_management-29",
        "pattern": "projects & cycles](projects-cycles.md)** - planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Planning",
        "source_file": "api-cli.md",
        "context": "missions\n- **[Issues Management](issues-management.md)** - Work item organization and tracking\n- **[Projects & Cycles](projects-cycles.md)** - Planning and project management\n- **[Getting Started](getting-started.md)** - Basic Linear setup and concept",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.412Z",
        "last_verified": "2025-06-22T12:25:17.412Z"
    },
    {
        "id": "linear-project_management-30",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project management",
        "source_file": "api-cli.md",
        "context": "- Work item organization and tracking\n- **[Projects & Cycles](projects-cycles.md)** - Planning and project management\n- **[Getting Started](getting-started.md)** - Basic Linear setup and concepts\n\n---\n\n*Linear's API a",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.412Z",
        "last_verified": "2025-06-22T12:25:17.412Z"
    },
    {
        "id": "linear-issue_workflows-31",
        "pattern": "todo",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: todo",
        "source_file": "api-cli.md",
        "context": "ion\": \"Issue description\",\n    \"priority\": 2,\n    \"state\": {\n      \"id\": \"state-id\",\n      \"name\": \"Todo\",\n      \"type\": \"unstarted\"\n    },\n    \"team\": {\n      \"id\": \"team-id\",\n      \"name\": \"Engineering\"",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement todo in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.413Z",
        "last_verified": "2025-06-22T12:25:17.413Z"
    },
    {
        "id": "linear-issue_workflows-32",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "api-cli.md",
        "context": "\"Bug report\" --team \"ENG\" --priority high\n\n# List issues\nlinear issues list --assignee me --state \"In Progress\"\n\n# Update issue\nlinear issue update ISSUE-123 --state \"Done\"\n\n# List teams\nlinear teams list\n\n# Cr",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.413Z",
        "last_verified": "2025-06-22T12:25:17.413Z"
    },
    {
        "id": "linear-issue_workflows-33",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "api-cli.md",
        "context": "ues list --assignee me --state \"In Progress\"\n\n# Update issue\nlinear issue update ISSUE-123 --state \"Done\"\n\n# List teams\nlinear teams list\n\n# Create project\nlinear project create --name \"Q1 Launch\" --team",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.413Z",
        "last_verified": "2025-06-22T12:25:17.413Z"
    },
    {
        "id": "linear-issue_workflows-34",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue Creation",
        "source_file": "api-cli.md",
        "context": "ll Script\nHere's a complete shell script for creating Linear issues:\n\n```bash\n#!/bin/bash\n\n# Linear Issue Creation Script\n# Usage: ./linear-create-issue.sh \"Issue Title\" \"Issue Description\" [team_key]\n\nset -e\n\n# Ch",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.413Z",
        "last_verified": "2025-06-22T12:25:17.413Z"
    },
    {
        "id": "linear-issue_workflows-35",
        "pattern": "tasks, and integrate linear seamlessly into your development",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: tasks, and integrate Linear seamlessly into your development",
        "source_file": "api-cli.md",
        "context": "on and integration possibilities. Master these tools to build custom workflows, automate repetitive tasks, and integrate Linear seamlessly into your development stack.*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement tasks, and integrate linear seamlessly into your development in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.413Z",
        "last_verified": "2025-06-22T12:25:17.413Z"
    },
    {
        "id": "linear-team_collaboration-36",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "api-cli.md",
        "context": "| Created, updated, deleted | Sync external systems |\n| `Comment` | Added, updated, deleted | Chat notifications |\n| `Project` | Status changes | Progress reporting |\n| `Cycle` | Started, completed | Sprint autom",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-team_collaboration-37",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "api-cli.md",
        "context": "access | Team management, settings |\n| `issues:create` | Create issues | Support integrations |\n| `comments:create` | Create comments | Bot interactions |\n\n#### Personal API Key Permissions\nPersonal API keys",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-team_collaboration-38",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team management",
        "source_file": "api-cli.md",
        "context": "| `write` | Create and update | Issue management, commenting |\n| `admin` | Administrative access | Team management, settings |\n| `issues:create` | Create issues | Support integrations |\n| `comments:create` | Create",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-team_collaboration-39",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team Management",
        "source_file": "api-cli.md",
        "context": "| `write` | Create and update | Issue management, commenting |\n| `admin` | Administrative access | Team management, settings |\n| `issues:create` | Create issues | Support integrations |\n| `comments:create` | Create",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-team_collaboration-40",
        "pattern": "team and user management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team and user management",
        "source_file": "api-cli.md",
        "context": "tom Script Features\n- ✅ Uses existing API key configuration\n- ✅ Full CRUD operations for issues\n- ✅ Team and user management\n- ✅ Error handling and validation\n- ✅ JSON output formatting\n- ✅ Help documentation\n\n#### Example S",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team and user management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-team_collaboration-41",
        "pattern": "team changes | access management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team changes | Access management",
        "source_file": "api-cli.md",
        "context": "atus changes | Progress reporting |\n| `Cycle` | Started, completed | Sprint automation |\n| `User` | Team changes | Access management |\n\n### Webhook Payload Structure\n\n#### Example Issue Event\n```json\n{\n  \"action\": \"create\",\n  \"type\"",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team changes | access management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.414Z",
        "last_verified": "2025-06-22T12:25:17.414Z"
    },
    {
        "id": "linear-planning_strategy-42",
        "pattern": "complexity",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: complexity",
        "source_file": "api-cli.md",
        "context": "## API Rate Limits\n\n#### Current Limits\n- **Request limit**: 2000 requests per hour per API key\n- **Complexity limit**: 10000 complexity points per hour\n- **Burst limit**: 60 requests per minute\n- **Concurrent",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement complexity in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.415Z",
        "last_verified": "2025-06-22T12:25:17.415Z"
    },
    {
        "id": "linear-integration_patterns-43",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "api-cli.md",
        "context": "---\ntitle: \"API & CLI Tools\"\ndescription: \"Command-line interface guide and reference\"\ncategory: \"cli-reference\"\nty",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.417Z",
        "last_verified": "2025-06-22T12:25:17.417Z"
    },
    {
        "id": "linear-integration_patterns-44",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "api-cli.md",
        "context": "rations](#common-api-operations)\n- [CLI Tools](#cli-tools)\n- [SDK and Libraries](#sdk-libraries)\n- [Webhooks & Events](#webhooks-events)\n- [Rate Limits & Best Practices](#rate-limits-best-practices)\n- [Troub",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.417Z",
        "last_verified": "2025-06-22T12:25:17.417Z"
    },
    {
        "id": "linear-integration_patterns-45",
        "pattern": "graphql",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: graphql",
        "source_file": "api-cli.md",
        "context": "ble of Contents\n\n- [API Overview](#api-overview)\n- [Authentication Setup](#authentication-setup)\n- [GraphQL Fundamentals](#graphql-fundamentals)\n- [Common API Operations](#common-api-operations)\n- [CLI Tools",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement graphql in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.417Z",
        "last_verified": "2025-06-22T12:25:17.417Z"
    },
    {
        "id": "linear-troubleshooting-46",
        "pattern": "sync issue",
        "category": "troubleshooting",
        "type": "common_issue",
        "description": "Common issue: sync issue",
        "source_file": "api-cli.md",
        "context": "message)\n  }\n  \n  res.status(200).send('OK')\n})\n```\n\n#### 2. External System Sync\n```javascript\n// Sync issues with external CRM\napp.post('/webhook/crm-sync', (req, res) => {\n  const event = req.body\n  \n  if (",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement sync issue in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.417Z",
        "last_verified": "2025-06-22T12:25:17.417Z"
    },
    {
        "id": "linear-api_usage-47",
        "pattern": "graphql is a query",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: GraphQL is a query",
        "source_file": "api-cli.md",
        "context": "s to all resources the user can access.\n\n---\n\n## 📊 GraphQL Fundamentals\n\n### Understanding GraphQL\nGraphQL is a query language that allows you to:\n- **Request specific fields**: Get exactly what you need\n- **Single re",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement graphql is a query in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-48",
        "pattern": "api request",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: API request",
        "source_file": "api-cli.md",
        "context": "ngify(data.errors)}`)\n    }\n    \n    return data.data\n  } catch (error) {\n    console.error('Linear API request failed:', error)\n    throw error\n  }\n}\n```\n\n#### 4. Caching Strategies\n```javascript\n// Simple in-m",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api request in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-49",
        "pattern": "apicall",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: apiCall",
        "source_file": "api-cli.md",
        "context": "P 429 \"Rate limit exceeded\"\n```javascript\n// Implement exponential backoff\nasync function withRetry(apiCall, maxRetries = 3) {\n  for (let i = 0; i < maxRetries; i++) {\n    try {\n      return await apiCall()",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement apicall in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-50",
        "pattern": "apicall",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: apiCall",
        "source_file": "api-cli.md",
        "context": "P 429 \"Rate limit exceeded\"\n```javascript\n// Implement exponential backoff\nasync function withRetry(apiCall, maxRetries = 3) {\n  for (let i = 0; i < maxRetries; i++) {\n    try {\n      return await apiCall()",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement apicall in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-51",
        "pattern": "api call",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: API call",
        "source_file": "api-cli.md",
        "context": "ntication Issues\n\n**Common Symptoms:**\n- CLI returns \"Authentication required, not authenticated\"\n- API calls work but CLI commands fail\n- Multiple CLI installations causing conflicts\n\n**Troubleshooting Steps",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api call in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-52",
        "pattern": "api key works with direct call",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: API key works with direct call",
        "source_file": "api-cli.md",
        "context": "ic alias if found\nsed -i '' '/^alias linear=\"lin\"$/d' ~/.zshrc\nunalias linear\n```\n\n**Step 2: Verify API key works with direct calls**\n```bash\n# Test API key directly\ncurl -s -X POST \\\n  -H \"Content-Type: application/json\" \\\n  -H \"",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api key works with direct call in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-api_usage-53",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "api-cli.md",
        "context": "---\ntitle: \"API & CLI Tools\"\ndescription: \"Command-line interface guide and reference\"\ncategory: \"cli-reference\"\ntype: \"a",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.418Z",
        "last_verified": "2025-06-22T12:25:17.418Z"
    },
    {
        "id": "linear-keyboard_shortcuts-54",
        "pattern": "\n\n### custom cli script (alternative)\n\nwhen official cli has authentication issues, you can use a custom shell script:\n\n#### script location\n",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `\n\n### Custom CLI Script (Alternative)\n\nWhen official CLI has authentication issues, you can use a custom shell script:\n\n#### Script Location\n`",
        "source_file": "api-cli.md",
        "context": "t teams\nlinear teams list\n\n# Create project\nlinear project create --name \"Q1 Launch\" --team \"ENG\"\n```\n\n### Custom CLI Script (Alternative)\n\nWhen official CLI has authentication issues, you can use a custom shell script:\n\n#### Script Location\n```bash\n# Save as ~/linear-cli.sh and make executable\nchmod +x ~/linear-cli.sh\n```\n\n#### Script Usage",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement \n\n### custom cli script (alternative)\n\nwhen official cli has authentication issues, you can use a custom shell script:\n\n#### script location\n in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-keyboard_shortcuts-55",
        "pattern": "\n\n**step 5: alternative - use custom shell script**\nif cli continues to have issues, use the custom shell script provided earlier in this document for reliable api access.\n\n### debug mode\n\n#### enable detailed logging\n",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `\n\n**Step 5: Alternative - Use custom shell script**\nIf CLI continues to have issues, use the custom shell script provided earlier in this document for reliable API access.\n\n### Debug Mode\n\n#### Enable Detailed Logging\n`",
        "source_file": "api-cli.md",
        "context": "plication/json\" \\\n     -d '{\"query\":\"{ viewer { name } }\"}' \\\n     https://api.linear.app/graphql\n```\n\n**Step 5: Alternative - Use custom shell script**\nIf CLI continues to have issues, use the custom shell script provided earlier in this document for reliable API access.\n\n### Debug Mode\n\n#### Enable Detailed Logging\n```bash\n# For Linear CLI\nDEBUG=linear:* linear issues list\n\n# For custom scripts\nexport LINEAR_DEBUG=",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement \n\n**step 5: alternative - use custom shell script**\nif cli continues to have issues, use the custom shell script provided earlier in this document for reliable api access.\n\n### debug mode\n\n#### enable detailed logging\n in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-project_management-56",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project management",
        "source_file": "getting-started.md",
        "context": "u set up and start using Linear effectively.\n\n## 🎯 Overview\n\nLinear is a modern issue tracking and project management tool designed for software teams. It emphasizes speed, keyboard shortcuts, and streamlined workflow",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-project_management-57",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Project Management",
        "source_file": "getting-started.md",
        "context": "u set up and start using Linear effectively.\n\n## 🎯 Overview\n\nLinear is a modern issue tracking and project management tool designed for software teams. It emphasizes speed, keyboard shortcuts, and streamlined workflow",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-project_management-58",
        "pattern": "projects & cycles](projects-cycles.md)** - advanced project planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Advanced project planning",
        "source_file": "getting-started.md",
        "context": "sue workflows\n- **[Workspace Management](workspace-management.md)** - Team and workspace setup\n- **[Projects & Cycles](projects-cycles.md)** - Advanced project planning\n\n---\n\n*Welcome to Linear! You're now ready to build better software, faster.* ⚡",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - advanced project planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-project_management-59",
        "pattern": "on track",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: on track",
        "source_file": "getting-started.md",
        "context": "across teams\n- **Target dates**: Set milestones and deadlines\n- **Progress graphs**: Visual completion tracking\n- **Documentation**: Add overviews and resources\n- **Status updates**: Keep everyone informed\n\n#",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement on track in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-project_management-60",
        "pattern": "target date",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: target date",
        "source_file": "getting-started.md",
        "context": "ngs\n- Members and permissions\n\n### Projects\nCollections of issues working toward a specific goal:\n- Target dates and milestones\n- Progress tracking\n- Cross-team collaboration\n- Status updates\n\n### Cycles\nTime-bo",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement target date in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-61",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "getting-started.md",
        "context": "l unit in Linear representing work items:\n- **Identifier**: Unique ID (e.g., ENG-123)\n- **Status**: Backlog → Todo → In Progress → Done\n- **Priority**: Urgent (1) to Low (4)\n- **Properties**: Assignee, label",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-62",
        "pattern": "todo",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: todo",
        "source_file": "getting-started.md",
        "context": "Linear representing work items:\n- **Identifier**: Unique ID (e.g., ENG-123)\n- **Status**: Backlog → Todo → In Progress → Done\n- **Priority**: Urgent (1) to Low (4)\n- **Properties**: Assignee, labels, esti",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement todo in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-63",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "getting-started.md",
        "context": "representing work items:\n- **Identifier**: Unique ID (e.g., ENG-123)\n- **Status**: Backlog → Todo → In Progress → Done\n- **Priority**: Urgent (1) to Low (4)\n- **Properties**: Assignee, labels, estimates, due dat",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-64",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "getting-started.md",
        "context": "ork items:\n- **Identifier**: Unique ID (e.g., ENG-123)\n- **Status**: Backlog → Todo → In Progress → Done\n- **Priority**: Urgent (1) to Low (4)\n- **Properties**: Assignee, labels, estimates, due dates\n\n###",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-65",
        "pattern": "code review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: code review",
        "source_file": "getting-started.md",
        "context": "o-link pull requests to issues\n- Update issue status on PR events\n- Branch naming automation\n- Sync code reviews\n\n**Setup**: [GitHub Integration Guide](integrations.md#github)\n\n## 📊 Planning with Cycles\n\nCycles",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-66",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "getting-started.md",
        "context": "fier**: Unique ID (e.g., ENG-123)\n- **Status**: Backlog → Todo → In Progress → Done\n- **Priority**: Urgent (1) to Low (4)\n- **Properties**: Assignee, labels, estimates, due dates\n\n### Teams\nOrganizational u",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-67",
        "pattern": "p0",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p0",
        "source_file": "getting-started.md",
        "context": "Labels\n- **Type**: bug, feature, improvement\n- **Area**: frontend, backend, design\n- **Priority**: P0, P1, P2\n- **Status**: needs-review, blocked\n\n### 3. Track Progress\n- Move issues through workflow s",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p0 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-68",
        "pattern": "p1",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p1",
        "source_file": "getting-started.md",
        "context": "els\n- **Type**: bug, feature, improvement\n- **Area**: frontend, backend, design\n- **Priority**: P0, P1, P2\n- **Status**: needs-review, blocked\n\n### 3. Track Progress\n- Move issues through workflow state",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p1 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-issue_workflows-69",
        "pattern": "p2",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p2",
        "source_file": "getting-started.md",
        "context": "- **Type**: bug, feature, improvement\n- **Area**: frontend, backend, design\n- **Priority**: P0, P1, P2\n- **Status**: needs-review, blocked\n\n### 3. Track Progress\n- Move issues through workflow states\n-",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p2 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.419Z",
        "last_verified": "2025-06-22T12:25:17.419Z"
    },
    {
        "id": "linear-team_collaboration-70",
        "pattern": "@mentions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: @mentions",
        "source_file": "getting-started.md",
        "context": "itor supports rich content:\n\n### Formatting\n- **Markdown support**: Headers, lists, code blocks\n- **@mentions**: Notify teammates\n- **Drag & drop**: Images and videos\n- **Embeds**: Loom, YouTube, Figma automat",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement @mentions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-team_collaboration-71",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "getting-started.md",
        "context": "e `/linear` command to create issues from Slack\n- Sync comments between platforms\n- Set up personal notifications\n- Import custom emoji 🥳\n\n**Setup**: [Integrations Guide](integrations.md#slack)\n\n### 2. GitHub Int",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-team_collaboration-72",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "getting-started.md",
        "context": "See issue updates in dedicated channels\n- Use `/linear` command to create issues from Slack\n- Sync comments between platforms\n- Set up personal notifications\n- Import custom emoji 🥳\n\n**Setup**: [Integration",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-team_collaboration-73",
        "pattern": "status updates",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: status updates",
        "source_file": "getting-started.md",
        "context": "ard a specific goal:\n- Target dates and milestones\n- Progress tracking\n- Cross-team collaboration\n- Status updates\n\n### Cycles\nTime-boxed periods (typically 1-2 weeks) for planning work:\n- **Active cycle**: Current",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement status updates in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-team_collaboration-74",
        "pattern": "members and permissions",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Members and permissions",
        "source_file": "getting-started.md",
        "context": "heir own:\n- Issue identifier prefix (e.g., ENG-, DESIGN-)\n- Workflow states\n- Labels and settings\n- Members and permissions\n\n### Projects\nCollections of issues working toward a specific goal:\n- Target dates and milestones\n-",
        "complexity": "moderate",
        "safety_level": "high_risk",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement members and permissions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-team_collaboration-75",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team Management",
        "source_file": "getting-started.md",
        "context": "**: Break down into deliverable chunks\n4. **Track progress**: Use project graphs and updates\n\n## 👥 Team Management\n\n### Inviting Team Members\n1. Go to **Settings → Members**\n2. Send invitations via email\n3. Set app",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-planning_strategy-76",
        "pattern": "time-boxed",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: time-boxed",
        "source_file": "getting-started.md",
        "context": "et dates and milestones\n- Progress tracking\n- Cross-team collaboration\n- Status updates\n\n### Cycles\nTime-boxed periods (typically 1-2 weeks) for planning work:\n- **Active cycle**: Current sprint\n- **Upcoming cy",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement time-boxed in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-planning_strategy-77",
        "pattern": "active cycle",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: active cycle",
        "source_file": "getting-started.md",
        "context": "ration\n- Status updates\n\n### Cycles\nTime-boxed periods (typically 1-2 weeks) for planning work:\n- **Active cycle**: Current sprint\n- **Upcoming cycle**: Next planned work\n- **Cooldown**: Buffer between cycles\n\n##",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement active cycle in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-planning_strategy-78",
        "pattern": "upcoming cycle",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: upcoming cycle",
        "source_file": "getting-started.md",
        "context": "Time-boxed periods (typically 1-2 weeks) for planning work:\n- **Active cycle**: Current sprint\n- **Upcoming cycle**: Next planned work\n- **Cooldown**: Buffer between cycles\n\n## ✨ Editor Features\n\nLinear's editor s",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement upcoming cycle in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-status_tracking-79",
        "pattern": "progress tracking",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: progress tracking",
        "source_file": "getting-started.md",
        "context": "### Projects\nCollections of issues working toward a specific goal:\n- Target dates and milestones\n- Progress tracking\n- Cross-team collaboration\n- Status updates\n\n### Cycles\nTime-boxed periods (typically 1-2 weeks) fo",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement progress tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-status_tracking-80",
        "pattern": "progress graphs",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: progress graphs",
        "source_file": "getting-started.md",
        "context": "Multi-team sharing**: Collaborate across teams\n- **Target dates**: Set milestones and deadlines\n- **Progress graphs**: Visual completion tracking\n- **Documentation**: Add overviews and resources\n- **Status updates**",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement progress graphs in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-automation_workflows-81",
        "pattern": "git integration",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: git integration",
        "source_file": "getting-started.md",
        "context": "ractices built-in\n- **Real-time sync**: Instant updates across all clients\n- **Developer-focused**: Git integration, API-first design\n\n## 🚀 Quick Setup (5 minutes)\n\n### Step 1: Create Your First Issue\n**To start, p",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement git integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-automation_workflows-82",
        "pattern": "pr events",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: pr events",
        "source_file": "getting-started.md",
        "context": "Hub Integration\nFor development teams:\n- Auto-link pull requests to issues\n- Update issue status on PR events\n- Branch naming automation\n- Sync code reviews\n\n**Setup**: [GitHub Integration Guide](integrations.",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement pr events in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.420Z",
        "last_verified": "2025-06-22T12:25:17.420Z"
    },
    {
        "id": "linear-integration_patterns-83",
        "pattern": "slack integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: slack integration",
        "source_file": "getting-started.md",
        "context": "table\n\n## 🔧 Essential Integrations\n\nSet up these integrations to streamline your workflow:\n\n### 1. Slack Integration\nIf your team uses Slack:\n- See issue updates in dedicated channels\n- Use `/linear` command to creat",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement slack integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-integration_patterns-84",
        "pattern": "github integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: github integration",
        "source_file": "getting-started.md",
        "context": "ifications\n- Import custom emoji 🥳\n\n**Setup**: [Integrations Guide](integrations.md#slack)\n\n### 2. GitHub Integration\nFor development teams:\n- Auto-link pull requests to issues\n- Update issue status on PR events\n- Bra",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement github integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-integration_patterns-85",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "getting-started.md",
        "context": "- **Real-time sync**: Instant updates across all clients\n- **Developer-focused**: Git integration, API-first design\n\n## 🚀 Quick Setup (5 minutes)\n\n### Step 1: Create Your First Issue\n**To start, press",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-api_usage-86",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "getting-started.md",
        "context": "**Opinionated workflows**: Best practices built-in\n- **Real-time sync**: Instant updates across all clients\n- **Developer-focused**: Git integration, API-first design\n\n## 🚀 Quick Setup (5 minutes)\n\n###",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-keyboard_shortcuts-87",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "getting-started.md",
        "context": "any view using `C` or by clicking the `New issue` button.\n\n### Step 2: Learn the Command Palette\n**`Cmd/Ctrl + K` is Linear's most powerful feature.**\n\nUse it to search for or take any action in the app. Try it no",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-keyboard_shortcuts-88",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "getting-started.md",
        "context": "any view using `C` or by clicking the `New issue` button.\n\n### Step 2: Learn the Command Palette\n**`Cmd/Ctrl + K` is Linear's most powerful feature.**\n\nUse it to search for or take any action in the app. Try it no",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-keyboard_shortcuts-89",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "getting-started.md",
        "context": "any view using `C` or by clicking the `New issue` button.\n\n### Step 2: Learn the Command Palette\n**`Cmd/Ctrl + K` is Linear's most powerful feature.**\n\nUse it to search for or take any action in the app. Try it no",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-keyboard_shortcuts-90",
        "pattern": "shift + p",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + P`",
        "source_file": "getting-started.md",
        "context": "ed with Projects\n1. **Create project**: Press `Cmd/Ctrl + K` → \"New project\"\n2. **Add issues**: Use `Shift + P` to assign existing issues\n3. **Set milestones**: Break down into deliverable chunks\n4. **Track prog",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + p in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.421Z",
        "last_verified": "2025-06-22T12:25:17.421Z"
    },
    {
        "id": "linear-issue_workflows-91",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "inbox.md",
        "context": "y hides notifications from Inbox and Triage\n- Reappears as unread at specified time\n- Automatically canceled if new activity occurs\n\n### Setting Snooze Times\n- Press `H` on any notification\n- Right-click and",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-issue_workflows-92",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "inbox.md",
        "context": "## Best Practices\n\n1. **Daily Review**: Check Inbox at start of workday\n2. **Use Snooze**: Hide non-urgent items until needed\n3. **Keyboard Navigation**: Master shortcuts for efficiency\n4. **Set Reminders**",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-issue_workflows-93",
        "pattern": "tasks or review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: tasks or review",
        "source_file": "inbox.md",
        "context": "task management\n- Use filters to focus on specific notification types\n- Set reminders for recurring tasks or reviews\n- Snooze notifications during focused work time\n\n## FAQ\n\n**Q: Can I customize which notifications",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement tasks or review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-team_collaboration-94",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "inbox.md",
        "context": "---\ntitle: \"Inbox\"\ndescription: \"Your Linear Inbox receives notifications for key events on subscribed issues. You're automatically subscribed to issues when you:\"\ncategory:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-team_collaboration-95",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "inbox.md",
        "context": "scribed to issues when you:\n- Create them\n- Are assigned to them\n- Are mentioned in descriptions or comments\n\n**Note**: All notifications go to your Inbox—this cannot be customized. However, you can filter no",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-automation_workflows-96",
        "pattern": "automatically canceled and the notification",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: automatically canceled and the notification",
        "source_file": "inbox.md",
        "context": "subscribe button.\n\n**Q: What happens to snoozed notifications with new activity?**\nA: The snooze is automatically canceled and the notification reappears immediately.\n\n## Related Topics\n\n- [Notifications](notifications.md)\n- [My Issues](my-iss",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatically canceled and the notification in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-best_practices-97",
        "pattern": "regular cleanup",
        "category": "best_practices",
        "type": "process_optimization",
        "description": "Process optimization: regular cleanup",
        "source_file": "inbox.md",
        "context": "vigation**: Master shortcuts for efficiency\n4. **Set Reminders**: For follow-ups and deadlines\n5. **Regular Cleanup**: Delete processed notifications\n\n## Tips\n\n- Combine Inbox with [My Issues](my-issues.md) for comp",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement regular cleanup in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-api_usage-98",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "inbox.md",
        "context": "nal alerts in **Settings > My Account > Notifications**.\n\n## Accessing Your Inbox\n\n### Navigation\n- Click \"Inbox\" in the sidebar\n- Use keyboard shortcut: `G` then `I` (works from any page)\n\n### Navigatio",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-99",
        "pattern": "shift + backspace",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + Backspace`",
        "source_file": "inbox.md",
        "context": "--|-------------|\n| Delete notification | `Backspace` | Remove single notification |\n| Delete all | `Shift + Backspace` | Clear entire inbox |\n| Delete all read | `Cmd/Ctrl + D` | Remove only read notifications |\n| Mark",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + backspace in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-100",
        "pattern": "cmd/ctrl + d",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + D`",
        "source_file": "inbox.md",
        "context": "single notification |\n| Delete all | `Shift + Backspace` | Clear entire inbox |\n| Delete all read | `Cmd/Ctrl + D` | Remove only read notifications |\n| Mark as read/unread | `U` | Toggle single notification |\n| Mar",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + d in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-101",
        "pattern": "option/alt + u",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Option/Alt + U`",
        "source_file": "inbox.md",
        "context": "ifications |\n| Mark as read/unread | `U` | Toggle single notification |\n| Mark all as read/unread | `Option/Alt + U` | Toggle all notifications |\n| Snooze | `H` | Temporarily hide notification |\n| Unsubscribe | `Shif",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement option/alt + u in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-102",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "inbox.md",
        "context": "+ U` | Toggle all notifications |\n| Snooze | `H` | Temporarily hide notification |\n| Unsubscribe | `Shift + S` | Stop receiving updates (from issue view) |\n\n### Contextual Actions\nRight-click any notification t",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-103",
        "pattern": "cmd/ctrl + f",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + F`",
        "source_file": "inbox.md",
        "context": "ions\n- Issue property updates\n- Quick actions menu\n\n## Search and Filter\n\n### Quick Search\n1. Press `Cmd/Ctrl + F`\n2. Filter by:\n   - Issue title\n   - Issue ID\n   - Notification type\n   - Assignee\n3. Press `Esc` to",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + f in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-keyboard_shortcuts-104",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "inbox.md",
        "context": "+ U` | Toggle all notifications |\n| Snooze | `H` | Temporarily hide notification |\n| Unsubscribe | `Shift + S` | Stop receiving updates (from issue view) |\n\n### Contextual Actions\nRight-click any notification t",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.422Z",
        "last_verified": "2025-06-22T12:25:17.422Z"
    },
    {
        "id": "linear-project_management-105",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Project Management",
        "source_file": "integrations.md",
        "context": "cs**: Mixpanel, Amplitude\n\n#### Automation\n- **Workflow Automation**: Zapier, Make (Integromat)\n- **Project Management**: Jira, Asana (via imports)\n- **Custom APIs**: Build your own integrations\n\n---\n\n## 🐙 GitHub Inte",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.423Z",
        "last_verified": "2025-06-22T12:25:17.423Z"
    },
    {
        "id": "linear-project_management-106",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project management",
        "source_file": "integrations.md",
        "context": "cs**: Mixpanel, Amplitude\n\n#### Automation\n- **Workflow Automation**: Zapier, Make (Integromat)\n- **Project Management**: Jira, Asana (via imports)\n- **Custom APIs**: Build your own integrations\n\n---\n\n## 🐙 GitHub Inte",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.423Z",
        "last_verified": "2025-06-22T12:25:17.423Z"
    },
    {
        "id": "linear-project_management-107",
        "pattern": "projects & cycles](projects-cycles.md)** - planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Planning",
        "source_file": "integrations.md",
        "context": "missions\n- **[Issues Management](issues-management.md)** - Work item organization and tracking\n- **[Projects & Cycles](projects-cycles.md)** - Planning and project management\n- **[Getting Started](getting-started.md)** - Basic Linear setup and concept",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.423Z",
        "last_verified": "2025-06-22T12:25:17.423Z"
    },
    {
        "id": "linear-project_management-108",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project management",
        "source_file": "integrations.md",
        "context": "cs**: Mixpanel, Amplitude\n\n#### Automation\n- **Workflow Automation**: Zapier, Make (Integromat)\n- **Project Management**: Jira, Asana (via imports)\n- **Custom APIs**: Build your own integrations\n\n---\n\n## 🐙 GitHub Inte",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.423Z",
        "last_verified": "2025-06-22T12:25:17.423Z"
    },
    {
        "id": "linear-issue_workflows-109",
        "pattern": "todo",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: todo",
        "source_file": "integrations.md",
        "context": "## Status Synchronization\n| Linear Status | Zendesk Status |\n|---------------|----------------|\n| **Todo** | Open |\n| **In Progress** | Pending |\n| **In Review** | Pending |\n| **Done** | Solved |\n| **Canc",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement todo in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-110",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "integrations.md",
        "context": "pdate-login-flow\n```\n\n**Copy Branch Name** (`Cmd/Ctrl + Shift + .`):\n- Automatically move issue to \"In Progress\"\n- Auto-assign to current user (if enabled)\n- Generate standardized branch name\n\n#### Commit Linkin",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-111",
        "pattern": "in review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in review",
        "source_file": "integrations.md",
        "context": "| GitHub Event | Linear Action |\n|--------------|---------------|\n| **PR opened** | Move issue to \"In Review\" |\n| **PR merged** | Move issue to \"Done\" |\n| **PR closed (unmerged)** | Return to previous status",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-112",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "integrations.md",
        "context": "---|---------------|\n| **PR opened** | Move issue to \"In Review\" |\n| **PR merged** | Move issue to \"Done\" |\n| **PR closed (unmerged)** | Return to previous status |\n| **PR ready for review** | Update stat",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-113",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "integrations.md",
        "context": "Todo** | Open |\n| **In Progress** | Pending |\n| **In Review** | Pending |\n| **Done** | Solved |\n| **Canceled** | Closed |\n\n#### Customer Communication\n- **Auto-update tickets** when Linear issues progress\n- *",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-114",
        "pattern": "code review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: code review",
        "source_file": "integrations.md",
        "context": "anch names\n- **Commit linking**: Reference issues in commit messages\n- **PR synchronization**: Keep code reviews aligned with issue progress\n\n### Setup Process\n\n#### Installation Requirements\n- **GitHub organiza",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-115",
        "pattern": "resolved",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: resolved",
        "source_file": "integrations.md",
        "context": "#### Automation Features\n\n**Status Synchronization**:\n- **Linear issue completed** → Sentry issue resolved\n- **Linear issue reopened** → Sentry issue reopened\n- **Automatic status updates** → Bidirectional",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement resolved in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-116",
        "pattern": "high priority",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: high priority",
        "source_file": "integrations.md",
        "context": "Create Slack message, send email\n- **Issue completed** → Update Google Sheets, notify customer\n- **High priority assigned** → Send SMS alert\n- **Bug reported** → Create calendar event for triage\n\n#### Communicati",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement high priority in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-117",
        "pattern": "issue to \"in review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue to \"In Review",
        "source_file": "integrations.md",
        "context": "Automation\n| GitHub Event | Linear Action |\n|--------------|---------------|\n| **PR opened** | Move issue to \"In Review\" |\n| **PR merged** | Move issue to \"Done\" |\n| **PR closed (unmerged)** | Return to previous status",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue to \"in review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-118",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-119",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-120",
        "pattern": "issue preview",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue preview",
        "source_file": "integrations.md",
        "context": "r assign ENG-123 @username\n```\n\n#### Rich Content Unfurls\nWhen Linear URLs are shared in Slack:\n- **Issue previews**: Title, status, assignee, priority\n- **Project updates**: Progress summaries\n- **Document links*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue preview in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-121",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-122",
        "pattern": "issues during creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues during creation",
        "source_file": "integrations.md",
        "context": "tes design**, optionally refreshes embed\n\n#### Best Practices\n1. **Link early**: Connect designs to issues during creation\n2. **Embed strategically**: Include designs in relevant issues\n3. **Update regularly**: Refresh emb",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues during creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-123",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-124",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-issue_workflows-125",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "integrations.md",
        "context": "erview\nSlack integration creates seamless communication flow between Linear and team chat, enabling issue creation, status updates, and notifications without leaving Slack.\n\n### Core Features\n- **Issue creation**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.425Z",
        "last_verified": "2025-06-22T12:25:17.425Z"
    },
    {
        "id": "linear-team_collaboration-126",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "integrations.md",
        "context": "k, Microsoft Teams, Discord\n- **Video Conferencing**: Zoom, Google Meet\n- **Email**: Gmail, Outlook notifications\n\n#### Design & Collaboration\n- **Design Tools**: Figma, Sketch, InVision\n- **Documentation**: Notio",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.426Z",
        "last_verified": "2025-06-22T12:25:17.426Z"
    },
    {
        "id": "linear-team_collaboration-127",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "integrations.md",
        "context": "t issues\n3. **Update regularly**: Refresh embeds for current designs\n4. **Document decisions**: Use comments to explain design choices\n5. **Version control**: Create new issues for major design changes\n\n---",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.426Z",
        "last_verified": "2025-06-22T12:25:17.426Z"
    },
    {
        "id": "linear-team_collaboration-128",
        "pattern": "threads",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: threads",
        "source_file": "integrations.md",
        "context": "Project updates**: Progress summaries\n- **Document links**: Doc titles and descriptions\n- **Comment threads**: Conversation previews\n\n#### Notification Types\n\n**Team Notifications**:\n- Configure from Team Se",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement threads in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.426Z",
        "last_verified": "2025-06-22T12:25:17.426Z"
    },
    {
        "id": "linear-team_collaboration-129",
        "pattern": "status updates",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: status updates",
        "source_file": "integrations.md",
        "context": "itHub integration, GitLab provides merge request linking, pipeline status sync, and automatic issue status updates.\n\n### Core Features\n- **Merge Request (MR) linking**: Connect GitLab MRs to Linear issues\n- **Pipel",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement status updates in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.426Z",
        "last_verified": "2025-06-22T12:25:17.426Z"
    },
    {
        "id": "linear-planning_strategy-130",
        "pattern": "complexity",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: complexity",
        "source_file": "integrations.md",
        "context": "nal)\n5. **Test webhook** delivery\n\n### API Rate Limits\n- **2000 requests per hour** per API key\n- **Complexity-based limiting** for expensive queries\n- **Burst allowance** for temporary spikes\n- **GraphQL intro",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement complexity in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.426Z",
        "last_verified": "2025-06-22T12:25:17.426Z"
    },
    {
        "id": "linear-productivity_optimization-131",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "integrations.md",
        "context": "ptions**: WebSocket-based live updates  \n- **Webhook support**: Receive notifications on events\n- **Bulk operations**: Efficient batch processing\n- **Custom fields**: Extend Linear with your data\n\n### Authentication",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.427Z",
        "last_verified": "2025-06-22T12:25:17.427Z"
    },
    {
        "id": "linear-productivity_optimization-132",
        "pattern": "workflow automation",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: workflow automation",
        "source_file": "integrations.md",
        "context": "ommunication**: All updates in one place\n- **Improved visibility**: See cross-platform activity\n- **Workflow automation**: Trigger actions across tools\n\n### Integration Types\n\n#### Development Tools\n- **Version Control*",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Set up automated workflows",
            "Reduce manual task overhead"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.427Z",
        "last_verified": "2025-06-22T12:25:17.427Z"
    },
    {
        "id": "linear-productivity_optimization-133",
        "pattern": "status transitions",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: status transitions",
        "source_file": "integrations.md",
        "context": "reporting** and analytics\n- **Backup and archival** workflows\n\n#### Workflow Automation\n- **Custom status transitions** based on external events\n- **Automatic assignment** using custom logic\n- **Integration with deplo",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement status transitions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.427Z",
        "last_verified": "2025-06-22T12:25:17.427Z"
    },
    {
        "id": "linear-automation_workflows-134",
        "pattern": "pull request linking",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: pull request linking",
        "source_file": "integrations.md",
        "context": "fic repo access\n5. Click **Install**\n6. Authenticate with GitHub account\n\n### GitHub Features\n\n#### Pull Request Linking\n**Automatic Linking**:\n- Reference Linear issues in PR titles or descriptions\n- Use issue identifie",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement pull request linking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-135",
        "pattern": "commit linking",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: commit linking",
        "source_file": "integrations.md",
        "context": "Update issue status based on PR events\n- **Branch naming**: Generate standardized branch names\n- **Commit linking**: Reference issues in commit messages\n- **PR synchronization**: Keep code reviews aligned with iss",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement commit linking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-136",
        "pattern": "pr events",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: pr events",
        "source_file": "integrations.md",
        "context": "ing**: Connect pull requests to Linear issues\n- **Status automation**: Update issue status based on PR events\n- **Branch naming**: Generate standardized branch names\n- **Commit linking**: Reference issues in c",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement pr events in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-137",
        "pattern": "automatic updates**: sync status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatic updates**: Sync status",
        "source_file": "integrations.md",
        "context": "eam productivity.\n\n### Integration Benefits\n- **Reduced context switching**: Work stays in flow\n- **Automatic updates**: Sync status between tools\n- **Centralized communication**: All updates in one place\n- **Improved visibility**:",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatic updates**: sync status in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-138",
        "pattern": "automation**: update issue status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: automation**: Update issue status",
        "source_file": "integrations.md",
        "context": "### Core Features\n- **Automatic issue linking**: Connect pull requests to Linear issues\n- **Status automation**: Update issue status based on PR events\n- **Branch naming**: Generate standardized branch names\n- **Commit linking**: Re",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Set up automated workflows",
            "Reduce manual task overhead"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-139",
        "pattern": "automatic issue status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: automatic issue status",
        "source_file": "integrations.md",
        "context": "iew\nSimilar to GitHub integration, GitLab provides merge request linking, pipeline status sync, and automatic issue status updates.\n\n### Core Features\n- **Merge Request (MR) linking**: Connect GitLab MRs to Linear issues\n-",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatic issue status in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-140",
        "pattern": "automatic status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatic status",
        "source_file": "integrations.md",
        "context": "r issue completed** → Sentry issue resolved\n- **Linear issue reopened** → Sentry issue reopened\n- **Automatic status updates** → Bidirectional sync\n\n**Assignee Synchronization**:\n- **Linear assignee change** → Update",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatic status in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-141",
        "pattern": "automatic notification",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatic notification",
        "source_file": "integrations.md",
        "context": "assignee change** → Update Sentry assignee\n- **Requires same email** in both Linear and Sentry\n- **Automatic notification** to new assignee\n\n#### Sentry Display Options\n**Linear Issue Views**:\n- **Sentry icon**: Display i",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatic notification in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-automation_workflows-142",
        "pattern": "automatic assignment",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatic assignment",
        "source_file": "integrations.md",
        "context": "** workflows\n\n#### Workflow Automation\n- **Custom status transitions** based on external events\n- **Automatic assignment** using custom logic\n- **Integration with deployment** systems\n- **Time tracking** and reporting\n\n#",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatic assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-integration_patterns-143",
        "pattern": "slack integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: slack integration",
        "source_file": "integrations.md",
        "context": "verview)\n- [GitHub Integration](#github-integration)\n- [GitLab Integration](#gitlab-integration)\n- [Slack Integration](#slack-integration)\n- [Figma Integration](#figma-integration)\n- [Sentry Integration](#sentry-integ",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement slack integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-integration_patterns-144",
        "pattern": "github integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: github integration",
        "source_file": "integrations.md",
        "context": "development workflow.\n\n## 📋 Table of Contents\n\n- [Integration Overview](#integration-overview)\n- [GitHub Integration](#github-integration)\n- [GitLab Integration](#gitlab-integration)\n- [Slack Integration](#slack-inte",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement github integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-integration_patterns-145",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "integrations.md",
        "context": "egration)\n- [Figma Integration](#figma-integration)\n- [Sentry Integration](#sentry-integration)\n- [Zapier Automation](#zapier-automation)\n- [Zendesk Integration](#zendesk-integration)\n- [Custom Integrati",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-integration_patterns-146",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "integrations.md",
        "context": "permissions**: Read access to checks and metadata\n- **Write access**: Issues and pull requests\n- **Webhook setup**: Automatic for commit linking\n- **Security considerations**: Review connected repositories",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-integration_patterns-147",
        "pattern": "graphql",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: graphql",
        "source_file": "integrations.md",
        "context": "ates\n\n---\n\n## 🔌 Custom Integrations & API\n\n### Linear API Overview\nLinear provides a comprehensive GraphQL API for building custom integrations and automations.\n\n### API Capabilities\n- **Full CRUD operation",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement graphql in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.428Z",
        "last_verified": "2025-06-22T12:25:17.428Z"
    },
    {
        "id": "linear-troubleshooting-148",
        "pattern": "error monitoring with issue tracking, automatically creating linear issues from production errors and keeping error resolution",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: error monitoring with issue tracking, automatically creating Linear issues from production errors and keeping error resolution",
        "source_file": "integrations.md",
        "context": "s for major design changes\n\n---\n\n## 🔍 Sentry Integration\n\n### Overview\nSentry integration connects error monitoring with issue tracking, automatically creating Linear issues from production errors and keeping error resolution in sync.\n\n### Core Features\n- **Automatic issue creation**: Generate Linear issues from Sentry erro",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement error monitoring with issue tracking, automatically creating linear issues from production errors and keeping error resolution in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-troubleshooting-149",
        "pattern": "error resolution",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: error resolution",
        "source_file": "integrations.md",
        "context": "toring with issue tracking, automatically creating Linear issues from production errors and keeping error resolution in sync.\n\n### Core Features\n- **Automatic issue creation**: Generate Linear issues from Sentry erro",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement error resolution in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-troubleshooting-150",
        "pattern": "error-to-resolution",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: Error-to-Resolution",
        "source_file": "integrations.md",
        "context": "error resolution state\n- **Configure in**: Display properties for views\n\n### Sentry Workflow\n\n#### Error-to-Resolution Process\n1. **Error occurs** in production\n2. **Sentry captures** error details\n3. **Linear issue cr",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement error-to-resolution in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-troubleshooting-151",
        "pattern": "issues, enabling seamless customer request tracking and resolution",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: issues, enabling seamless customer request tracking and resolution",
        "source_file": "integrations.md",
        "context": "Zendesk Integration\n\n### Overview\nZendesk integration connects customer support tickets with Linear issues, enabling seamless customer request tracking and resolution.\n\n### Core Features\n- **Ticket-to-issue creation**: Convert support tickets to Linear issues\n- **Bi",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement issues, enabling seamless customer request tracking and resolution in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-api_usage-152",
        "pattern": "graphql introspection** for query",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: GraphQL introspection** for query",
        "source_file": "integrations.md",
        "context": "**Complexity-based limiting** for expensive queries\n- **Burst allowance** for temporary spikes\n- **GraphQL introspection** for query optimization\n\n## 💡 Integration Best Practices\n\n### Planning Integrations\n1. **Define clear objecti",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement graphql introspection** for query in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-api_usage-153",
        "pattern": "api keys periodicall",
        "category": "api_usage",
        "type": "api_usage",
        "description": "API usage: API keys periodicall",
        "source_file": "integrations.md",
        "context": "quired permissions\n2. **Regular audits**: Review connected applications\n3. **Key rotation**: Update API keys periodically\n4. **Data sensitivity**: Understand what data is shared\n5. **Compliance requirements**: Meet organ",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api keys periodicall in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-api_usage-154",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "integrations.md",
        "context": "tLab, Bitbucket\n- **CI/CD**: GitHub Actions, GitLab CI, Jenkins\n- **Code Quality**: SonarCloud, CodeClimate\n- **Package Management**: npm, PyPI integrations\n\n#### Communication Platforms\n- **Team Chat**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.429Z",
        "last_verified": "2025-06-22T12:25:17.429Z"
    },
    {
        "id": "linear-keyboard_shortcuts-155",
        "pattern": "cmd/ctrl + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + S",
        "source_file": "integrations.md",
        "context": "escription\neng-123/add-user-authentication\ndesign-456/update-login-flow\n```\n\n**Copy Branch Name** (`Cmd/Ctrl + Shift + .`):\n- Automatically move issue to \"In Progress\"\n- Auto-assign to current user (if enabled)\n-",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.430Z",
        "last_verified": "2025-06-22T12:25:17.430Z"
    },
    {
        "id": "linear-project_management-156",
        "pattern": "projects & cycles](projects-cycles.md)** - higher-level planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Higher-level planning",
        "source_file": "issues-management.md",
        "context": "near setup and usage\n- **[User Account](user-account.md)** - Personal settings and preferences\n- **[Projects & Cycles](projects-cycles.md)** - Higher-level planning and organization\n- **[Views & Navigation](views-navigation.md)** - Custom views and filtering\n- **[",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - higher-level planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.431Z",
        "last_verified": "2025-06-22T12:25:17.431Z"
    },
    {
        "id": "linear-project_management-157",
        "pattern": "completion percentage",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: completion percentage",
        "source_file": "issues-management.md",
        "context": "*: Avoid too many hierarchy levels\n\n### Managing Hierarchies\n\n#### Progress Tracking\n- Parent shows completion percentage automatically\n- Visual progress indicators\n- Automatic rollup from sub-issues\n- Status inheritance",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement completion percentage in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.431Z",
        "last_verified": "2025-06-22T12:25:17.431Z"
    },
    {
        "id": "linear-project_management-158",
        "pattern": "target date",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: target date",
        "source_file": "issues-management.md",
        "context": "derstanding improves\n- Include testing and review time\n\n### Due Dates and Deadlines\n- Set realistic target dates\n- Use for external dependencies\n- Consider team capacity\n- Track overdue items\n\n---\n\n## ✏️ Editing",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement target date in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.431Z",
        "last_verified": "2025-06-22T12:25:17.431Z"
    },
    {
        "id": "linear-issue_workflows-159",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "issues-management.md",
        "context": "nvestigation and discovery work\n\n### Issue Lifecycle\n1. **Creation**: Issue is created and added to backlog\n2. **Planning**: Prioritized and assigned to cycles/projects\n3. **Development**: Moved through work",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-160",
        "pattern": "todo",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: todo",
        "source_file": "issues-management.md",
        "context": "Team member responsible | Developer, designer, QA |\n| **Status** | Current state of work | Backlog, Todo, In Progress |\n| **Priority** | Urgency level | Urgent, High, Medium, Low |\n| **Labels** | Categori",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement todo in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-161",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "issues-management.md",
        "context": "ember responsible | Developer, designer, QA |\n| **Status** | Current state of work | Backlog, Todo, In Progress |\n| **Priority** | Urgency level | Urgent, High, Medium, Low |\n| **Labels** | Categories and tags |",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-162",
        "pattern": "in review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in review",
        "source_file": "issues-management.md",
        "context": "ed or planned\n2. **Todo**: Ready to start working\n3. **In Progress**: Actively being worked on\n4. **In Review**: Awaiting review or testing\n5. **Done**: Completed successfully\n6. **Canceled**: Won't be complet",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-163",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "issues-management.md",
        "context": "nt**: Moved through workflow states\n4. **Review**: Verified and tested\n5. **Completion**: Marked as done or canceled\n\n---\n\n## ➕ Creating Issues\n\n### Quick Creation Methods\n\n#### Primary Creation\n- **Keybo",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-164",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "issues-management.md",
        "context": "ved through workflow states\n4. **Review**: Verified and tested\n5. **Completion**: Marked as done or canceled\n\n---\n\n## ➕ Creating Issues\n\n### Quick Creation Methods\n\n#### Primary Creation\n- **Keyboard shortcut",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-165",
        "pattern": "code review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: code review",
        "source_file": "issues-management.md",
        "context": "?\n\n## Definition of Done\n- [ ] Task completed\n- [ ] Tests written\n- [ ] Documentation updated\n- [ ] Code reviewed\n```\n\n### Using Templates\n\n#### Access Methods\n- `Cmd/Ctrl + K` → \"New issue from template\"\n- Temp",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-166",
        "pattern": "qa testing",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: qa testing",
        "source_file": "issues-management.md",
        "context": "kflows\nTeams can customize states to match their process:\n- Add new states (e.g., \"Design Review\", \"QA Testing\")\n- Rename existing states\n- Set state categories (Unstarted, Started, Completed, Canceled)\n- Confi",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement qa testing in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-167",
        "pattern": "waiting for customer",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: waiting for customer",
        "source_file": "issues-management.md",
        "context": "In Progress → Design Review → Approved → Done\n\n**Support Workflow**:\nNew → Triaged → In Progress → Waiting for Customer → Resolved\n\n### Automation\n\n#### Git Integration\n- **Status transitions**: Auto-update on PR events",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement waiting for customer in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-168",
        "pattern": "resolved",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: resolved",
        "source_file": "issues-management.md",
        "context": "*Regular review**: Clean up outdated relations\n4. **Update on completion**: Mark blocking issues as resolved\n\n---\n\n## 🏷️ Labels & Organization\n\n### Label System Overview\n\n#### Label Types\n- **Workspace label",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement resolved in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-169",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "issues-management.md",
        "context": "**Status** | Current state of work | Backlog, Todo, In Progress |\n| **Priority** | Urgency level | Urgent, High, Medium, Low |\n| **Labels** | Categories and tags | bug, feature, frontend |\n| **Project** |",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-170",
        "pattern": "low priority",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: low priority",
        "source_file": "issues-management.md",
        "context": "ything, critical issues\n- **High (2)**: Next priority, important work\n- **Medium (3)**: Normal workflow priority\n- **Low (4)**: When time permits\n- **No priority**: Backlog items, not yet triaged\n\n#### Priority G",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement low priority in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-171",
        "pattern": "p0",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p0",
        "source_file": "issues-management.md",
        "context": "tion |\n| **Area** | frontend, backend, design, infrastructure | Technical domain |\n| **Priority** | P0, P1, P2, P3 | Alternative priority system |\n| **Status** | needs-review, blocked, waiting-for-feedb",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p0 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-172",
        "pattern": "p1",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p1",
        "source_file": "issues-management.md",
        "context": "|\n| **Area** | frontend, backend, design, infrastructure | Technical domain |\n| **Priority** | P0, P1, P2, P3 | Alternative priority system |\n| **Status** | needs-review, blocked, waiting-for-feedback",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p1 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-173",
        "pattern": "p2",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p2",
        "source_file": "issues-management.md",
        "context": "**Area** | frontend, backend, design, infrastructure | Technical domain |\n| **Priority** | P0, P1, P2, P3 | Alternative priority system |\n| **Status** | needs-review, blocked, waiting-for-feedback | Wo",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p2 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-174",
        "pattern": "p3",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p3",
        "source_file": "issues-management.md",
        "context": "rea** | frontend, backend, design, infrastructure | Technical domain |\n| **Priority** | P0, P1, P2, P3 | Alternative priority system |\n| **Status** | needs-review, blocked, waiting-for-feedback | Workfl",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p3 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-175",
        "pattern": "issue templates**: standardized issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue templates**: Standardized issue creation",
        "source_file": "issues-management.md",
        "context": "ue identifiers for team labels\n\n---\n\n## 📄 Templates\n\n### Template System\n\n#### Template Types\n1. **Issue templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document templates**: Consistent documen",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-176",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "issues-management.md",
        "context": "---\n\n## 📄 Templates\n\n### Template System\n\n#### Template Types\n1. **Issue templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document templates**: Consistent documen",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-177",
        "pattern": "issues on branch creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues on branch creation",
        "source_file": "issues-management.md",
        "context": "nch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Based Automation\n- **Auto-assign**: Set assignee based on labels or projects\n- **Status",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues on branch creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-178",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue Creation",
        "source_file": "issues-management.md",
        "context": "---\n\n## 📄 Templates\n\n### Template System\n\n#### Template Types\n1. **Issue templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document templates**: Consistent documen",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-issue_workflows-179",
        "pattern": "issue management is the foundation of productive software development",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue management is the foundation of productive software development",
        "source_file": "issues-management.md",
        "context": "ering\n- **[Integrations](integrations.md)** - Connect external tools and workflows\n\n---\n\n*Effective issue management is the foundation of productive software development. Master these concepts to maximize your team's efficiency in Linear.*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue management is the foundation of productive software development in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-team_collaboration-180",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "issues-management.md",
        "context": "hive**: Remove from active views\n- **Delete**: Permanently remove (admin only)\n- **Subscribe**: Get notifications for updates\n\n#### Contextual Menus\nRight-click any issue for quick access to:\n- Property updates\n-",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-team_collaboration-181",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "issues-management.md",
        "context": "ons](#issue-relations)\n- [Labels & Organization](#labels-organization)\n- [Templates](#templates)\n- [Comments & Collaboration](#comments-collaboration)\n- [Workflow Management](#workflow-management)\n\n---\n\n## 📝",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-team_collaboration-182",
        "pattern": "threads",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: threads",
        "source_file": "issues-management.md",
        "context": "ns\n- **Issue references**: `#issue-id` for linking\n- **Reactions**: Emoji responses to comments\n- **Threads**: Reply to specific comments\n- **Editing**: Modify your own comments\n- **Deletion**: Remove commen",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement threads in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-team_collaboration-183",
        "pattern": "reactions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: reactions",
        "source_file": "issues-management.md",
        "context": "s\n- **Mentions**: `@username` for notifications\n- **Issue references**: `#issue-id` for linking\n- **Reactions**: Emoji responses to comments\n- **Threads**: Reply to specific comments\n- **Editing**: Modify your",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement reactions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-team_collaboration-184",
        "pattern": "status updates",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: status updates",
        "source_file": "issues-management.md",
        "context": "holders**: Notify relevant team members\n4. **Document decisions**: Clearly summarize outcomes\n\n#### Status Updates\n- **Start work**: Comment when beginning tasks\n- **Progress updates**: Regular status communication",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement status updates in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.432Z",
        "last_verified": "2025-06-22T12:25:17.432Z"
    },
    {
        "id": "linear-planning_strategy-185",
        "pattern": "story points",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: story points",
        "source_file": "issues-management.md",
        "context": "nt work\n- **Low**: Nice-to-have improvements\n\n### Estimates and Sizing\n\n#### Estimation Methods\n- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci)\n- **T-shirt sizes**: XS, S, M, L, XL\n- **Time-based**: Hours or da",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement story points in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-186",
        "pattern": "fibonacci",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: fibonacci",
        "source_file": "issues-management.md",
        "context": "rovements\n\n### Estimates and Sizing\n\n#### Estimation Methods\n- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci)\n- **T-shirt sizes**: XS, S, M, L, XL\n- **Time-based**: Hours or days\n- **Custom scales**: Team-def",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement fibonacci in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-187",
        "pattern": "complexity",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: complexity",
        "source_file": "issues-management.md",
        "context": "Launch, Mobile App |\n| **Cycle** | Sprint assignment | Current cycle, Sprint 23 |\n| **Estimate** | Complexity points | 1, 2, 3, 5, 8 points |\n| **Due date** | Deadline | Specific date or milestone |\n\n### Creat",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement complexity in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-188",
        "pattern": "estimation",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: estimation",
        "source_file": "issues-management.md",
        "context": "m**: Standard development work\n- **Low**: Nice-to-have improvements\n\n### Estimates and Sizing\n\n#### Estimation Methods\n- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci)\n- **T-shirt sizes**: XS, S, M, L, XL\n- **",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement estimation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-189",
        "pattern": "sizing",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: sizing",
        "source_file": "issues-management.md",
        "context": "de acceptance criteria\n3. **Proper categorization**: Use appropriate labels and projects\n4. **Right sizing**: Break large tasks into smaller issues\n\n---\n\n## 🏷️ Issue Properties\n\n### Status Management\n\n####",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement sizing in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-190",
        "pattern": "t-shirt sizes",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: t-shirt sizes",
        "source_file": "issues-management.md",
        "context": "Estimates and Sizing\n\n#### Estimation Methods\n- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci)\n- **T-shirt sizes**: XS, S, M, L, XL\n- **Time-based**: Hours or days\n- **Custom scales**: Team-defined values\n\n#### E",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement t-shirt sizes in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-planning_strategy-191",
        "pattern": "time-based",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: time-based",
        "source_file": "issues-management.md",
        "context": "Methods\n- **Story points**: 1, 2, 3, 5, 8, 13 (Fibonacci)\n- **T-shirt sizes**: XS, S, M, L, XL\n- **Time-based**: Hours or days\n- **Custom scales**: Team-defined values\n\n#### Estimation Best Practices\n- Use con",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement time-based in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.433Z",
        "last_verified": "2025-06-22T12:25:17.433Z"
    },
    {
        "id": "linear-productivity_optimization-192",
        "pattern": "bug report template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: bug report template",
        "source_file": "issues-management.md",
        "context": "date\n- `{{team}}`: Current team\n- `{{project}}`: Active project\n\n### Common Template Examples\n\n#### Bug Report Template\n```markdown\n## Bug Description\nBrief description of the bug\n\n## Steps to Reproduce\n1. Step one\n2. S",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-193",
        "pattern": "feature request template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: feature request template",
        "source_file": "issues-management.md",
        "context": "## Environment\n- Browser:\n- OS:\n- Version:\n\n## Additional Context\nScreenshots, logs, etc.\n```\n\n#### Feature Request Template\n```markdown\n## Problem Statement\nWhat problem does this solve?\n\n## Proposed Solution\nHow should we",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-194",
        "pattern": "task template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: task template",
        "source_file": "issues-management.md",
        "context": "- Technical complexity:\n- Business value:\n\n## Additional Context\nLinks, mockups, research\n```\n\n#### Task Template\n```markdown\n## Objective\nWhat needs to be accomplished?\n\n## Requirements\n- [ ] Requirement 1\n- [ ]",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-195",
        "pattern": "issue template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: issue template",
        "source_file": "issues-management.md",
        "context": "ue identifiers for team labels\n\n---\n\n## 📄 Templates\n\n### Template System\n\n#### Template Types\n1. **Issue templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-196",
        "pattern": "project template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: project template",
        "source_file": "issues-management.md",
        "context": "### Template System\n\n#### Template Types\n1. **Issue templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document templates**: Consistent documentation\n\n#### Template",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-197",
        "pattern": "document template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: document template",
        "source_file": "issues-management.md",
        "context": "templates**: Standardized issue creation\n2. **Project templates**: Reusable project structures\n3. **Document templates**: Consistent documentation\n\n#### Template Benefits\n- **Consistency**: Ensure all necessary inform",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-198",
        "pattern": "bulk editing",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk editing",
        "source_file": "issues-management.md",
        "context": "ment |\n| `D` | Set due date | Add deadline |\n| `1-5` | Set priority | Quick priority setting |\n\n### Bulk Editing\n\n#### Selection Methods\n- **Range selection**: `Shift + Click` for range\n- **Individual selection**",
        "complexity": "high",
        "safety_level": "high_risk",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk editing in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-199",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "issues-management.md",
        "context": ": `Cmd/Ctrl + A` for all visible issues\n- **Keyboard selection**: `X` to select current issue\n\n#### Bulk Operations\n1. Select multiple issues using methods above\n2. Press `Cmd/Ctrl + Shift + E` for bulk edit\n3. Upda",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-200",
        "pattern": "auto-assignment",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: auto-assignment",
        "source_file": "issues-management.md",
        "context": "h creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Based Automation\n- **Auto-assign**: Set assignee bas",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement auto-assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-201",
        "pattern": "rule-based automation",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: rule-based automation",
        "source_file": "issues-management.md",
        "context": "linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Based Automation\n- **Auto-assign**: Set assignee based on labels or projects\n- **Status updates**: Change status bas",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Set up automated workflows",
            "Reduce manual task overhead"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-202",
        "pattern": "status transitions",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: status transitions",
        "source_file": "issues-management.md",
        "context": "→ Triaged → In Progress → Waiting for Customer → Resolved\n\n### Automation\n\n#### Git Integration\n- **Status transitions**: Auto-update on PR events\n- **Branch creation**: Generate branch names from issues\n- **Commit lin",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement status transitions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-productivity_optimization-203",
        "pattern": "label application",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: label application",
        "source_file": "issues-management.md",
        "context": "et assignee based on labels or projects\n- **Status updates**: Change status based on conditions\n- **Label application**: Auto-label based on title keywords\n- **Notifications**: Send alerts for specific events\n\n### Wor",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement label application in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-status_tracking-204",
        "pattern": "progress tracking",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: progress tracking",
        "source_file": "issues-management.md",
        "context": "ign sub-issues to different team members\n- **Consistent naming**: Use clear, descriptive titles\n- **Progress tracking**: Update parent when sub-issues complete\n- **Reasonable depth**: Avoid too many hierarchy levels",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement progress tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-status_tracking-205",
        "pattern": "completion percentage",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: completion percentage",
        "source_file": "issues-management.md",
        "context": "*: Avoid too many hierarchy levels\n\n### Managing Hierarchies\n\n#### Progress Tracking\n- Parent shows completion percentage automatically\n- Visual progress indicators\n- Automatic rollup from sub-issues\n- Status inheritance",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement completion percentage in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-status_tracking-206",
        "pattern": "visual indicators",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: visual indicators",
        "source_file": "issues-management.md",
        "context": "Blocks**: Current issue prevents other work\n- **Blocked by**: Other issues prevent current work\n- **Visual indicators**: Red/orange flags in UI\n- **Workflow impact**: Helps prioritize unblocking work\n\n#### Associative",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement visual indicators in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.434Z",
        "last_verified": "2025-06-22T12:25:17.434Z"
    },
    {
        "id": "linear-automation_workflows-207",
        "pattern": "git integration",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: git integration",
        "source_file": "issues-management.md",
        "context": "Issues mentioned in descriptions/comments become related\n- **Pull request linking**: Connected via Git integration\n- **Import relations**: Preserved during data imports\n\n### Managing Relations\n\n#### Removing Relati",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement git integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-208",
        "pattern": "pull request linking",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: pull request linking",
        "source_file": "issues-management.md",
        "context": "tic Relations\n- **Reference linking**: Issues mentioned in descriptions/comments become related\n- **Pull request linking**: Connected via Git integration\n- **Import relations**: Preserved during data imports\n\n### Managin",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement pull request linking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-209",
        "pattern": "branch creation",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: branch creation",
        "source_file": "issues-management.md",
        "context": "solved\n\n### Automation\n\n#### Git Integration\n- **Status transitions**: Auto-update on PR events\n- **Branch creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assig",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement branch creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-210",
        "pattern": "commit linking",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: commit linking",
        "source_file": "issues-management.md",
        "context": "ransitions**: Auto-update on PR events\n- **Branch creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Bas",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement commit linking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-211",
        "pattern": "auto-assignment",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: auto-assignment",
        "source_file": "issues-management.md",
        "context": "h creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Based Automation\n- **Auto-assign**: Set assignee bas",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement auto-assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-212",
        "pattern": "pr events",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: pr events",
        "source_file": "issues-management.md",
        "context": "Customer → Resolved\n\n### Automation\n\n#### Git Integration\n- **Status transitions**: Auto-update on PR events\n- **Branch creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to i",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement pr events in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-automation_workflows-213",
        "pattern": "auto-assignment",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Auto-assignment",
        "source_file": "issues-management.md",
        "context": "h creation**: Generate branch names from issues\n- **Commit linking**: Connect commits to issues\n- **Auto-assignment**: Assign issues on branch creation\n\n#### Rule-Based Automation\n- **Auto-assign**: Set assignee bas",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement auto-assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-integration_patterns-214",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "issues-management.md",
        "context": "ds-review, blocked, waiting-for-feedback | Workflow states |\n| **Platform** | web, mobile, desktop, API | Target platform |\n| **Effort** | quick-win, large-effort, research | Size indicators |\n\n### Creat",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.435Z",
        "last_verified": "2025-06-22T12:25:17.435Z"
    },
    {
        "id": "linear-best_practices-215",
        "pattern": "issue hygiene",
        "category": "best_practices",
        "type": "process_optimization",
        "description": "Process optimization: issue hygiene",
        "source_file": "issues-management.md",
        "context": "on't over-complicate workflows\n4. **Team alignment**: Ensure everyone understands the process\n\n#### Issue Hygiene\n- **Regular triage**: Review and organize backlog\n- **Status updates**: Keep issues current\n- **Cle",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement issue hygiene in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.436Z",
        "last_verified": "2025-06-22T12:25:17.436Z"
    },
    {
        "id": "linear-best_practices-216",
        "pattern": "team alignment",
        "category": "best_practices",
        "type": "process_optimization",
        "description": "Process optimization: team alignment",
        "source_file": "issues-management.md",
        "context": "nt meanings**: Define what each label represents\n4. **Regular cleanup**: Archive unused labels\n5. **Team alignment**: Ensure team understands label system\n\n#### Filtering and Views\n- **Multi-team filtering**: Team",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement team alignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.436Z",
        "last_verified": "2025-06-22T12:25:17.436Z"
    },
    {
        "id": "linear-best_practices-217",
        "pattern": "consistent processes",
        "category": "best_practices",
        "type": "process_optimization",
        "description": "Process optimization: consistent processes",
        "source_file": "issues-management.md",
        "context": "responses**: Address blockers quickly\n3. **Knowledge sharing**: Use comments for team learning\n4. **Consistent processes**: Follow established workflows\n\n## 🔗 Related Guides\n\n- **[Getting Started](getting-started.md)**",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement consistent processes in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.436Z",
        "last_verified": "2025-06-22T12:25:17.436Z"
    },
    {
        "id": "linear-best_practices-218",
        "pattern": "regular cleanup",
        "category": "best_practices",
        "type": "process_optimization",
        "description": "Process optimization: regular cleanup",
        "source_file": "issues-management.md",
        "context": "g**: Use clear, standardized names\n3. **Document meanings**: Define what each label represents\n4. **Regular cleanup**: Archive unused labels\n5. **Team alignment**: Ensure team understands label system\n\n#### Filterin",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement regular cleanup in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.436Z",
        "last_verified": "2025-06-22T12:25:17.436Z"
    },
    {
        "id": "linear-api_usage-219",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "issues-management.md",
        "context": "### Primary Creation\n- **Keyboard shortcut**: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.436Z",
        "last_verified": "2025-06-22T12:25:17.436Z"
    },
    {
        "id": "linear-keyboard_shortcuts-220",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "issues-management.md",
        "context": "**: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From templates**: `Cmd/Ctrl + K` → \"New issue from templa",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-221",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "issues-management.md",
        "context": "**: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From templates**: `Cmd/Ctrl + K` → \"New issue from templa",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-222",
        "pattern": "cmd/ctrl + i",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + I`",
        "source_file": "issues-management.md",
        "context": "on | Description |\n|----------|--------|-------------|\n| `E` | Edit title | Quick title editing |\n| `Cmd/Ctrl + I` | Open sidebar | Full property editing |\n| `S` | Change status | Workflow state transitions |\n| `A`",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + i in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-223",
        "pattern": "shift + click",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + Click`",
        "source_file": "issues-management.md",
        "context": "riority | Quick priority setting |\n\n### Bulk Editing\n\n#### Selection Methods\n- **Range selection**: `Shift + Click` for range\n- **Individual selection**: `Cmd/Ctrl + Click` for specific issues\n- **Select all**: `Cmd",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + click in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-224",
        "pattern": "cmd/ctrl + click",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Click`",
        "source_file": "issues-management.md",
        "context": "#### Selection Methods\n- **Range selection**: `Shift + Click` for range\n- **Individual selection**: `Cmd/Ctrl + Click` for specific issues\n- **Select all**: `Cmd/Ctrl + A` for all visible issues\n- **Keyboard selection*",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + click in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-225",
        "pattern": "cmd/ctrl + a",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + A`",
        "source_file": "issues-management.md",
        "context": "ick` for range\n- **Individual selection**: `Cmd/Ctrl + Click` for specific issues\n- **Select all**: `Cmd/Ctrl + A` for all visible issues\n- **Keyboard selection**: `X` to select current issue\n\n#### Bulk Operations",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + a in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-226",
        "pattern": "cmd/ctrl + shift + e",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + E`",
        "source_file": "issues-management.md",
        "context": "o select current issue\n\n#### Bulk Operations\n1. Select multiple issues using methods above\n2. Press `Cmd/Ctrl + Shift + E` for bulk edit\n3. Update common properties\n4. Apply changes to all selected issues\n\n#### Bulk Action",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + e in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-227",
        "pattern": "cmd/ctrl + shift + .",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + .`",
        "source_file": "issues-management.md",
        "context": "ing**: Drag issue onto another to make it a sub-issue\n3. **Keyboard shortcut**: Select issue, press `Cmd/Ctrl + Shift + .`\n4. **Bulk creation**: List tasks in description, convert to sub-issues\n\n#### Hierarchy Best Practic",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + . in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-228",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "issues-management.md",
        "context": "**: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From templates**: `Cmd/Ctrl + K` → \"New issue from templa",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-229",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "issues-management.md",
        "context": "**: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From templates**: `Cmd/Ctrl + K` → \"New issue from templa",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-230",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + K",
        "source_file": "issues-management.md",
        "context": "*: Press `C` from anywhere in Linear\n- **From toolbar**: Click the + button\n- **Command palette**: `Cmd/Ctrl + K` → \"New issue\"\n\n#### Advanced Creation\n- **From templates**: `Cmd/Ctrl + K` → \"New issue from templ",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-231",
        "pattern": "cmd/ctrl + e",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + E",
        "source_file": "issues-management.md",
        "context": "mmenting System\n\n#### Adding Comments\n- **Type in comment box**: Standard text input\n- **Submit**: `Cmd/Ctrl + Enter` to save\n- **Formatting**: Full Markdown support\n- **Attachments**: Drag & drop files and image",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + e in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-issue_workflows-232",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "my-issues.md",
        "context": "e**: In-progress issues not in above categories\n7. **Triage**: Items needing review (optional)\n8. **Backlog**: Unstarted issues\n9. **Done**: Completed work\n10. **Cancelled**: Closed without completion\n\n**Wit",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-issue_workflows-233",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "my-issues.md",
        "context": "ove categories\n7. **Triage**: Items needing review (optional)\n8. **Backlog**: Unstarted issues\n9. **Done**: Completed work\n10. **Cancelled**: Closed without completion\n\n**Within each group**: Issues are o",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-issue_workflows-234",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "my-issues.md",
        "context": "lt)\n\nMy Issues uses a unique \"Focus\" grouping that prioritizes issues in order of importance:\n\n1. **Urgent Issues**: Critical priority items\n2. **SLA Issues**: Items with service level agreements\n3. **Block",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-team_collaboration-235",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "my-issues.md",
        "context": "tomatic Subscriptions\n\nYou're automatically subscribed when:\n- Assigned to an issue\n- @mentioned in comments or descriptions\n- You create an issue\n\n### Managing Subscriptions\n\n#### Individual Issues\n1. Open t",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-team_collaboration-236",
        "pattern": "reactions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: reactions",
        "source_file": "my-issues.md",
        "context": "ivities\n- Issue created\n- Issue updated\n- State changes on assigned issues\n- New comments\n- Comment reactions\n- Pull request opened\n\n### Use Cases\n- Review overnight changes\n- Track team collaboration\n- Monito",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement reactions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-productivity_optimization-237",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "my-issues.md",
        "context": "iptions\n\n#### Individual Issues\n1. Open the issue\n2. Press `Shift + S` to toggle subscription\n\n#### Bulk Operations\n1. Select multiple issues\n2. Press `Shift + S` to subscribe/unsubscribe all\n\n#### View All Subscrip",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-integration_patterns-238",
        "pattern": "slack integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: slack integration",
        "source_file": "my-issues.md",
        "context": "ted Issues Tab\n\nView all issues you've created, including those from:\n- Direct creation in Linear\n- Slack integrations\n- Support tools (Front, Intercom, Zendesk)\n- Error tracking (Sentry)\n- Other integrations\n\n**Defau",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement slack integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-api_usage-239",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "my-issues.md",
        "context": "n Management\n- **Subscribe**: `Shift + S`\n- **Unsubscribe**: `Cmd/Ctrl + Shift + S`\n- **Via menu**: Click three dots in Activity section\n\n## Assigned Issues Tab\n\n### Focus Grouping (Default)\n\nMy Issues u",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.437Z",
        "last_verified": "2025-06-22T12:25:17.437Z"
    },
    {
        "id": "linear-keyboard_shortcuts-240",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "my-issues.md",
        "context": "M`\n- **Sidebar**: Located under Inbox in the top left\n\n### Subscription Management\n- **Subscribe**: `Shift + S`\n- **Unsubscribe**: `Cmd/Ctrl + Shift + S`\n- **Via menu**: Click three dots in Activity section\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-keyboard_shortcuts-241",
        "pattern": "cmd/ctrl + shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + S`",
        "source_file": "my-issues.md",
        "context": "Inbox in the top left\n\n### Subscription Management\n- **Subscribe**: `Shift + S`\n- **Unsubscribe**: `Cmd/Ctrl + Shift + S`\n- **Via menu**: Click three dots in Activity section\n\n## Assigned Issues Tab\n\n### Focus Grouping (D",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-keyboard_shortcuts-242",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "my-issues.md",
        "context": "M`\n- **Sidebar**: Located under Inbox in the top left\n\n### Subscription Management\n- **Subscribe**: `Shift + S`\n- **Unsubscribe**: `Cmd/Ctrl + Shift + S`\n- **Via menu**: Click three dots in Activity section\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-keyboard_shortcuts-243",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "my-issues.md",
        "context": "M`\n- **Sidebar**: Located under Inbox in the top left\n\n### Subscription Management\n- **Subscribe**: `Shift + S`\n- **Unsubscribe**: `Cmd/Ctrl + Shift + S`\n- **Via menu**: Click three dots in Activity section\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-issue_workflows-244",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "notifications.md",
        "context": "read the notification in your Linear inbox\n- Configurable options:\n  - **Immediate delivery**: For urgent issues or SLA breaches assigned to you\n  - **Work hours delivery**: Delay low-priority emails outsi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-issue_workflows-245",
        "pattern": "issue completion",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue completion",
        "source_file": "notifications.md",
        "context": "red\n\n### Status Change Notifications\nWhen \"Status changes\" is selected, you'll be notified about:\n- Issue completions\n- Issue cancellations\n- Other status transitions\n\nFor notifications about specific status entries,",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-team_collaboration-246",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "notifications.md",
        "context": "---\ntitle: \"Notifications\"\ndescription: \"Linear notifications keep you informed about important updates across your workspace",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-team_collaboration-247",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "notifications.md",
        "context": "tomatically subscribed to issues when you:\n- Create them\n- Are assigned to them\n- Are @mentioned in comments or descriptions\n- Manually subscribe via the Activity section\n\n### Managing Subscriptions\n\n- **Subs",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-productivity_optimization-248",
        "pattern": "status transitions",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: status transitions",
        "source_file": "notifications.md",
        "context": "s changes\" is selected, you'll be notified about:\n- Issue completions\n- Issue cancellations\n- Other status transitions\n\nFor notifications about specific status entries, consider using [view subscriptions](../views-navi",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement status transitions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-integration_patterns-249",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "notifications.md",
        "context": "only one instance at a time.\n\n### Browser-Specific Issues\n\n#### Safari\nSafari doesn't support Push API for desktop notifications. Consider using a different browser for desktop notifications.\n\n#### Chro",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-api_usage-250",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "notifications.md",
        "context": "cations\n- **Slack**: Real-time notifications to your personal Slack\n\n### Enabling Notifications\n\n1. Click on a notification method\n2. Toggle the switch to enable/disable\n3. Select specific notification t",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-keyboard_shortcuts-251",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "notifications.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n### Managing Subscriptions\n\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`\n- **View all subscriptions**: Go to **M",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-keyboard_shortcuts-252",
        "pattern": "cmd/ctrl + shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + S`",
        "source_file": "notifications.md",
        "context": "### Managing Subscriptions\n\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`\n- **View all subscriptions**: Go to **My Issues > Subscribed**\n\n## Troubleshooting\n\n### Multiple Ta",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.438Z",
        "last_verified": "2025-06-22T12:25:17.438Z"
    },
    {
        "id": "linear-project_management-253",
        "pattern": "projects & cycles management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles Management",
        "source_file": "projects-cycles.md",
        "context": "---\ntitle: \"Projects & Cycles Management\"\ndescription: \"- [Understanding Projects](#understanding-projects)\"\ncategory: \"project-management\"",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-254",
        "pattern": "project-management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project-management",
        "source_file": "projects-cycles.md",
        "context": "& Cycles Management\"\ndescription: \"- [Understanding Projects](#understanding-projects)\"\ncategory: \"project-management\"\ntype: \"guide\"\ntags: [\"doppler\", \"projects\", \"organization\"]\ndate: 2025-06-20\nauthor: \"Doppler Team",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project-management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-255",
        "pattern": "projects & cycles management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles Management",
        "source_file": "projects-cycles.md",
        "context": "---\ntitle: \"Projects & Cycles Management\"\ndescription: \"- [Understanding Projects](#understanding-projects)\"\ncategory: \"project-management\"",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-256",
        "pattern": "initiatives & strategic planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Initiatives & Strategic Planning",
        "source_file": "projects-cycles.md",
        "context": "ure & Organization](#project-structure-organization)\n- [Project Milestones](#project-milestones)\n- [Initiatives & Strategic Planning](#initiatives-strategic-planning)\n- [Project Updates & Communication](#project-updates-communicatio",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement initiatives & strategic planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-257",
        "pattern": "initiatives-strategic-planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: initiatives-strategic-planning",
        "source_file": "projects-cycles.md",
        "context": "ure-organization)\n- [Project Milestones](#project-milestones)\n- [Initiatives & Strategic Planning](#initiatives-strategic-planning)\n- [Project Updates & Communication](#project-updates-communication)\n- [Understanding Cycles](#unde",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement initiatives-strategic-planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-258",
        "pattern": "projects are units of work with clear outcomes and planned completion",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects are units of work with clear outcomes and planned completion",
        "source_file": "projects-cycles.md",
        "context": "Analytics](#progress-tracking-analytics)\n\n---\n\n## 🎯 Understanding Projects\n\n### What are Projects?\nProjects are units of work with clear outcomes and planned completion dates, such as new feature launches. They comprise issues and optional documents, can be shared acr",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects are units of work with clear outcomes and planned completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-259",
        "pattern": "project creation",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project creation",
        "source_file": "projects-cycles.md",
        "context": "*\n- **Command palette**: `Cmd/Ctrl + K` → \"New project\"\n- **From team level**: Access team-specific project creation\n- **From workspace**: Create workspace-wide projects\n\n#### Required Information\n- **Project name**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-260",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Project Management",
        "source_file": "projects-cycles.md",
        "context": "t | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### Project Management\n\n#### Accessing Project Settings\n- **Sidebar toggle**: `Cmd/Ctrl + I` in project view\n- **Right-cli",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-261",
        "pattern": "project properties management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Project Properties Management",
        "source_file": "projects-cycles.md",
        "context": "ck menu**: On project in lists or boards\n- **Overview page**: Click properties to edit inline\n\n#### Project Properties Management\n- **Update status**: Change between Not started, Started, Completed, Canceled\n- **Health tracking**",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project properties management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-262",
        "pattern": "projects include collaborative document creation",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects include collaborative document creation",
        "source_file": "projects-cycles.md",
        "context": "s\n- **Pin important info**: Highlight critical details\n\n### Project Documents\n\n#### Document System\nProjects include collaborative document creation and management:\n\n**Creating Documents**:\n1. From project overview, click **+ Add document**\n2. Ente",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects include collaborative document creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-263",
        "pattern": "project completion",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project completion",
        "source_file": "projects-cycles.md",
        "context": "tart\n- **Separate team tabs**: Organize issues by team\n- **Unified progress tracking**: See overall project completion\n- **Cross-team collaboration**: Shared context and communication\n\n#### Team-Specific Views\n- **Team",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-264",
        "pattern": "initiatives & strategic planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Initiatives & Strategic Planning",
        "source_file": "projects-cycles.md",
        "context": "ure & Organization](#project-structure-organization)\n- [Project Milestones](#project-milestones)\n- [Initiatives & Strategic Planning](#initiatives-strategic-planning)\n- [Project Updates & Communication](#project-updates-communicatio",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement initiatives & strategic planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-265",
        "pattern": "initiative management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Initiative Management",
        "source_file": "projects-cycles.md",
        "context": "app, API development |\n| **Metrics** | Success KPIs | User activation rate, mobile adoption |\n\n### Initiative Management\n\n#### Strategic Hierarchy\n```\nInitiative: Mobile Platform Strategy\n  ├── Project: iOS App Developme",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement initiative management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-266",
        "pattern": "project graph visualizes progress over time, showing completion",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project graph visualizes progress over time, showing completion",
        "source_file": "projects-cycles.md",
        "context": "\udcca Progress Tracking & Analytics\n\n### Project Progress Graphs\n\n#### Understanding Project Graphs\nThe project graph visualizes progress over time, showing completion trends and predicting finish dates based on current velocity.\n\n#### Graph Components\n- **X-axis**:",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project graph visualizes progress over time, showing completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-267",
        "pattern": "projected line**: estimated completion",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projected line**: Estimated completion",
        "source_file": "projects-cycles.md",
        "context": "story points)\n- **Ideal line**: Target progress rate\n- **Actual line**: Real progress achieved\n- **Projected line**: Estimated completion based on current trend\n\n#### Graph Markers\n- **Milestones**: Important deliverables and deadlines\n-",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projected line**: estimated completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-268",
        "pattern": "project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Project Management",
        "source_file": "projects-cycles.md",
        "context": "t | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### Project Management\n\n#### Accessing Project Settings\n- **Sidebar toggle**: `Cmd/Ctrl + I` in project view\n- **Right-cli",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-269",
        "pattern": "project and cycle management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project and cycle management",
        "source_file": "projects-cycles.md",
        "context": "ures\n- **[Getting Started](getting-started.md)** - Basic Linear concepts and setup\n\n---\n\n*Effective project and cycle management transforms how teams plan, execute, and deliver software. Master these concepts to build predictabl",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project and cycle management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-270",
        "pattern": "on track",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: on track",
        "source_file": "projects-cycles.md",
        "context": "| Current state | Not started, Started, Completed, Canceled |\n| **Health** | Progress assessment | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### Project Mana",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement on track in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-271",
        "pattern": "at risk",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: at risk",
        "source_file": "projects-cycles.md",
        "context": "state | Not started, Started, Completed, Canceled |\n| **Health** | Progress assessment | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### Project Management\n\n#",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement at risk in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-272",
        "pattern": "off track",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: off track",
        "source_file": "projects-cycles.md",
        "context": "Not started, Started, Completed, Canceled |\n| **Health** | Progress assessment | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### Project Management\n\n#### Accessi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement off track in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-273",
        "pattern": "health tracking",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: health tracking",
        "source_file": "projects-cycles.md",
        "context": "erties Management\n- **Update status**: Change between Not started, Started, Completed, Canceled\n- **Health tracking**: Monitor if project is on track, at risk, or off track\n- **Date adjustments**: Modify start and t",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement health tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-274",
        "pattern": "progress assessment",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: progress assessment",
        "source_file": "projects-cycles.md",
        "context": "rketing |\n| **Status** | Current state | Not started, Started, Completed, Canceled |\n| **Health** | Progress assessment | On track, At risk, Off track |\n| **Priority** | Strategic importance | High, Medium, Low |\n\n### P",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement progress assessment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-275",
        "pattern": "milestone tracking",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: milestone tracking",
        "source_file": "projects-cycles.md",
        "context": "m initiatives**: Multi-departmental efforts\n- **Time-boxed efforts**: Work with clear deadlines\n- **Milestone tracking**: Progress toward specific goals\n\n### Project Benefits\n- **Organized work**: Group related issues",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement milestone tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-276",
        "pattern": "completion percentage",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: completion percentage",
        "source_file": "projects-cycles.md",
        "context": "encies**: Other milestones or external factors\n\n### Managing Milestones\n\n#### Progress Tracking\n- **Completion percentage**: Automatic calculation from linked issues\n- **Issues remaining**: Count of outstanding work\n- **D",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement completion percentage in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-project_management-277",
        "pattern": "target date",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: target date",
        "source_file": "projects-cycles.md",
        "context": "blem statement, success criteria |\n| **Start date** | When work begins | Project kickoff date |\n| **Target date** | Expected completion | Launch date, milestone deadline |\n| **Teams** | Multi-team collaboration",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement target date in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.439Z",
        "last_verified": "2025-06-22T12:25:17.439Z"
    },
    {
        "id": "linear-issue_workflows-278",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "projects-cycles.md",
        "context": "---\n\n## 📝 Cycle Planning & Management\n\n### Pre-Cycle Planning\n\n#### Preparation Steps\n1. **Review backlog**: Assess available work items\n2. **Estimate capacity**: Consider team availability\n3. **Prioritize",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-279",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "projects-cycles.md",
        "context": "cycle transitions\n\n### Cycle States\n- **Upcoming**: Next planned cycle\n- **Active**: Current cycle in progress\n- **Completed**: Finished cycles\n- **Cooldown**: Break period between cycles\n\n---\n\n## 📝 Cycle Plan",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-280",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "projects-cycles.md",
        "context": "get date**: When milestone should be achieved\n- **Description**: Success criteria and definition of done\n- **Linked issues**: Work items required for completion\n- **Dependencies**: Other milestones or ext",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-281",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "projects-cycles.md",
        "context": "| Engineering, Design, Marketing |\n| **Status** | Current state | Not started, Started, Completed, Canceled |\n| **Health** | Progress assessment | On track, At risk, Off track |\n| **Priority** | Strategic im",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-282",
        "pattern": "feature development",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Feature development",
        "source_file": "projects-cycles.md",
        "context": "s/Work Items)\n            └── Sub-issues (Implementation Details)\n```\n\n### When to Use Projects\n- **Feature development**: New product capabilities\n- **Major releases**: Version launches or updates\n- **Cross-team initia",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement feature development in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-283",
        "pattern": "issues | planning",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues | Planning",
        "source_file": "projects-cycles.md",
        "context": "and batch update | Large reorganizations |\n| **Convert from bullets** | Transform document lists to issues | Planning sessions |\n\n#### Issue-Project Relationship\n- **One project per issue**: Issues can only belong to",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues | planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-issue_workflows-284",
        "pattern": "issues**: work items required for completion",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues**: Work items required for completion",
        "source_file": "projects-cycles.md",
        "context": "milestone should be achieved\n- **Description**: Success criteria and definition of done\n- **Linked issues**: Work items required for completion\n- **Dependencies**: Other milestones or external factors\n\n### Managing Milestones\n\n#### Progress Tr",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues**: work items required for completion in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.440Z",
        "last_verified": "2025-06-22T12:25:17.440Z"
    },
    {
        "id": "linear-team_collaboration-285",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "projects-cycles.md",
        "context": "vements\n- **Ad-hoc updates**: For major changes or risks\n\n#### Distribution and Visibility\n- **Auto-notifications**: Automatic alerts to stakeholders\n- **Slack/Teams integration**: Post updates to team channels\n-",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-team_collaboration-286",
        "pattern": "status updates",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: status updates",
        "source_file": "projects-cycles.md",
        "context": "ces and changes\n- **Track changes**: Monitor scope and timeline adjustments\n\n#### Update Types\n1. **Status updates**: Regular progress reports\n2. **Milestone updates**: Completion announcements\n3. **Change updates*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement status updates in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-team_collaboration-287",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team management",
        "source_file": "projects-cycles.md",
        "context": "on track, at risk, or off track\n- **Date adjustments**: Modify start and target dates as needed\n- **Team management**: Add or remove teams from project\n- **Visibility control**: Set as public or private\n\n### Adding",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-288",
        "pattern": "cycle planning",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: cycle planning",
        "source_file": "projects-cycles.md",
        "context": "& Communication](#project-updates-communication)\n- [Understanding Cycles](#understanding-cycles)\n- [Cycle Planning & Management](#cycle-planning-management)\n- [Progress Tracking & Analytics](#progress-tracking-anal",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement cycle planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-289",
        "pattern": "time-boxed",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: time-boxed",
        "source_file": "projects-cycles.md",
        "context": "eleases**: Version launches or updates\n- **Cross-team initiatives**: Multi-departmental efforts\n- **Time-boxed efforts**: Work with clear deadlines\n- **Milestone tracking**: Progress toward specific goals\n\n###",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement time-boxed in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-290",
        "pattern": "active cycle",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: active cycle",
        "source_file": "projects-cycles.md",
        "context": ": Consider difficulty and unknowns\n- **Buffer time**: Reserve 20% for unexpected work\n\n### Managing Active Cycles\n\n#### Daily Cycle Management\n- **Review progress**: Check issue status updates\n- **Update statuses",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement active cycle in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-291",
        "pattern": "cooldown period",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: cooldown period",
        "source_file": "projects-cycles.md",
        "context": "e.g., Cycle 12)\n- **Custom name**: Optional descriptive name\n- **Duration**: Time period length\n- **Cooldown period**: Buffer time between cycles\n- **Auto-scheduling**: Automatic cycle transitions\n\n### Cycle States",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement cooldown period in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-292",
        "pattern": "story points",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: story points",
        "source_file": "projects-cycles.md",
        "context": "ts\n- **X-axis**: Time progression (days/weeks)\n- **Y-axis**: Completion metric (issues completed or story points)\n- **Ideal line**: Target progress rate\n- **Actual line**: Real progress achieved\n- **Projected lin",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement story points in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-293",
        "pattern": "complexity",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: complexity",
        "source_file": "projects-cycles.md",
        "context": ": Account for time off, meetings\n- **Historical velocity**: Use past performance as guide\n- **Issue complexity**: Consider difficulty and unknowns\n- **Buffer time**: Reserve 20% for unexpected work\n\n### Managin",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement complexity in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-planning_strategy-294",
        "pattern": "estimation",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: estimation",
        "source_file": "projects-cycles.md",
        "context": "Consider team availability\n3. **Prioritize issues**: Order by business value and urgency\n4. **Size estimation**: Ensure work fits in cycle duration\n\n#### Planning Meeting Process\n- **Set cycle goals**: Define",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement estimation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.441Z",
        "last_verified": "2025-06-22T12:25:17.441Z"
    },
    {
        "id": "linear-status_tracking-295",
        "pattern": "progress tracking",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: progress tracking",
        "source_file": "projects-cycles.md",
        "context": "nding Cycles](#understanding-cycles)\n- [Cycle Planning & Management](#cycle-planning-management)\n- [Progress Tracking & Analytics](#progress-tracking-analytics)\n\n---\n\n## 🎯 Understanding Projects\n\n### What are Project",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement progress tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.442Z",
        "last_verified": "2025-06-22T12:25:17.442Z"
    },
    {
        "id": "linear-status_tracking-296",
        "pattern": "completion percentage",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: completion percentage",
        "source_file": "projects-cycles.md",
        "context": "encies**: Other milestones or external factors\n\n### Managing Milestones\n\n#### Progress Tracking\n- **Completion percentage**: Automatic calculation from linked issues\n- **Issues remaining**: Count of outstanding work\n- **D",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement completion percentage in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.442Z",
        "last_verified": "2025-06-22T12:25:17.442Z"
    },
    {
        "id": "linear-status_tracking-297",
        "pattern": "progress graphs",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: progress graphs",
        "source_file": "projects-cycles.md",
        "context": "ues and optional documents, can be shared across multiple teams, and come with unique features like progress graphs and notification options.\n\n### Project vs. Issue Hierarchy\n```\nInitiative (Strategic Goal)\n  └── Pr",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement progress graphs in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.442Z",
        "last_verified": "2025-06-22T12:25:17.442Z"
    },
    {
        "id": "linear-status_tracking-298",
        "pattern": "milestone tracking",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: milestone tracking",
        "source_file": "projects-cycles.md",
        "context": "m initiatives**: Multi-departmental efforts\n- **Time-boxed efforts**: Work with clear deadlines\n- **Milestone tracking**: Progress toward specific goals\n\n### Project Benefits\n- **Organized work**: Group related issues",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement milestone tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.442Z",
        "last_verified": "2025-06-22T12:25:17.442Z"
    },
    {
        "id": "linear-status_tracking-299",
        "pattern": "analytics](#progress-tracking",
        "category": "status_tracking",
        "type": "analytics_tracking",
        "description": "Analytics tracking: Analytics](#progress-tracking",
        "source_file": "projects-cycles.md",
        "context": "standing-cycles)\n- [Cycle Planning & Management](#cycle-planning-management)\n- [Progress Tracking & Analytics](#progress-tracking-analytics)\n\n---\n\n## 🎯 Understanding Projects\n\n### What are Projects?\nProjects are units of work wi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement analytics](#progress-tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.442Z",
        "last_verified": "2025-06-22T12:25:17.442Z"
    },
    {
        "id": "linear-automation_workflows-300",
        "pattern": "auto-notification",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Auto-notification",
        "source_file": "projects-cycles.md",
        "context": "achievements\n- **Ad-hoc updates**: For major changes or risks\n\n#### Distribution and Visibility\n- **Auto-notifications**: Automatic alerts to stakeholders\n- **Slack/Teams integration**: Post updates to team channels\n-",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement auto-notification in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.443Z",
        "last_verified": "2025-06-22T12:25:17.443Z"
    },
    {
        "id": "linear-integration_patterns-301",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "projects-cycles.md",
        "context": ", user stories, acceptance criteria |\n| **Technical Spec** | Implementation details | Architecture, APIs, database design |\n| **Design Doc** | UI/UX specifications | Wireframes, mockups, user flows |\n| *",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.443Z",
        "last_verified": "2025-06-22T12:25:17.443Z"
    },
    {
        "id": "linear-troubleshooting-302",
        "pattern": "issue workaround",
        "category": "troubleshooting",
        "type": "troubleshooting_guide",
        "description": "Troubleshooting guide: issue workaround",
        "source_file": "projects-cycles.md",
        "context": "t Relationship\n- **One project per issue**: Issues can only belong to one project at a time\n- **Sub-issue workaround**: Create sub-issues for different projects\n- **Project inheritance**: Sub-issues can inherit paren",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement issue workaround in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.444Z",
        "last_verified": "2025-06-22T12:25:17.444Z"
    },
    {
        "id": "linear-api_usage-303",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "projects-cycles.md",
        "context": "Creating & Managing Projects\n\n### Creating Projects\n\n#### Quick Creation\n- **From projects view**: Click **+ New Project**\n- **Command palette**: `Cmd/Ctrl + K` → \"New project\"\n- **From team level**: Ac",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.444Z",
        "last_verified": "2025-06-22T12:25:17.444Z"
    },
    {
        "id": "linear-keyboard_shortcuts-304",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + K",
        "source_file": "projects-cycles.md",
        "context": "ects\n\n#### Quick Creation\n- **From projects view**: Click **+ New Project**\n- **Command palette**: `Cmd/Ctrl + K` → \"New project\"\n- **From team level**: Access team-specific project creation\n- **From workspace**:",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.444Z",
        "last_verified": "2025-06-22T12:25:17.444Z"
    },
    {
        "id": "linear-keyboard_shortcuts-305",
        "pattern": "cmd/ctrl + i",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + I",
        "source_file": "projects-cycles.md",
        "context": "High, Medium, Low |\n\n### Project Management\n\n#### Accessing Project Settings\n- **Sidebar toggle**: `Cmd/Ctrl + I` in project view\n- **Right-click menu**: On project in lists or boards\n- **Overview page**: Click p",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + i in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.444Z",
        "last_verified": "2025-06-22T12:25:17.444Z"
    },
    {
        "id": "linear-keyboard_shortcuts-306",
        "pattern": "shift + p",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Shift + P",
        "source_file": "projects-cycles.md",
        "context": "new** | Press `C` from project view | New work items |\n| **Move existing** | Select issues, press `Shift + P` | Reorganizing work |\n| **Bulk assignment** | Multi-select and batch update | Large reorganization",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + p in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.444Z",
        "last_verified": "2025-06-22T12:25:17.444Z"
    },
    {
        "id": "linear-issue_workflows-307",
        "pattern": "code review",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: code review",
        "source_file": "pull-request-reviews.md",
        "context": "description: \"The Pull Request Reviews feature integrates GitHub PRs into Linear, streamlining your code review workflow. Access a dedicated Reviews section in your sidebar to:\"\ncategory: \"general\"\ntype: \"guide\"",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-issue_workflows-308",
        "pattern": "feature integrates github prs into linear, streamlining your code review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: feature integrates GitHub PRs into Linear, streamlining your code review",
        "source_file": "pull-request-reviews.md",
        "context": "---\ntitle: \"Pull Request Reviews\"\ndescription: \"The Pull Request Reviews feature integrates GitHub PRs into Linear, streamlining your code review workflow. Access a dedicated Reviews section in your sidebar to:\"\ncategory: \"general\"\ntype: \"guide\"",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement feature integrates github prs into linear, streamlining your code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-issue_workflows-309",
        "pattern": "feature integrates github prs into linear, streamlining your code review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: feature integrates GitHub PRs into Linear, streamlining your code review",
        "source_file": "pull-request-reviews.md",
        "context": "---\ntitle: \"Pull Request Reviews\"\ndescription: \"The Pull Request Reviews feature integrates GitHub PRs into Linear, streamlining your code review workflow. Access a dedicated Reviews section in your sidebar to:\"\ncategory: \"general\"\ntype: \"guide\"",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement feature integrates github prs into linear, streamlining your code review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-team_collaboration-310",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "pull-request-reviews.md",
        "context": "awaiting your review\n- See PRs you've authored\n- Comment on PR discussions\n- Receive review request notifications\n\n**Note**: Code review and approval actions still require opening PRs in GitHub.\n\n## Setup\n\n### Ena",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-team_collaboration-311",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "pull-request-reviews.md",
        "context": "## Available Information\n- **Read-only in Linear**: PR metadata, checks, reviews\n- **Interactive**: Comments and reactions\n- **Requires GitHub**: Code review, approval, inline comments\n\n## Commenting on PRs",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-team_collaboration-312",
        "pattern": "threads",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: threads",
        "source_file": "pull-request-reviews.md",
        "context": "iew, approval, inline comments\n\n## Commenting on PRs\n\n### Comment Features\n- View all PR discussion threads\n- Add new comments\n- Reply to existing comments\n- React with emojis\n- See suggested changes from co",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement threads in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-team_collaboration-313",
        "pattern": "reactions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: reactions",
        "source_file": "pull-request-reviews.md",
        "context": "Information\n- **Read-only in Linear**: PR metadata, checks, reviews\n- **Interactive**: Comments and reactions\n- **Requires GitHub**: Code review, approval, inline comments\n\n## Commenting on PRs\n\n### Comment Fe",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement reactions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-integration_patterns-314",
        "pattern": "github integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: github integration",
        "source_file": "pull-request-reviews.md",
        "context": "r PRs by repository?**\nA: Yes, use the grouping options in display settings.\n\n## Related Topics\n\n- [GitHub Integration](../integrations/github.md)\n- [Inbox](inbox.md)\n- [Notifications](notifications.md)\n- [My Issues](m",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement github integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-integration_patterns-315",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "pull-request-reviews.md",
        "context": "incorrect:\n1. Make a minor edit to PR description in GitHub (add/remove a space)\n2. This triggers a webhook update\n3. If issue persists, contact support@linear.app with PR IDs\n\n### Missing PRs\n\nEnsure:\n- Git",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.445Z",
        "last_verified": "2025-06-22T12:25:17.445Z"
    },
    {
        "id": "linear-keyboard_shortcuts-316",
        "pattern": "cmd/ctrl + o",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + O`",
        "source_file": "pull-request-reviews.md",
        "context": "Action | Shortcut |\n|--------|----------|\n| Navigate to Reviews | `G` → `R` |\n| Open PR in GitHub | `Cmd/Ctrl + O` |\n| Comment | `C` |\n| Navigate PRs | `J`/`K` |\n\n## Troubleshooting\n\n### PR State Not Updating\n\nIf P",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + o in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.446Z",
        "last_verified": "2025-06-22T12:25:17.446Z"
    },
    {
        "id": "linear-team_collaboration-317",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "pulse.md",
        "context": "- Recent activity\n\n### Recent\nDisplays all updates in chronological order (newest first).\n\n## Inbox Notifications\n\n### Delivery Schedule\n- Summaries arrive by 7:00 AM in your local timezone\n- Choose between daily",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.446Z",
        "last_verified": "2025-06-22T12:25:17.446Z"
    },
    {
        "id": "linear-team_collaboration-318",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "pulse.md",
        "context": "d based on your activity\n\n### Popular\nPrioritizes updates with high engagement:\n- Emoji reactions\n- Comments\n- Recent activity\n\n### Recent\nDisplays all updates in chronological order (newest first).\n\n## Inbox",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.446Z",
        "last_verified": "2025-06-22T12:25:17.446Z"
    },
    {
        "id": "linear-team_collaboration-319",
        "pattern": "reactions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: reactions",
        "source_file": "pulse.md",
        "context": "- Recommended based on your activity\n\n### Popular\nPrioritizes updates with high engagement:\n- Emoji reactions\n- Comments\n- Recent activity\n\n### Recent\nDisplays all updates in chronological order (newest first)",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement reactions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.446Z",
        "last_verified": "2025-06-22T12:25:17.446Z"
    },
    {
        "id": "linear-api_usage-320",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "pulse.md",
        "context": "Individual users can override the default schedule with personal preferences.\n\n### Access Pulse\n\n- Click \"Pulse\" in the sidebar\n- Customize sidebar display by right-clicking:\n  - **Always show**: Pulse",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.446Z",
        "last_verified": "2025-06-22T12:25:17.446Z"
    },
    {
        "id": "linear-integration_patterns-321",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "security-and-access.md",
        "context": "ides centralized control over:\n- Connected devices and sessions\n- Passkey authentication\n- Personal API keys\n- OAuth application permissions\n\n## Sessions Management\n\n### View Active Sessions\n\nMonitor all",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.447Z",
        "last_verified": "2025-06-22T12:25:17.447Z"
    },
    {
        "id": "linear-integration_patterns-322",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "security-and-access.md",
        "context": "ics\n\n- [Profile](profile.md)\n- [Login Methods](../workspace-management/login-methods.md)\n- [API and Webhooks](../workspace-management/api-and-webhooks.md)\n- [Third-party Application Approvals](../workspace-m",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.447Z",
        "last_verified": "2025-06-22T12:25:17.447Z"
    },
    {
        "id": "linear-api_usage-323",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "security-and-access.md",
        "context": "raphic location of access\n- **Last seen**: Most recent activity timestamp\n- **Additional details**: Click any entry to view IP address and original sign-in date\n\n### Revoke Access\n\nTwo options for managi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.447Z",
        "last_verified": "2025-06-22T12:25:17.447Z"
    },
    {
        "id": "linear-issue_workflows-324",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "user-account.md",
        "context": "e**: In-progress issues not in above categories\n7. **Triage**: Items needing review (optional)\n8. **Backlog**: Unstarted issues\n9. **Done**: Completed work\n10. **Cancelled**: Closed without completion\n\n**Wit",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-325",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "user-account.md",
        "context": "t Branch Copy Actions** (when copying branch names with `Cmd/Ctrl + Shift + .`):\n1. **Move issue to In Progress**: Automatically transitions to first \"Started\" status\n2. **Auto-assign to yourself**: Claims owner",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-326",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "user-account.md",
        "context": "ove categories\n7. **Triage**: Items needing review (optional)\n8. **Backlog**: Unstarted issues\n9. **Done**: Completed work\n10. **Cancelled**: Closed without completion\n\n**Within each group**: Issues are o",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-327",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "user-account.md",
        "context": "y hides notifications from Inbox and Triage\n- Reappears as unread at specified time\n- Automatically canceled if new activity occurs\n\n#### Setting Snooze Times\n- Press `H` on any notification\n- Right-click and",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-328",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "user-account.md",
        "context": "- Only sent if you haven't read the notification in your Linear inbox\n- **Immediate delivery**: For urgent issues or SLA breaches assigned to you\n- **Work hours delivery**: Delay low-priority emails outside",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-329",
        "pattern": "issue creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue creation",
        "source_file": "user-account.md",
        "context": "lly assigns any issue you create to yourself.\n\n**Use cases**:\n- Creating personal task lists\n- Bulk issue creation for projects\n- Temporary enablement during sprints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter`",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-330",
        "pattern": "issues for bulk creation",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues for bulk creation",
        "source_file": "user-account.md",
        "context": "Temporary enablement during sprints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter` when creating issues for bulk creation.\n\n#### Git Integration Settings\n\n**Git Attachment Format**:\n- Title only\n- Title and repository\n\n**",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues for bulk creation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-issue_workflows-331",
        "pattern": "issues**: review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issues**: Review",
        "source_file": "user-account.md",
        "context": "tlenecks\n- Celebrate achievements\n\n---\n\n## 💡 Best Practices\n\n### Daily Workflow\n1. **Start with My Issues**: Review assigned items in Focus order\n2. **Check Inbox**: Process notifications and updates\n3. **Manage sub",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues**: review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-team_collaboration-332",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "user-account.md",
        "context": "Contents\n\n- [Profile Settings](#profile-settings)\n- [Account Preferences](#account-preferences)\n- [Notifications](#notifications)\n- [Inbox Management](#inbox-management)\n- [My Issues](#my-issues)\n- [Security & Ac",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-team_collaboration-333",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "user-account.md",
        "context": "tomatically subscribed to issues when you:\n- Create them\n- Are assigned to them\n- Are @mentioned in comments or descriptions\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subs",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-team_collaboration-334",
        "pattern": "reactions",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: reactions",
        "source_file": "user-account.md",
        "context": "## Tracked Activities\n- Issue created/updated\n- State changes on assigned issues\n- New comments and reactions\n- Pull request opened\n\n#### Use Cases\n- Review overnight changes\n- Track team collaboration\n- Monit",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement reactions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-team_collaboration-335",
        "pattern": "teams, members, and permissions",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Teams, members, and permissions",
        "source_file": "user-account.md",
        "context": "tarted.md)** - Initial setup and onboarding\n- **[Workspace Management](workspace-management.md)** - Teams, members, and permissions\n- **[Issues Management](issues-management.md)** - Creating and managing work items\n- **[Views & Nav",
        "complexity": "moderate",
        "safety_level": "high_risk",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement teams, members, and permissions in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.448Z",
        "last_verified": "2025-06-22T12:25:17.448Z"
    },
    {
        "id": "linear-productivity_optimization-336",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "user-account.md",
        "context": "scriptions\n\n**Individual Issues**:\n1. Open the issue\n2. Press `Shift + S` to toggle subscription\n\n**Bulk Operations**:\n1. Select multiple issues\n2. Press `Shift + S` to subscribe/unsubscribe all  \n\n### Activity Tab",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.449Z",
        "last_verified": "2025-06-22T12:25:17.449Z"
    },
    {
        "id": "linear-automation_workflows-337",
        "pattern": "git integration",
        "category": "automation_workflows",
        "type": "git_automation",
        "description": "Git automation: git integration",
        "source_file": "user-account.md",
        "context": "ints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter` when creating issues for bulk creation.\n\n#### Git Integration Settings\n\n**Git Attachment Format**:\n- Title only\n- Title and repository\n\n**Git Branch Copy Actions",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement git integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.449Z",
        "last_verified": "2025-06-22T12:25:17.449Z"
    },
    {
        "id": "linear-automation_workflows-338",
        "pattern": "automatically transitions to first \"started\" status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: Automatically transitions to first \"Started\" status",
        "source_file": "user-account.md",
        "context": "ctions** (when copying branch names with `Cmd/Ctrl + Shift + .`):\n1. **Move issue to In Progress**: Automatically transitions to first \"Started\" status\n2. **Auto-assign to yourself**: Claims ownership when starting work\n\n**Recommendation**: Enable bot",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement automatically transitions to first \"started\" status in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.449Z",
        "last_verified": "2025-06-22T12:25:17.449Z"
    },
    {
        "id": "linear-integration_patterns-339",
        "pattern": "slack integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: slack integration",
        "source_file": "user-account.md",
        "context": "ated Issues Tab\nView all issues you've created, including those from:\n- Direct creation in Linear\n- Slack integrations\n- Support tools (Front, Intercom, Zendesk)\n- Error tracking (Sentry)\n- Other integrations\n\n**Defau",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement slack integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.450Z",
        "last_verified": "2025-06-22T12:25:17.450Z"
    },
    {
        "id": "linear-integration_patterns-340",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "user-account.md",
        "context": "n. Use only one instance at a time.\n\n#### Browser-Specific Issues\n\n**Safari**: Doesn't support Push API for desktop notifications. Consider using a different browser.\n\n**Chrome**: If notifications aren't",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.450Z",
        "last_verified": "2025-06-22T12:25:17.450Z"
    },
    {
        "id": "linear-api_usage-341",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "user-account.md",
        "context": "f your account\n- **To update**: \n  1. Hover over the avatar until the edit pencil icon appears\n  2. Click the pencil icon\n  3. Select a new photo from the pop-up folder\n- **Note**: Once updated, you cann",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.450Z",
        "last_verified": "2025-06-22T12:25:17.450Z"
    },
    {
        "id": "linear-keyboard_shortcuts-342",
        "pattern": "cmd/ctrl + shift + enter",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + Enter`",
        "source_file": "user-account.md",
        "context": "ists\n- Bulk issue creation for projects\n- Temporary enablement during sprints\n\n**Alternative**: Use `Cmd/Ctrl + Shift + Enter` when creating issues for bulk creation.\n\n#### Git Integration Settings\n\n**Git Attachment Format**:",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + enter in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-343",
        "pattern": "cmd/ctrl + shift + .",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + .`",
        "source_file": "user-account.md",
        "context": "*:\n- Title only\n- Title and repository\n\n**Git Branch Copy Actions** (when copying branch names with `Cmd/Ctrl + Shift + .`):\n1. **Move issue to In Progress**: Automatically transitions to first \"Started\" status\n2. **Auto-a",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + . in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-344",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "user-account.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to *",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-345",
        "pattern": "cmd/ctrl + shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + S`",
        "source_file": "user-account.md",
        "context": "#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to **My Issues > Subscribed**\n\n### Troubleshooting\n\n#### Multipl",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-346",
        "pattern": "shift + backspace",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + Backspace`",
        "source_file": "user-account.md",
        "context": "--|-------------|\n| Delete notification | `Backspace` | Remove single notification |\n| Delete all | `Shift + Backspace` | Clear entire inbox |\n| Delete all read | `Cmd/Ctrl + D` | Remove only read notifications |\n| Mark",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + backspace in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-347",
        "pattern": "cmd/ctrl + d",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + D`",
        "source_file": "user-account.md",
        "context": "single notification |\n| Delete all | `Shift + Backspace` | Clear entire inbox |\n| Delete all read | `Cmd/Ctrl + D` | Remove only read notifications |\n| Mark as read/unread | `U` | Toggle single notification |\n| Mar",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + d in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-348",
        "pattern": "option/alt + u",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Option/Alt + U`",
        "source_file": "user-account.md",
        "context": "ifications |\n| Mark as read/unread | `U` | Toggle single notification |\n| Mark all as read/unread | `Option/Alt + U` | Toggle all notifications |\n| Snooze | `H` | Temporarily hide notification |\n| Unsubscribe | `Shif",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement option/alt + u in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-349",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "user-account.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to *",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-350",
        "pattern": "cmd/ctrl + f",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + F`",
        "source_file": "user-account.md",
        "context": "ns\n- Issue property updates\n- Quick actions menu\n\n### Search and Filter\n\n#### Quick Search\n1. Press `Cmd/Ctrl + F`\n2. Filter by: Issue title, Issue ID, Notification type, Assignee\n3. Press `Esc` to clear search\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + f in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-351",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "user-account.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to *",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-352",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "user-account.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to *",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-353",
        "pattern": "shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + S`",
        "source_file": "user-account.md",
        "context": "s\n- Manually subscribe via the Activity section\n\n#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to *",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-keyboard_shortcuts-354",
        "pattern": "cmd/ctrl + shift + s",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + Shift + S`",
        "source_file": "user-account.md",
        "context": "#### Managing Subscriptions\n- **Subscribe**: Press `Shift + S` on an issue\n- **Unsubscribe**: Press `Cmd/Ctrl + Shift + S`  \n- **View all subscriptions**: Go to **My Issues > Subscribed**\n\n### Troubleshooting\n\n#### Multipl",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + shift + s in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.451Z",
        "last_verified": "2025-06-22T12:25:17.451Z"
    },
    {
        "id": "linear-project_management-355",
        "pattern": "project planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project planning",
        "source_file": "views-navigation.md",
        "context": "*: New issues needing review\n- **Archive**: Completed and canceled work\n- **Timeline**: Gantt-style project planning\n- **Cycles**: Sprint-based planning\n- **Projects**: Feature and initiative tracking\n\n#### Custom Vi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-project_management-356",
        "pattern": "projects**: feature and initiative tracking",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects**: Feature and initiative tracking",
        "source_file": "views-navigation.md",
        "context": "canceled work\n- **Timeline**: Gantt-style project planning\n- **Cycles**: Sprint-based planning\n- **Projects**: Feature and initiative tracking\n\n#### Custom Views\nUser-created views with:\n- **Specific filters**: Show exactly what you need\n- **",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects**: feature and initiative tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-project_management-357",
        "pattern": "project planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project planning",
        "source_file": "views-navigation.md",
        "context": "*: New issues needing review\n- **Archive**: Completed and canceled work\n- **Timeline**: Gantt-style project planning\n- **Cycles**: Sprint-based planning\n- **Projects**: Feature and initiative tracking\n\n#### Custom Vi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-project_management-358",
        "pattern": "project** | project timeline view | project management",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: project** | Project timeline view | Project management",
        "source_file": "views-navigation.md",
        "context": "---|---------|----------|\n| **By assignee** | Individual workload view | Resource planning |\n| **By project** | Project timeline view | Project management |\n| **By team** | Team coordination | Cross-team planning |\n| **By priority** | Urgency-based view",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement project** | project timeline view | project management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-project_management-359",
        "pattern": "projects & cycles](projects-cycles.md)** - higher-level planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Higher-level planning",
        "source_file": "views-navigation.md",
        "context": "d organizing work items\n- **[User Account](user-account.md)** - Personal productivity settings\n- **[Projects & Cycles](projects-cycles.md)** - Higher-level planning and organization\n- **[Workspace Management](workspace-management.md)** - Team and workspace setup\n-",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - higher-level planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-project_management-360",
        "pattern": "milestone tracking",
        "category": "project_management",
        "type": "project_health",
        "description": "Project health indicator: milestone tracking",
        "source_file": "views-navigation.md",
        "context": "time\n- **Dependencies**: Visual connection lines\n- **Resource allocation**: Team capacity view\n- **Milestone tracking**: Important deadlines\n\n### Grouping and Sorting\n\n#### Grouping Options\n- **Status**: Workflow prog",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement milestone tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.452Z",
        "last_verified": "2025-06-22T12:25:17.452Z"
    },
    {
        "id": "linear-issue_workflows-361",
        "pattern": "backlog",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: backlog",
        "source_file": "views-navigation.md",
        "context": "ue list\n- **Active Issues**: Unstarted and started work\n- **Board**: Column-based visual layout\n- **Backlog**: Unprioritized work items\n- **My Issues**: Personal work assignments\n\n#### Specialized Views\n- **",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement backlog in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-362",
        "pattern": "todo",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: todo",
        "source_file": "views-navigation.md",
        "context": "progression.\n\n### Board Types\n\n#### Status Board (Default)\n- **Columns**: Workflow states (Backlog, Todo, In Progress, Done)\n- **Purpose**: Track issue progression through development\n- **Use case**: Dail",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement todo in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-363",
        "pattern": "in progress",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: in progress",
        "source_file": "views-navigation.md",
        "context": "ssion.\n\n### Board Types\n\n#### Status Board (Default)\n- **Columns**: Workflow states (Backlog, Todo, In Progress, Done)\n- **Purpose**: Track issue progression through development\n- **Use case**: Daily standups, w",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement in progress in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-364",
        "pattern": "done",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: done",
        "source_file": "views-navigation.md",
        "context": "oard Types\n\n#### Status Board (Default)\n- **Columns**: Workflow states (Backlog, Todo, In Progress, Done)\n- **Purpose**: Track issue progression through development\n- **Use case**: Daily standups, workflo",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement done in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-365",
        "pattern": "canceled",
        "category": "issue_workflows",
        "type": "workflow_state",
        "description": "Issue workflow state: canceled",
        "source_file": "views-navigation.md",
        "context": "nments\n\n#### Specialized Views\n- **Triage**: New issues needing review\n- **Archive**: Completed and canceled work\n- **Timeline**: Gantt-style project planning\n- **Cycles**: Sprint-based planning\n- **Projects*",
        "complexity": "high",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement canceled in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-366",
        "pattern": "urgent",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: urgent",
        "source_file": "views-navigation.md",
        "context": "**: Resource planning, identifying bottlenecks\n\n#### Priority Board\n- **Columns**: Priority levels (Urgent, High, Medium, Low)\n- **Purpose**: Focus on most important work\n- **Use case**: Sprint planning, es",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement urgent in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-367",
        "pattern": "high priority",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: high priority",
        "source_file": "views-navigation.md",
        "context": "\" - Group: assignee, Filter: status:active\n\"Overdue Items\" - Filter: due-date:<today, status:!done\n\"High Priority\" - Filter: priority:urgent|high, status:!done\n\"Weekly Review\" - Filter: updated:>7d, team:all\n```",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement high priority in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-368",
        "pattern": "issues needing review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues needing review",
        "source_file": "views-navigation.md",
        "context": "zed work items\n- **My Issues**: Personal work assignments\n\n#### Specialized Views\n- **Triage**: New issues needing review\n- **Archive**: Completed and canceled work\n- **Timeline**: Gantt-style project planning\n- **Cycles*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues needing review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-369",
        "pattern": "issue progression through development",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issue progression through development",
        "source_file": "views-navigation.md",
        "context": "rd (Default)\n- **Columns**: Workflow states (Backlog, Todo, In Progress, Done)\n- **Purpose**: Track issue progression through development\n- **Use case**: Daily standups, workflow management\n\n#### Assignee Board\n- **Columns**: Team member",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue progression through development in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-370",
        "pattern": "issue preview",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: Issue preview",
        "source_file": "views-navigation.md",
        "context": "ation\n- **Custom column order**: Arrange by workflow\n- **Column filters**: Show subset of items\n- **Issue previews**: Expand for details\n- **Compact mode**: More items visible\n\n---\n\n## 📅 Timeline & Planning Views",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issue preview in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-371",
        "pattern": "issues scheduled over time, perfect for project planning",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues scheduled over time, perfect for project planning",
        "source_file": "views-navigation.md",
        "context": "e & Planning Views\n\n### Timeline View Purpose\nTimeline provides a Gantt-style visualization showing issues scheduled over time, perfect for project planning, dependency management, and resource allocation.\n\n### Timeline Features\n\n#### Visual Elements\n- **G",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues scheduled over time, perfect for project planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-issue_workflows-372",
        "pattern": "issues created by integrations or non-team members appear for review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues created by integrations or non-team members appear for review",
        "source_file": "views-navigation.md",
        "context": "--\n\n## 🏥 Triage Management\n\n### Understanding Triage\nTriage is a special inbox for your team where issues created by integrations or non-team members appear for review before entering your regular workflow.\n\n### When Issues Go to Triage\n- **Integration-created**: Fro",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues created by integrations or non-team members appear for review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-team_collaboration-373",
        "pattern": "comments",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: comments",
        "source_file": "views-navigation.md",
        "context": "and tasks\n- **Projects**: Feature initiatives and goals\n- **Documents**: Project documentation\n- **Comments**: Discussions and updates\n- **Teams**: Organizational units\n- **Users**: Team members and stakehol",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement comments in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.453Z",
        "last_verified": "2025-06-22T12:25:17.453Z"
    },
    {
        "id": "linear-planning_strategy-374",
        "pattern": "sprint planning",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: sprint planning",
        "source_file": "views-navigation.md",
        "context": "rity levels (Urgent, High, Medium, Low)\n- **Purpose**: Focus on most important work\n- **Use case**: Sprint planning, escalation management\n\n#### Label Board\n- **Columns**: Different labels (Feature, Bug, Improvement",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement sprint planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.454Z",
        "last_verified": "2025-06-22T12:25:17.454Z"
    },
    {
        "id": "linear-planning_strategy-375",
        "pattern": "complexity",
        "category": "planning_strategy",
        "type": "estimation_strategy",
        "description": "Estimation strategy: complexity",
        "source_file": "views-navigation.md",
        "context": "Techniques\n- **Horizontal scrolling**: See more columns\n- **Column collapse/expand**: Manage visual complexity\n- **Column reordering**: Drag columns to reorganize\n- **Filtering within boards**: Focus on specifi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement complexity in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.454Z",
        "last_verified": "2025-06-22T12:25:17.454Z"
    },
    {
        "id": "linear-productivity_optimization-376",
        "pattern": "bulk operations",
        "category": "productivity_optimization",
        "type": "productivity_automation",
        "description": "Productivity automation: bulk operations",
        "source_file": "views-navigation.md",
        "context": "e\n- **Property columns**: Show specific fields\n- **Quick actions**: Inline editing capabilities\n- **Bulk operations**: Multi-select and edit\n\n#### Board View\n- **Visual workflow**: Column-based organization\n- **Drag",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement bulk operations in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.454Z",
        "last_verified": "2025-06-22T12:25:17.454Z"
    },
    {
        "id": "linear-status_tracking-377",
        "pattern": "milestone tracking",
        "category": "status_tracking",
        "type": "progress_tracking",
        "description": "Status tracking method: milestone tracking",
        "source_file": "views-navigation.md",
        "context": "time\n- **Dependencies**: Visual connection lines\n- **Resource allocation**: Team capacity view\n- **Milestone tracking**: Important deadlines\n\n### Grouping and Sorting\n\n#### Grouping Options\n- **Status**: Workflow prog",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement milestone tracking in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.454Z",
        "last_verified": "2025-06-22T12:25:17.454Z"
    },
    {
        "id": "linear-api_usage-378",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "views-navigation.md",
        "context": "|\n| **Quick edit** | Hover over issue | Update properties inline |\n| **Bulk selection** | `Shift + Click` | Multi-issue operations |\n| **Create in column** | Click + in column | New issue with column pr",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-379",
        "pattern": "shift + click",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Shift + Click`",
        "source_file": "views-navigation.md",
        "context": "/assignee |\n| **Quick edit** | Hover over issue | Update properties inline |\n| **Bulk selection** | `Shift + Click` | Multi-issue operations |\n| **Create in column** | Click + in column | New issue with column prope",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + click in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-380",
        "pattern": "option/alt + v",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Option/Alt + V`",
        "source_file": "views-navigation.md",
        "context": "n `U` to go to Views\n- **Quick open**: `O` then `V` to open specific view\n- **Create from filter**: `Option/Alt + V` to save current filter\n- **Sidebar**: Click \"Views\" for complete list\n\n### View Components\n\n#### Co",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement option/alt + v in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-381",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + K",
        "source_file": "views-navigation.md",
        "context": "*: Press `F` to open filter menu\n- **Mouse**: Click \"Filter\" button in top bar\n- **Command menu**: `Cmd/Ctrl + K` → \"filter\" → filter type\n- **Quick filters**: Type filter name directly\n\n### Filter Categories\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-382",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + K",
        "source_file": "views-navigation.md",
        "context": "*: Press `F` to open filter menu\n- **Mouse**: Click \"Filter\" button in top bar\n- **Command menu**: `Cmd/Ctrl + K` → \"filter\" → filter type\n- **Quick filters**: Type filter name directly\n\n### Filter Categories\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-383",
        "pattern": "alt + v",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Alt + V",
        "source_file": "views-navigation.md",
        "context": "go to Views\n- **Quick open**: `O` then `V` to open specific view\n- **Create from filter**: `Option/Alt + V` to save current filter\n- **Sidebar**: Click \"Views\" for complete list\n\n### View Components\n\n#### C",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement alt + v in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-384",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + K",
        "source_file": "views-navigation.md",
        "context": "*: Press `F` to open filter menu\n- **Mouse**: Click \"Filter\" button in top bar\n- **Command menu**: `Cmd/Ctrl + K` → \"filter\" → filter type\n- **Quick filters**: Type filter name directly\n\n### Filter Categories\n\n##",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-385",
        "pattern": "shift + x",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Shift + X",
        "source_file": "views-navigation.md",
        "context": "Navigate items |\n| `Enter` | Open item | View details |\n| `X` | Select item | Multi-selection |\n| `Shift + X` | Select range | Bulk operations |\n| `Cmd/Ctrl + A` | Select all | Bulk operations |\n\n### Board Ac",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement shift + x in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-keyboard_shortcuts-386",
        "pattern": "cmd/ctrl + a",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: Cmd/Ctrl + A",
        "source_file": "views-navigation.md",
        "context": "tails |\n| `X` | Select item | Multi-selection |\n| `Shift + X` | Select range | Bulk operations |\n| `Cmd/Ctrl + A` | Select all | Bulk operations |\n\n### Board Actions\n| Shortcut | Action | Context |\n|----------|--",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + a in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.456Z",
        "last_verified": "2025-06-22T12:25:17.456Z"
    },
    {
        "id": "linear-project_management-387",
        "pattern": "projects & cycles](projects-cycles.md)** - planning",
        "category": "project_management",
        "type": "project_lifecycle",
        "description": "Project lifecycle management: Projects & Cycles](projects-cycles.md)** - Planning",
        "source_file": "workspace-management.md",
        "context": "setup and onboarding\n- **[Issues Management](issues-management.md)** - Work item organization\n- **[Projects & Cycles](projects-cycles.md)** - Planning and execution\n- **[Admin Settings](admin-settings.md)** - Advanced workspace administration\n\n---\n\n*",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Feature launch planning",
            "Cross-team coordination",
            "Milestone tracking",
            "Resource allocation"
        ],
        "examples": [
            "Implement projects & cycles](projects-cycles.md)** - planning in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-issue_workflows-388",
        "pattern": "p0",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p0",
        "source_file": "workspace-management.md",
        "context": "eting notes, specs\n\n#### Workspace Labels\nCreate labels available across all teams:\n- **Priority**: P0, P1, P2, P3\n- **Type**: Bug, Feature, Task\n- **Status**: Blocked, Needs Review\n- **Custom**: Organi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p0 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-issue_workflows-389",
        "pattern": "p1",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p1",
        "source_file": "workspace-management.md",
        "context": "g notes, specs\n\n#### Workspace Labels\nCreate labels available across all teams:\n- **Priority**: P0, P1, P2, P3\n- **Type**: Bug, Feature, Task\n- **Status**: Blocked, Needs Review\n- **Custom**: Organizati",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p1 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-issue_workflows-390",
        "pattern": "p2",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p2",
        "source_file": "workspace-management.md",
        "context": "tes, specs\n\n#### Workspace Labels\nCreate labels available across all teams:\n- **Priority**: P0, P1, P2, P3\n- **Type**: Bug, Feature, Task\n- **Status**: Blocked, Needs Review\n- **Custom**: Organization-s",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p2 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-issue_workflows-391",
        "pattern": "p3",
        "category": "issue_workflows",
        "type": "priority_management",
        "description": "Priority level: p3",
        "source_file": "workspace-management.md",
        "context": "specs\n\n#### Workspace Labels\nCreate labels available across all teams:\n- **Priority**: P0, P1, P2, P3\n- **Type**: Bug, Feature, Task\n- **Status**: Blocked, Needs Review\n- **Custom**: Organization-speci",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement p3 in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-issue_workflows-392",
        "pattern": "issues to be review",
        "category": "issue_workflows",
        "type": "issue_lifecycle",
        "description": "Issue lifecycle: issues to be review",
        "source_file": "workspace-management.md",
        "context": "following pages:\n\n#### Core Team Pages\n- **[Triage](views-navigation.md#triage)*** - Newly created issues to be reviewed and prioritized\n- **Issues** - Default views of all issues in this team  \n- **[Cycles](projects-c",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Task management",
            "Bug tracking",
            "Development workflow",
            "Code review process"
        ],
        "examples": [
            "Implement issues to be review in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.457Z",
        "last_verified": "2025-06-22T12:25:17.457Z"
    },
    {
        "id": "linear-team_collaboration-393",
        "pattern": "notifications",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: notifications",
        "source_file": "workspace-management.md",
        "context": "templates |\n| **Recurring issues** | View all existing and create new recurring issues |\n| **Slack notifications** | Set team-level notifications to Slack |\n| **Issue statuses & automations** | Customize workflow",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement notifications in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-394",
        "pattern": "team communication",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: team communication",
        "source_file": "workspace-management.md",
        "context": "onfiguration\nWorkspace-level integrations:\n- **GitHub/GitLab**: Repository connections\n- **Slack**: Team communication\n- **Figma**: Design collaboration  \n- **Sentry**: Error monitoring\n- **Custom**: API and webhook in",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team communication in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-395",
        "pattern": "status updates",
        "category": "team_collaboration",
        "type": "collaboration_feature",
        "description": "Team collaboration feature: status updates",
        "source_file": "workspace-management.md",
        "context": "*Initiatives**: Enable/disable workspace-level initiatives\n- **Project Updates**: Configure project status updates\n- **Third-party app review**: Require admin approval (Enterprise)\n\n### Administration Settings\n\n###",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement status updates in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-396",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team Management",
        "source_file": "workspace-management.md",
        "context": "---\ntitle: \"Workspace & Team Management\"\ndescription: \"- [Workspace Setup](#workspace-setup)\"\ncategory: \"general\"\ntype: \"guide\"\ntags: [\"dop",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-397",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team Management",
        "source_file": "workspace-management.md",
        "context": "---\ntitle: \"Workspace & Team Management\"\ndescription: \"- [Workspace Setup](#workspace-setup)\"\ncategory: \"general\"\ntype: \"guide\"\ntags: [\"dop",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-398",
        "pattern": "member management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Member Management",
        "source_file": "workspace-management.md",
        "context": "ble of Contents\n\n- [Workspace Setup](#workspace-setup)\n- [Team Organization](#team-organization)\n- [Member Management](#member-management)\n- [Roles & Permissions](#roles-permissions)\n- [Login Methods & Security](#logi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-399",
        "pattern": "member-management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: member-management",
        "source_file": "workspace-management.md",
        "context": "Workspace Setup](#workspace-setup)\n- [Team Organization](#team-organization)\n- [Member Management](#member-management)\n- [Roles & Permissions](#roles-permissions)\n- [Login Methods & Security](#login-methods-security)",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member-management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-400",
        "pattern": "member management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Member Management",
        "source_file": "workspace-management.md",
        "context": "ble of Contents\n\n- [Workspace Setup](#workspace-setup)\n- [Team Organization](#team-organization)\n- [Member Management](#member-management)\n- [Roles & Permissions](#roles-permissions)\n- [Login Methods & Security](#logi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-401",
        "pattern": "member invitation",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: member invitation",
        "source_file": "workspace-management.md",
        "context": "y\nLocated at **Settings > Workspace > Security**:\n- **Allow users to send invites**: Enable/disable member invitation permissions\n- **Third-party app review**: Require admin approval for integrations (Enterprise)\n- **",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member invitation in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-402",
        "pattern": "member management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Member Management",
        "source_file": "workspace-management.md",
        "context": "ble of Contents\n\n- [Workspace Setup](#workspace-setup)\n- [Team Organization](#team-organization)\n- [Member Management](#member-management)\n- [Roles & Permissions](#roles-permissions)\n- [Login Methods & Security](#logi",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-403",
        "pattern": "member roles",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Member Roles",
        "source_file": "workspace-management.md",
        "context": "one workspace and expand as needed\n2. **Team Structure**: Organize by function, not hierarchy\n3. **Member Roles**: Use least privilege principle\n4. **Regular Reviews**: Audit access and settings quarterly\n\n### T",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member roles in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-404",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Team Management",
        "source_file": "workspace-management.md",
        "context": "---\ntitle: \"Workspace & Team Management\"\ndescription: \"- [Workspace Setup](#workspace-setup)\"\ncategory: \"general\"\ntype: \"guide\"\ntags: [\"dop",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-405",
        "pattern": "member assignment",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: Member Assignment",
        "source_file": "workspace-management.md",
        "context": "eam names and identifiers\n2. **Consistent Settings**: Copy settings from well-configured teams\n3. **Member Assignment**: Consider skills and workload when assigning\n4. **Cross-team Projects**: Use projects for collabo",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement member assignment in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-team_collaboration-406",
        "pattern": "team management",
        "category": "team_collaboration",
        "type": "team_management",
        "description": "Team management: team management",
        "source_file": "workspace-management.md",
        "context": "---\ntitle: \"Workspace & Team Management\"\ndescription: \"- [Workspace Setup](#workspace-setup)\"\ncategory: \"general\"\ntype: \"guide\"\ntags: [\"dop",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Team communication",
            "Status updates",
            "Knowledge sharing",
            "Decision tracking"
        ],
        "examples": [
            "Implement team management in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-planning_strategy-407",
        "pattern": "upcoming cycle",
        "category": "planning_strategy",
        "type": "cycle_planning",
        "description": "Cycle planning strategy: upcoming cycle",
        "source_file": "workspace-management.md",
        "context": "of all issues in this team  \n- **[Cycles](projects-cycles.md#cycles)*** - Review current, past and upcoming cycles\n- **Projects** - Default views of all projects linked to this team\n- **Views** - Custom views filt",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "Sprint planning",
            "Capacity planning",
            "Estimation",
            "Priority setting"
        ],
        "examples": [
            "Implement upcoming cycle in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.458Z",
        "last_verified": "2025-06-22T12:25:17.458Z"
    },
    {
        "id": "linear-productivity_optimization-408",
        "pattern": "document template",
        "category": "productivity_optimization",
        "type": "template_optimization",
        "description": "Productivity template: document template",
        "source_file": "workspace-management.md",
        "context": "Manage team-level labels and label groups |\n| **Templates** | Manage team-level issue, project, and document templates |\n| **Recurring issues** | View all existing and create new recurring issues |\n| **Slack notificat",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Create standardized issue format",
            "Ensure consistent information capture"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.459Z",
        "last_verified": "2025-06-22T12:25:17.459Z"
    },
    {
        "id": "linear-automation_workflows-409",
        "pattern": "automations** | customize workflows, add/edit status",
        "category": "automation_workflows",
        "type": "workflow_automation",
        "description": "Workflow automation: automations** | Customize workflows, add/edit status",
        "source_file": "workspace-management.md",
        "context": "g issues |\n| **Slack notifications** | Set team-level notifications to Slack |\n| **Issue statuses & automations** | Customize workflows, add/edit statuses, set up git automations |\n\n#### Team Identity\nFrom the team's settings page, you can update:\n- **",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Set up automated workflows",
            "Reduce manual task overhead"
        ],
        "warnings": [
            "Test on small scale before full implementation"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.459Z",
        "last_verified": "2025-06-22T12:25:17.459Z"
    },
    {
        "id": "linear-integration_patterns-410",
        "pattern": "github integration",
        "category": "integration_patterns",
        "type": "external_integration",
        "description": "External integration: github integration",
        "source_file": "workspace-management.md",
        "context": "ord**: Traditional authentication\n- **Single Sign-On (SSO)**: SAML integration\n- **OAuth**: Google, GitHub integration\n- **Passkeys**: Modern passwordless authentication\n\n#### SAML Configuration\nFor SAML-enabled worksp",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement github integration in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.459Z",
        "last_verified": "2025-06-22T12:25:17.459Z"
    },
    {
        "id": "linear-integration_patterns-411",
        "pattern": "api",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: api",
        "source_file": "workspace-management.md",
        "context": "Team communication\n- **Figma**: Design collaboration  \n- **Sentry**: Error monitoring\n- **Custom**: API and webhook integrations\n\n### Templates and Labels\n\n#### Workspace-Level Templates\nCreate reusable",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement api in your workflow",
            "Train team on best practices"
        ],
        "warnings": [
            "Verify API permissions and rate limits"
        ],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.459Z",
        "last_verified": "2025-06-22T12:25:17.459Z"
    },
    {
        "id": "linear-integration_patterns-412",
        "pattern": "webhook",
        "category": "integration_patterns",
        "type": "api_integration",
        "description": "API integration: webhook",
        "source_file": "workspace-management.md",
        "context": "munication\n- **Figma**: Design collaboration  \n- **Sentry**: Error monitoring\n- **Custom**: API and webhook integrations\n\n### Templates and Labels\n\n#### Workspace-Level Templates\nCreate reusable templates fo",
        "complexity": "high",
        "safety_level": "moderate",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement webhook in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.459Z",
        "last_verified": "2025-06-22T12:25:17.459Z"
    },
    {
        "id": "linear-api_usage-413",
        "pattern": "cli",
        "category": "api_usage",
        "type": "cli_usage",
        "description": "CLI usage: cli",
        "source_file": "workspace-management.md",
        "context": "members**\n5. **Set up integrations**\n\n### Workspace Settings\n\nTo navigate to workspace settings:\n1. Click your workspace name in the upper left\n2. Select Settings\n3. If you are an admin, under Administra",
        "complexity": "moderate",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cli in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.460Z",
        "last_verified": "2025-06-22T12:25:17.460Z"
    },
    {
        "id": "linear-keyboard_shortcuts-414",
        "pattern": "cmd/ctrl + k",
        "category": "keyboard_shortcuts",
        "type": "keyboard_shortcut",
        "description": "Keyboard shortcut: `Cmd/Ctrl + K`",
        "source_file": "workspace-management.md",
        "context": "ns**: Workspace creator and/or upgrader get Admin roles\n\n**View Workspace Admins**:\n- Command menu: `Cmd/Ctrl + K` → \"View workspace admins\"\n- Direct link: [Settings/View Admins](https://linear.app/settings/view-ad",
        "complexity": "low",
        "safety_level": "safe",
        "use_cases": [
            "General project management",
            "Team coordination"
        ],
        "examples": [
            "Implement cmd/ctrl + k in your workflow",
            "Train team on best practices"
        ],
        "warnings": [],
        "related_patterns": [],
        "extracted_at": "2025-06-22T12:25:17.460Z",
        "last_verified": "2025-06-22T12:25:17.460Z"
    }
];
export const INTELLIGENCE_CATEGORIES = {
    "PROJECT_MANAGEMENT": "project_management",
    "ISSUE_WORKFLOWS": "issue_workflows",
    "TEAM_COLLABORATION": "team_collaboration",
    "PLANNING_STRATEGY": "planning_strategy",
    "PRODUCTIVITY_OPTIMIZATION": "productivity_optimization",
    "STATUS_TRACKING": "status_tracking",
    "AUTOMATION_WORKFLOWS": "automation_workflows",
    "INTEGRATION_PATTERNS": "integration_patterns",
    "BEST_PRACTICES": "best_practices",
    "TROUBLESHOOTING": "troubleshooting",
    "API_USAGE": "api_usage",
    "KEYBOARD_SHORTCUTS": "keyboard_shortcuts"
};
export const INTELLIGENCE_STATS = {
    "filesProcessed": 16,
    "totalPatterns": 414,
    "categoryCounts": {
        "project_management": 47,
        "issue_workflows": 98,
        "team_collaboration": 63,
        "planning_strategy": 23,
        "productivity_optimization": 21,
        "status_tracking": 15,
        "automation_workflows": 25,
        "integration_patterns": 27,
        "best_practices": 5,
        "troubleshooting": 7,
        "api_usage": 23,
        "keyboard_shortcuts": 60
    },
    "complexityCounts": {
        "low": 58,
        "moderate": 233,
        "high": 123
    },
    "safetyLevels": {
        "safe": 343,
        "moderate": 67,
        "high_risk": 4
    },
    "lastUpdate": "2025-06-22T12:25:17.401Z"
};
// Helper functions for intelligent Linear management
export function findPatternsByCategory(category) {
    return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.category === category);
}
export function findPatternsByComplexity(complexity) {
    return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.complexity === complexity);
}
export function searchPatterns(query) {
    const lowerQuery = query.toLowerCase();
    return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.pattern.toLowerCase().includes(lowerQuery) ||
        pattern.description.toLowerCase().includes(lowerQuery) ||
        pattern.context.toLowerCase().includes(lowerQuery));
}
export function getPatternsByType(type) {
    return LINEAR_INTELLIGENCE_PATTERNS.filter(pattern => pattern.type === type);
}
//# sourceMappingURL=generated-linear-intelligence.js.map