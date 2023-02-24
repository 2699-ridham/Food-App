import React, { Fragment } from 'react'
import "./Header.css";
import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';
function Header(props) {
    return (
        <Fragment>
            <header className='header'>
                <h1>Delicious Meals</h1>
                <CartButton handleClick={props.onShowCart}/>
            </header>
            <div className='main-image'>
                <img src={mealsImage} alt='Delicious food ..!!' />
            </div>
        </Fragment>
    )
}

export default Header
