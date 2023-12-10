import React from 'react'
import styles from './header.module.css';

export const Header = () => {
  return (
    <nav className='py-0 md:py-4 md:px-4 flex flex-col md:flex-row navbar-expand-md navbar-light fixed-top'>
      <div className={`container mx-auto ${styles['nav-container']}`} >
        header
      </div>
    </nav>
  )
}
