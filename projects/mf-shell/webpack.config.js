const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  //Integrar mfs
  remotes: {
    "mfShopping": "http://localhost:4201/remoteEntry.js",    
    "mfPayment": "http://localhost:4202/remoteEntry.js",
  },
  shared: {
    //Compartir librerías, descargar una única vez (indicar a los mfs que deben trabajar con las librerías establecidas en el proyecto)
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ["@commons-lib"]

});
