var projects = require('../projects.json');

/*
 * GET home page.
 */
exports.view = function(req, res){
  projects['min'] = false;
  res.render('index', projects);
};

/*
 * GET home page alternate.
 */
exports.viewMin = function(req, res){
  projects['min'] = true;
  res.render('index', projects);
};
