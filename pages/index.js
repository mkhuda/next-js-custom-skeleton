import React from 'react'
import { withRouter } from 'next/router'
import compose from 'lodash/fp/compose'
import { Link } from '../routes'
import HelmetMeta from '../components/HelmetMeta'
import MainLayout from '../components/layouts/MainLayout'

class Index extends React.Component {
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
            <Link route='/user'>
              <a>User Page</a>
            </Link>
            <Link route='/user/all'>
              <a>User All Page</a>
            </Link>
            <h1>Halo</h1>
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
