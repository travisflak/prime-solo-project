//fetchUsers reducer for returning the users list
const fetchUsers = (state = [], action) => {
    switch (action.type) {
      case 'SET_ADMIN_DATA':
        return ( action.payload )
      default:
        return state;
    }
  };

  export default fetchUsers;