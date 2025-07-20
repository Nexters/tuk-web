module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  settings: {
    react: { version: 'detect' },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['dist', '.next', 'node_modules'],
  rules: {
    // 🔒 로그 출력 금지 (배포 코드에 console.log 남지 않도록)
    'no-console': 'error',
    'no-debugger': 'error',

    // ❌ 미사용 변수 금지 (변수, 함수 매개변수 포함)
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // ❌ any 사용 금지 (명확한 타입 작성 유도)
    '@typescript-eslint/no-explicit-any': 'error',

    // ✅ import 순서 정리 + 알파벳 정렬 + 그룹 간 줄바꿈
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'import/no-unresolved': 'off',

    // ✅ React 관련 기본 설정
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': 'error',

    // ❌ 불필요한 fragment 금지 (<></> 남용 방지)
    'react/jsx-no-useless-fragment': 'error',

    // ❌ self-closing 가능한 태그는 반드시 그렇게 작성 (e.g. <br />)
    'react/self-closing-comp': 'error',

    // ✅ React Hooks 필수 규칙
    'react-hooks/rules-of-hooks': 'error',

    // ❌ 의존성 배열 누락 금지 (useEffect 등)
    'react-hooks/exhaustive-deps': 'error',

    // ✅ 스타일 관련 규칙 일부 제거 (comma-dangle 등)
    quotes: ['warn', 'single', { avoidEscape: true }],
    semi: ['warn', 'always'],
  },
};
