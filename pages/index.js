import React from 'react'
import { withRouter } from 'next/router'
import compose from 'lodash/fp/compose'
import { inject, observer } from 'mobx-react'
import { Link } from '../routes'
import HelmetMeta from '../components/HelmetMeta'
import MainLayout from '../components/layouts/MainLayout'

@inject('store') @observer
class Index extends React.Component {
  static async getInitialProps(context) {
    return {
      store: context.mobxStore
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
            <Link route='/user'>
              <a>User Page</a>
            </Link>
            <Link route='/user/all'>
              <a>User All Page</a>
            </Link>
            <h1>Halo</h1>
            <div>{this.props.store.users.map((user, id) => (
              <h3 key={id}>{user}</h3>
            ))}</div>
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
