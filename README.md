# @kayaozkur/mcp-server-linear

[![npm version](https://img.shields.io/npm/v/@kayaozkur/mcp-server-linear.svg)](https://www.npmjs.com/package/@kayaozkur/mcp-server-linear)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![MCP](https://img.shields.io/badge/MCP-Compatible-green.svg)](https://modelcontextprotocol.io)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18-brightgreen)](https://nodejs.org/)

An enhanced Model Context Protocol (MCP) server that provides comprehensive access to Linear's project management platform. This server allows AI assistants like Claude to manage issues, projects, teams, and workflows through Linear's GraphQL API.

**Version 1.0.0** features AI-powered intelligence capabilities derived from 414 patterns extracted from Linear's documentation, providing unprecedented project management insights.

---

## Features

### Core Linear Operations
- 📋 **Issue Management**: Create, update, list, and comment on Linear issues
- 📁 **Project Organization**: Manage projects with full CRUD operations
- 👥 **Team Collaboration**: Access team structures, members, and settings
- 🏷️ **Label & State Management**: Organize work with labels and workflow states
- 💬 **Comments & Activity**: Add comments and track issue activity
- 🔄 **Workflow Management**: Get and manage workflow states for teams

### AI-Powered Intelligence Features
- 🤖 **Project Health Analysis**: AI-driven health scoring and risk assessment
- 🔍 **Issue Intelligence**: Deep analysis of issues with recommendations
- 🚀 **Workflow Optimization**: Team efficiency and bottleneck identification
- 📊 **Predictive Analytics**: Project outcome predictions with confidence levels
- 🛠️ **Automation Discovery**: Identify workflow automation opportunities
- ⚡ **Integration Optimization**: Enhance Git, Slack, and tool integrations
- 📈 **Contextual Help**: Real-time assistance based on current operations

## Installation

```bash
# Install from npm (recommended)
npm install -g @kayaozkur/mcp-server-linear

# Or clone the repository for development
git clone https://github.com/kayaozkur/mcp-server-linear.git
cd mcp-server-linear

# Install dependencies
npm install

# Build the TypeScript code
npm run build
```

## What's New in v1.0.0

### 🚀 Key Features
- **414 Intelligence Patterns**: Extracted from 16 Linear documentation files
- **11 AI-Powered Tools**: Advanced analytics and recommendations
- **Enhanced Standard Tools**: All core Linear operations optimized
- **Project Health Scoring**: Comprehensive health metrics and analysis
- **Workflow Intelligence**: Team productivity and efficiency insights

### 📦 Available Scripts

```bash
npm run dev              # Run development server
npm run dev:enhanced     # Run enhanced server with intelligence
npm run build           # Build TypeScript
npm start               # Run production server
npm start:enhanced      # Run enhanced production server
npm test               # Run tests
npm run lint           # Lint code
npm run format         # Format code
npm run watch          # Watch mode for development
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Required: Your Linear API key
LINEAR_API_KEY=lin_api_xxxxxxxxxxxxxxxxxxxx

# Optional: Log level (debug, info, warn, error)
LOG_LEVEL=info

# Optional: Server port (default: 3000 for stdio transport)
PORT=3000
```

### Getting a Linear API Key

1. Go to [Linear Settings](https://linear.app/settings/api)
2. Navigate to Settings → API
3. Create a new personal API key
4. Copy the key (starts with `lin_api_`)

## Claude Desktop Integration

Add to your Claude Desktop configuration (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "linear": {
      "command": "npx",
      "args": [
        "-y",
        "@kayaozkur/mcp-server-linear"
      ],
      "env": {
        "LINEAR_API_KEY": "lin_api_xxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

For enhanced intelligence features, use:

```json
{
  "mcpServers": {
    "linear-intelligence": {
      "command": "npx",
      "args": [
        "-y",
        "@kayaozkur/mcp-server-linear",
        "--enhanced"
      ],
      "env": {
        "LINEAR_API_KEY": "lin_api_xxxxxxxxxxxxxxxxxxxx"
      }
    }
  }
}
```

## Available Tools

### Standard Linear Tools

#### `linear_list_teams`
List all teams in your Linear workspace.

**Parameters**: None

**Example**:
```json
{
  "name": "linear_list_teams"
}
```

#### `linear_list_issues`
List issues with optional filtering.

**Parameters**:
- `teamId` (string, optional): Filter by team ID
- `assigneeId` (string, optional): Filter by assignee ID
- `stateId` (string, optional): Filter by state ID
- `projectId` (string, optional): Filter by project ID
- `first` (number, optional): Number of issues to return (default: 50)

**Example**:
```json
{
  "name": "linear_list_issues",
  "arguments": {
    "teamId": "TEAM-123",
    "assigneeId": "USER-456",
    "first": 20
  }
}
```

#### `linear_create_issue`
Create a new issue in Linear.

**Parameters**:
- `teamId` (string, required): Team ID for the issue
- `title` (string, required): Issue title
- `description` (string, optional): Issue description
- `priority` (number, optional): Priority level (1-4)
- `assigneeId` (string, optional): Assignee ID
- `projectId` (string, optional): Project ID
- `labelIds` (array, optional): Array of label IDs

**Example**:
```json
{
  "name": "linear_create_issue",
  "arguments": {
    "teamId": "TEAM-123",
    "title": "Implement user authentication",
    "description": "Add OAuth2 authentication flow",
    "priority": 2,
    "labelIds": ["bug", "feature"]
  }
}
```

#### `linear_update_issue`
Update an existing issue.

**Parameters**:
- `issueId` (string, required): Issue ID to update
- `title` (string, optional): New title
- `description` (string, optional): New description
- `priority` (number, optional): New priority (1-4)
- `assigneeId` (string, optional): New assignee ID
- `stateId` (string, optional): New state ID
- `projectId` (string, optional): New project ID

#### `linear_list_projects`
List projects with optional filters.

**Parameters**:
- `teamId` (string, optional): Filter by team ID
- `state` (string, optional): Filter by project state
- `first` (number, optional): Number of projects to return (default: 50)

#### `linear_get_issue_states`
Get workflow states for a team.

**Parameters**:
- `teamId` (string, required): Team ID

#### `linear_get_team_labels`
Get labels for a team.

**Parameters**:
- `teamId` (string, required): Team ID

#### `linear_add_comment`
Add a comment to an issue.

**Parameters**:
- `issueId` (string, required): Issue ID
- `body` (string, required): Comment body

### AI-Powered Intelligence Tools

#### `linear_analyze_project_health`
Analyze project health using AI intelligence patterns.

**Parameters**:
- `projectId` (string, required): Linear project ID to analyze
- `includeIssues` (boolean, optional): Include issue analysis (default: true)
- `teamId` (string, optional): Optional team ID to filter issues

**Example**:
```json
{
  "name": "linear_analyze_project_health",
  "arguments": {
    "projectId": "PROJ-123",
    "includeIssues": true
  }
}
```

#### `linear_analyze_issue_intelligence`
Perform deep analysis on a specific issue.

**Parameters**:
- `issueId` (string, required): Linear issue ID to analyze
- `includeRecommendations` (boolean, optional): Include workflow recommendations (default: true)
- `analysisDepth` (string, optional): Level of analysis - "basic", "detailed", or "comprehensive" (default: "detailed")

#### `linear_optimize_team_workflow`
Analyze and optimize team workflow efficiency.

**Parameters**:
- `teamId` (string, required): Linear team ID to optimize
- `analysisTimeframe` (number, optional): Days to analyze (default: 30)
- `includeProductivity` (boolean, optional): Include productivity analysis (default: true)
- `focusArea` (string, optional): "efficiency", "collaboration", "bottlenecks", or "automation"

#### `linear_predict_project_outcome`
Predict project outcomes using historical patterns.

**Parameters**:
- `projectId` (string, required): Linear project ID
- `predictionHorizon` (number, optional): Days into future (default: 90)
- `includeRiskAnalysis` (boolean, optional): Include risk factors (default: true)
- `confidenceLevel` (string, optional): "basic", "standard", or "detailed" (default: "standard")

#### `linear_identify_automation_opportunities`
Discover workflow automation opportunities.

**Parameters**:
- `teamId` (string, required): Team ID to analyze
- `workflowType` (string, optional): "issue_management", "project_tracking", "team_collaboration", or "all" (default: "all")
- `complexityFilter` (string, optional): "low", "medium", "high", or "all" (default: "all")

## Use Cases

### Project Management
- Create and manage sprint cycles
- Track issue progress and blockers
- Analyze project health and risks
- Generate status reports
- Predict project completion dates

### Team Collaboration
- Optimize team workflows
- Identify collaboration bottlenecks
- Automate repetitive tasks
- Improve communication patterns
- Balance workload distribution

### Automation & Integration
- Sync Linear with external tools
- Automate issue creation from alerts
- Update issues based on Git commits
- Generate reports and dashboards
- Trigger actions based on issue state changes

### AI-Assisted Planning
- Get recommendations for issue prioritization
- Identify at-risk projects early
- Optimize sprint planning
- Suggest workflow improvements
- Predict resource needs

## Security Best Practices

1. **API Key Security**:
   - Never commit API keys to version control
   - Use environment variables for sensitive data
   - Rotate API keys regularly
   - Use read-only keys when possible

2. **Access Control**:
   - Limit API key permissions to required scopes
   - Use team-specific keys for isolation
   - Monitor API usage for anomalies

3. **Data Handling**:
   - Minimize data retention
   - Sanitize sensitive information in logs
   - Use HTTPS for all API communications

## Troubleshooting

### Common Issues

#### "LINEAR_API_KEY environment variable is required"
- Ensure your API key is set in the environment or `.env` file
- Check that the key starts with `lin_api_`

#### "GraphQL error: Not authenticated"
- Verify your API key is valid
- Check Linear account permissions
- Ensure the key hasn't expired

#### "Cannot find team/project/issue"
- Verify the IDs are correct
- Check user has access to the resource
- Ensure the resource hasn't been deleted

#### "Rate limit exceeded"
- Linear API has rate limits
- Implement exponential backoff
- Consider caching frequently accessed data

### Debug Mode

Enable debug logging for troubleshooting:

```bash
LOG_LEVEL=debug npm start
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Create a feature branch: `git checkout -b feature/your-feature`
5. Make changes and test
6. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- 📧 Email: support@lepion.ai
- 🐛 Issues: [GitHub Issues](https://github.com/kayaozkur/mcp-server-linear/issues)
- 💬 Discord: [Join our community](https://discord.gg/lepion)
- 📚 Docs: [Full documentation](https://docs.lepion.ai/mcp-server-linear)

## Acknowledgments

- Built on the [Model Context Protocol](https://modelcontextprotocol.io) by Anthropic
- Powered by [Linear's GraphQL API](https://developers.linear.app)
- Intelligence patterns extracted from Linear's comprehensive documentation

---

Made with ❤️ by the Lepion team