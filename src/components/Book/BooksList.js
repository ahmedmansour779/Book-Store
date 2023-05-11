import { Button, Skeleton } from '@mantine/core';
import { IconBook, IconTrash } from '@tabler/icons-react';
import React from 'react';


const BooksList = ({
  isLoading,
  books,
  isLoggedIn,
  deleteBook,
  dispatch,
  getBook,
  getBookId
}) => {

  const BookList = books.length > 0 ? books.map((item) => (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
      <div>{item.title}</div>
      <Button.Group >
        <Button
          leftIcon={<IconBook />}
          variant="filled"
          color='blue'
          // ! first way
          // onClick={() => dispatch(getBook(item))}
          // !second way
          onClick={() => getBookId(item.id)}
        >Read</Button>
        <Button
          type='button'
          className='btn btn-danger'
          disabled={!isLoggedIn}
          onClick={() => dispatch(deleteBook(item))
            .unwrap()
            .then((originalPromiseResult) => {
              console.log(originalPromiseResult)
            })
            .catch((rejectedValueOrSerializedError) => {
              console.log(rejectedValueOrSerializedError)
            })}
          variant="filled"
          color="red"
          rightIcon={<IconTrash />}>Delete</Button>
      </Button.Group>
    </li>
  )) : "There is no Books available"

  return (
    <div>
      {/* {console.log(title, price, description)} */}
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
