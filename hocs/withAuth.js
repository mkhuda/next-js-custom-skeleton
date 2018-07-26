import React from 'react'
import Router from 'next/router'
import AuthService from '../libs/AuthService'

export default function withAuth(AuthComponent) {

  const Auth = new AuthService()
  return class Authenticated extends React.Component {
    static async getInitialProps(context) {
      const query = context.query
      return {
        query
      }
    }

    constructor(props) {
      super(props)
      this.state = {
        authLoading: true
      }
    }

    componentDidMount () {
      if (!Auth.loggedIn()) {
        Router.push('/')
      } else {
        this.setState({authLoading: false})
        Auth._checkToken()
          .then(data => {
            if (data.status === false) {
              console.log('token outdate')
              Auth.logout()
              Router.push('/')
            }
          })
      }
    }

    render() {
      return (
        <div>
          {
            this.state.authLoading ? (
              <div className="text-center">
                <div className="loading loading-lg"></div>
              </div>
            ) : (
              <AuthComponent {...this.props} auth={Auth} />
            )
          }
        </div>
      )
    }
  }
}
