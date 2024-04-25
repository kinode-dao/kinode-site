// login page

import React, { useState } from 'react';
import Row from '../components/spacing/Row';
import Col from '../components/spacing/Col';
import Button from '../components/form/Button';
import Input from '../components/form/Input';
import { FaArrowRight } from 'react-icons/fa6';
import useSiteStore from '../store/siteStorage';
import { useNavigate } from 'react-router-dom';
import './Blogin.scss'

const Login = () => {
  const { setToken } = useSiteStore()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  const onSubmit = () => {
    fetch('/api/blog/login', {
      method: 'POST',
      headers: {
        'Accepts': 'application/json',
        'Content-Type': 'application/json'
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
    <Col className='page-container'>
      <Col className='main page blogin'>
        <Row className='header'>
          <h1 className='title'>Login</h1>
        </Row>
        <Col className='form'>
          <Input placeholder='Username' value={username} onChange={e => setUsername(e.target.value)} />
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyUp={e => e.key === 'Enter' && onSubmit()}
          />
          <Button className='submit' onClick={onSubmit}>
            Login <FaArrowRight style={{ fontSize: 16 }} />
          </Button>
        </Col>
      </Col>
    </Col>
  )
}

export default Login