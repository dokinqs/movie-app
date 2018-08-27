import { injectGlobal } from "styled-components";
import reset from "styled-reset";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');
  ${reset};
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #d8cdcd;
  }
  a {
      color: inherit;
  }
  main {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }
`;

// https://www.styled-components.com/