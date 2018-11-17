// first attempt 5/16/18
// import React from 'react';
//
// // class FilteredFruitList extends Component {
// //   constructor(props) {
// //     super(props);
// //
// //     this.state = {
// //       items: []
// //     };
// //   }
// //
// //   // list is done by saying if it's not "all" filters then push all of the matching fruits to items[]
// //   // returns the list of fruits displayed by emoji (item.char)
// //   componentDidMount() {
// //     fetch('/api/fruit')
// //       .then(response => response.json())
// //       .then(items => this.setState({ items }));
// //   }
// //
// //   render() {
// //     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
// //
// //     return (
// //       <ul className="fruit-list">
// //         {list.map((item, index) => <li key={index}>{item.char}</li>)}
// //       </ul>
// //     );
// //   }
// // }
//
// const FilteredFruitList = ({fruit, filter}) => {
//   const list = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);
//
//   return (
//
//     <ul className="fruit-list">
//       {list.map((item, index) => <li key={index}>{item.char}</li>)}
//     </ul>
//   )
// }
//
// FilteredFruitList.defaultProps = {
//   fruit: [],
//   filter: null
// }
//
// export default FilteredFruitList;

// second attempt 11/17/18
// import React, { Component } from 'react';
//
// class FilteredFruitList extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       items: []
//     };
//   }
//
//   componentDidMount() {
//     fetch('/api/fruit')
//       .then(response => response.json())
//       .then(items => this.setState({ items }));
//   }
//
//   render() {
//     const list = !this.props.filter || this.props.filter === 'all' ? this.state.items : this.state.items.filter(i => i.fruit_type === this.props.filter);
//
//     return (
//       <ul className="fruit-list">
//         {list.map((item, index) => <li key={index}>{item.char}</li>)}
//       </ul>
//     );
//   }
// }
//
// export default FilteredFruitList;

import React from 'react';

const FilteredFruitList = ({ fruit, filter }) => {
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

  return (
  <ul className="fruit-list">
    {list.map((item, index) => <li key={index}>{item.char}</li>)}
  </ul>
  )
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
}

export default FilteredFruitList;
