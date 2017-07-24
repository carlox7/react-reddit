import '../style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import superagent from 'superagent';

const API_URL = 'http://www.reddit.com/r';

class SearchForm extends React.Component {
  render(){
    return <p>cool</p>;
  }
}

class SearchResultsList extends React.Component {
  render(){
    return <p> blister in the sun </p>;
  }
}

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      results: null,
      searchErrorMessage: null,
    };
    this.redditBoardFetch = this.redditBoardFetch.bind(this);
  }

  componentDidUpdate(){
    console.log('::::STATE:::', this.state);
  }

  redditBoardFetch(board) {
    superagent.get(`${API_URL}/${board}.json`)
      .then(res => {
        console.log('request success', res);
        this.setState({
          results: res.body,
          searchErrorMessage: null,
        });
      })
      .catch(err => {
        this.setState({
          results: null,
          searchErrorMessage: `unable to find the reddit board ${board}`,
        })
      })
  }

  render(){
    return (
      <main>
      <h1> cool beans </h1>
      <SearchForm />
      <SearchResultsList />
      </main>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
