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

    return (
      
      <div className="cat-item-container">
         {
           ad ? (
              <div className="cat-ad-card">
                <div className="cat-ad-card-content">
                  <span>사지 말고 입양<br></br>하세요!</span>
                </div>
              </div>
         ) : (
          <div className="cat-item-detail">
            <div className="cat-item-detail-header" style = {{ backgroundImage: `url(${ imageUrl })`}}>
              { gender === 'male' ? <span>수컷이다냥</span> : <span>암컷이다냥</span> }
            </div>
            <div className="cat-item-detail-body">
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