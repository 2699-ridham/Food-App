import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon.js';
import './CartButton.css';
import CartContext from '../../store/Cart-context.js';

function CartButton(props) {
    const [btmHighlighed, setBtnHighlighted] = useState(false);
    const cartctx = useContext(CartContext);
    const { items } = cartctx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0)

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true)

        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300)

        return () => {
            clearTimeout(timer);
        }

    }, [items]);

    const buttonClass = `${'button'} ${btmHighlighed ? 'bump' : ''}`;
    return (
        <button className={buttonClass} onClick={props.handleClick}>
            <span className='icon'>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className='badge'>{numberOfCartItems}</span>
        </button>
    )
}

export default CartButton;
