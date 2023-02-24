import React, { useRef, useState } from 'react'
import './MealsItemForm.css';
import Input from '../../UI/Input';


function MealsItemForm(props) {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef()

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        //+sign will convert the string into number;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className='form' onSubmit={submitHandler}>
            <Input ref={amountInputRef}
                label="Amount" input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    steps: '1',
                    defaultValue: '1'
                }} />
            <button>+ Add</button>
            {/*flash the error mesd here if the amount is not valid */}
            {!amountIsValid && <p>Please enter the valid amount (1-5).</p>}
        </form>
    )
}

export default MealsItemForm
