import React, { Component } from 'react';
import axios from 'axios';
import {Harshrouter, Link} from 'react-router-dom'


class Form extends Component {
    constructor() {
        super();

        this.state={
            imageUrl: "",
            productName: "",
            price: 0,
            inventoryList: [],
            products: []
        }
    this.handlePriceChange= this.handlePriceChange.bind(this)
    this.handleImageChange= this.handleImageChange.bind(this)
    this.handleProductChange= this.handleProductChange.bind(this)
    this.onClickCancel= this.onClickCancel.bind(this)
    this.onClickAdd= this.onClickAdd.bind()
    }
    
    //PRICE CHANGE 
    handlePriceChange(e){
        this.setState({price: e.target.value})
   }

   //IMAGE CHANGE
   handleImageChange(e){
    this.setState({imageUrl: e.target.value})
}

    //PRODUCT CHANGE
    handleProductChange(e){
        this.setState({productName: e.target.value})
   }

   //CLICK CANCEL
   onClickCancel(e){
       this.setState({
        imageUrl: "",
        productName: "",
        price: 0,
       })
       console.log(this.onClickCancel());
   }

   //CLICK ADD
   onClickAdd(e){
       axios.post('/api/product')
       .then(res => {
           this.setState({inventoryList: res.data})
       })
   }

  render() {
      
    return (
      <div>
          <div>
       <input type="text" onChange= {(e)=> this.handleProductChange(e)}/>
       <input type="number" onChange= {(e)=> this.handlePriceChange(e)}/>
       <input alt="imgURL" onChange= {(e)=> this.handleImageChange(e)}/>
       
       </div>
       
       <button className='Cancel' onClick= {() => this.onClickCancel()}> Cancel </button>
       <button className='Add' onClick= {() => this.onClickAdd()}>Add Inventory </button>

       {this.state.products}

         
      </div>
    );
  }
}

export default Form;
