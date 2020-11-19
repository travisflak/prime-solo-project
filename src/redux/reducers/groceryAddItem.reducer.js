

const addGroceries = (state = [], action) => {
    switch (action.type) {
      case 'SET_GROCERIES':
        return [ ...state, action.payload ]
      default:
        return state;
    }
  };