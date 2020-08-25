import React from 'react';
// ???
import clsx from 'clsx';
// MATERIAL ELEMENTS
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorElement, setAnchorElement] = React.useState(null);
  const [open, setOpen] = React.useState(false);

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

  return (
    <div className="home">
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
      <div className="block-center">
        <AccountOverview />
      </div>
      <div className="block-bottom">
        <MotivationalQuote />
      </div>
    </div>
  );
}

export default Home;
