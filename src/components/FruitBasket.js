// first attempt 5/16/18
// import React  from 'react';
//
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';
//
// // this calls upon Filter and FilteredFruitList
// // state consists of selectedFilter and filters
// // not sure why this.state.filters is necessary
//
// // class FruitBasket extends Component {
// //   constructor() {
// //     super();
// //
// //     this.state = {
// //       filters: [],
// //       selectedFilter: null
// //     };
// //   }
// //
// //   // this passes the new filter state to Filter as a prop
// //   // this affects the state of FruitBasket, but in Filter it just handles the UI change when you select a different filter
// //   // and when that state change happens the new filter prop for FilteredFruitList gets passed
// //   // handleFilterChange = event => {
// //   //   console.log('new filter: ', event.target.value);
// //   //   this.setState({ selectedFilter: event.target.value });
// //   // }
// //
// //   render() {
// //     return (
// //       <div className="fruit-basket">
// //         <Filter handleChange={this.handleFilterChange} />
// //         <FilteredFruitList
// //           filter={this.state.selectedFilter} />
// //       </div>
// //     );
// //   }
// // }
//
// const FruitBasket = ({ fruit, filters, currentFilter, updateFilterCallback}) => {
//   return (
//         <div className="fruit-basket">
//           <Filter
//             handleChange={updateFilterCallback}
//             filters={filters}
//           />
//           <FilteredFruitList
//             filter={currentFilter}
//             fruit={fruit}
//           />
//         </div>
//   )
// }
//
// FruitBasket.defaultProps = {
//   fruit: [],
//   filters: [],
//   currentFilter: null,
//   updateFilterCallback: function() {}
// }
//
// export default FruitBasket;

// second attempt 11/17/18
// import React, { Component }  from 'react';
//
// import Filter from './Filter';
// import FilteredFruitList from './FilteredFruitList.js';
//
// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }
// export default FruitBasket;

import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, currentFilter, updateFilterCallback }) => {
  return (
    <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={updateFilterCallback}
      />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter}
      />
    </div>
  )
};

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: function() {}
}

export default FruitBasket;
