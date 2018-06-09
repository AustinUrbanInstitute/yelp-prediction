'use strict';

//CHANGE IF NEEDED
const week = "6-03";
const rad = '500';
const lim = '50';

const delay = 3000;


//IMPORTANT STUFF
const fs = require('fs');
const yelp = require('yelp-fusion');
const apiKey = 'vh6DjxxtyWJKmdoXmc6KCTrd7ihiMdpZxwGoV1eJA94VtuaY37rMxC3nGAz0I2zQt8QWG9842-KxyUjI_wOnzJ4OVkOlFOtkMbQ5VFuo42z1h7DNINNyilMQJzILW3Yx';
const client = yelp.client(apiKey);
var categoryList = ["restaurants", "groceries", "laundry", "fashion", "gas", "parks", "recreation", "hotels", "shops", "businesses", "companies"];

//GET DATA IN SINGLE CIRCLE FOR 1 CATEGORY
function getCategoryData(lat, long, name, week, category){
  var searchRequest = {
    term: category,
    latitude: lat,
    longitude: long,
    radius: rad,
    limit: lim
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
}

//GET DATA FOR SINGLE CIRCLE IN ALL CATEGORIES
function getAllData(name, lat, long, week){
    for(var i = 0; i < categoryList.length; i++){
          getCategoryData(lat, long, name, week, categoryList[i]);
    }
}



//DO THIS ONE BY ONE!!!!
//getAllData('cesar-chavez-1','30.259449', '-97.731374', week);
//getAllData('cesar-chavez-2', '30.257774','-97.726584', week );
//getAllData('cesar-chavez-3', '30.256128','-97.721698', week );
//getAllData('cesar-chavez-4', '30.254386','-97.716892', week );

//getAllData('north-lamar-1','30.367159','-97.694642', week);
//getAllData('north-lamar-2',  '30.371202','-97.692360', week );
//getAllData('north-lamar-3',  '30.375163','-97.690042', week );
//getAllData('north-lamar-4', '30.379206','-97.687889' , week );

//MLK
//getAllData('mlk-1','30.279220','-97.723765', week);
//getAllData('mlk-2','30.280146','-97.718743', week);
//getAllData('mlk-4', '30.281780','-97.708356' , week);
getAllData('mlk-3','30.280965','-97.713463', week);

/*
//DECLARE ALL MAJOR AREAS HERE
const area1Coordinates = [
  {lat: '30.259449', long: '-97.731374'},
  {lat: '30.257774', long: '-97.726584'},
  {lat: '30.256128', long: '-97.721698'},
  {lat: '30.254386', long: '-97.716892'}];
const area1 = {name: 'cesar-chavez', coordinates: area1Coordinates};

//CALL DATA FUNC HERE
getAllData(area1);

*/