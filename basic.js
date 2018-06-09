'use strict';

const yelp = require('yelp-fusion');
const apiKey = 'vh6DjxxtyWJKmdoXmc6KCTrd7ihiMdpZxwGoV1eJA94VtuaY37rMxC3nGAz0I2zQt8QWG9842-KxyUjI_wOnzJ4OVkOlFOtkMbQ5VFuo42z1h7DNINNyilMQJzILW3Yx';

var categoryList = ["", "restaurants", "groceries", "laundry", "fashion", "gas station", "parks", "recreation"];

  const searchRequest = {
    term: 'hotels',
    latitude: ' 30.259449',
    longitude: '-97.731374',
    radius: '500',
    limit: '50'
  };
  
  const client = yelp.client(apiKey);
  
  client.search(searchRequest).then(response => {
    //const firstResult = response.jsonBody.businesses[0];
    const allResults = response.jsonBody;
    const prettyJson = JSON.stringify(allResults, null, 4);
  
    var t = response.jsonBody.total;
    console.log("NUMBER RESULTS: " + t);
    var i = 0;
    if(t >= 50){
      console.log("RESULTS OVERFLOW");
      t = 50;
    }
    console.log(allResults);

    /*
    for(var i = 0; i < t; i++){
      const b = response.jsonBody.businesses[i];
      console.log("Name: " + b.name);
      console.log("ID: " + b.id);
      console.log("Coordinates: " + b.coordinates.longitude);
      console.log("Coordinates: " + b.coordinates.latitude);
      console.log("Rating: " + b.rating);
      console.log("Review Count: " + b.review_count);
      console.log("Price: " + b.price);
      console.log();
    }
    */
  
  }).catch(e => {
    console.log(e);
  });
  console.log();
