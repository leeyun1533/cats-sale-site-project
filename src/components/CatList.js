import React, { Component } from 'react';
import CatItem from './CatItem'
import _ from 'lodash';

class CatList extends Component {
  static defaultProps = {
   data: [] 
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    const { data } = this.props;
    const list = data.map(
      item => (<CatItem key={item._id} item={item}></CatItem>)
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default CatList;