import React, {Component} from 'react';

const API = "http://suraksha-mitra-crowd-management.us-e1.cloudhub.io/countPeople"
class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      hits : []
    };
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;
 
    return (
      <div>
      <h1>
        count
      </h1>
      <h2>
        hits.count
      </h2>
      </div>
    );
  }

}

export default App;
