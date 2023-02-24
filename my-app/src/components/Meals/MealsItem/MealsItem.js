import React, { useContext } from 'react';
import './MealsItem.css';
import MealsItemForm from './MealsItemForm';
import CartContext from '../../../store/Cart-context';

function MealsItem(props) {
    const cartctx = useContext(CartContext);
    const price = `Rs. ${props.price.toFixed(2)}`;

    const addTocartHandler = (amount) => {
        cartctx.addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{price}</div>
            </div>
            <div>
                <MealsItemForm id={props.id} onAddToCart={addTocartHandler} />
            </div>
        </li>
    )
}

export default MealsItem
