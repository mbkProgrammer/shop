module.exports = {
  "stories": [
    "../components/**/*.jsx",
    "../components/**/*.stories.jsx",
    "../containers/**/*.jsx",
    "../containers/**/*.stories.jsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next-router",
  ],
  staticDirs: ['../public'],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
