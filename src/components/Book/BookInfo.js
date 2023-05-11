import { Paper, Text } from '@mantine/core';
import React, { Fragment } from 'react';

const BookInfo = ({ bookInfo, info }) => {

  // !first way
  // const BookInfoDefault = () => {
  //   if (bookInfo == null) {
  //     return (
  //       <>
  //         <div className='alert alert-secondary' role='alert'>
  //           There is no book selected yet. Please select!
  //         </div>
  //       </>
  //     )
  //   } else {
  //     return (
  //       <>
  //         <Paper shadow="sm" radius="md" p="md" withBorder bg={"#9b9b9b"}>
  //           <Text size={'2.5rem'}>{bookInfo.title}</Text>
  //           <Text>price : {bookInfo.price}</Text>
  //           <Text>{bookInfo.description}</Text>
  //         </Paper>
  //       </>
  //     )
  //   }
  // }

  console.log()
  // second way
  const BookInfoDefault = () => {
    return (
      Object.values(info).length > 0 ? (
        <>
          <Paper shadow="sm" radius="md" p="md" withBorder bg={"#9b9b9b"}>
            <Text size={'2.5rem'}>{info.title}</Text>
            {info.userName ? <Text>auther: {info.userName}</Text> : ""}
            <Text>price : {info.price}</Text>
            <Text>{info.description}</Text>
          </Paper>
        </>) : (
        <>
          <div className='alert alert-secondary' role='alert'>
            There is no book selected yet. Please select!
          </div>
        </>))
  }


  return (
    <Fragment>
      <h2>Book Details</h2>

      {/* first way */}
      <BookInfoDefault />

      {/* {
        <div className='alert alert-secondary' role='alert'>
          There is no book selected yet. Please select!
        </div>
      } */}
    </Fragment>
  );
};

export default BookInfo;
