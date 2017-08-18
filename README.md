Liste des commandes à lancer:
 * npm init
 * npm install --save-dev webpack
 * touch webpack.config.js > voir contenu du fichier pour conf qui fonctionne avec Babel et React
 * npm install --save-dev babel-loader babel-core babel-preset-es2017 babel-preset-react
 * touch .babelrc > voir contenu du fichier pour configurer preset ES2017
 * npm install --save-dev react react-dom

Commande à lancer pour compiler les sources js /jsx:
 * ./node_modules/.bin/webpack

Commande à lancer pour compiler en automatique à chaque changement de source js / jsx:
 * ./node_modules/.bin/webpack --watch
