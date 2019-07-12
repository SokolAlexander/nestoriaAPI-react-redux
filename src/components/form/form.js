import React from 'react';
import { submitFormAsync, inputValueChange } from '../../store/form/actions';
import { connect } from 'react-redux';

function Form(props) {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.onSubmit();
            }}>
            <input type="text" 
                placeholder="search" 
                value={props.value} 
                onChange={(e) => {props.onInputValueChange(e.target.value)}}/>
            <input type="submit" />
            </form>
    )
}

const mapStateToProps = function(state) {
    return {
        value: state.inputValue
    }
}

const mapDispatchToProps = {
    onSubmit: submitFormAsync,
    onInputValueChange: inputValueChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)