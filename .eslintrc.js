module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  ignorePatterns: ['**/.next/**', '**/node_modules/**'],
  root: true,
  settings: {
    next: {
      rootDir: ['basics/*/', 'dashboard/*/', 'seo/'],
    },
  },
};
