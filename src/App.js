import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './component/Header/Header';
import Product from './component/Product/Product'
import Form from './component/Form/Form';
import Dashboard from './component/Dashboard/Dashboard';


class App extends Component {
  constructor(){
    super();
    this.state= {
      inventory: [],
    }
  }
  
  componentDidMount(){
    axios.get('/api/inventory')
    .then(res=> {
        this.setState({inventory: res.data})
    })
}

  
  render() {
    return (
      <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
      <Product/>
      </div>
    );
  }
}

export default App;
