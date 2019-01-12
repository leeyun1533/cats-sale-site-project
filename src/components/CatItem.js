import React, { Component } from 'react';

class CatItem extends Component {
  static defaultProps = {
    item: {
        _id: 'sca',
        imageUrl: 'https://loremflickr.com/320/240?cat=0',
        age: '2',
        name: '까미',
        gender: ''
    }
  }
  render() {
    const {
        _id,
        imageUrl,
        age,
        name,
        gender
    } = this.props.item;
    
    return (
      <div>
        <div><b>{name}</b></div>
      </div>
    );
  }
}

export default CatItem;