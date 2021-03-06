// first attempt 5/16/18
// import React from 'react';
//
// // class Filter extends Component {
// //   constructor() {
// //     super();
// //
// //     this.state = {
// //       filters: []
// //     };
// //   }
// //
// //   componentWillMount() {
// //     this.fetchFilters();
// //   }
// //
// //   fetchFilters = () => {
// //     fetch('/api/fruit_types')
// //       .then(response => response.json())
// //       .then(filters => this.setState({ filters }));
// //   }
// //
// //   // handling change here takes the selectedFilter state (received as a prop) from FruitBasket
// //   // the group of filters comes from the fetch that occurs during componentWillMount()
// //   render() {
// //     return (
// //       <select onChange={this.props.handleChange} defaultValue='all'>
// //         <option value='all'>All</option>
// //         {this.state.filters.map(filter =>
// //           <option key={filter} value={filter}>{filter}</option>
// //         )}
// //       </select>
// //     );
// //   }
// // }
//
// const Filter = ({ filters, handleChange }) => {
//   return (
//     <select onChange={handleChange} defaultValue='all'>
//       <option value='all'>All</option>
//       {filters.map(filter =>
//         <option key={filter} value={filter}>{filter}</option>
//       )}
//     </select>
//   )
// }
//
// Filter.defaultProps = {
//   filters: [],
//   handleChange: function() {}
// }
//
// export default Filter;

// second attempt 11/17/18
// import React, { Component } from 'react';
//
// class Filter extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: []
//     };
//   }
//
//   componentWillMount() {
//     this.fetchFilters();
//   }
//
//   fetchFilters = () => {
//     fetch('/api/fruit_types')
//       .then(response => response.json())
//       .then(filters => this.setState({ filters }));
//   }
//
//   render() {
//     return (
//       <select onChange={this.props.handleChange} defaultValue='all'>
//         <option value='all'>All</option>
//         {this.state.filters.map(filter =>
//           <option key={filter} value={filter}>{filter}</option>
//         )}
//       </select>
//     );
//   }
// }
//
// export default Filter;

import React from 'react';

const Filter = ({ filters, handleChange }) => {
  return (
    <select onChange={handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: function(){}
}

export default Filter;
