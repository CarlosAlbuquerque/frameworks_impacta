import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  Menu,
  MenuItem,
  Link,
  Box,
} from "@mui/material";

const HeaderMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            {" "}
            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="h6" component="div">
                Ticket Manager
              </Typography>
            </Link>
          </Box>
          <Button
            color="inherit"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            Menu
          </Button>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem component="a" href="/events" onClick={handleMenuClose}>
              Eventos
            </MenuItem>
            <MenuItem component="a" href="/about-us" onClick={handleMenuClose}>
              Sobre Nós
            </MenuItem>
            <MenuItem
              component="a"
              href="/event-register"
              onClick={handleMenuClose}
            >
              Criar Eventos
            </MenuItem>
            <MenuItem component="a" href="/login" onClick={handleMenuClose}>
              Login
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderMenu;
