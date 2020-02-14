import React from 'react';
import Logo from './logo.PNG';
import './navMobile.css';
import Menu from './menu.png';
import {FormContext} from '../../context/Form';
export default function(props){
    return(
        <div className = 'navMobile'>
            <img src = {Logo} width = '100px' alt = 'img logo' />
            <FormContext.Consumer>
                {({handleMenu})=>(<img onClick = {handleMenu} className = 'menu' src = {Menu} width = '50px'  />)}
            </FormContext.Consumer>
        </div>
    )
}