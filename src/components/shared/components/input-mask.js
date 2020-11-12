import React from 'react';
import Button from '@material-ui/core/Button';
import {post} from '../functions/http.js'
import '../../../styles/shared/components/input-mask.css';
import { makeStyles } from '@material-ui/core/styles';

const accountEndpoint = 'account';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: '34px',
  },
  label: {
    textTransform: 'capitalize',
  },
});

function InputMask(props) {
  
  const buttonClasses = useStyles();
  const [name, setName] = React.useState('');
  const resetInput = () => {
    setName('')
    setDescription('')
  }
  const [description, setDescription] = React.useState('');
  const newAccount = {"name": name, "description": description, "transactions": []};   
  
  return (
    <div className="input-mask">
      <div className="top-block">
        <div className="text">Create a new Account</div>
        <div className="mask-divider"></div>
        <div className="input">
          <div className="name">
            <div className="input-title">Name</div>
            <input className="input-text" value={name} onChange={e => setName(e.target.value)}></input>
          </div>
          <div className="description">
            <div className="input-title">Description</div>
            <input className="input-text" value={description} onChange={e => setDescription(e.target.value)}></input>
          </div>
        </div>
      </div>
      <div className="bottom-block">
        <Button className="submit" classes={{
            root: buttonClasses.root,
            label: buttonClasses.label,
          }}
          onClick={() => {
            post(newAccount, accountEndpoint).then(response => {
              console.log(response);
              props.setShown(false);
              props.getAccounts();
              resetInput();
            });
          }}>✖️ Submit
        </Button>
        <Button className="cancel" classes={{
          root: buttonClasses.root, // class name, e.g. `classes-nesting-root-x`
          label: buttonClasses.label, // class name, e.g. `classes-nesting-label-x`
        }}
          onClick={() => props.setShown(false)}>✖️ Cancel
        </Button>
      </div>
    </div>
  );
}

export default InputMask;
