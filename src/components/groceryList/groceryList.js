import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './groceryList.css';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons'

const plusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const minusSquare = <FontAwesomeIcon icon={faMinusSquare} />

class groceryList extends Component {

    state = {
        groceryList: [
            
        ],
        user: 0,

        newItem: {  
            item: '',
            quantity: 0,
            shopped: false,
        }
    };

    // everytime the component mounts set state back to false for shopped items
    componentDidMount() {
    this.getGroceries();
    this.setState({
        ...this.state,
        newItem: {
            ...this.state.newItem, 
            shopped: false
            }
        })
    }
    
    getGroceries=() => {
        
    
        this.props.dispatch({type: 'FETCH_GROCERIES'});
        // console.log('in getGroceries', this.props.store.groceryListItems);
        // let groceryList=[ ]
        // for (let item of this.props.store.groceryListItems) {
        //     console.log('in this props store groceryListItems', item);
            
        // }
        
        this.setState({...this.state, groceryList});

    }
    //delete function for delting a row in the groceries table
    deleteItem(deletingItem) {
        
        this.props.dispatch({type: 'DELETE_GROCERIES', payload: {id: deletingItem}})
    }

    toggleShopped(groceryItem) {
        
        this.props.dispatch({type: 'REFRESH_SHOPPED', payload: groceryItem})
        this.getGroceries()
    }

    checkIfShopped(isItShopped) {
        if(isItShopped === true) {
            return (
                <div className='shopped'>
                <p>This item is in your shopping cart.</p>
                </div>
                )
            
        }
        else{
            return (
                <div className='notShopped'>
                <p>NOT shopped!</p>
                </div>
                )
        
        }
    }

    refreshAllShoppedItems() {
        
        this.props.dispatch({type: 'REFRESH_ALL_SHOPPED'})
        this.getGroceries()
    }

    //Get the button:
//     mybutton = document.getElementById("myBtn");

//     // When the user scrolls down 20px from the top of the document, show the button
//     onscroll = function() {scrollFunction()};

//     scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//         } else {
//         mybutton.style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
// topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

  render() {
    return (
      <div>
         
        <section className="listBody">
                            {/* //createa back to top of screen button  */}
                            {/* <button onclick={this.topFunction} title="Go to top">Top</button> */}
        <div className="listContainer">
        <header>
            {/* button for user to click and pushes them to the addItem page */}
                <Button className="addItemBtn" color="primary" onClick={() => this.props.history.push('/addItem')}> Add Item to your List
                <span className="addButton">{plusSquare}</span></Button>

                <button className="refreshAllShopped" onClick={() => this.refreshAllShoppedItems()} >refresh all shopped</button>

        </header>
        <ol className="groceryList">     
        {/* //map through graoceryItem */}
            {this.props.store.groceryListItems.map((groceryItem) => {
                console.log(groceryItem);
                
                return(
                <li key={groceryItem.id} className={this.checkIfShopped(groceryItem.shopped)}>{groceryItem.item}
                    <input type="number" min={0} defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <Button color="primary" onClick={() => this.toggleShopped(groceryItem)}>Shopped?</Button>
                  <div>
                    {this.checkIfShopped(groceryItem.shopped)}
                  </div>
                    <Button color="secondary" onClick={() => this.deleteItem(groceryItem.id)}>Delete Item<span className="deleteButton">{minusSquare}</span></Button>
                    <hr/>
                </li>)
                
            })}
        </ol>
        </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);