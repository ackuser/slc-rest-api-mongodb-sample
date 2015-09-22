var ds = app.dataSources.db;
MyModel = ds.createModel('mymodel', {
    _id: { type: ds.ObjectID, id: true }
});
