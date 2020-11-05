import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';

interface SidebarProps {
  open: boolean
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
});

const Sidebar: React.FunctionComponent<SidebarProps> = ({ open }) => {
  const classes = useStyles();

  return (
    <Drawer className={classes.root}
            open={open}
            variant="persistent"
            anchor="left"
    >
      14543543543543
    </Drawer>
  )
};

export default Sidebar;
