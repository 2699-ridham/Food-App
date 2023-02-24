import React, { Fragment } from 'react'
import ReactDOM  from 'react-dom';
import './Model.css'

const BackDrop = (props) => {
    return <div className='backdrop' onClick={props.onClose}></div>
}

const ModalOverlays = (props) => {
    return <div className='modal'>
        <div className='content'>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays');
function Model(props) {
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </Fragment>
    )
}

export default Model
