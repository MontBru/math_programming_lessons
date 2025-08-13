import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#347928"
    },
    secondary: {
      main: "#C0EBA6"
    }
  },
  typography: {
    // Define general typography styles here
    fontFamily: "Arial", // you can change to any font
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',  // Default for larger screens
      '@media (max-width:600px)': {
        fontSize: '1.8rem', // Smaller for mobile
      },
    },
    h2: {
      fontWeight: 500,
      fontSize: '2rem',   // Default for larger screens
      '@media (max-width:600px)': {
        fontSize: '1.5rem', // Smaller for mobile
      },
    },
    body1: {
      fontSize: '1.8rem',  // Default for larger screens
      '@media (max-width:600px)': {
        fontSize: '1.3rem', // Smaller for mobile
      },
    },
    body2: {
      fontSize: '1.3rem', // Default for larger screens
      '@media (max-width:600px)': {
        fontSize: '1rem', // Smaller for mobile
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
