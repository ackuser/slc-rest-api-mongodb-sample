# slc-rest-api-mongodb-sample
slc-rest-api-mongodb-sample


https://data.gov.uk/dataset/statistics_on_alcohol_england

cd dataset/alc-eng-2015-csv-data-pack

mongoimport -d Hospital_Admissions_Age_Gender_2015 -c things --type csv --file Hospital_Admissions_Age_Gender_2015.csv --headerline

slc loopback

slc loopback:datasource Hospital_Admissions_Age_Gender_2015

//Create a model in your app
   //$ slc loopback:model

 Compose your API, run, deploy, profile, and monitor it with Arc
   $ slc arc

 Run the app
   $ node .
