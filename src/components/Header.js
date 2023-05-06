import React from 'react';

const Header = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <span className='navbar-brand mb-0 h1'>My Books</span>

        <button className='btn btn-outline-primary' type='submit'>
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Header;
