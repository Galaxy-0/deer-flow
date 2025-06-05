# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Enhanced data analysis capabilities with improved Coder Agent integration
- Comprehensive project documentation with PPT presentation materials
- Advanced prompt optimization for detailed customs policy research
- Mermaid system architecture diagrams for technical documentation
- Professional project presentation documentation (4-page PPT structure)

### Improved
- **Data Analysis Engine**: Significantly enhanced Coder Agent functionality
  - Optimized Planner to correctly identify PROCESSING tasks for data analysis
  - Enhanced step type classification with mandatory keywords detection
  - Improved Python REPL tool integration for real calculations
  - Added comprehensive data analysis test scenarios for customs/trade research
- **Report Quality Enhancement**: Advanced prompt engineering for detailed analysis
  - Researcher prompts: Added mandatory data requirements for customs research
  - Reporter prompts: Enhanced with specific data density requirements
  - Forced quantitative elements in key points (numbers, percentages, dates)
  - Detailed analysis sections with 4-6 subsections and comparative tables
- **Documentation & Architecture**: 
  - Created comprehensive WisdomFlow project presentation document
  - Added Mermaid-based system architecture visualization
  - Developed 4-page PPT structure covering project overview to business value
  - Generated professional PowerPoint presentation file

### Technical Improvements
- **Multi-Agent Workflow**: Verified and optimized Coder Agent execution path
  - Confirmed Research Team → Coder routing for PROCESSING tasks
  - Enhanced Python REPL tool with comprehensive error handling
  - Validated data analysis capabilities with real calculation scenarios
- **System Maintenance**: Updated .gitignore with comprehensive system file exclusions
  - Added macOS and Windows system file patterns
  - Cleaned existing .DS_Store files from repository

### Previous Features (from earlier releases)
- Brand customization: Changed from DeerFlow to WisdomFlow throughout the application
- Customs and trade policy focus: Updated conversation starters with import/export policy examples
- Enhanced search strategy for customs policies with official government websites
- Comprehensive report generation with detailed sections and requirements
- OpenRouter integration for LLM model routing

### Changed
- **Branding**: Updated all references from "DeerFlow" to "WisdomFlow"
  - Logo: Replaced deer emoji with gradient circle icon
  - Page titles: "WisdomFlow - AI Research Platform"
  - Welcome messages and descriptions updated across all components
- **Report Quality**: Enhanced reporter prompts for more detailed output
  - Key Points: Increased from 4-6 to 6-10 detailed points
  - Overview: Expanded from 1-2 to 3-4 comprehensive paragraphs
  - Detailed Analysis: Required 3-5 paragraphs per section
  - Survey Note: Made mandatory with 5-8 paragraph minimum
- **Search Performance**: Optimized research strategy
  - Force English keyword searches regardless of input language
  - Added customs-specific search guidance with official sites
  - Include policy document types and trade frameworks
- **Conversation Starters**: Replaced generic questions with customs policy examples
  - US import tariff policy changes and China impact analysis
  - EU Carbon Border Adjustment Mechanism (CBAM) compliance
  - China Customs cross-border e-commerce regulations
  - RCEP agreement origin certificate and tariff preferences

### Technical
- **Model Integration**: Successfully configured OpenRouter with Google Gemini 2.0 Flash
- **Environment Setup**: Updated configuration for LiteLLM and API routing
- **Search Integration**: Enhanced Tavily search API configuration
- **Font Issues**: Resolved Turbopack font loading issues temporarily

### Fixed
- OpenRouter API integration with proper environment variable mapping
- ChatLiteLLM structured output compatibility issues
- Frontend font loading conflicts with Turbopack

---

## Project Background

This project was originally DeerFlow, an open-source deep research framework. It has been customized and rebranded as WisdomFlow with a focus on customs and international trade policy research.

### Core Features
- Multi-agent AI research system with coordinator, planner, researcher, and reporter agents
- Real-time web search with Tavily integration
- Comprehensive report generation with structured markdown output
- Support for multiple LLM providers through OpenRouter
- Web interface built with Next.js and React
- Specialized tools for customs policy research and analysis