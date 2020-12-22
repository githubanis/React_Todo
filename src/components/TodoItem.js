import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => { return { background: '#f4f4f4', padding: '5px', borderBottom: '1px #ccc dotted', textDecoration: this.props.todo.completed ? 'line-through' : 'none' } }
    btnStyle = () => { return { color: '#fff', background: '#ff0000', border: 'none', padding: '5px 10px', borderRadius: '20%', cursor: 'pointer', float: 'right' } }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div>
                <p style={this.getStyle()}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={this.btnStyle()}>X</button>{' '}
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoItem
