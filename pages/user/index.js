import React from 'react'
import { withRouter } from 'next/router'
import UserCounter from '../../components/user/UserCounter'
import HelmetMeta from '../../components/HelmetMeta'
import MainLayout from '../../layouts/MainLayout'

class IndexUser extends React.Component {
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
            <UserCounter />
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


export default withRouter(IndexUser)

