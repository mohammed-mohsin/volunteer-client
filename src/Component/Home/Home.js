import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import SearchIcon from '@material-ui/icons/Search';
import Events from '../Events/Events';


const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-ravine-00878.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))

    }, [])

    return (
        <>
            <Nav />
            <div style={{
                /* The image used */
                height: '30vh',
                backgroundImage: `url(https://i.ibb.co/GVSr6X5/bg.png)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no - repeat',
                backgroundSize: 'cover',
            }}>
                <div style={{
                    backgroundColor: 'rgba(250,250,210, .75)',
                    height: '100%',
                    width: '100%',
                }}>
                    <div className=''>
                        <h1 className=" p-5  text-center"> I grow by helping people in need.</h1>
                    </div>
                    <form className="  form-inline m-4  active-cyan-4">
                        <input className="form-control  form-control  h-75 w-50" type="text" placeholder="Search"
                            aria-label="Search" />
                        <SearchIcon style={{ position: 'absolute', marginLeft: '72%' }} className="btn-primary ml-aut  fas fa-search text-white" />
                    </form>
                    <Events  events={events} />
                </div>
            </div >
        </>
    )
};


export default Home;