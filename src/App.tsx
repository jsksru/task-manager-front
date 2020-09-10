import React from 'react';
import TopBar from './components/TopBar/TopBar';
import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';

import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <>
      <TopBar />
      <Container>
        <NewTask />
        <TaskList />
      </Container>
    </>
  );
}

export default App;