import React from 'react';
import styles from '../styles/Navbar.module.css'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from 'next/link';



const Navbar = () => {
    return (
        <div>
            <ul className={styles.list}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>Home</Button>
      <Link href={{
        pathname: "login",
        }}><Button>Login</Button></Link>
      <Link href="favorites"><Button>Favorites</Button></Link>
    </ButtonGroup>
            </ul>
        </div>
    )
}

export default Navbar;