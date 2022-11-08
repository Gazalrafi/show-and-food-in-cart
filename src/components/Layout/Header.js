
import {Fragment} from 'react';
import foodImage from '../../assets/food.jpeg'; 
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton.js';

const Header=(props)=>{
return <Fragment>
    <header className={classes.header}>
    <h1>ReactMeals</h1>
    <HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
    <img  src={foodImage} alt="delicious food"/>
    </div>
</Fragment>
}
export default Header;

