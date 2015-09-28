/*var ds = app.dataSources.db;
MyModel = ds.createModel('Statistics', {
    _id: { type: ds.ObjectID, id: true }
});*/


module.exports = function(app) {
  var ds = app.dataSources.db;

  var statistics = {
  	Year : '2013/14',
  	ICD10_Code : 'F10.0',
  	ICD10_Description : 'Acute intoxication',
  	Classification : 'Broad',
  	Metric_Primary : 'Mental and behavioural disorders due to use of alcohol',
  	Metric_Secondary : 'Wholly attributable',
  	Metric_Tertiary : 'All persons',
  	Metric_Quaternary : 'All ages',
  	Value : 54730
  }



  // Create a model from the user instance
  var Statistics = ds.buildModelFromInstance('Statistics', statistics, {idInjection: true});
  Statistics.attachTo(ds);


  // Use the model for CRUD
  var obj = new Statistics(statistics);

  console.log(obj.toObject());


  Statistics.create(statistics, function (err, u1) {
    console.log('Created: ', u1.toObject());
    Statistics.findById(u1.id, function (err, u2) {
      console.log('Found: ', u2.toObject());
  // Find statistics that have title = 'My Post' and content = 'Hello'
  Statistics.find({where: {and: [{Metric_Primary: 'Mental and behavioural disorders due to use of alcohol'},
                           {Metric_Secondary: 'Wholly attributable'}]}},
            function (err, statistics) {
              console.log('Found Where: ', statistics);
  });
    });
  });
};
