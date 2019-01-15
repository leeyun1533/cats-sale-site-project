import React, { Component } from 'react';
import CatItem from './CatItem'
import _ from 'lodash'
import '../styles/CatList.scss'


class CatList extends Component {
  static defaultProps = {
   data: [],
  }
  componentDidMount() {
  }

  render() {
    const { data } = this.props;
    let adItem = {
      ad: true,
    }

    let randomNum = 0

    if(data.length>0) {
      if(data.length <= 40){
        for(let i=20; i<40; i+=20) {
          randomNum = _.random(i-15,i)
          data.splice(randomNum, 0, adItem)
        }
      } else {
        randomNum = _.random(data.length-15,data.length)
        data.splice(randomNum, 0, adItem);
      }
    }

    const list = _.map(data, (item,index) => (<CatItem key={index} item={item}></CatItem>))

    return (
      <div className="cats-sale-container">
        {list}
      </div>
    );
  }
}

export default CatList;