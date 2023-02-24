import './CartItems.css';

const CartItems = (props) => {
    const price = `Rs. ${props.price.toFixed(2)}`;

    return (
        <li className='cart-itemss'>
            <div>
                <h2>{props.name}</h2>
                <div className='summaryss'>
                    <span className='pricess'>{price}</span>
                    <span className='amountss'>x {props.amount}</span>
                </div>
            </div>
            <div className='actionsss'>
                <button onClick={props.onRemove}>−</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItems;