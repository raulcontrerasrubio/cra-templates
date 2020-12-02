import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: local("Poppins"), local("Poppins-Regular"), local("Poppins Regular"), url(./assets/fonts/Poppins-Regular.ttf);
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Italic"), local("Poppins-Italic"), url(./assets/fonts/Poppins-Italic.ttf);
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Light"), local("Poppins-Light"), url(./assets/fonts/Poppins-Light.ttf);
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Light Italic"), local("Poppins-Light-Italic"), url(./assets/fonts/Poppins-LightItalic.ttf);
    font-weight: 300;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins SemiBold"), local("Poppins-SemiBold"), url(./assets/fonts/Poppins-SemiBold.ttf);
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins SemiBold Italic"), local("Poppins-SemiBold-Italic"), url(./assets/fonts/Poppins-SemiBoldItalic.ttf);
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Bold"), local("Poppins-Bold"), url(./assets/fonts/Poppins-Bold.ttf);
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Poppins;
    src: local("Poppins Bold Italic"), local("Poppins-Bold-Italic"), url(./assets/fonts/Poppins-Bold.ttf);
    font-weight: 700;
    font-style: italic;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;