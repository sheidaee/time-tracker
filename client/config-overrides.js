const rewireCssModules = require("@horacehylee/react-app-rewire-css-modules");
const customProperties = {};

module.exports = {
  webpack : function override(config, env) {
    config = rewireCssModules(config, env, customProperties);    

    return config;
  },  
  jest: (config) => {    
    config.transformIgnorePatterns = ["node_modules"];
    config.moduleNameMapper = {
      "\\.(css|less|sass|scss)$": "<rootDir>/src/test/__mocks__/styleMock.js",
    }
    
    return config;
  }
};
