import React from 'react';
import TopBar from './components/TopBar/TopBar';
import TaskList from './components/TaskList/TaskList';
import NewTask from './components/NewTask/NewTask';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const App = () => {
  return (
    <>
      <TopBar />
      <Container>
        <Box paddingTop={5} paddingBottom={3}>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h3">Список задач</Typography>
            </Grid>
            <Grid item xs={6}>
              <Box height={'100%'} alignItems="center" justifyContent="flex-end" display="flex">
                <NewTask />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <TaskList />
      </Container>
    </>
  );
}

export default App;