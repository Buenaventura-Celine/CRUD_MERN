import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,   
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: 24,
    
    '@media (max-width:550px)': {
      display: 'none',

    },
  },
  styledButton: {
    fontFamily: 'Montserrat',
    fontWeight: 600,
    fontSize: 16,
    
  },
  styledMenu: {
    marginTop: 35,
  },
  styledMenuItem: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    
  },
  styledTooltip: {
    color: '#fff',
  },
  logo: {
    height: 50,
  },
  divTool: {
    '@media (max-width:700px)': {
      marginLeft: 'auto',     
    },
  }
}));


export default function MenuAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar} color="default">
        <Toolbar>
          <Button href="/">
            <img src="../img/todolist.png" className={classes.logo} alt=""  />
          </Button>
          
          <Typography variant="h6" className={classes.title} >
            MY TODO LIST
          </Typography>
          
          { (
            <div className={classes.divTool}> 
              <Tooltip title="Home" color="inherit">
                <IconButton
                href="/"
                >
                <HomeIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Create" color="inherit"> 
                <IconButton
                  href="/create"
                >
                  <NoteAddIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}