module.exports = {
  // Extend existing configuration
  // from ESlint and eslint-plugin-react defaults.
  "extends": [
    "eslint:recommended", "plugin:react/recommended"
  ],
  // Enable ES6 support. If you want to use custom Babel
  // features, you will need to enable a custom parser
  // as described in a section below.
  
  "parser": "babel-eslint",

  "env": {
    "browser": true,
    "node": true
  },
  // Enable custom plugin known as eslint-plugin-react
  "plugins": [
    "react"
  ],
  "rules": {
    // Disable `no-console` rule
    "no-console": 0,
    // Give a warning if identifiers contain underscores
    "no-underscore-dangle": 1,
    // Default to single quotes and raise an error if something
    // else is used
    "quotes": [2, "single"]
  }
}