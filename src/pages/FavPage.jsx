import React from 'react'
import { useSelector } from 'react-redux';
import {Container, Row, Col, Card, Button, NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";


function FavPage() {
    const {favUsers} = useSelector(state=>state.usersReducer)
    console.log(favUsers)
  return (
    <div>
        {favUsers.map((item, index) =>
            <div>
                <Col lg={4} className='mb-4'>
                    <Card.Img variant="top" src={item.url} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Link to={`/${item.id}`} >more info</Link>
                        {/*<input type="checkbox" checked={check} id={user.id}  onChange={()=>handleChange(user)}   />*/}
                    </Card.Body>
                </Col>
            </div>
        )}
    </div>
  )
}

export default FavPage