import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Dosis:400,500');
  ${reset};
  body {
    font-family: 'Dosis', sans-serif;
  }
  h1 {
    text-align: center;
    margin: 26px auto;
    font-size: 40px;
    font-weight: 500;
  }
  a {
    color: inherit;
  }
  a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.23), 0 6px 6px rgba(0, 0, 0, 0.29);
    color: #777;
  }
  main {
    width: 80%;
    margin: 5px auto;
    padding: 40px 20px;
  }

  .lds-grid {
    display: inline-block;
    position: absolute;    
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 80px;
    height: 80px;
  }
  .lds-grid div {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #c5cae5;
    animation: lds-grid 1.2s linear infinite;
  }
  .lds-grid div:nth-child(1) {
    top: 8px;
    left: 8px;
    animation-delay: 0s;
  }
  .lds-grid div:nth-child(2) {
    top: 8px;
    left: 32px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(3) {
    top: 8px;
    left: 56px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(4) {
    top: 32px;
    left: 8px;
    animation-delay: -0.4s;
  }
  .lds-grid div:nth-child(5) {
    top: 32px;
    left: 32px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(6) {
    top: 32px;
    left: 56px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(7) {
    top: 56px;
    left: 8px;
    animation-delay: -0.8s;
  }
  .lds-grid div:nth-child(8) {
    top: 56px;
    left: 32px;
    animation-delay: -1.2s;
  }
  .lds-grid div:nth-child(9) {
    top: 56px;
    left: 56px;
    animation-delay: -1.6s;
  }
  @keyframes lds-grid {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }  

  .loader {
    border: 5px solid #fff;
    border-radius: 50%;
    border-top: 5px solid #3547ad;
    border-right: 5px solid #4e5dce;
    border-bottom: 5px solid #828ccc;
    border-left: 5px solid #c5cae5;
    width: 50px;
    height: 50px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
  }
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;