import { ServiceConfig } from './types';
import { createService } from './builder';
import { 
  SiGithub, SiGitlab, SiNpm, SiDocker, SiStackoverflow, SiMongodb, SiFirebase,
  SiSupabase, SiPlanetscale, SiRedis, SiAirtable, SiZapier, SiTwilio, SiPostman,
  SiAuth0, SiSentry, SiDatadog, SiJira, SiConfluence, SiFigma, SiGitbook, SiPostgresql,
  SiCircleci, SiTravisci, SiYarn, SiGradle, SiStackblitz, SiGlitch, SiCodecov, 
  SiCoveralls, SiSonarqube, SiJenkins, SiBamboo, SiTeamcity, SiGithubactions,
  SiAppveyor, SiCodeship, SiSemaphoreci, SiBuddy, SiVite, SiWebpack, SiBabel, 
  SiEslint, SiPrettier, SiRollupdotjs, SiNx, SiTurborepo, SiStorybook, SiCypress, 
  SiJest, SiLodash, SiAxios, SiGraphql, SiApollographql, SiPrisma, SiTypeorm, 
  SiSequelize, SiSwagger, SiKong, SiHasura
} from 'react-icons/si';


export const developmentServices: ServiceConfig[] = [
  // GitHub
  createService('github')
    .setName('GitHub')
    .setUrl('https://github.com')
    .setDescription('Code hosting platform for version control and collaboration')
    .setIcon(SiGithub)
    .setCheckUrl('https://www.githubstatus.com/api/v2/status.json')
    .setCategory('development')
    .setPriority('critical')
    .setTags(['git', 'version-control', 'collaboration', 'code-hosting'])
    .build(),

  // GitLab
  createService('gitlab')
    .setName('GitLab')
    .setUrl('https://gitlab.com')
    .setDescription('DevOps platform with Git repository management')
    .setIcon(SiGitlab)
    .setCheckUrl('https://status.gitlab.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['git', 'devops', 'ci-cd', 'repository'])
    .build(),

  // npm
  createService('npm')
    .setName('npm')
    .setUrl('https://www.npmjs.com')
    .setDescription('Package manager for JavaScript and Node.js')
    .setIcon(SiNpm)
    .setCheckUrl('https://status.npmjs.org')
    .setCategory('development')
    .setPriority('high')
    .setTags(['package-manager', 'javascript', 'nodejs', 'dependencies'])
    .build(),

  // Docker Hub
  createService('docker-hub')
    .setName('Docker Hub')
    .setUrl('https://hub.docker.com')
    .setDescription('Container image registry and sharing platform')
    .setIcon(SiDocker)
    .setCheckUrl('https://status.docker.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['containers', 'docker', 'registry', 'deployment'])
    .build(),

  // Stack Overflow
  createService('stack-overflow')
    .setName('Stack Overflow')
    .setUrl('https://stackoverflow.com')
    .setDescription('Developer Q&A platform and community')
    .setIcon(SiStackoverflow)
    .setCheckUrl('https://stackstatus.net')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['qa', 'community', 'help', 'programming'])
    .build(),

  // MongoDB Atlas
  createService('mongodb-atlas')
    .setName('MongoDB Atlas')
    .setUrl('https://www.mongodb.com/atlas')
    .setDescription('Cloud database service for MongoDB')
    .setIcon(SiMongodb)
    .setCheckUrl('https://status.cloud.mongodb.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['database', 'nosql', 'cloud', 'mongodb'])
    .build(),

  // Firebase
  createService('firebase')
    .setName('Firebase')
    .setUrl('https://firebase.google.com')
    .setDescription('Google backend platform for mobile and web apps')
    .setIcon(SiFirebase)
    .setCheckUrl('https://status.firebase.google.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['backend', 'google', 'mobile', 'web-apps'])
    .build(),

  // Supabase
  createService('supabase')
    .setName('Supabase')
    .setUrl('https://supabase.com')
    .setDescription('Open source Firebase alternative with PostgreSQL')
    .setIcon(SiSupabase)
    .setCheckUrl('https://status.supabase.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['backend', 'postgresql', 'open-source', 'firebase-alternative'])
    .build(),

  // PlanetScale
  createService('planetscale')
    .setName('PlanetScale')
    .setUrl('https://planetscale.com')
    .setDescription('Serverless MySQL platform with branching')
    .setIcon(SiPlanetscale)
    .setCheckUrl('https://www.planetscalestatus.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['database', 'mysql', 'serverless', 'branching'])
    .build(),

  // Redis Cloud
  createService('redis-cloud')
    .setName('Redis Cloud')
    .setUrl('https://redis.com')
    .setDescription('In-memory database service')
    .setIcon(SiRedis)
    .setCheckUrl('https://status.redislabs.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['cache', 'in-memory', 'database', 'redis'])
    .build(),

  // Airtable
  createService('airtable')
    .setName('Airtable')
    .setUrl('https://airtable.com')
    .setDescription('Cloud-based database platform with spreadsheet interface')
    .setIcon(SiAirtable)
    .setCheckUrl('https://status.airtable.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['database', 'spreadsheet', 'collaboration', 'no-code'])
    .build(),

  // Zapier
  createService('zapier')
    .setName('Zapier')
    .setUrl('https://zapier.com')
    .setDescription('Automation platform connecting apps and services')
    .setIcon(SiZapier)
    .setCheckUrl('https://status.zapier.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['automation', 'integrations', 'workflow', 'apps'])
    .build(),

  // Twilio
  createService('twilio')
    .setName('Twilio')
    .setUrl('https://www.twilio.com')
    .setDescription('Communications API for SMS, voice, and video')
    .setIcon(SiTwilio)
    .setCheckUrl('https://status.twilio.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['api', 'communications', 'sms', 'voice', 'video'])
    .build(),

  // Postman
  createService('postman')
    .setName('Postman')
    .setUrl('https://www.postman.com')
    .setDescription('API development and testing platform')
    .setIcon(SiPostman)
    .setCheckUrl('https://status.postman.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['api', 'testing', 'development', 'documentation'])
    .build(),

  // Auth0
  createService('auth0')
    .setName('Auth0')
    .setUrl('https://auth0.com')
    .setDescription('Identity management platform for applications')
    .setIcon(SiAuth0)
    .setCheckUrl('https://status.auth0.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['authentication', 'identity', 'security', 'oauth'])
    .build(),

  // Sentry
  createService('sentry')
    .setName('Sentry')
    .setUrl('https://sentry.io')
    .setDescription('Error monitoring and performance tracking')
    .setIcon(SiSentry)
    .setCheckUrl('https://status.sentry.io')
    .setCategory('development')
    .setPriority('high')
    .setTags(['monitoring', 'errors', 'performance', 'debugging'])
    .build(),

  // Datadog
  createService('datadog')
    .setName('Datadog')
    .setUrl('https://www.datadoghq.com')
    .setDescription('Monitoring and analytics platform for cloud applications')
    .setIcon(SiDatadog)
    .setCheckUrl('https://status.datadoghq.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['monitoring', 'analytics', 'cloud', 'observability'])
    .build(),

  // Jira
  createService('jira')
    .setName('Jira')
    .setUrl('https://www.atlassian.com/software/jira')
    .setDescription('Issue tracking and project management software')
    .setIcon(SiJira)
    .setCheckUrl('https://status.atlassian.com/api/v2/summary.json')
    .setCategory('development')
    .setPriority('high')
    .setTags(['project-management', 'issue-tracking', 'agile', 'scrum'])
    .build(),

  // Confluence
  createService('confluence')
    .setName('Confluence')
    .setUrl('https://www.atlassian.com/software/confluence')
    .setDescription('Team workspace and documentation platform')
    .setIcon(SiConfluence)
    .setCheckUrl('https://status.atlassian.com/api/v2/summary.json')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['documentation', 'collaboration', 'wiki', 'knowledge-base'])
    .build(),

  // Figma
  createService('figma')
    .setName('Figma')
    .setUrl('https://www.figma.com')
    .setDescription('Collaborative interface design tool')
    .setIcon(SiFigma)
    .setCheckUrl('https://status.figma.com/api/v2/status.json')
    .setCategory('development')
    .setPriority('high')
    .setTags(['design', 'ui-ux', 'collaboration', 'prototyping'])
    .build(),

  // GitBook
  createService('gitbook')
    .setName('GitBook')
    .setUrl('https://www.gitbook.com')
    .setDescription('Documentation platform for teams')
    .setIcon(SiGitbook)
    .setCheckUrl('https://www.gitbook.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['documentation', 'knowledge-base', 'team-collaboration'])
    .build(),

  // PostgreSQL
  createService('postgresql')
    .setName('PostgreSQL')
    .setUrl('https://www.postgresql.org')
    .setDescription('Open-source relational database system')
    .setIcon(SiPostgresql)
    .setCheckUrl('https://www.postgresql.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['database', 'sql', 'open-source', 'relational'])
    .build(),

  // CircleCI
  createService('circleci')
    .setName('CircleCI')
    .setUrl('https://circleci.com')
    .setDescription('Continuous integration and delivery platform')
    .setIcon(SiCircleci)
    .setCheckUrl('https://status.circleci.com')
    .setCategory('development')
    .setPriority('high')
    .setTags(['ci-cd', 'continuous-integration', 'deployment', 'automation'])
    .build(),

  // Travis CI
  createService('travis-ci')
    .setName('Travis CI')
    .setUrl('https://travis-ci.com')
    .setDescription('Continuous integration platform for GitHub projects')
    .setIcon(SiTravisci)
    .setCheckUrl('https://www.traviscistatus.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['ci-cd', 'continuous-integration', 'github', 'automation'])
    .build(),

  // Yarn
  createService('yarn')
    .setName('Yarn')
    .setUrl('https://yarnpkg.com')
    .setDescription('Fast, reliable, and secure dependency management')
    .setIcon(SiYarn)
    .setCheckUrl('https://status.yarnpkg.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['package-manager', 'javascript', 'dependencies', 'npm-alternative'])
    .build(),

  // Gradle
  createService('gradle')
    .setName('Gradle')
    .setUrl('https://gradle.com')
    .setDescription('Build automation tool for multi-language projects')
    .setIcon(SiGradle)
    .setCheckUrl('https://status.gradle.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['build-tool', 'automation', 'java', 'kotlin'])
    .build(),

  // StackBlitz
  createService('stackblitz')
    .setName('StackBlitz')
    .setUrl('https://stackblitz.com')
    .setDescription('Online IDE for web development')
    .setIcon(SiStackblitz)
    .setCheckUrl('https://stackblitz.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ide', 'online-editor', 'web-development', 'collaboration'])
    .build(),

  // Glitch
  createService('glitch')
    .setName('Glitch')
    .setUrl('https://glitch.com')
    .setDescription('Online code editor and hosting platform')
    .setIcon(SiGlitch)
    .setCheckUrl('https://glitch.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ide', 'online-editor', 'hosting', 'collaboration'])
    .build(),

  // Codecov
  createService('codecov')
    .setName('Codecov')
    .setUrl('https://codecov.io')
    .setDescription('Code coverage reporting and analytics')
    .setIcon(SiCodecov)
    .setCheckUrl('https://codecov.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['code-coverage', 'testing', 'analytics', 'quality'])
    .build(),

  // Coveralls
  createService('coveralls')
    .setName('Coveralls')
    .setUrl('https://coveralls.io')
    .setDescription('Code coverage tracking and reporting')
    .setIcon(SiCoveralls)
    .setCheckUrl('https://coveralls.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['code-coverage', 'testing', 'quality', 'metrics'])
    .build(),

  // SonarQube
  createService('sonarqube')
    .setName('SonarQube')
    .setUrl('https://www.sonarqube.org')
    .setDescription('Code quality and security analysis platform')
    .setIcon(SiSonarqube)
    .setCheckUrl('https://www.sonarqube.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['code-quality', 'security', 'static-analysis', 'metrics'])
    .build(),

  // Jenkins
  createService('jenkins')
    .setName('Jenkins')
    .setUrl('https://www.jenkins.io')
    .setDescription('Open source automation server for CI/CD')
    .setIcon(SiJenkins)
    .setCheckUrl('https://www.jenkins.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['ci-cd', 'automation', 'open-source', 'server'])
    .build(),

  // Bamboo
  createService('bamboo')
    .setName('Bamboo')
    .setUrl('https://www.atlassian.com/software/bamboo')
    .setDescription('Continuous integration and deployment server')
    .setIcon(SiBamboo)
    .setCheckUrl('https://status.atlassian.com/api/v2/summary.json')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['ci-cd', 'continuous-integration', 'deployment', 'atlassian'])
    .build(),

  // TeamCity
  createService('teamcity')
    .setName('TeamCity')
    .setUrl('https://www.jetbrains.com/teamcity')
    .setDescription('Continuous integration and deployment platform')
    .setIcon(SiTeamcity)
    .setCheckUrl('https://www.jetbrains.com/teamcity')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['ci-cd', 'continuous-integration', 'jetbrains', 'automation'])
    .build(),

  // GitHub Actions
  createService('github-actions')
    .setName('GitHub Actions')
    .setUrl('https://github.com/features/actions')
    .setDescription('CI/CD platform integrated with GitHub')
    .setIcon(SiGithubactions)
    .setCheckUrl('https://www.githubstatus.com/api/v2/status.json')
    .setCategory('development')
    .setPriority('high')
    .setTags(['ci-cd', 'github', 'automation', 'workflows'])
    .build(),

  // AppVeyor
  createService('appveyor')
    .setName('AppVeyor')
    .setUrl('https://www.appveyor.com')
    .setDescription('Continuous integration platform for Windows')
    .setIcon(SiAppveyor)
    .setCheckUrl('https://www.appveyor.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ci-cd', 'windows', 'continuous-integration', 'automation'])
    .build(),

  // Codeship
  createService('codeship')
    .setName('Codeship')
    .setUrl('https://codeship.com')
    .setDescription('Continuous integration and delivery platform')
    .setIcon(SiCodeship)
    .setCheckUrl('https://codeship.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ci-cd', 'continuous-integration', 'delivery', 'automation'])
    .build(),

  // Semaphore CI
  createService('semaphore-ci')
    .setName('Semaphore CI')
    .setUrl('https://semaphoreci.com')
    .setDescription('Continuous integration and deployment platform')
    .setIcon(SiSemaphoreci)
    .setCheckUrl('https://semaphoreci.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ci-cd', 'continuous-integration', 'deployment', 'automation'])
    .build(),

  // Buddy
  createService('buddy')
    .setName('Buddy')
    .setUrl('https://buddy.works')
    .setDescription('CI/CD platform for developers')
    .setIcon(SiBuddy)
    .setCheckUrl('https://buddy.works')
    .setCategory('development')
    .setPriority('low')
    .setTags(['ci-cd', 'continuous-integration', 'deployment', 'automation'])
    .build(),

  // Vite
  createService('vite')
    .setName('Vite')
    .setUrl('https://vitejs.dev')
    .setDescription('Next generation frontend tooling')
    .setIcon(SiVite)
    .setCheckUrl('https://vitejs.dev')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['build-tool', 'frontend', 'javascript', 'typescript'])
    .build(),

  // Webpack
  createService('webpack')
    .setName('Webpack')
    .setUrl('https://webpack.js.org')
    .setDescription('JavaScript module bundler')
    .setIcon(SiWebpack)
    .setCheckUrl('https://webpack.js.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['bundler', 'javascript', 'modules', 'build-tool'])
    .build(),

  // Babel
  createService('babel')
    .setName('Babel')
    .setUrl('https://babeljs.io')
    .setDescription('JavaScript compiler for next generation JavaScript')
    .setIcon(SiBabel)
    .setCheckUrl('https://babeljs.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['compiler', 'javascript', 'transpiler', 'es6'])
    .build(),

  // ESLint
  createService('eslint')
    .setName('ESLint')
    .setUrl('https://eslint.org')
    .setDescription('JavaScript linting utility')
    .setIcon(SiEslint)
    .setCheckUrl('https://eslint.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['linting', 'javascript', 'code-quality', 'static-analysis'])
    .build(),

  // Prettier
  createService('prettier')
    .setName('Prettier')
    .setUrl('https://prettier.io')
    .setDescription('Code formatter for consistent style')
    .setIcon(SiPrettier)
    .setCheckUrl('https://prettier.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['formatter', 'code-style', 'javascript', 'typescript'])
    .build(),

  // Rollup
  createService('rollup')
    .setName('Rollup')
    .setUrl('https://rollupjs.org')
    .setDescription('JavaScript module bundler for libraries')
    .setIcon(SiRollupdotjs)
    .setCheckUrl('https://rollupjs.org')
    .setCategory('development')
    .setPriority('low')
    .setTags(['bundler', 'javascript', 'modules', 'libraries'])
    .build(),

  // Nx
  createService('nx')
    .setName('Nx')
    .setUrl('https://nx.dev')
    .setDescription('Build system for monorepos')
    .setIcon(SiNx)
    .setCheckUrl('https://nx.dev')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['build-system', 'monorepo', 'scalability', 'workspace'])
    .build(),

  // Turborepo
  createService('turborepo')
    .setName('Turborepo')
    .setUrl('https://turborepo.org')
    .setDescription('High-performance build system for JavaScript and TypeScript')
    .setIcon(SiTurborepo)
    .setCheckUrl('https://turborepo.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['build-system', 'monorepo', 'performance', 'javascript'])
    .build(),

  // Storybook
  createService('storybook')
    .setName('Storybook')
    .setUrl('https://storybook.js.org')
    .setDescription('UI component development environment')
    .setIcon(SiStorybook)
    .setCheckUrl('https://storybook.js.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['ui-components', 'development', 'documentation', 'testing'])
    .build(),

  // Cypress
  createService('cypress')
    .setName('Cypress')
    .setUrl('https://www.cypress.io')
    .setDescription('End-to-end testing framework for web applications')
    .setIcon(SiCypress)
    .setCheckUrl('https://www.cypress.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['testing', 'e2e', 'web-applications', 'automation'])
    .build(),

  // Jest
  createService('jest')
    .setName('Jest')
    .setUrl('https://jestjs.io')
    .setDescription('JavaScript testing framework with focus on simplicity')
    .setIcon(SiJest)
    .setCheckUrl('https://jestjs.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['testing', 'javascript', 'unit-tests', 'framework'])
    .build(),

  // Lodash
  createService('lodash')
    .setName('Lodash')
    .setUrl('https://lodash.com')
    .setDescription('JavaScript utility library for common programming tasks')
    .setIcon(SiLodash)
    .setCheckUrl('https://lodash.com')
    .setCategory('development')
    .setPriority('low')
    .setTags(['utility-library', 'javascript', 'programming', 'helpers'])
    .build(),

  // Axios
  createService('axios')
    .setName('Axios')
    .setUrl('https://axios-http.com')
    .setDescription('Promise-based HTTP client for browser and Node.js')
    .setIcon(SiAxios)
    .setCheckUrl('https://axios-http.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['http-client', 'api', 'javascript', 'nodejs'])
    .build(),

  // GraphQL
  createService('graphql')
    .setName('GraphQL')
    .setUrl('https://graphql.org')
    .setDescription('Query language and runtime for APIs')
    .setIcon(SiGraphql)
    .setCheckUrl('https://graphql.org')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['api', 'query-language', 'runtime', 'data-fetching'])
    .build(),

  // Apollo GraphQL
  createService('apollo-graphql')
    .setName('Apollo GraphQL')
    .setUrl('https://www.apollographql.com')
    .setDescription('GraphQL platform for building data graphs')
    .setIcon(SiApollographql)
    .setCheckUrl('https://www.apollographql.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['graphql', 'data-graph', 'api', 'platform'])
    .build(),

  // Prisma
  createService('prisma')
    .setName('Prisma')
    .setUrl('https://www.prisma.io')
    .setDescription('Database toolkit and ORM for Node.js and TypeScript')
    .setIcon(SiPrisma)
    .setCheckUrl('https://www.prisma.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['orm', 'database', 'typescript', 'nodejs'])
    .build(),

  // TypeORM
  createService('typeorm')
    .setName('TypeORM')
    .setUrl('https://typeorm.io')
    .setDescription('Object-relational mapping library for TypeScript and JavaScript')
    .setIcon(SiTypeorm)
    .setCheckUrl('https://typeorm.io')
    .setCategory('development')
    .setPriority('low')
    .setTags(['orm', 'typescript', 'javascript', 'database'])
    .build(),

  // Sequelize
  createService('sequelize')
    .setName('Sequelize')
    .setUrl('https://sequelize.org')
    .setDescription('Promise-based Node.js ORM for PostgreSQL, MySQL, and more')
    .setIcon(SiSequelize)
    .setCheckUrl('https://sequelize.org')
    .setCategory('development')
    .setPriority('low')
    .setTags(['orm', 'nodejs', 'database', 'promise-based'])
    .build(),

  // Swagger
  createService('swagger')
    .setName('Swagger')
    .setUrl('https://swagger.io')
    .setDescription('API documentation framework and tools')
    .setIcon(SiSwagger)
    .setCheckUrl('https://swagger.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['api', 'documentation', 'openapi', 'specification'])
    .build(),

  // Kong
  createService('kong')
    .setName('Kong')
    .setUrl('https://konghq.com')
    .setDescription('API gateway and microservices platform')
    .setIcon(SiKong)
    .setCheckUrl('https://konghq.com')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['api-gateway', 'microservices', 'platform', 'management'])
    .build(),

  // Hasura
  createService('hasura')
    .setName('Hasura')
    .setUrl('https://hasura.io')
    .setDescription('GraphQL API platform with real-time subscriptions')
    .setIcon(SiHasura)
    .setCheckUrl('https://hasura.io')
    .setCategory('development')
    .setPriority('medium')
    .setTags(['graphql', 'api', 'real-time', 'subscriptions'])
    .build(),
]; 