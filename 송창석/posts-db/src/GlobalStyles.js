import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  a{
    text-decoration:none;
    color:inherit;
  }
  *{
    box-sizing:boerder-box;
  }
  body{
    font-size: 14px;
  }
  button {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    outline: none;
  }
  input {
    margin: 0;
    padding: 0;
    background: transparent;
    outline: none;
    border: 0;
  }
  .btn {
    font-weight: bold;
    background-color: #fff;
    text-transform: none;
    & + .btn {
      margin-left: 10px;
    }
    &.btn_add,
    &.btn_update {
      background-color: #222;
      color: #fff;
    }
    &.btn_back {
      background-color: #1D4CD8;
      color: #fff;
    }
    &.btn_del,
    &.btn_cancel {
      background-color: #eee;
      color: #222;
    }
  }
`;

export default GlobalStyles;