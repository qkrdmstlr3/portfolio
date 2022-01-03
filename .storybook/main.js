module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    'storybook-addon-gatsby',
    '@storybook/addon-knobs',
  ],
  core: {
    builder: 'webpack5',
  },
};
