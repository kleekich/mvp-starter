import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
//import restaurants from './database-mongo/restaurant.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      page: 0,

    }
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: `/items/${this.state.page}`,
      method: 'POST',
      data: this.state.page,
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
  handleClickButton(pageRequested) {
    console.log("INVOKED!!!!!!!!!");
    if(pageRequested < 0) pageRequested = 0;
    else if( pageRequested > 10) pageRequested = 10;
    $.ajax({
      url: `/items/${pageRequested}`,
      method: 'POST',
      success: (data) => {
        var restArray = JSON.parse(data);
        console.log('**************************');
        console.log('Data Recieved:', restArray);
        console.log('**************************');
        this.setState({
          items: restArray,
          page: pageRequested
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  render () {
    return (<div>
      <h1>Mealpal Restaurant List</h1>
      <List items={this.state.items}/>
      <p>Page {this.state.page}</p>
      <button onClick={() => this.handleClickButton(this.state.page-1)}>Prev</button><button onClick={() => this.handleClickButton(this.state.page+1)}>Next</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));