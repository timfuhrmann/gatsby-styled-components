const React = require("react");
const ThemeProvider = require("styled-components").ThemeProvider;
const theme = require("./src/app/css/theme").theme;
const GlobalStyle = require("./src/app/css/GlobalStyle").GlobalStyle;

exports.wrapPageElement = ({element}) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
    );
}
