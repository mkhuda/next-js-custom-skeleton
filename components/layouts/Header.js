import Router from 'next/router'
import NProgress from 'nprogress'

Router.onRouteChangeStart = () => NProgress.start()
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const headerStyle = {
  marginBottom: 10
}

const Header = () => (
  <div className='header' style={headerStyle} />
)

export default Header
