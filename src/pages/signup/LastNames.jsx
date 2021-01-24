import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

const useStyles = () => ({
})

const LastNames = (props) => {
  const classes = useStyles(props)

  return (
    <div>
      <Form.Control size="sm" as="select" style={{minWidth: 150}}>
        <option>Last Name</option>
        <option>Ruffalo</option>
        <option>Toal</option>
        <option>Fox</option>
        <option>Arroyo</option>
        <option>Gould</option>
        <option>Ughdanbaldijina</option>
        <option>Bronson</option>
        <option>Johnson</option>
        <option>Roberson</option>
        <option>Mill</option>
        <option>Graham</option>
        <option>Goldstein</option>
        <option>Masahji</option>
        <option>Snider</option>
        <option>Wilson</option>
        <option>Hansen</option>
        <option>Forney</option>
        <option>Elmeligui</option>
        <option>Tosh</option>
      </Form.Control>
    </div>

  )
}

export default LastNames