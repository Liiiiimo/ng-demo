module.exports = {
  '*.{ts,json,html,scss}': files => `npx prettier --write ${files.join(' ')}`,
};
