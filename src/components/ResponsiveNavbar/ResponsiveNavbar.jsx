import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {useNavigate} from 'react-router-dom';
import Avatar from '@mui/material/Avatar'
import k from '../images/k.png'

const pages = ['Home 🏠', 'About 🙋‍♀️', 'Projects 💻', 'Contacts 📞'];

function ResponsiveNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const navigate = useNavigate();
  function navigateToPage(page){
     page= page.replace(/[^a-zA-Z0-9]/g, '');

    switch (page) {
        case 'Home':
            navigate('/');
            break;

        case 'About':
            navigate('/about');
            break;

        case 'Projects':
            navigate('/projects');
            break;

        case 'Contacts':
            navigate('/contacts');
            break;

        default:
            break;
    }
  }

  return (
    <AppBar position="fixed" sx={{backgroundColor:'black'}}>
      <Container maxWidth="xl" >
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >

          <Avatar sx={{backgroundColor:'white', padding:'1px', mr:'10px', height:{md:'30px', xs:"25px"}, width:{md:'30px', xs:"25px"}}}  alt="logo" src={k} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              mr: 2,
              fontFamily: 'sans-serif',
              fontWeight: 700,
              fontSize:{xs:"15px"},
              color: 'inherit',
              textDecoration: 'none',
              display: 'flex', // Hide on small screens
              md: {
                display: 'flex', // Show on medium and larger screens
              },
            }}
          >
            Kareena Bhade
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                ml: 'auto',
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon size="small" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={()=>{
                    handleCloseNavMenu();
                    navigateToPage(page);
                  }}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                ml: 'auto',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={()=>{
                    handleCloseNavMenu();
                    navigateToPage(page);
                  }}
                  sx={{ mx: 1, color: 'white' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveNavBar;

