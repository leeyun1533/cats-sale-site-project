import React, { Component } from 'react';
import '../styles/CatItem.scss'

class CatItem extends Component {
  static defaultProps = {
    item: {
        _id: 'sca',
        imageUrl: 'https://loremflickr.com/320/240?cat=0',
        age: '2',
        name: '까미',
        gender: '',
        ad: false
    }
  }
  clickRemoveButton = () => {
    const { item, removeCard } = this.props;
    removeCard(item._id);
  }

  render() {
    const {
        _id,
        imageUrl,
        age,
        name,
        gender,
        ad
    } = this.props.item;
    const isAdCard = ad
    return (
      
      <div className="cat-item-container">
         {
           isAdCard ? (
              <div>
                광고
              </div>
         ) : (
          <div>
            <img src={imageUrl} alt="" width="100%" height="100px"/>
            <div className="cat-item-detail">
              <p className="cat-item-detail-name">{name}</p>
              <p className="cat-item-detail-age">{age}입니다.</p>
              <button className="cat-item-delete-button" onClick={this.clickRemoveButton}>삭제</button>
            </div>
          </div>         
          )}
      </div>
    );
  }
}

export default CatItem;