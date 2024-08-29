import { createTheme } from '@mui/material/styles';

// Define light theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f0f0f0', // Light background color
    },
    text: {
      primary: '#000000', // Dark text color
    },
  },
  typography: {
    fontSize: 16,
  },
});

// Define dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#303030', // Dark background color
    },
    text: {
      primary: '#ffffff', // Light text color
    },
  },
  typography: {
    fontSize: 16,
  },
});

export { lightTheme, darkTheme };
