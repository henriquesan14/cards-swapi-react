import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Card from './Card.js';
import axios from 'axios';

const listStyle = {
  display: 'flex',
}

const loadingStyle = {
  color: 'yellow',
  fontSize: '20px',
  textAlign: 'center'
}

const btnStyle = {
  padding: '5px 15px',
  backgroundColor: 'transparent',
  color: 'yellow',
  border: '1px solid yellow',
  margin: '5px 10px 10px 10px',
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      pagePersons: {results: []},
      loading: false,
      next: () => {
        let length = this.state.pagePersons.next.split('').length;
        let page = this.state.pagePersons.next.split('')[length -1];
        this.getPersons(page);
      },
      previous: () => {
        let length = this.state.pagePersons.previous.split('').length;
        let page = this.state.pagePersons.previous.split('')[length -1];
        this.getPersons(page);
      }
    };
  }

  componentDidMount() {
    this.getPersons();
  }

  getPersons(page = 1){
    this.setState({loading: true});
    axios.get(`https://swapi.co/api/people?page=${page}`).then((res)=> {
      const pagePersons = res.data;
      this.setState({pagePersons});
    })
    .catch(err => console.log(err))
    .finally(() => {
      this.setState({loading: false});
    });
  }


  renderList(){
    if(!this.state.loading){
      return <div style={listStyle}>{this.state.pagePersons.results.map(person => <Card person={person} />)}</div>;
    }
  }

  render() {
    return (
      <div>
        <button disabled={!this.state.pagePersons.previous} style={btnStyle} onClick={this.state.previous}>Anterior</button>
        <button disabled={!this.state.pagePersons.next} style={btnStyle} onClick={this.state.next}>Próximo</button>
        {this.state.loading ? <span style={loadingStyle}>Carregando...</span> : null}
        {this.renderList()}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
