
//fetchgGroceries reducer for returning the grocery list items
const fetchGroceries = (state = [], action) => {
    switch (action.type) {
      case 'SET_GROCERIES':
        return ( action.payload )
      default:
        return state;
    }
  };

  export default fetchGroceries;