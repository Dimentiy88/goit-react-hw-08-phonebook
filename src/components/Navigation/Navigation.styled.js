import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Logo = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;

  margin-right: 114px;

  color: #000000;
  > span {
    color: #fabb18;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #fabb18;
    > span {
      color: #000000;
    }
  }
`;

export const Nav = styled.ul`
  display: flex;
  .phonebook {
  }
`;
export const Auth = styled.li`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;
