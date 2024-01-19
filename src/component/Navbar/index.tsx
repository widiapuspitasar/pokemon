
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'orange' }}>
      <Toolbar>
        <Link href="/">
          
        <img
                    className="mx-auto h-12 w-auto m-4" 
                    src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
                    alt="Pokemon Image"
                    width={200}
                    height={100}
                    
                  />
          
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



