import React from 'react';
import {
  AppBar, Box, Toolbar, IconButton, Typography, Button, Drawer,
  Divider, List, ListItem, ListItemButton, ListItemText, CssBaseline
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Experience' ,'Contact']; // Fixed typo in "Experience"

interface Props {
  window?: () => Window;
}

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
        Prasad Barde
      </Typography>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)' }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemText primary={item} sx={{ color: 'white' }} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#1c1c1c', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              color: '#66fcf1',
              fontWeight: 'bold',
            }}
          >
            Prasad Barde
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Link
                to={`/${item.toLowerCase()}`}
                key={item}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Button
                  sx={{
                    color: location.pathname === `/${item.toLowerCase()}` ? '#66fcf1' : '#fff',
                    borderBottom: location.pathname === `/${item.toLowerCase()}` ? '2px solid #66fcf1' : 'none',
                    mx: 1.5,
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#1c1c1c',
              color: 'white',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
