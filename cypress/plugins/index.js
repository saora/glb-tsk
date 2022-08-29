
const webpack = require("@cypress/webpack-preprocessor");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file){
  const pathToConfigFile = path.resolve('cypress/config', `${file}.json`)
  return fs.readJson(pathToConfigFile)
}

module.exports = (on, config) => {
  const options = {
    webpackOptions: require("../webpack.config")
    
  };
  

  const file = config.env.configFile || 'test'
  const confile = getConfigurationByFile(file)  


  on("file:preprocessor", webpack(options));
  return config, confile
};
