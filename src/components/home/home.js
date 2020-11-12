import React from 'react';
import AccountOverview from './overview/account-overview/account-overview';
import MotivationalQuote from './overview/motivational-quote/motivational-quote';
import Account from './account/account';
import InputMask from './../shared/components/input-mask';
import {get} from '../../components/shared/functions/http.js'
import '../../styles/home/home.css';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import TrackChangesTwoToneIcon from '@material-ui/icons/TrackChangesTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TocIcon from '@material-ui/icons/Toc';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

const scrollIntoView = (ref) => {
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function Home() {
  const circularProgressClasses = useStyles();
  const [accounts, setAccounts] = React.useState();
  const [inputDialogField, setShown] = React.useState(false);
  const toggleDialogField = () => {
    setShown(!inputDialogField);
  };
  
  // Created implementation for scrolling to navigation item
  // TODO https://www.robinwieruch.de/react-scroll-to-item
  const overviewRef = React.createRef();
  const accountRef = React.createRef();

  const getAccounts = () => {
    get('account').then(data => {
      setAccounts(data);
    });
  }

  const inputDialog = () => {
    return (
      <div className={inputDialogField ? 'input-dialog-field' : 'hidden'}>
        <InputMask setShown={setShown} getAccounts={getAccounts}/>
      </div>
    );
  };
  const navigationBar = () => {
    return (
      <div className="navigation-bar">
        <div className="navigation-list">
            <List>
              {[{
                  name: 'Overview',
                  icon: <ZoomOutMapIcon /> ,
                  click: () => scrollIntoView(overviewRef)
                },
                {
                  name: 'Accounts',
                  icon: <AccountBalanceTwoToneIcon />,
                  click: () => scrollIntoView(accountRef)
                },
                {
                  name: 'Income & Expenses',
                  icon: <TocIcon />,
                },
                {
                  name: 'Goals',
                  icon: <TrackChangesTwoToneIcon /> 
                },
                {
                  name: 'Wishlist',
                  icon: <ShoppingCartTwoToneIcon /> 
                },
                { 
                  name: 'Sharing', 
                  icon: <ShareTwoToneIcon /> 
                },
                {
                  name: 'Logbook',
                  icon: <ListAltTwoToneIcon />
                },
                {
                  name: 'Settings',
                  icon: <BarChartIcon />
                }].map((entry) => (
                <ListItem button key={entry.name} onClick={entry.click}>
                  <ListItemIcon className="navigation-list-item-icon" title={entry.name}>{entry.icon}</ListItemIcon>
                  <ListItemText className="navigation-list-item-name" primary={entry.name} />
                </ListItem>
              ))}
            </List>
            <div className="navigation-divider"></div>
            <List>
              {[{
                name: 'New Account',
                icon: <AddCircleIcon /> ,
                click: () => toggleDialogField()
              },{
                name: 'New Transaction',
                icon: <AddCircleOutlineIcon /> ,
                click: () => toggleDialogField()
              }].map((entry) => (
                <ListItem button key={entry.name} onClick={entry.click}>
                  <ListItemIcon className="navigation-list-item-icon" title={entry.name}>{entry.icon}</ListItemIcon>
                  <ListItemText className="navigation-list-item-name" primary={entry.name} />
                </ListItem>
              ))}
            </List>
        </div>
      </div>
    );
  };
  const overviewComponent = () => {
    return (
      <div className="overview-component" ref={overviewRef}>
          <div className="overview-top">
            <AccountOverview />
          </div>
          <div className="overview-bottom">
            <MotivationalQuote />
          </div>   
    </div>
    )
  };
  const accountComponent = () => {
    return (
      <div className="account-component" ref={accountRef}>
          <Account accounts={accounts} getAccounts={getAccounts}/>  
      </div>
    )
  };
  const content = () => {
    return !!accounts && !(accounts instanceof Error) // TODO refactoring
      ? 
      <div className="content">  
          {overviewComponent()}
          {accountComponent()}
      </div>
      :
      <div className="content">  
          <div className="wait-screen">
            <div className="wait-text">Please wait a moment..</div>
            <div className={circularProgressClasses.root}>
              <CircularProgress />
            </div>
          </div>
      </div>
  };

  React.useEffect(() => {
    getAccounts()
  }, []);

  return (
    <div className="home-component">
      {inputDialog()}
      {navigationBar()}
      {content()}
    </div>
  );
}

export default Home;
