import React from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { signUp, singIn } from '../api/auth';
import jwtDecode from 'jwt-decode';
import { Context } from '..';
import { observer } from 'mobx-react-lite';
import { RoutePaths } from '../interfaces/route';

export const Auth: React.FC = observer(() => {
  const location = useLocation();
  const history = useHistory();
  const isSignIn = location.pathname === '/signin';
  const [form, setForm] = React.useState<{password: string, email: string}>({
    email: '',
    password: ''
  });
  const {user} = React.useContext(Context);

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    let res;
    try {
      isSignIn ? res = await singIn({email: form.email, password: form.password}) : res = await signUp({email: form.email, password: form.password});
      window.localStorage.setItem('token', JSON.stringify(res.data));
      user?.setUser(jwtDecode(res.data));
      user?.setIsAuth(true);
      setForm({email: '', password: ''});
      history.push(RoutePaths.SHOP);
    } catch (error) {
      console.log(error);
      window.alert(error.response.data.message);
    }
  }

  const handleFormChange = (name: string, value: string): void => {
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
      <Card style={{width:600}} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column" onSubmit={handleSignIn}>
          <Form.Control placeholder="Enter email" className="mt-2" name="email" onChange={event => handleFormChange(event.target.name, event.target.value)} value={form.email}/>
          <Form.Control placeholder="Enter password" type="password" className="mt-2" name="password" onChange={event => handleFormChange(event.target.name, event.target.value)} value={form.password}/>
          <Row className="d-flex justify-content-between align-items-center mt-3 pr-2 pl-3">
            {isSignIn ? 
              <div>Dont have account? <Link to="signup">Sing Up</Link></div>
            :
              <div><Link to="signin">Sing In</Link></div>
            }
            <Button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  )
})