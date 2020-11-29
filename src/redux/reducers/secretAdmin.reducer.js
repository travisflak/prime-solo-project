//fetchgGroceries reducer for returning the grocery list items
const fetchUsers = (state = [], action) => {
    switch (action.type) {
      case 'SET_ADMIN_DATA':
        return ( action.payload )
      default:
        return state;
    }
  };

  export default fetchUsers;