# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
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