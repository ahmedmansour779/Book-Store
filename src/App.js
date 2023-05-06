import React, { Fragment } from "react";
import AddForm from './components/AddForm';
import BookContainer from './components/Book/BookContainer';
import Container from './components/Container';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <AddForm />
        <BookContainer />
      </Container>
    </Fragment>
  );
}

export default App;