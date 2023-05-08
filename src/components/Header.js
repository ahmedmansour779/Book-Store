import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { error } = useSelector((state) => state.books)

  return (
    <Fragment>
      {console.log(error)}

      {error &&
        <div className="alert alert-danger mb-0" role="alert">
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            {error}
            <button type="button" className="btn-close mr-0" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        </div>}


      <nav className='navbar navbar-dark bg-dark'>
        <div className='container'>
          <span className='navbar-brand mb-0 h1'>My Books</span>

          <button className='btn btn-outline-primary' type='submit'>
            Log In
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
