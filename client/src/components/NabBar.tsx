import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '..';
import { RoutePaths } from '../interfaces/route';

export const NavBar: React.FC = observer(() => {
  const {user} = React.useContext(Context);
  const history = useHistory();

  const logOut = () => {
    user?.setUser(undefined);
    user?.setIsAuth(false);
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to={RoutePaths.SHOP} style={{color: 'white', textDecoration: 'none'}}>Buy Device</Link>
        {user?.isAuth ?
          <Nav className="ml-auto">
            <Button style={{color:'white'}} onClick={() => history.push(RoutePaths.ADMIN)} variant='outline'>Admin panel</Button>
            <Button style={{color:'white'}} onClick={logOut} variant='outline'>Exit</Button>
          </Nav>
        :
          <Nav className="ml-auto">
            <Button style={{color:'white'}} variant='outline' onClick={() => history.push(RoutePaths.SIGNIN)}>Authorization</Button>
          </Nav>
      }
      </Container>
    </Navbar>
  )
})