import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Button from 'react-button'
// import Form from 'react-form'


export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.onChange}
                    placeholder="Add TodoItem ..."
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />
                {/* <Button type="submit" value="Submit"></Button> */}
            </form>
            //<Form type="text" placeholder="Add TodoItem ..." name="title" />
        )
    }
}
// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo
