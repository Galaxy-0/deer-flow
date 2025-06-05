# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DeerFlow is an open-source deep research framework that combines language models with specialized tools for automated research, content generation, and analysis. It uses a multi-agent architecture with LangGraph for orchestration.

## Key Technologies

**Backend**: Python 3.12+, LangChain/LangGraph, FastAPI, LiteLLM, Pydantic
**Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Tiptap
**Package Management**: uv (Python), pnpm (Node.js)

## Essential Commands

### Setup and Run
```bash
# Install dependencies
uv sync                          # Python dependencies
cd web && pnpm install && cd ..  # Frontend dependencies

# Configure
cp .env.example .env
cp conf.yaml.example conf.yaml

# Run application
uv run main.py "research query"  # Console UI
./bootstrap.sh -d                # Web UI (dev mode)
uv run server.py --reload        # Backend only
```

### Development
```bash
# Testing
uv run pytest tests/                           # Run all tests
uv run pytest tests/integration/test_nodes.py  # Run specific test

# Code quality
uv run black --preview .         # Format Python code
cd web && pnpm lint:fix         # Fix frontend issues

# LangGraph debugging
make langgraph-dev              # Open visual debugger
```

### Frontend (in web/ directory)
```bash
pnpm dev          # Development server
pnpm build        # Production build
pnpm lint:fix     # Fix linting issues
pnpm typecheck    # Type checking
```

## Architecture

The project follows a multi-agent architecture:

1. **Agents** (`src/agents/`): Coordinator, Planner, Researcher, Reporter, Coder
2. **Graph Workflows** (`src/graph/`): LangGraph nodes for orchestration
3. **Tools** (`src/tools/`): Web search, crawling, Python REPL
4. **Server** (`src/server/`): FastAPI endpoints with streaming support
5. **Web UI** (`web/src/`): Next.js app with real-time updates

### Key Workflows
- **deep_research**: Main research pipeline with planning, execution, and reporting
- **podcast_generation**: Converts research into audio podcasts
- **ppt_generation**: Creates presentations from research

## Configuration

- **`.env`**: API keys (OPENAI_API_KEY, ANTHROPIC_API_KEY, etc.)
- **`conf.yaml`**: Model configurations and agent settings
- **`langgraph.json`**: LangGraph Studio debugging configuration

## Testing Guidelines

- Tests are in `tests/` directory
- Use pytest fixtures for common setup
- Integration tests should mock external API calls
- Coverage threshold is 25%

## Important Notes

- The project uses streaming responses extensively - maintain async patterns
- LangGraph nodes should be stateless and return proper state updates
- Frontend uses Server-Sent Events (SSE) for real-time updates
- MCP (Model Context Protocol) integration extends tool capabilities
- Python REPL tool requires careful sandboxing for security