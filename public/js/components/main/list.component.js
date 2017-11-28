import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {IndexLink} from 'react-router';

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

class MainList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.fetchData();
    }

    componentWillUnmount() {
        this.props.actions.clearList(Common.FILM);
        this.props.actions.apiClearState();
    }

    fetchData() {
        this.props.actions.fetchAll(Common.FILM);
    }

    renderCards () {

        let data = this.props.films;

        return data.map((item) => {
            return (
                <div className="col-xs-6 col-sm-4 col-md-3 card-wrapper" key={ item.id }>
                    <div className="thumbnail">
                        <img src={item.img} alt="..." />
                        <div className="caption">
                            <h3>{ item.name }</h3>
                            <p>{ item.description }</p>
                            <IndexLink to={'/main/' + item.id + '/view'} className="btn btn-primary">
                                More
                            </IndexLink>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                { this.renderCards() }
            </div>
        );
    }
}


/**
 * Map the state to props.
 */
function mapStateToProps(state) {
    return {
        films: state.crud.films,
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

/**
 * Connect the component to the Redux store.
 */

export default connect(mapStateToProps, mapDispatchToProps)(MainList);