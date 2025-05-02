import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import './index.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h6: {
      fontSize: '20px',
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: '14px',
      fontWeight: 500,
    },
    body2: {
      fontSize: '13px',
    },
  },
  palette: {
    background: {
      default: '#F5F5F5',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px 16px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        },
        head: {
          fontWeight: 600,
          backgroundColor: '#fff',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          height: '24px',
          borderRadius: '4px',
          fontSize: '13px',
        },
        sizeSmall: {
          height: '24px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '8px',
          color: 'rgba(0, 0, 0, 0.54)',
        },
        sizeSmall: {
          padding: '8px',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '40px',
          color: 'rgba(0, 0, 0, 0.54)',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          backgroundColor: '#2196F3',
          fontSize: '11px',
          height: '16px',
          minWidth: '16px',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
); 