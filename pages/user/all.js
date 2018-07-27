import React from 'react'
import { withRouter } from 'next/router'
import compose from 'lodash/fp/compose'
import { Link } from '../../routes'
import UserList from '../../components/user/UserList'
import HelmetMeta from '../../components/HelmetMeta'
import MainLayout from '../../components/layouts/MainLayout'

class All extends React.Component {
  static async getInitialProps() {
    return {}
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
            <Link route='/user'>
              <a>User Page</a>
            </Link>
            <UserList />
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


export default compose(withRouter)(All)


