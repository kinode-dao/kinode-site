// login page

import React, { useState } from 'react';
import Row from '../components/spacing/Row';
import Col from '../components/spacing/Col';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import { FaArrowRight } from 'react-icons/fa';
import useSiteStore from '../store/siteStorage';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setToken } = useSiteStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const onSubmit = () => {
    fetch('/api/blog/login', {
      method: 'POST',
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(data => data.json())
    .then(data => {
        if (data?.token) {
            setToken(data.token)
            nav('/blog/new')
        } else {
            alert('Incorrect username or password')
        }
    })
  }

  return (
    <Col className='login-container'>
      <Col className='login'>
        <Col className='main'>
          <Row className='header'>
            <h1 className='title'>Login</h1>
          </Row>
          <Row className='form'>
            <Input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
            <Input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
            <Button className='submit' onClick={onSubmit}>
              Login <FaArrowRight style={{ fontSize: 16 }} />
            </Button>
          </Row>
        </Col>
      </Col>
    </Col>
  )
}

export default Login