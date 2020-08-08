import React from 'react'

const Lists = ({lists}) => {
    return (
        <div style = {{margin:"50px"}}>
            <center><h1> List </h1></center>
            <div className = 'row'>
            {lists.map((list) => (
                <div className = 'col-12 col-xs-12 col-md-6 col-xl-6 text-center mb-2 ' key={list.id}>
                <div className="card" style = {{backgroundColor: "#FFFFFF", boxShadow: "1px 1px 2px 1px grey"}}>
                    <div className="card-body">
                    <img src={`${list.avatar}`} alt = "" />
                    <h5 className="card-title">{list.name}</h5>
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
    )
};

export default Lists;