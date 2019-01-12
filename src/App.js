import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import CatList from './components/CatList.js'

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      catList: []
    }
  }
  
  componentDidMount () {
    this.getList()
  }
  async getList() {
    const apiUrl = 'dummy-data/cats.json';

    const { data } = await axios.get(apiUrl)
    this.setState({
      catList: data
    })

  }
  render() {
    return (
      <div className="App">
        <header>
          <span>관리자님 어서오세요.</span>
        </header>
        <CatList data={this.state.catList}></CatList>
      </div>
    );
  }
}

export default App;
