import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66fcf1", // Custom primary color (light blue)
    },
    background: {
      paper: "#1c1c1c", // Background color for the bottom navigation
    },
    text: {
      primary: "#ffffff", // Text color
    },
  },
});

export default function Footer() {
  const [value, setValue] = React.useState(0);

  // Navigation URLs
  const handleNavigation = (url: string | URL | undefined) => {
    window.open(url, "_blank"); // Opens the link in a new tab
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 3 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ backgroundColor: theme.palette.background.paper }}
        >
          <BottomNavigationAction
            label="LinkedIn"
            icon={<LinkedInIcon />}
            sx={{ color: theme.palette.primary.main }}
            onClick={() => handleNavigation("https://www.linkedin.com/in/prasad-barde")}
          />
          <BottomNavigationAction
            label="GitHub"
            icon={<GitHubIcon />}
            sx={{ color: theme.palette.primary.main }}
            onClick={() => handleNavigation("https://github.com/bardeprasd")}
          />
          <BottomNavigationAction
            label="Instagram"
            icon={<InstagramIcon />}
            sx={{ color: theme.palette.primary.main }}
            onClick={() => handleNavigation("https://www.instagram.com/your-profile")}
          />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
