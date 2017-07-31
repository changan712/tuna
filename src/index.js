import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'

class Counter extends Component {

    render() {
        const {value, onIncreaseClick} = this.props;
        return (
            <div>
                <span>{value}</span> <br/>
                <button onClick={onIncreaseClick}>increase</button>
            </div>
        )
    }
}

//action

const inCreaseAction = {type: 'increase'};

//reducer

function counter(state = {count: 0}, action) {
    const count = state.count;
    switch (action.type) {
        case  'increase':
            return {count: count + 1};
        default:
            return state;
    }
}

//store

const store = createStore(counter);
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () => dispatch(inCreaseAction)
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);














