'use strict';

//CHANGE IF NEEDED
const lat = '30.257774';
const long = '-97.726584';
const name = "cesar-chavez-2";
const week = "5-27";

const fs = require('fs');
const yelp = require('yelp-fusion');
const apiKey = 'vh6DjxxtyWJKmdoXmc6KCTrd7ihiMdpZxwGoV1eJA94VtuaY37rMxC3nGAz0I2zQt8QWG9842-KxyUjI_wOnzJ4OVkOlFOtkMbQ5VFuo42z1h7DNINNyilMQJzILW3Yx';

var categoryList = ["", "restaurants", "groceries", "laundry", "fashion", "gas station", "parks", "recreation", "hotels"];
var category = "";
//RESTAURANTS
category = "restaurants";
  var searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  const client = yelp.client(apiKey);
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

  //GROCERIES
  category = 'groceries';
   searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

  //LAUNDRY
  category = 'laundry';
searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

   //FASHION
  category = 'fashion';
    searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

   //GAS STATIONS
   category = 'gas stations';
    searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

   //PARKS
   category = 'parks';
    searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

   //RECREATION
   category = 'recreation';
    searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson);  
  
  }).catch(e => {
    console.log(e);
  });
  console.log();

   //HOTELS
   category = 'recreation';
    searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: '500',
    limit: '50'
  };
  
  client.search(searchRequest).then(response => {
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(prettyJson);
    //RECORD JSON DATA
    fs.writeFileSync(week + '_'  + name + '_' + category + '.json', prettyJson); 
  
  }).catch(e => {
    console.log(e);
  });
  console.log();
