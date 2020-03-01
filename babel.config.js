module.exports = api => {
  api.cache(true);
  if (process.env.NODE_ENV !== 'test') {
    return {};
  }
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
  };
};
