import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  display: inline-block;
  padding: 20px;
  font-size: 22px;
  text-decoration: none;
  margin-right: 15px;

  transition: all 0.3s;

  &.active {
    border: 1px solid white;
    background-color: black;
    color: white;
  }
`;
export const Button = styled.button`
  font-weight: 600;
  font-size: 18px;

  margin-top: 24px;
  padding: 1.063em 1.5em;

  background-color: rgb(144 74 52);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 14px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;
  }
`;
