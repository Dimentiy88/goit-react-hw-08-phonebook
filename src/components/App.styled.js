import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 10px;
  font-size: 22px;
  text-decoration: none;
  margin-right: auto;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    /* background-color: black; */
    color: white;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  padding: 22px 48px;
`;

export const ContentPageContainer = styled.div`
  padding: 38px 48px;
  height: 100dvb;

  border-radius: 32px 32px 0 0;
  background-color: #f9f9f9;
  margin-top: 100px;
`;
