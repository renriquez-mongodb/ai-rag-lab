import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-rag-lab/helloWorld',
    component: ComponentCreator('/ai-rag-lab/helloWorld', '314'),
    exact: true
  },
  {
    path: '/ai-rag-lab/docs',
    component: ComponentCreator('/ai-rag-lab/docs', '498'),
    routes: [
      {
        path: '/ai-rag-lab/docs',
        component: ComponentCreator('/ai-rag-lab/docs', 'fdd'),
        routes: [
          {
            path: '/ai-rag-lab/docs',
            component: ComponentCreator('/ai-rag-lab/docs', '1de'),
            routes: [
              {
                path: '/ai-rag-lab/docs/add-memory/add-memory',
                component: ComponentCreator('/ai-rag-lab/docs/add-memory/add-memory', 'a8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/build-rag-app/add-reranking',
                component: ComponentCreator('/ai-rag-lab/docs/build-rag-app/add-reranking', 'd60'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/build-rag-app/build-rag-app',
                component: ComponentCreator('/ai-rag-lab/docs/build-rag-app/build-rag-app', '7fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/build-rag-app/stream-responses',
                component: ComponentCreator('/ai-rag-lab/docs/build-rag-app/stream-responses', 'ca1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/add-memory-to-the-rag-application',
                component: ComponentCreator('/ai-rag-lab/docs/category/add-memory-to-the-rag-application', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/build-the-rag-application',
                component: ComponentCreator('/ai-rag-lab/docs/category/build-the-rag-application', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/dev-environment',
                component: ComponentCreator('/ai-rag-lab/docs/category/dev-environment', '2a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/fireworks-ai',
                component: ComponentCreator('/ai-rag-lab/docs/category/fireworks-ai', '0de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/mongodb-atlas',
                component: ComponentCreator('/ai-rag-lab/docs/category/mongodb-atlas', '12a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/perform-semantic-search-on-your-data',
                component: ComponentCreator('/ai-rag-lab/docs/category/perform-semantic-search-on-your-data', '24a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/prepare-the-data',
                component: ComponentCreator('/ai-rag-lab/docs/category/prepare-the-data', 'ae0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/category/retrieval-augmented-generation',
                component: ComponentCreator('/ai-rag-lab/docs/category/retrieval-augmented-generation', '3a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/dev-env/dev-setup',
                component: ComponentCreator('/ai-rag-lab/docs/dev-env/dev-setup', '3f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/dev-env/jupyter-notebooks',
                component: ComponentCreator('/ai-rag-lab/docs/dev-env/jupyter-notebooks', '770'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/dev-env/setup-pre-reqs',
                component: ComponentCreator('/ai-rag-lab/docs/dev-env/setup-pre-reqs', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/fireworks-ai/create-account',
                component: ComponentCreator('/ai-rag-lab/docs/fireworks-ai/create-account', '5d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/fireworks-ai/create-api-key',
                component: ComponentCreator('/ai-rag-lab/docs/fireworks-ai/create-api-key', 'ec9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/intro',
                component: ComponentCreator('/ai-rag-lab/docs/intro', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/mongodb-atlas/create-account',
                component: ComponentCreator('/ai-rag-lab/docs/mongodb-atlas/create-account', '6a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/mongodb-atlas/create-cluster',
                component: ComponentCreator('/ai-rag-lab/docs/mongodb-atlas/create-cluster', '357'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/mongodb-atlas/get-connection-string',
                component: ComponentCreator('/ai-rag-lab/docs/mongodb-atlas/get-connection-string', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/perform-semantic-search/concepts',
                component: ComponentCreator('/ai-rag-lab/docs/perform-semantic-search/concepts', 'a0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/perform-semantic-search/create-vector-index',
                component: ComponentCreator('/ai-rag-lab/docs/perform-semantic-search/create-vector-index', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/perform-semantic-search/pre-filtering',
                component: ComponentCreator('/ai-rag-lab/docs/perform-semantic-search/pre-filtering', 'b07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/perform-semantic-search/vector-search',
                component: ComponentCreator('/ai-rag-lab/docs/perform-semantic-search/vector-search', '03a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/prepare-the-data/chunk-data',
                component: ComponentCreator('/ai-rag-lab/docs/prepare-the-data/chunk-data', '066'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/prepare-the-data/embed-data',
                component: ComponentCreator('/ai-rag-lab/docs/prepare-the-data/embed-data', 'cc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/prepare-the-data/ingest-data',
                component: ComponentCreator('/ai-rag-lab/docs/prepare-the-data/ingest-data', '9eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/prepare-the-data/load-data',
                component: ComponentCreator('/ai-rag-lab/docs/prepare-the-data/load-data', '0b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/rag/components-of-rag',
                component: ComponentCreator('/ai-rag-lab/docs/rag/components-of-rag', '7f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/rag/rag-usecases',
                component: ComponentCreator('/ai-rag-lab/docs/rag/rag-usecases', '7a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/rag/what-is-rag',
                component: ComponentCreator('/ai-rag-lab/docs/rag/what-is-rag', 'a5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/ai-rag-lab/docs/summary',
                component: ComponentCreator('/ai-rag-lab/docs/summary', '5a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/ai-rag-lab/',
    component: ComponentCreator('/ai-rag-lab/', 'd1d'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
