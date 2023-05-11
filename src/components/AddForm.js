import { Flex } from '@mantine/core';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertBook } from '../store/bookSlice';

const Addform = () => {
  const { isLoggedIn } = useSelector((state) => state.auth)

  // refs
  const title = useRef(null)
  const price = useRef(null)
  const description = useRef(null)

  const dispatch = useDispatch()

  const handelSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    }
    dispatch(insertBook(data))
    title.current.value = null;
    price.current.value = null
    description.current.value = null
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handelSubmit}>
          <Flex
            mih={50}
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
          >
            <div className='form-group' style={{ width: "100%" }}>
              <label htmlFor='title'>Title</label>
              <input ref={title} type='text' className='form-control' id='title' required />
            </div>
            <div className='form-group' style={{ width: "100%" }}>
              <label htmlFor='price'>Price</label>
              <input ref={price} type='number' min={0} className='form-control' id='price' required />
            </div>
            <div className='form-group' style={{ width: "100%" }}>
              <label htmlFor='Description'>Description</label>
              <textarea
                ref={description}
                className='form-control'
                id='Description'
                rows='3'
                required
              ></textarea>
            </div>
            <button type='submit' className='btn btn-primary' disabled={!isLoggedIn}>
              Submit
            </button>
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default Addform;
