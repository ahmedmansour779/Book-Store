import { Flex } from '@mantine/core';
import React, { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks } from '../../store/bookSlice';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import './book.css';

const PostContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <Flex
          mih={50}
          gap="lg"
          justify="center"
          align="flex-start"
          direction="row"
          wrap="wrap">
          <div className='col'>
            <BooksList />
          </div>
          <hr />
          <div className='col side-line'>
            <BookInfo />
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default PostContainer;