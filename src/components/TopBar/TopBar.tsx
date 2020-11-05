import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import clsx from 'clsx';

interface TopBarProps {
  open: boolean,
  openHandler(): void
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    title: {
      flexGrow: 1
    }
  }),
);

const TopBar: React.FunctionComponent<TopBarProps> = ({ open, openHandler }) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
    >
      <Toolbar>
        <IconButton color="inherit"
                    aria-label="Open menu"
                    onClick={openHandler}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>Task manager</Typography>
        <IconButton color="inherit" aria-label="Logout">
          <MeetingRoomIcon />
        </IconButton>
    </Toolbar>
  </AppBar>
  );
};

export default TopBar;