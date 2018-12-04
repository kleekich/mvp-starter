import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import styles from './components/styles/index.css';
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
    return (<div className={styles.body}>
      <span className={styles.haeder}>
        <img className={styles.mealpal} src='https://s3-eu-west-1.amazonaws.com/tpd/logos/58bfeaf90000ff00059e0e26/0x0.png'/>
        <img className={styles.yelp} src='https://cdn.vox-cdn.com/thumbor/IolwDNln-KxOO4G36GHWpYWixA8=/0x0:1100x733/1820x1213/filters:focal(0x0:1100x733):format(webp)/cdn.vox-cdn.com/assets/884081/Yelp_Logo_No_Outline_Color-01.jpg'/>
      </span>
      <h1>Mealpal Restaurants with Yelp Rating</h1>
      
      <List items={this.state.items}/>
      <button onClick={() => this.handleClickButton(this.state.page-1)}>Prev</button><button onClick={() => this.handleClickButton(this.state.page+1)}>Next</button>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));