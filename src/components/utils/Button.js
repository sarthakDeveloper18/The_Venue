import React from 'react';
import Buttonn from '@material-ui/core/Button';
import ticket from '../../resources/images/icons/ticket.png';

const Button = (props) => {
    return(
        <Buttonn href = {props.link} variant = 'contained' size = 'small' style={{background: props.bck, color: props.color}}>
            <img src = {ticket} className = 'iconImage' alt = ''/>{props.text}
        </Buttonn>
    )

}

export default Button