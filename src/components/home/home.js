// React
import React from 'react';
// Components
import AccountOverview from './overview/account-overview/account-overview';
import MotivationalQuote from './overview/motivational-quote/motivational-quote';
import Account from './account/account'
// Styles
import '../../styles/home/home.css';
// Material UI Elements
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// Material UI Icons
import BarChartIcon from '@material-ui/icons/BarChart';
import ShareTwoToneIcon from '@material-ui/icons/ShareTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import TrackChangesTwoToneIcon from '@material-ui/icons/TrackChangesTwoTone';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import TocIcon from '@material-ui/icons/Toc';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';

function Home() {

  /* Created implementation for scrolling to navigation item */
  // TODO https://www.robinwieruch.de/react-scroll-to-item
  const overviewRef = React.createRef();
  const accountRef = React.createRef();

  const scrollIntoView = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  /* Here are the child html components declared for better readability. */
  const displayInputDialogField = () => {
    return (
      <div className={inputDialogField ? 'input-dialog-field' : 'hidden'}>
        <div className="mask">
          <Button
            variant="contained"
            color="primary"
            onClick={() => toggleDialogField()}
          >
            ✖️ Cancel
          </Button>
        </div>
      </div>
    );
  };
  const displayNavigationBar = () => {
    return (
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
                }].map((entry) => (
                <ListItem button key={entry.name}>
                  <ListItemIcon className="navigation-list-item-icon" title={entry.name}>{entry.icon}</ListItemIcon>
                  <ListItemText className="navigation-list-item-name" primary={entry.name} />
                </ListItem>
              ))}
            </List>
            <div className="navigation-divider"></div>
            <List>
              {[{
                name: 'New Transaction',
                icon: <AddCircleOutlineIcon /> ,
                click: () => toggleDialogField()
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
        </div>
    );
  }
  const displayOverViewComponent = () => {
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
  }
  const displayAccountComponent = () => {
    return (
      <div className="account-component" ref={accountRef}>
          <Account />  
    </div>
    )
  }

  /* Set state for input dialog shown. */
  const [inputDialogField, setShown] = React.useState(false);
  const toggleDialogField = () => {
    setShown(!inputDialogField);
  };

  /**
   * Returns rendered html page.
   */
  return (
    <div className="home-component">
      {displayInputDialogField()}
      <div className="navigation-bar">
        {displayNavigationBar()}
      </div>
      <div className="content">  
          {displayOverViewComponent()}
          {displayAccountComponent()}
      </div>
    </div>
  );
}

export default Home;
