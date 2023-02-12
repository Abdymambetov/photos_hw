import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Card, Button, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch} from "react-redux";
import {changeFavUser, deleteAllAction, getUsers} from "../../store/UsersSlice";
import {Link} from "react-router-dom";


function UsersPage(props) {
    const dispatch = useDispatch()

    const {users, preloader, error} = useSelector(state => state.usersReducer)
    const [check,setCheck]= useState([])

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const handleChange=(value)=>{
        dispatch(changeFavUser(value))
    }

    return (
        <Container>
            <h2 className='mb-5'>Users List</h2>
            <Link to='fav'>fav</Link>
            <input type="date"/>
            <button className='my-5' onClick={() => dispatch(deleteAllAction())}>delete All</button>
            <Row>
                {preloader
                    ?
                    <h3>loading...</h3>
                    :
                    error
                    ?
                        <h3>{error}</h3>
                        :
                    users.slice(0, 18).map(user =>
                        // <Link to={`/${user.id}`} className='mb-4' lg={4}>
                        //     <img src={user.url} alt=""/>
                        //     <p>{user.title}</p>
                        // </Link>
                    // ++++++
                    // <Link to={`/${user.id}`}>
                        <Col lg={4} className='mb-4'>
                                <Card.Img variant="top" src={user.url} />
                                <Card.Body>
                                    <Card.Title>{user.title}</Card.Title>
                                    <Link to={`/${user.id}`} >more info</Link>
                                    {/*<input type="checkbox" checked={check} id={user.id}  onChange={()=>handleChange(user)}   />*/}
                                    <input type="checkbox"  id={user.id}  onChange={()=>handleChange(user)}   />
                                </Card.Body>
                        </Col>
                    // </Link>

                )}
            </Row>
            
        </Container>
    );
}

export default UsersPage;