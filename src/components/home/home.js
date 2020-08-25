import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BarChartIcon from '@material-ui/icons/BarChart';
import AccountOverview from './account-overview/account-overview';
import MotivationalQuote from './motivational-quote/motivational-quote';
import '../../styles/home/home.css';

function Home() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="home">
      <div className="block-top">
        <div className="align-btn-right">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <BarChartIcon /> More
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
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
