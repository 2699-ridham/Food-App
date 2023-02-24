import React, { useContext } from 'react'
import CartContext from '../../store/Cart-context';
import Model from '../UI/Model';
import './Cart.css';
import CartItem from './CartItems';

function Cart(props) {
    const cartCtx = useContext(CartContext)
    const totalAmount = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemsAddHandler = (item) => {
        cartCtx.addItems({...item,amount: 1});

    }

    const cartItemsRemoveHandler = (id) => {
        cartCtx.removeItems(id);
    }

    const cartItems = (
        <ul className='cart-items'>
            {cartCtx.items.map((item) => <CartItem
                key={item.id} name={item.name}
                amount={item.amount} price={item.price}
                //bind is used for configure=ing the initail value and 
                //update when the item is add into different item.
                onRemove={cartItemsRemoveHandler.bind(null, item.id)}
                onAdd={cartItemsAddHandler.bind(null, item)} />)}
        </ul>
    );
    return (
        <Model onClose={props.onHideCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.onHideCart}>Close</button>
                {hasItems && <button className='button'>Order</button>}
            </div>
        </Model>
    )
}

export default Cart
