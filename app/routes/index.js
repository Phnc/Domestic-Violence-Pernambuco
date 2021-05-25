const repositoriesRoutes = require('./repository_route');

module.exports = function(app){
    repositoriesRoutes(app);
}