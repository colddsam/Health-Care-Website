import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js/auto";
import '../styles/User.css';
import LineChart from '../components/LineChart';
import { profile } from '../assets/images/Image';
Chart.register(CategoryScale);
const apiUrl=process.env.REACT_APP_API_KEY
const User = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    const [device, setDevice] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`${apiUrl}/find/?_id=${id}`);
                setUser(userResponse.data);
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
            try {
                const dataResponse = await axios.get(`${apiUrl}/show/?_id=${id}`);
                setData(dataResponse.data);
            } catch (error) {
                console.log("Error fetching user's health data:", error);
            }
        };
        fetchData();
        
    }, [id]);

    const addDev = async () => {
        try {
            const response = await axios.post(`${apiUrl}/assign/?deviceid=${device}&clientid=${id}`);
            console.log(JSON.stringify(response.data));
            alert('Device Assigned');
        } catch (error) {
            console.log(error);
            alert('Error occurred during device assign');
        }
    }

    const name = user ? user.name : '';
    const email = user ? user.email : '';
    const phone = user ? user.phNo : '';
    const age = user ? user.age : '';
    const bloodGroup = user ? user.bloodGroup : '';

    const dates = data ? Object.values(data['Date Time']) : [];
    const bloodOxygen = data ? Object.values(data['Blood Oxygen']) : [];
    const temperature = data ? Object.values(data['Temperature']) : [];
    const heartRate = data ? Object.values(data['Heart Rate']) : [];
    const ecgSignal = data ? Object.values(data['ECG Signal']) : [];

    return (
        <div className='user'>
            <section className="profile_sec">
                <div className="profile_image">
                    <img className="img" src={profile} alt='profile' />
                </div>
                <div className="profile_details">
                    <h1 className="profile_desc">Unique ID : {id}</h1>
                    <h1 className="profile_desc">Name : {name}</h1>
                    <h2 className="profile_desc">Email : {email}</h2>
                    <h2 className="profile_desc">Phone No : {phone}</h2>
                    <h2 className="profile_desc">Age : {age}</h2>
                    <h2 className="profile_desc">Blood Group : {bloodGroup}</h2>
                </div>
            </section>
            <section className="toggle">
                <form action="" className="toggle_section">
                    <input type="text" className='toggle_text' placeholder='Add New Device ID' value={device} id='toggle_text' onChange={(e) => { setDevice(e.target.value) }} />
                    <input type="submit" value='submit' className='toggle_submit' onClick={addDev} />
                </form>
            </section>
            <section className="chart">
                <LineChart time={dates} data={bloodOxygen} text='Blood Oxygen' />
                <LineChart time={dates} data={temperature} text='Temperature' />
                <LineChart time={dates} data={heartRate} text='Heart Rate' />
                <LineChart time={dates} data={ecgSignal} text='ECG Signal' />
            </section>
        </div>
    );
};

export default User;
