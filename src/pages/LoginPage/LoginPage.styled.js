import styled from 'styled-components';

export const StyledLoginForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;

  padding: 24px 24px 24px 24px;

  background-color: #fcfcfc;
  border-radius: 4px;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2))
    drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.14));

  transition: transform 200ms ease-in 200ms, opacity 200ms ease-in 200ms;

  .input {
    width: 250px;
    height: 40px;
    padding: 0 38px;
    border: 1px solid rgba(46, 47, 66, 0.4);
    border-radius: 4px;
    outline: 1px solid transparent;
    outline-offset: -2px;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  .label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
    font-size: 16px;
    font-weight: 500;
  }
  .button {
    margin-top: 15px;
    margin-bottom: 10px;
    background-color: rgb(144 74 52);
    border: none;
    border-radius: 6px;
    color: #fff;
    flex-grow: 1;
    font-family: SFProText-Regular, Helvetica, Arial, sans-serif;
    font-size: 15px;
    height: 36px;
    line-height: 20px;
    display: block;
    margin: 15px auto;
    min-width: 185px;
    padding: 0 16px 0 16px;
    color: white;
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: rgba(23, 26, 32, 1);
      cursor: pointer;
    }
  }
`;
