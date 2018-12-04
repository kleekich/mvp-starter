var express = require('express');
var bodyParser = require('body-parser');
const fetch = require("node-fetch");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
var restaurants = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));



app.post('/items/:id', function(req, res){
  var allRestaurants  = ["Elixiria", "Hive Coffee Bar", "Hanlin Tea House", "Stone Korean Kitchen", "Sunrise Deli", "Golden Flower Vietnamese Restaurant", "Thrive Juicery - Embarcadero Center", "Sweet Joanna's Cafe", "Mehfil Indian", "Chez BeeSen", "iKU Sushi", "Front Door Cafe", "Native Juice Company - 2nd St.", "Fayala", "Cafe Tiramisu", "Greek Town", "Cantina Verde", "Fang", "Sushi Umi", "Breaking Bread", "ThirstyBear Brewing Co.", "Manhattan Hub", "Tokyo Express - Sacramento", "Tokyo Express - Moscone Center", "Cafe Med (formerly La Nouvelle Patisseri)", "The Pressed Cafe", "Vanda Siam Restaurant", "Tokyo Express - Spear St.", "Frog Hollow Farm Cafe", "Il Canto Cafe", "Soma Wines &amp; Spirits", "Tokyo Express - Battery St.", "Fleur de Sel", "Buckhorn Grill - Westfield", "Buckhorn BBQ - Market St.", "Dabba", "Torshi", "Green Olive SF", "Ohana Poke Bar", "Noodle Time", "Muskaan Cuisine of India", "Good Eats Cafe", "Sushi Taka", "Sausalito Cafe - 1st", "Jersey", "La Boulangerie - Sutter St.", "Chez Julien", "The Plant Cafe - Montgomery St.", "Lite Bite", "The Sini", "SOMA Eats", "BibimBar", "Matko", "SF Soup Co. - 1 California St.", "Locali Mediterranean", "Spice Kit", "Gambino's New York Subs", "La Boulangerie - Montgomery St.", "Patriot House", "RM 212", "Soma Chicken", "SAJJ Mediterranean - Fidi", "Halal Guys - O'Farrell St.", "Ladle &amp; Leaf - Battery St.", "Ladle &amp; Leaf - Crocker Galleria", "La Capra - Fremont St.", "Sababa - Commercial St.", "Ladle &amp; Leaf - 580 California St.", "SF Soup Co. - 315 California St.", "Ladle &amp; Leaf - Market St.", "Arabi Mediterranean Cuisine", "Ladle &amp; Leaf - Montgomery", "Thai-To-Go", "Sorabol Korean BBQ - Metreon", "Ladle &amp; Leaf - 2nd St.", "Illy Caffe - Sansome St.", "NewTree - California St.", "Illy Caffe - Montgomery St.", "Umami Burger - SoMa", "NewTree - Ecker St.", "Lee's Deli - Spear St.", "Prather Ranch American Eatery", "Orale Orale", "Sababa - Kearny St.", "Caffe Centro", "Portico Restaurant - Beale St.", "Niji Grill", "Illy Caffe - Battery St.", "The Melt - 925 Market St. at 5th", "Fresh Roll - Metreon", "HEYDAY - Mission St.", "Cafe Madeleine - New Montgomery St.", "Cafe Madeleine - California St.", "HEYDAY - Spear St.", "The Meatball Bar", "The Melt - Embarcadero", "Fresh Roll - FIDI", "Ayola - New Montgomery St.", "Henry's Hunan - Natoma", "Lee's Deli - 75 Battery St."];
  console.log("POST REQUESTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  console.log('Request Id: ', req.params.id);
  console.log("POST REQUESTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
  var id = req.params.id;
  var listLength = 5;
  var restaurants = allRestaurants.slice(id*10, id*10+listLength);
  var restaurantsObject = [];
  restaurants.map((restaurantName) => {
    console.log('Restaurant Name: ', restaurantName);
    var url = `https://api.yelp.com/v3/businesses/search?term=${restaurantName}&location=San Francisco&limit=1`;
    var otherPram = {
        // mode: "cors", // no-cors, cors, *same-origin
        // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: "same-origin", // include, *same-origin, omit
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer 0zmuDFhq8FjQzdIZcHQSIqXauqku2p5QmbeQ36zj7LBPjIGA6BbBnvcboNvp3OjRSOCv5hYH6y6bMbHRh0SPM2aBj7iuM3nb9S3T7wCJoPWlT6BfcED-_IB9YX8FXHYx'
      }
    }
    //fetchRestaurant(url, otherPram);
    fetch(url, otherPram)
    .then(data => { return data.json(); })
    .then(response => {
      // console.log('=========================================================');
      // console.log(response);
      // console.log('=========================================================');
      var restaurant = response.businesses[0];
      restaurantsObject.push(restaurant);
      if(restaurantsObject.length === restaurants.length){
        res.end(JSON.stringify(restaurantsObject));
      }
    })
    .catch(err => {
      console.log(err);
    });
  })

});

const fetchRestaurants = function(req, res){

  fetch(url, otherPram)
    .then(data => { return data.json(); })
    .then(res => {
      console.log(res);
      var restaurant = res.businesses[0];
      console.log('rating: ', restaurant.rating);
    })
    .catch(err => {
      console.log(err);
    });
}

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

