import React from 'react';

const Event = (props) => {
    const {_id,name,imageURL} = props.event;

    const deleteEvent = (id,event) => {
        console.log(id)
        fetch(`http://localhost:5055/deleteEvent/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
             if(data){
                 event.target.parentNode.style.display = 'none';
            }
        })
    }
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}}  src={imageURL} key={_id} alt=""/>
            <h3>{name} <button onClick={() => deleteEvent(_id)}>Delete</button></h3>
        </div>
    );
};

export default Event;