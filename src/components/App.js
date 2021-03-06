// first attempt 5/16/18
// import React, { Component } from 'react';
//
// import FruitBasket from './FruitBasket';
//
// // goal only have state maintained here
// // all App does so far is call FruitBasket
//
// // const App = () => <FruitBasket />;
//
// // turn App into a Component object
// // added states according to tests
//
// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       fruit: [],
//       filters: [],
//       currentFilter: null
//     }
//   }
//
//   componentDidMount() {
//     this.fetchFilters();
//     this.fetchFruit();
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ currentFilter: event.target.value });
//   }
//
//   fetchFilters = () => {
//       fetch('/api/fruit_types')
//         .then(response => response.json())
//         .then(filters => this.setState({ filters }));
//     }
//
//   fetchFruit = () => {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(fruit => this.setState({ fruit }));
//   }
//
//   render() {
//     return (
//       <FruitBasket
//         updateFilterCallback={this.handleFilterChange} fruit={this.state.fruit}
//         filters={this.state.filters} currentFilter={this.state.currentFilter}
//       />
//     )
//   }
// }
//
// export default App;

// second attempt 11/17/18
import React, { Component } from 'react';

import FruitBasket from './FruitBasket';

class App extends Component {
  constructor() {
    super();

    // combine items from prev state into one
    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruit = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));

  }

  handleFilterChange = event => {
      console.log('new filter: ', event.target.value);
      this.setState({ currentFilter: event.target.value });
    }

  componentDidMount() {
    this.fetchFilters();
    this.fetchFruit();
  }

  render() {
    return (
      <div>
        <FruitBasket
          fruit={this.state.fruit}
          filters={this.state.filters}
          currentFilter={this.state.currentFilter}
          updateFilterCallback={this.handleFilterChange}
        />
      </div>
    )
  }


}

export default App;
