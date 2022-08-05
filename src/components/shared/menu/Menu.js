import * as React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
const pages = [ 'About', 'Contact', 'Portfolio'];

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ zIndex: 1}}
      >
        <AddCircleOutlineRoundedIcon sx={{ color: 'black', fontSize: '30px'}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      > 
      | <Link href={'./'}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
         {   pages.map((item) => {
                    return (
                        <Link key={item} href={`./${item.toLowerCase()}`}><MenuItem onClick={handleClose}>{item}</MenuItem></Link>
                        
                    );
                })
            }
       
      </Menu>
    </div>
  );
}