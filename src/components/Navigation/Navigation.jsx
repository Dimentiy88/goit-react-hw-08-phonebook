import React from 'react';
import { StyledNavLink } from '../App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/auth.selectors';
import { logOutThunk } from 'redux/authSlice';
import { Auth, Logo } from './Navigation.styled';
import { AppBar, Button, Toolbar } from '@mui/material';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <AppBar style={{ backgroundColor: '#7b7b7c' }} position="static">
      <Toolbar>
        <Logo className="header-link" to="/">
          Phone
          <span>Book</span>
        </Logo>

        {authenticated ? (
          <>
            <StyledNavLink className="header-link" to="/contacts">
              Contacts
            </StyledNavLink>
            <Button
              style={{ backgroundColor: '#000000' }}
              variant="contained"
              onClick={onLogOut}
            >
              Log Out
            </Button>
          </>
        ) : (
          <>
            <Auth>
              <StyledNavLink className="header-link" to="/login">
                Login
              </StyledNavLink>
              <StyledNavLink className="header-link" to="/register">
                Register
              </StyledNavLink>
            </Auth>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
