import React from 'react';
import classes from './Input.scss';

const input = (props) => {    
    let inputElement = null;
    const { label, elementType, elementConfig, value, changed, invalid, shouldValidate, touched } = props;

    const inputClasses = [classes.InputElement];

    if (invalid && shouldValidate && touched) {
        inputClasses.push(classes.Invalid)
    }

    switch (elementType) {
        case 'input':
            inputElement = <input 
                        {...elementConfig}  
                        className={inputClasses.join(' ')} 
                        value={value} onChange={changed}/>;
            break;
        case 'textarea':
            inputElement = <textarea 
                        {...elementConfig} 
                        className={inputClasses.join(' ')} 
                        value={value} onChange={changed}/>;
            break;   
        case 'select':
            inputElement = (
            <select                
                className={inputClasses.join(' ')}
                value={value}
                onChange={changed}>
                {elementConfig.options.map(option => (
                    <option 
                        key={option.value}
                        value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
                </select>
                    );
            break;      
        default:
            inputElement = <input 
                                {...elementConfig} 
                                className={inputClasses.join(' ')} 
                                value={value} onChange={changed} />;
            break;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} htmlFor="">{label}</label>
            {inputElement}
        </div>
    )
};

export default input;
