import React, { Component } from 'react';
import CatItem from './CatItem'
import _ from 'lodash'
import '../styles/CatList.scss'


class CatList extends Component {
  static defaultProps = {
   data: [],
   removeCard: () => console.warn('onRemove not defined')
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { data, removeCard } = this.props;
    const adItem = {
      ad: true,
      _id: _.random(data.length+1)
    }

    let randomNum = 0

    if(data.length>0){
      randomNum = _.random(data.length-15,data.length)
      data.splice(randomNum, 0, adItem);
    }

    const list = _.map(data, item => (<CatItem key={item._id} item={item} removeCard={removeCard}></CatItem>))

    return (
      <div className="cats-sale-container">
        {list}
      </div>
    );
  }
}

export default CatList;