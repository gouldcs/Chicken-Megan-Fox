import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from 'react-bootstrap/Form'

const useStyles = () => ({
})

const FirstNames = (props) => {
  const classes = useStyles(props)

  return (
    <div>
      <Form.Control size="sm" as="select" style={{minWidth: 150}}>
        <option>First Name</option>
        <option>Mark</option>
        <option>John</option>
        <option>Avery</option>
        <option>Megan</option>
        <option>Marcus</option>
        <option>Ray</option>
        <option>Journey</option>
        <option>Mackenzie</option>
        <option>Rupert</option>
        <option>Dajhari</option>
        <option>Mason</option>
        <option>Frank</option>
        <option>Andrew</option>
        <option>James</option>
        <option>Donald</option>
        <option>Richard</option>
        <option>Bam</option>
        <option>Drew</option>
        <option>Steve</option>
        <option>Ray</option>
        <option>Journey</option>
        <option>Mackenzie</option>
        <option>Rupert</option>
        <option>Dajhari</option>
        <option>Mason</option>
        <option>Frank</option>
        <option>Andrew</option>
      </Form.Control>
    </div>

  )
}

export default FirstNames