import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
//import restaurants from './database-mongo/restaurant.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: ["Elixiria", "Hive Coffee Bar", "Hanlin Tea House", "Stone Korean Kitchen", "Sunrise Deli", "Golden Flower Vietnamese Restaurant", "Thrive Juicery - Embarcadero Center", "Sweet Joanna's Cafe", "Mehfil Indian", "Chez BeeSen", "iKU Sushi", "Front Door Cafe", "Native Juice Company - 2nd St.", "Fayala", "Cafe Tiramisu", "Greek Town", "Cantina Verde", "Fang", "Sushi Umi", "Breaking Bread", "ThirstyBear Brewing Co.", "Manhattan Hub", "Tokyo Express - Sacramento", "Tokyo Express - Moscone Center", "Cafe Med (formerly La Nouvelle Patisseri)", "The Pressed Cafe", "Vanda Siam Restaurant", "Tokyo Express - Spear St.", "Frog Hollow Farm Cafe", "Il Canto Cafe", "Soma Wines &amp; Spirits", "Tokyo Express - Battery St.", "Fleur de Sel", "Buckhorn Grill - Westfield", "Buckhorn BBQ - Market St.", "Dabba", "Torshi", "Green Olive SF", "Ohana Poke Bar", "Noodle Time", "Muskaan Cuisine of India", "Good Eats Cafe", "Sushi Taka", "Sausalito Cafe - 1st", "Jersey", "La Boulangerie - Sutter St.", "Chez Julien", "The Plant Cafe - Montgomery St.", "Lite Bite", "The Sini", "SOMA Eats", "BibimBar", "Matko", "SF Soup Co. - 1 California St.", "Locali Mediterranean", "Spice Kit", "Gambino's New York Subs", "La Boulangerie - Montgomery St.", "Patriot House", "RM 212", "Soma Chicken", "SAJJ Mediterranean - Fidi", "Halal Guys - O'Farrell St.", "Ladle &amp; Leaf - Battery St.", "Ladle &amp; Leaf - Crocker Galleria", "La Capra - Fremont St.", "Sababa - Commercial St.", "Ladle &amp; Leaf - 580 California St.", "SF Soup Co. - 315 California St.", "Ladle &amp; Leaf - Market St.", "Arabi Mediterranean Cuisine", "Ladle &amp; Leaf - Montgomery", "Thai-To-Go", "Sorabol Korean BBQ - Metreon", "Ladle &amp; Leaf - 2nd St.", "Illy Caffe - Sansome St.", "NewTree - California St.", "Illy Caffe - Montgomery St.", "Umami Burger - SoMa", "NewTree - Ecker St.", "Lee's Deli - Spear St.", "Prather Ranch American Eatery", "Orale Orale", "Sababa - Kearny St.", "Caffe Centro", "Portico Restaurant - Beale St.", "Niji Grill", "Illy Caffe - Battery St.", "The Melt - 925 Market St. at 5th", "Fresh Roll - Metreon", "HEYDAY - Mission St.", "Cafe Madeleine - New Montgomery St.", "Cafe Madeleine - California St.", "HEYDAY - Spear St.", "The Meatball Bar", "The Melt - Embarcadero", "Fresh Roll - FIDI", "Ayola - New Montgomery St.", "Henry's Hunan - Natoma", "Lee's Deli - 75 Battery St."],
      items: [],
      page: 0,

    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
      
        var restArray = JSON.parse(data);
        
        console.log('**************************');
        console.log('Data Recieved:', restArray);
        console.log('**************************');
        
        this.setState({
          items: restArray
        })

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
heandleNextPage() {
  $.ajax({

  })
}
  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));