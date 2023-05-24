module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:import/react-native',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:boundaries/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'sonarjs',
    'boundaries',
    'import',
    'promise',
    'prettier',
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-unused-styles': 'error',
    'react-native/no-single-element-style-arrays': 'warn',
    'promise/always-return': 0,
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['warn'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling'],
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern:
              '{atoms,components,context,navigation,screens,state,services}/**',
            group: 'internal',
          },
          {
            pattern: '{assets,constants,helpers,themes,stores,hooks}/**',
            group: 'object',
          },
          {
            pattern: 'models/**',
            group: 'type',
          },
        ],
        pathGroupsExcludedImportTypes: ['external, builtin'],
        'newlines-between': 'always',
        alphabetize: {order: 'asc', caseInsensitive: true},
      },
    ],
    'boundaries/element-types': [
      2,
      {
        default: 'disallow',
        rules: [
          {
            from: 'navigation',
            allow: ['screens', 'helpers', 'state', 'themes'],
          },
          {
            from: 'screens',
            allow: [
              'atoms',
              'components',
              'helpers',
              'models',
              'services',
              'state',
              'themes',
            ],
          },
          {
            from: 'themes',
            allow: ['assets'],
          },
          {
            from: 'helpers',
            allow: ['state'],
          },
          {
            from: 'components',
            allow: [
              'atoms',
              'components',
              'helpers',
              'models',
              'state',
              'themes',
            ],
          },
          {from: 'state', allow: ['state', 'models', 'helpers', 'services']},
          {from: 'models', allow: ['models']},
        ],
      },
    ],
  },
  settings: {
    'boundaries/elements': [
      {
        type: 'assets',
        pattern: 'assets/**',
      },
      {
        type: 'atoms',
        pattern: 'atoms/**',
      },
      {
        type: 'components',
        pattern: 'components/**',
      },
      {
        type: 'helpers',
        pattern: '{constants,helpers,hooks}/**',
      },
      {
        type: 'models',
        pattern: 'models/**',
      },
      {
        type: 'navigation',
        pattern: 'navigation/**',
      },
      {
        type: 'screens',
        pattern: 'screens/**',
      },
      {
        type: 'services',
        pattern: 'services/**',
      },
      {
        type: 'state',
        pattern: '{state,context}/**',
      },
      {
        type: 'themes',
        pattern: 'themes/**',
      },
      {
        type: 'tests',
        pattern: '__tests__/**',
      },
    ],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
      },
    },
  },
};
