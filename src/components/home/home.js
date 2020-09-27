import React from 'react';
// CLASS NAME CONDITIONS
// https://www.npmjs.com/package/clsx
import clsx from 'clsx';
// MATERIAL ELEMENTS
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
// Material UI Icons
import BarChartIcon from '@material-ui/icons/BarChart';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AssessmentTwoToneIcon from '@material-ui/icons/AssessmentTwoTone';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import TrackChangesTwoToneIcon from '@material-ui/icons/TrackChangesTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
// Components
import AccountOverview from './account-overview/account-overview';
import MotivationalQuote from './motivational-quote/motivational-quote';
// Styles
import '../../styles/home/home.css';

// TODO const state = { inputStrategy: 'AccountBalanceActivity' };

function Home() {
  /** TASKBAR PROPERTIES */
  const drawerWidth = 240;
  const useStyles = makeStyles((themeToUse) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: themeToUse.transitions.create(['margin', 'width'], {
        easing: themeToUse.transitions.easing.sharp,
        duration: themeToUse.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: themeToUse.transitions.create(['margin', 'width'], {
        easing: themeToUse.transitions.easing.easeOut,
        duration: themeToUse.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: themeToUse.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: themeToUse.spacing(0, 1),
      // necessary for content to be below app bar
      ...themeToUse.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: themeToUse.spacing(3),
      transition: themeToUse.transitions.create('margin', {
        easing: themeToUse.transitions.easing.sharp,
        duration: themeToUse.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: themeToUse.transitions.create('margin', {
        easing: themeToUse.transitions.easing.easeOut,
        duration: themeToUse.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [anchorElement, setAnchorElement] = React.useState(null);

  /** TASKBAR HTML AND INPUT COMPONENTS */
  const retrieveTaskbar = () => {
    return (
      <div className="block-top">
        <div className="align-btn-left">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon style={{ color: '#ffffff' }} />
          </IconButton>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              {[
                {
                  name: 'Income & Expenses',
                  icon: <AccountBalanceTwoToneIcon />,
                },
                { name: 'Goals', icon: <TrackChangesTwoToneIcon /> },
                { name: 'Wishlist', icon: <ShoppingCartTwoToneIcon /> },
              ].map((entry) => (
                <ListItem button key={entry.name}>
                  <ListItemIcon>{entry.icon}</ListItemIcon>
                  <ListItemText primary={entry.name} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {[
                { name: 'Sharing', icon: <ShareTwoToneIcon /> },
                { name: 'Logbook', icon: <ListAltTwoToneIcon /> },
                { name: 'Accounts', icon: <AssessmentTwoToneIcon /> },
              ].map((entry) => (
                <ListItem button key={entry.name}>
                  <ListItemIcon>{entry.icon}</ListItemIcon>
                  <ListItemText primary={entry.name} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </div>
        <div className="align-btn-right">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleDropdownOpen}
          >
            <BarChartIcon /> More
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorElement}
            keepMounted
            open={Boolean(anchorElement)}
            onClose={handleDropdownClose}
          >
            <MenuItem onClick={handleDropdownClose}>Settings</MenuItem>
            <MenuItem onClick={handleDropdownClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    );
  };
  const inputButton = () => {
    return (
      <div className="input-button">
        <Button
          variant="contained"
          color="primary"
          onClick={() => toggleInput()}
        >
          + Account Activity
        </Button>
      </div>
    );
  };
  const inputField = () => {
    return (
      <div className={input ? 'input' : 'hidden'}>
        <div className="mask">
          <Button
            variant="contained"
            color="primary"
            onClick={() => toggleInput()}
          >
            ✖️ Cancel
          </Button>
        </div>
      </div>
    );
  };

  /** USER SPECIFIC PROPERTIES */
  const [open, setOpen] = React.useState(false);
  const [input, setShown] = React.useState(false);

  /** HANDLERS */
  const handleDropdownOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setAnchorElement(null);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const toggleInput = () => {
    setShown(!input);
  };

  return (
    <div className="home">
      {inputButton()}
      {inputField()}
      <div className="main">
        {retrieveTaskbar()}
        <div className="block-center">
          <AccountOverview />
        </div>
        <div className="block-bottom">
          <MotivationalQuote />
        </div>
      </div>
    </div>
  );
}

export default Home;
