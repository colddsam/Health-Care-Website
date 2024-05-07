import React, { useState } from 'react';
import '../styles/Register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PopUp from '../components/PopUp';

const apiUrl = process.env.REACT_APP_API_KEY;

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ph, setPh] = useState('');
    const [blood, setBlood] = useState('');
    const [age, setAge] = useState('');
    const [loading, setLoading] = useState(false);

    const addUser = async (e) => {
        e.preventDefault(); 
        setLoading(true);

        const userData = {
            name: name,
            email: email,
            phNo: ph,
            age: age,
            bloodGroup: blood
        };

        try {
            const response = await axios.post(`${apiUrl}/adduser/`, userData);
            setLoading(false);
            navigate(`/login`);
        } catch (error) {
            console.error('Error adding user:', error);
            setLoading(false);
        }
    };

    return (
        <div className='register'>
            {loading && <PopUp />} 
            <form className='register_form' onSubmit={addUser}>
                <label className='registerlabel'>Register</label>
                <input type="text" id='name' value={name} className='register_det' placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" id='email' value={email} className='register_det' placeholder='Enter Email Address' onChange={(e) => setEmail(e.target.value)} />
                <input type="text" id='number' value={ph} className='register_det' placeholder='Enter Phone Number' onChange={(e) => setPh(e.target.value)} />
                <input type="text" id='age' value={age} className='register_det' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} />
                <input type="text" id='blood' value={blood} className='register_det' placeholder='Enter Blood Group' onChange={(e) => setBlood(e.target.value)} />
                <input type="submit" value="submit" className='register_submit' />
            </form>
        </div>
    );
};

export default Register;
