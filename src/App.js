import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Getting quote for you...'
    };
    this.getQuote();
  }

  getQuote() {
    const oQB = this;
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then((response) => {
        response.json()
          .then((json) => {
            let p = document.createElement('p');
            p.insertAdjacentHTML('afterbegin', json[0]['content']);
            oQB.setState({
              quote: p.textContent
            });
          });
        });
  }

  render() {
    return (
      <div className="container">
        <QuoteBox quote={this.state.quote}/>
      </div>
    );
  }
}

export default App;
