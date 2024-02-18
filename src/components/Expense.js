import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import { Badge } from 'react-bootstrap';
const Expense = (props) => {
    const {category,description,expense}=props.item
  return (
    <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start mb-2 rounded">
        <div className="ms-2 me-auto">
          <div className="fw-bold">{category}</div>
          {description}
        </div>
        <Badge bg="primary" pill>
          {expense}
        </Badge>
      </ListGroup.Item>
  )
}

export default Expense