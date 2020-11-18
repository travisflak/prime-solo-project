
//fetchgGroceries reducer for returning the grocery list items
const fetchGroceries = (state = [], action) => {
    switch (action.type) {
      case 'ADD_GROCERIES':
        return [ ...state, action.payload ]
      default:
        return state;
    }
  };