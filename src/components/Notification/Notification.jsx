import PropTypes from 'prop-types';
import css from './Notification.module.css'
export const Notification=({message})=>{
    return(
            <h1 className={css.title}>{message}</h1>
           
        
    )
}
Notification.propType={
    message:PropTypes.string,
}