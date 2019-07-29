import '../nav-left/nav-left'
import './index.less'
import utils from 'common/js/utils'
import { filter, writeFn } from 'common/js/filter'
import React from 'react'
import ReactDOM from 'react-dom'

console.log(allData)

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.decrease = this.decrease.bind(this);
        this.increase = this.increase.bind(this);
    }

    increase() {
        console.log(this.state.number)
        this.setState({ number: this.state.number + 1 })
        console.log(this.state.number)
    }

    decrease() {
        this.setState({ number: this.state.number - 1 })
    }
    componentWillMount() {
        console.log(111)
    }
    componentDidMount() {
        alert('222111')
    }


    render() {
        console.log('render')
        return (
            <div className="counter">
                <button onClick={this.decrease}>减1</button>
                <span>{this.state.number}</span>
                <button onClick={this.increase}>加1</button>
            </div>
        )
    }

}

ReactDOM.render(
    <Counter />,
    document.getElementById("root"))




