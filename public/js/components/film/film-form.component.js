import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

//libraries
import _ from 'lodash';

/**
 * Import all constants as an object.
 */
import Common from '../../constants/common';

/**
 * Import all apiAction and crudAction as an object.
 */
import * as apiAction from '../../actions/apiAction';
import * as crudAction from '../../actions/crudAction';
import * as flashMessage  from '../../actions/flashMessage';

import renderText from '../common/form/renderText';
import renderTextArea from '../common/form/renderTextArea';
import renderSelect from '../common/form/renderSelect';
import renderRadioGroup from '../common/form/renderRadioGroup';

class FilmForm extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
    }


    componentWillMount() {
        if (this.props.params.id) {
            this.props.actions.fetchById(Common.FILM, this.props.params.id);
            // Redux form will reinitialize
            this.props.initialize();
        }
    }

    componentWillUnmount() {
        this.props.actions.clearSelectedItem(Common.FILM);
        this.props.actions.apiClearState();
    }

    onHandleSubmit(formProps) {
        this.props.actions.submitForm(Common.FILM, formProps, this.props.params.id);

    }

    handleChange(event) {
        var key = event.target.name;
        var value = event.target.value;
        this.props.actions.updateSelectedItem(Common.FILM, key, value);
    }

    render() {

        const {handleSubmit, submitting} = this.props;

        return (

            <div className="row">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h3 className="box-title">{(this.props.params.id) ? 'Edit Film' : 'Add Film'}</h3>
                        </div>
                        <form className="form-horizontal" onSubmit={handleSubmit(this.onHandleSubmit)}>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <Field
                                            name="code"
                                            component={renderText}
                                            label="Code"
                                            type="text"
                                            data={this.props.selectedItem.film.code}
                                            onChange={this.handleChange}
                                        />

                                        <Field
                                            name="img"
                                            component={renderText}
                                            label="Image"
                                            placeholder="Insert link to image"
                                            type="text"
                                            data={this.props.selectedItem.film.img}
                                            onChange={this.handleChange}
                                        />

                                        <Field
                                            name="status"
                                            component={renderRadioGroup}
                                            label="Status"
                                            type="radio"
                                            data={this.props.selectedItem.film.status}
                                            onChange={this.handleChange}
                                        />

                                    </div>

                                    <div className="col-xs-6">

                                        <Field
                                            name="name"
                                            component={renderText}
                                            type="text"
                                            data={this.props.selectedItem.film.name}
                                            label="Name"
                                            onChange={this.handleChange}
                                        />

                                        <Field
                                            name="description"
                                            component={renderTextArea}
                                            data={this.props.selectedItem.film.description}
                                            label="Description"
                                            cols="40"
                                            rows="3"
                                            onChange={this.handleChange}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="col-xs-6">
                                    <div className="form-group">
                                        <button type="submit"
                                                className="btn btn-primary"
                                                disabled={submitting}>{(this.props.params.id) ? 'Update' : 'Save'}</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

FilmForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired
};

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        selectedItem: state.crud.selectedItem,
        initialValues: state.crud.selectedItem.film,
        apiState: state.api,
        message: state.flash.message
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, apiAction, flashMessage), dispatch)
    }
}

const validateProduct = values => {
    const errors = {};
    if (!values.code) {
        errors.code = '(This field is required.)'
    }
    if (!values.name) {
        errors.name = '(This field is required.)'
    }
    if (!values.vendor) {
        errors.vendor = '(This field is required.)'
    }
    if (!values.status) {
        errors.status = '(This field is required.)'
    }
    if (!values.img) {
        errors.status = '(This field is required.)'
    }
    return errors
};

/**
 * Connect the component to the Redux store.
 */

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'FilmForm', // ←A Unique identifier for this form
    validate: validateProduct,  // ←Callback function for client-side validation
})(FilmForm))