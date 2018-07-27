import Header from './Header'

const MainLayout = (props) => {
  return (
    <div className='container'>
      <div className='columns'>
        <div className='column col-9 col-mx-auto col-xs-12'>
          <Header />
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default MainLayout
