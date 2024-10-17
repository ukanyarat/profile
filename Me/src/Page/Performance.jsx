import React from 'react'
import { useNavigate } from 'react-router-dom';

const performance = () => {

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
            <div style={{ textAlign: 'center', border: '3px solid red', backgroundColor: 'white', borderRadius: '40px', width: '700px' }}>

                <h1 style={{
                fontWeight: 'bold',
                fontSize: '70px',
                background: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',}}>Performance!!</h1><br />
                <h1 style={{ fontWeight: 'bold', fontSize: '50px' ,marginTop:'-50px' }}>skill</h1>
                <h2>---- photoshop ----</h2>
                <img style={{ width: '200px', height: '200px' }} src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-h338uzqiw3L2g2PE9Hrr6rwq0xJaaS4M8J-ByFegG2nc2_qhgnPoEEwVOKpPfi2jxBLYzM0jwg9Ma4Xa5u52hLqlJsuFGHYeL7UpjUvqk1gStMrPI0VTtFkIq8frNthIScg_gq15hjv-/s1600/iy.png" alt="photoshop" />
                <h2>---- figma ----</h2>
                <img style={{ width: '200px', height: '200px' }} src="https://cdn.prod.website-files.com/652573f752f7acbb92e633e0/65577893ab916362d298f7e9_figma.png" alt="figma" />
                <h2>---- microsoft word ----</h2>
                <img style={{ width: '300px', height: '150px' }}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoDHyOzUj5fnlIRljfot9ijjPgoYoQ6rSIgA&s" alt="word" />
                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <button onClick={goHome}>home</button>
                    <button onClick={goAbout}>about</button>
                    <button onClick={goPerformance}>performance</button>
                </div>
            </div>
        </div>
    )
}

export default performance
