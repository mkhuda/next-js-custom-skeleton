import React from 'react'
import {connect} from 'react-redux'

import {increment, decrement, reset} from './actions'

class UserCounter extends React.Component {
  increment = () => {
    this.props.dispatch(increment())
  }

  decrement = () => {
    this.props.dispatch(decrement())
  }

  reset = () => {
    this.props.dispatch(reset())
  }

  render () {
    const {user} = this.props
    return (
      <div>
        <style jsx>{`
          div {
            padding: 0 0 20px 0;
          }
        `}</style>
        <h1>
          Count User: <span>{user.count}</span>
        </h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

const mapStateToProps = ({user}) => ({user})
export default connect(mapStateToProps)(UserCounter)
