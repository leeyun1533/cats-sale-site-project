import { observable, action } from 'mobx'

class CatDataStore {
  @observable catList
  @observable preItemsLength
  @observable itemsLength

  constructor() {
    this.catList = []
    this.preItemsLength = 0
    this.itemsLength = 40
  }

  @action.bound
  setCatData(catList) {
    this.catList = catList
  }
  @action.bound
  removeCard(id) {
    this.catList = this.catList.filter(item => item._id !== id)
  }
  @action.bound
  setItemsLength(preItemsLength, itemsLength) {
    this.preItemsLength = preItemsLength
    this.itemsLength = itemsLength
  }
}

export default CatDataStore