import chalk from 'chalk';

const applyStyles = (opts) => opts.reduce((acc, opt) => acc[opt], chalk);

const log = (text, options = []) => {
  // eslint-disable-next-line no-console
  console.log(applyStyles(options)(text));
};

// eslint-disable-next-line import/prefer-default-export
export { log };
