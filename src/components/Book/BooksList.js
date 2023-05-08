import { Skeleton } from '@mantine/core';
import React from 'react';


const BooksList = ({ isLoading, books }) => {

  const BookList = books.map((item) => (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
      <div>{item.title}</div>
      <div className='btn-group' role='group'>
        <button type='button' className='btn btn-primary'>
          Read
        </button>
        <button type='button' className='btn btn-danger'>
          Delete
        </button>
      </div>
    </li>
  ))

  return (
    <div>
      <h2>Books List</h2>
      {
        isLoading ?
          <>
            <Skeleton height={10} radius="xl" />
            <Skeleton height={10} mt={6} radius="xl" />
            <Skeleton height={10} mt={6} width="70%" radius="xl" />
          </>
          :
          (
            <ul className='list-group'>
              {BookList}
            </ul>
          )}

    </div>
  );
};

export default BooksList;
