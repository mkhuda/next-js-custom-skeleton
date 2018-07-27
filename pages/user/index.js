import React from 'react'
import { withRouter } from 'next/router'
import HelmetMeta from '../../components/HelmetMeta'
import ALink from '../../components/ALink'
import MainLayout from '../../layouts/MainLayout'

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
            <ALink name='Home'/> <br />
            <ALink name='Go to User All Page' page='user' subpage='all'/>
            <h1>Index</h1>
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


export default withRouter(Index)

