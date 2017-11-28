import React, {Component, PropTypes} from 'react';

// Import custom components
// import Header from './header.component';
// import Body from './body.component';

class Table extends Component {

    constructor(props) {
        super(props);
    }

    handleItem(id, event) {
        event.preventDefault();
        $("#"+ this.props.options.model +"-id").val(id);

    }

    componentDidMount() { }

    componentWillUnmount() {}

    componentWillReceiveProps(nextProps) {
        return this.props !== nextProps
    }

    shouldComponentUpdate() { return false; }

    renderRows () {

        let data = this.props.data;
        let options = this.props.options;

        let _this = this;

        return data.map((item) => {
            return (
                <tr key={ item.id } id={"row-" + item.id} className="admin-list-films">
                    <td> { item.name } </td>
                    <td> { item.description } </td>
                    <td>
                        <img src={ item.img } alt=""/>
                    </td>
                    <td>{ item.status }</td>
                    <td>
                        <a href={"/#/" + options.model + "/" + item.id + "/view"} title="View"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
                        <a href={"/#/" + options.model + "/" + item.id} title="Edit"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
                        <a href="javascript:void(0)" onClick={_this.handleItem.bind(_this, item.id)}
                           title="Remove" data-toggle='modal' data-target={'#' + options.model+ '-box-modal'}><i className="glyphicon glyphicon-trash"></i></a>
                    </td>
                </tr>
            );
        });
    }


// <a href={"/#/" + options.model + "/" + item.id + "/view"} title="View"><i className="glyphicon glyphicon-eye-open"></i></a>&nbsp;
// <a href={"/#/" + options.model + "/" + item.id} title="Edit"><i className="glyphicon glyphicon-pencil"></i></a>&nbsp;
// <a href="javascript:void(0)" onClick={_this.handleItem.bind(_this, item.id)}
// title="Remove" data-toggle='modal' data-target={'#' + options.model+ '-box-modal'}><i className="glyphicon glyphicon-trash"></i></a>

    render() {

        return (
            <table ref="datatable" className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Tittle</td>
                        <td>Description</td>
                        <td>Image</td>
                        <td>Active</td>
                        <td>Options</td>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        );
    }
}

export default Table