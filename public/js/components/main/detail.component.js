import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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

class FilmsDetail extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        if (this.props.params.id) {
            this.props.actions.fetchById(Common.FILM, this.props.params.id);
        }
    }

    componentWillUnmount() {
        this.props.actions.clearSelectedItem(Common.FILM);
        this.props.actions.apiClearState();
    }

    render() {
        const film = this.props.selectedItem.film;

        return (
            <div className="row">
                <div className="col-lg-4 col-md-5 col-sm-6 col-xs-12" id="left-side">
                    <img src={ film.img } alt=""/>
                </div>
                <div className="col-lg-8 col-md-7 col-sm-6 col-xs-12" id="right-side">
                    <h1>{ film.name }</h1>
                    <hr/>
                    <p>{ film.description }</p>
                </div>
            </div>

        );
    }
}

/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        selectedItem: state.crud.selectedItem,
        apiState: state.api
    }
}

/**
 * Map the actions to props.
 */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(_.assign({}, crudAction, apiAction), dispatch)
    }
}

/**
 * Connect the component to the Redux store.
 */
export default connect(mapStateToProps, mapDispatchToProps)(FilmsDetail)