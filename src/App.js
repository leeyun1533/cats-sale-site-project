import React, { Component } from 'react';
import './App.css';

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
    const apiUrl = 'dummy/cats.json';

    const { data } = await axios.get(apiUrl)
    this.setState({
      catList: data
    })
    console.log(this.state.catList[0])

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>관리자님 어서오세요.</span>
        </header>
      </div>
    );
  }
}

export default App;
