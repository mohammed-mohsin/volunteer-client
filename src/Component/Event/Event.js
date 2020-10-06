import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Event = (props) => {

    const [eventInfo, setEventInfo] = useContext(UserContext);
    const { name, img, id } = props.event
    setEventInfo(props.event)
    
    return (
        <>

            <div className="col-md-3 p-4">
                <Link style={{
                    textDecoration: 'none'
                }} to={`/register/${name}`}>
                    <div className="card">
                        <div className="view overlay">
                            <img className="card-img-top" alt="EventImage" src={img} />

                            <div className="mask rgba-primary-slight"></div>

                        </div>
                        <div className="card-body bg-primary b-0 ">
                            <h4 className=" text-center text-white card-title">{name}</h4>
                        </div>
                    </div>
                </Link>

            </div>
        </>

    );
};

export default Event;