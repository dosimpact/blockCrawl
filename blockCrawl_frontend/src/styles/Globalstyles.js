import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\
        font-family: 'Noto Sans KR', sans-serif;
        font-size:14px;
        font-weight:400;
        background-color:white;
        color: #42505C;
        /* padding-top:60px; */
        margin-left:200px;
    }
`;

export default globalStyles;
