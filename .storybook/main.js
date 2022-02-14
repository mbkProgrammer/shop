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
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
