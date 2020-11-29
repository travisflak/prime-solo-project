import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './groceryList.css';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';

const plusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const redoAlt = <FontAwesomeIcon icon={faRedoAlt} />

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
        this.setState({...this.state, groceryList});

    }
    //delete function for delting a row in the groceries table
    deleteItem(deletingItem) {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to delete this item?",
            icon: "info",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) { this.props.dispatch({type: 'DELETE_GROCERIES', payload: {id: deletingItem}})
              swal("Poof! Your item is now deleted!", {
                icon: "success",
              });
            } else {
              swal("Your item is safe!");
            }
          });

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

  render() {
    return (
      <div>
         
        <section className="listBody">
        <div className="listContainer">
        <header>
            {/* button for user to click and pushes them to the addItem page */}
                <Button className="addItemBtn" color="primary" onClick={() => this.props.history.push('/addItem')}> Add grocery Items to your List
                <span className="addButton">{plusSquare}</span></Button>
            {/* button for refreshing all shopped grocery items marked as shopped to NOT shopped */}
                <Button className="refreshAllShopped" color="primary" onClick={() => this.refreshAllShoppedItems()}> Refresh all shopped items
                <span className="refreshIcon">{redoAlt}</span></Button>

        </header>
        <ol className="groceryList">
            <div className="bounceAnimation bounce-7">
        
        {/* //map through graoceryItem */}
            {this.props.store.groceryListItems.map((groceryItem) => {
                console.log(groceryItem);
                
                return(
                
                <li key={groceryItem.id} className={this.checkIfShopped(groceryItem.shopped)}>{groceryItem.item}
                    <input type="number" min={0} defaultValue={groceryItem.quantity} onChange={(event) => this.setState({groceryList:event.target.value})}/>
                    <Button className="shoppedBtn" color="primary" onClick={() => this.toggleShopped(groceryItem)}>Shopped?</Button>
                  <div>
                    {this.checkIfShopped(groceryItem.shopped)}
                  </div>
                    <Button className="deleteButton" onClick={() => this.deleteItem(groceryItem.id)}>Delete Item</Button>
                    <hr/>
                </li>)
                
            })}
            </div>
            {/* </div> */}
        </ol>
        </div>
        </section>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(groceryList);