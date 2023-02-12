import React, {useEffect} from 'react';
import {Container} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {getUserInfo} from "../../store/UsersSlice";

function User(props) {
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [])

    const {user} = useSelector(state => state.usersReducer)
    const navigate = useNavigate()
    return (
        <Container>
            <button className='my-5' onClick={() => navigate(-1)}>go to back</button>
            <h2>User name: {user.title}</h2>
            <h2>Body: {user.id}</h2>
            <img src={user.url} alt=""/>

        </Container>
    );
}

export default User;