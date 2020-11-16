const mapStoreToProps = (reduxState) => {
  return {
    // reduxState properties bound to "props.store"
    // ---------
    // this was abstracted into a function so it could be used in another file 
    //(eg using it in the UserPage function in the USerPage js file). The same thing is being done in the Nav.js file, it's being imported
    //at the top and being used in the Nav fun function
    store: reduxState,
  };
};

export default mapStoreToProps;
