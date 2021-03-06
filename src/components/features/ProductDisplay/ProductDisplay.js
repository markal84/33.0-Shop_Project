import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/actions';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import data from '../../../Data/Products.json';
import '../ProductList/ProductList.scss';

export class ProductItem extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClick = (id)=>{
    this.handleShow();
    this.props.addToCart(id);
}

  render() {
    const found = data.find(x => x.id === parseFloat(this.props.id));

    return <div className='product-item-wrapper'>
        <span><img className='product-photo' src={found.img} alt='Product info'/></span>
        <h3 className='title mt-3'>Name: {found.name}</h3>
        <h4 className='author'>Author: {found.author}</h4>
        <span>Desc: {found.desc}</span>
        <div className="mt-3"><h4> Price: ${found.price}</h4></div> 
        <span className="text-uppercase font-weight-bold"> { found.extra } </span>
        <div className="mt-3 d-flex justify-content-around">
          <Button onClick={()=>this.handleClick(found.id)}>Add to cart</Button>
          <Button>
            <Link className="link-text" to={`/`}>Back to main page</Link>
          </Button>
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Item added to cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span className="mr-2">You added '<b>{found.name}</b>' to cart</span>
            <span><img className='product-photo-modal' src={found.img} alt='Product info'/></span>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleClose}>
            Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  return {
    items: state.items
  }
}
const mapDispatchToProps= (dispatch)=>{
  return{
      addToCart: (id)=>{dispatch(addToCart(id))}
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ProductItem)