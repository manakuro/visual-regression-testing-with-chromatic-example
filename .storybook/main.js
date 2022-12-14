const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  staticDirs: ['../public'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-webpack5"
  },
  features: {
    emotionAlias: false,
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: './tsconfig.json'
      }),
    ];
    config.resolve = {
      ...config.resolve,
      fallback: {
        timers: false,
        tty: false,
        os: false,
        http: false,
        https: false,
        zlib: false,
        util: false,
        stream: false,
        ...config.resolve.fallback,
      }
    }

    // Return the altered config
    return config;
  },
}
