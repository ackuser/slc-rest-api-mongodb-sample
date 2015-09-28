# slc-rest-api-mongodb-sample

This project contains examples to demonstrate LoopBack MongoDB connector. The MongoDB connector module allows LoopBack applications to interact with MongoDB databases for our data models.

For those who are not familiar with LoopBack, it’s an open source mobile backend framework that connects mobile devices to enterprise data. LoopBack provides out-of-box data access capabilities for models through pluggable datasources and connectors. Connectors provide connectivity to variable backend systems, such as databases or REST APIs. Models are in turn exposed to mobile devices as REST APIs and SDKs.

##Motivation

    1. Create my own portfolio with several products
    2. Go deeper with javascript and the MEAN Stack
    3. Creating a new REST API for MongoDB.
    4. Learn scaffolding to make REST API with MongoDB using StrongLoop and LoopBack
    5. Using last technologies, new paradigms and new and innovatives ways to solve common problems
    6. Make a contribution to the community of Open Sources with some examples


##Prerequisite

First, make sure you have strongloop installed.

```
$ npm install -g strongloop
```

Next, you need add our dataset to MongoDB. I have got this dataset from https://data.gov.uk/dataset/statistics_on_alcohol_england
with only testing purposes


You will be able to add a collection of the dataset to MongoDB doing something like that:

```
$ cd dataset/alc-eng-2015-csv-data-pack
```
```
$ mongoimport -d Hospital_Admissions_Age_Gender_2015 -c things --type csv --file Hospital_Admissions_Age_Gender_2015.csv --headerline
```

##Install dependencies

I have already configured all the dependecies on this project, so you will only need to install them from the root folder with:

```
$ npm install -g strongloop
```

##Configure the data source

The generated data source use the memory connector by default, to connect to MySQL, we'll modify the data source configuration as follows.

```
$ nano datasources.json
```

In datasoures.json, replace the data source configuration for MongoDB with the following snippet:

```
  "Hospital_Admissions_Age_Gender_2015": {
    "host": "localhost",
    "port": 27017,
    "database": "Hospital_Admissions_Age_Gender_2015",
    "password": "",
    "name": "Hospital_Admissions_Age_Gender_2015",
    "server": {
      "auto_reconnect": true,
      "reconnectTries": 100,
      "reconnectInterval": 1000
    },
    "connector": "mongodb",
    "user": ""
  }
```

or change it launching StrongLoop Arc

```
$ cd your-project
```
```
$ slc arc
```

Arc is running here: http://localhost:port

You'll be able to change the config of the datasource there

##Run the application

```
$ node .
```

Open your browser now.

All the REST APIs can be explored at:

```
http://127.0.0.1:3000/explorer
```

##Bibliography

* https://docs.strongloop.com/display/APIS/Creating+a+new+API
* https://docs.strongloop.com/display/public/LB/MongoDB+connector
* https://docs.strongloop.com/display/public/LB/Creating+models+from+unstructured+data
* http://khaidoan.wikidot.com/strongloop-model
* https://strongloop.com/wp-content/uploads/2013/12/StrongLoop-Dec-5-LoopBack-Webinar.pdf
* https://docs.strongloop.com/display/public/LB/Creating+models
* https://docs.strongloop.com/display/LB1/Creating+models+by+instance+introspection
* https://docs.strongloop.com/display/public/LB/Creating+a+database+schema+from+models
