import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Getting quote for you...'
    };
    this.getQuote = this.getQuote.bind(this);
    this.getQuote();
  }

  getQuote() {
    const app = this;
    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
      .then((response) => {
        response.json()
          .then((json) => {
            let p = document.createElement('p');
            p.insertAdjacentHTML('afterbegin', json[0]['content']);
            app.setState({
              quote: p.textContent
            });
          });
        });
  }

  render() {
    return (
      <div className="container">
        <QuoteBox quote={this.state.quote} getQuote={this.getQuote}/>
      </div>
    );
  }
}

export default App;
