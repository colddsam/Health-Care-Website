import React, { useEffect, useState,useMemo  } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Buffer } from 'buffer';
import '../styles/User.css';
import LineChart from '../components/LineChart';
import { profile } from '../assets/images/Image';
import PopUp from '../components/PopUp';
const apiUrl=process.env.REACT_APP_API_KEY
const User = ({uid,setUid}) => {
    const { id } = useParams();
    const [decodedString, setDecodedString] = useState('');
    const [data, setData] = useState(null);
    const [user, setUser] = useState(null);
    const [device, setDevice] = useState('');
    const delayMS = 10000;


useEffect(() => {
        setUid(id);
        let bufferObj = Buffer.from(id, "base64"); 
        setDecodedString(bufferObj.toString("utf8")); 
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`${apiUrl}/find/?_id=${decodedString}`);
                setUser(userResponse.data);
            } catch (error) {
                console.log("Error fetching user data:", error);
            }
        };
        fetchData();
        
    }, [id,setUid,decodedString]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const dataResponse = await axios.get(`${apiUrl}/show/?_id=${decodedString}`);
            setData(dataResponse.data);
        } catch (error) {
            console.log("Error fetching user's health data:", error);
        }
    };

    const interval = setInterval(fetchData, delayMS);
    
    return () => clearInterval(interval);
}, [decodedString]);


    const addDev = async () => {
        try {
            await axios.post(`${apiUrl}/assign/?deviceid=${device}&clientid=${decodedString}`);
        } catch (error) {
            console.log(error);
        }
    }

    const memoizedUser = useMemo(() => user, [user]);

    const name = memoizedUser ? memoizedUser.name : '';
    const email = memoizedUser ? memoizedUser.email : '';
    const phone = memoizedUser ? memoizedUser.phNo : '';
    const age = memoizedUser ? memoizedUser.age : '';
    const bloodGroup = memoizedUser ? memoizedUser.bloodGroup : '';
    const gender = memoizedUser ? memoizedUser.gender : '';

    const dates = data ? Object.values(data['Date Time']) : [];
    const bloodOxygen = data ? Object.values(data['Blood Oxygen']) : [];
    const temperature = data ? Object.values(data['Temperature']) : [];
    const heartRate = data ? Object.values(data['Heart Rate']) : [];
    const ecgSignal = data ? Object.values(data['ECG Signal']) : [];
    const stressLevel = data ? Object.values(data['Stress Level']) : [];

    return (
        <div className='user'>
            {
                isNaN(user)?'':<PopUp/>
            }
            <section className="profile_sec">
                <div className="profile_image">
                    <img className="img" src={profile} alt='profile' />
                </div>
                <div className="profile_details">
                    <h1 className="profile_desc">Unique ID : {decodedString}</h1>
                    <h1 className="profile_desc">Name : {name}</h1>
                    <h2 className="profile_desc">Email : {email}</h2>
                    <h2 className="profile_desc">Phone No : {phone}</h2>
                    <h2 className="profile_desc">Age : {age}</h2>
                    <h2 className="profile_desc">Blood Group : {bloodGroup}</h2>
                    <h2 className="profile_desc">Gender : {gender}</h2>
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
                <LineChart time={dates} data={stressLevel} text='Stress Level' />
            </section>
        </div>
    );
};

export default User;
