import React, { Component } from 'react';
import axios from 'axios';
import update from 'react-addons-update'
import CatList from './components/CatList.js'

import './App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      catList: [],
      preItemsLength: 0,
      itemsLength: 50,
      prevScrollpos: window.pageYOffset
    }

    this.handleScroll = this.handleScroll.bind(this);
  }

  // LifeCycle
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.infiniteScroll,true);
    this.getList()
  }

  //methods
  async getList() {
    const apiUrl = 'dummy-data/cats.json';

    const { data } = await axios.get(apiUrl)
    
    this.setState({
      catList: this.state.catList.concat(data.slice(this.state.preItemsLength, this.state.itemsLength))
    })
  }

  removeCardInData = (id) => {
    console.log('app.js')
    this.setState({
      catList: this.state.catList.filter(item => item._id !== id)
    })
  }

  handleScroll () {
    let currentScrollPos = window.pageYOffset;

    if (this.state.prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-50px";
    }
    this.state.prevScrollpos = currentScrollPos;
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight) {
      console.log('엥?')
      this.setState({
        preItemsLength: this.state.itemsLength,
        itemsLength: this.state.itemsLength+20
      })
      this.getList()
    }
  }

  render() {
    return (
      <div className="App">
        <header id="header">
          <span>안녕하세요! 관리자님!</span>
        </header>
        
        <CatList 
          data={this.state.catList} removeCard={this.removeCardInData}>
        </CatList>
      </div>
    );
  }
}

export default App;
