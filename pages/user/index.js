import React from 'react'
import { withRouter } from 'next/router'
import compose from 'lodash/fp/compose'
import { inject, observer } from 'mobx-react'
import { Link } from '../../routes'
import HelmetMeta from '../../components/HelmetMeta'
import MainLayout from '../../components/layouts/MainLayout'

@inject('store') @observer
class Index extends React.Component {
  static async getInitialProps(context) {
    const store = context.mobxStore
    const usersData = await (store.setUser('New User'))
    return {
      store, usersData
    }
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {}

  render() {
    return (
      <MainLayout>
        <HelmetMeta title='Home'/>
        <div className='columns'>
          <div className='column col-6 col-mx-auto col-xs-9'>
            <Link route='/'>
              <a>Home Page</a>
            </Link>
            <Link route='/user/all'>
              <a>User All Page</a>
            </Link>
            <h1>User Page</h1>
            <h2>Total of users is {this.props.store.users.length}</h2>
          </div>
        </div>

        <style jsx>{`
              .columns {
                margin-top: 30%;
                }
        `}</style>
      </MainLayout>
    )
  }
}


export default compose(withRouter)(Index)

