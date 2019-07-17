import React from 'react';
import { submitFormAsync, inputValueChange } from '../../store/actions';
import { connect } from 'react-redux';
import './form.css';

/**
 * renders a form
 * @param {props} props
 * @return {ReactComponent}
 */
function Form(props) {
    return (
        <div className="form-wrapper">
        <form className="form"
            onSubmit={(e) => {
            e.preventDefault();
            !props.isFetchingData && props.onSubmit();
            }}>
            <input type="text"
                placeholder="search"
                value={props.value}
                onChange={(e) => {props.onInputValueChange(e.target.value)}}/>
            <input type="submit" />
            </form>
            </div>
    )
}

/**
 * translates state to props
 * @param {ReduxState} state 
 * @return {Object}
 */
const mapStateToProps = function(state) {
    return {
        value: state.inputValue,
        isFetchingData: state.isFetching
    }
}

const mapDispatchToProps = {
    onSubmit: submitFormAsync,
    onInputValueChange: inputValueChange
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)