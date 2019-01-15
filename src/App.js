import React, { Component } from 'react';
import axios from 'axios';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import CatList from './components/CatList.js';

import './App.scss';

@inject("catDataStore")
@observer
class App extends Component {
  @observable prevScrollpos = window.pageYOffset
  @observable preItemsLength = 0
  @observable itemsLength = 0

  constructor(props) {
    super(props);
  
    this.handleScroll = this.handleScroll.bind(this);
  }

  // LifeCycle
  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.infiniteScroll,true);
    this.preItemsLength = this.props.catDataStore.preItemsLength
    this.itemsLength = this.props.catDataStore.itemsLength
    this.getList()
  }

  //methods
  async getList() {
    const apiUrl = 'dummy-data/cats.json';

    const { data } = await axios.get(apiUrl)
    
    this.props.catDataStore.setCatData(this.props.catDataStore.catList.concat(data.slice(this.preItemsLength, this.itemsLength)))
    this.props.catDataStore.setItemsLength(this.preItemsLength, this.itemsLength)
  }

  handleScroll () {
    let currentScrollPos = window.pageYOffset;

    if (this.prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-50px";
    }
    this.prevScrollpos = currentScrollPos;
  }

  infiniteScroll = () => {
    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
    let scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

    let clientHeight = document.documentElement.clientHeight;

    if(scrollTop + clientHeight === scrollHeight) {


      this.preItemsLength = this.props.catDataStore.itemsLength
      this.itemsLength = this.props.catDataStore.itemsLength+20
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
          data={this.props.catDataStore.catList}>
        </CatList>
      </div>
    );
  }
}

export default App;
