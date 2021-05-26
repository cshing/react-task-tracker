import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = (e) => {
  //   console.log('Click')
  // }

  const location = useLocation()

  return (
    <header className='header'>
      <h1>{ title }</h1>
      { location.pathname === '/' && (
        <Button 
          color={ showAdd ? 'red' : 'green' } 
          text={ showAdd ? 'Close' : 'Add' } 
          onClick={ onAdd }
        />
      )}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// class -> className
// for -> htmlFor

// CSS in JS
// inline style - style={{ color: 'red', backgroundColor: 'black' }}
// using variable as style - style={ headingStyle }
const headingStyle = {
  color: 'red',
  backgroundColor: 'black',
}

export default Header
