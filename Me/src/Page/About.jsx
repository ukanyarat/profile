import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const goAbout = () => {
        navigate('/about');
    }

    const goPerformance = () => {
        navigate('/performance');
    }
    return (
        <div>
            <div style={{ textAlign: 'center', border: '3px solid green', backgroundColor: 'white', borderRadius: '40px', width: '700px', padding: '20px' }}>
                <h1 style={{
                    fontWeight: 'bold',
                    fontSize: '70px',
                    background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>About Hobby!!</h1><br />
                <h2 style={{ marginTop: '-50px' }}>ฟังเพลง </h2>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/qcgQ9s5QMLw?si=72Pcg2DIUcKxnvcE"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <h2>ดูหนัง</h2>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/gwlBlGKDDus"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', padding: '-20px' }}>
                    <button onClick={goHome}>home</button>
                    <button onClick={goAbout}>about</button>
                    <button onClick={goPerformance}>performance</button>
                </div>
            </div>
        </div>
    )
}

export default About;
