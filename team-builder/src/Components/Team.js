import React from 'react';


const Team = props => {

    return(
        <div>
            {props.teamList.map(teamMember => {
                return(
                    <div className='member' key={teamMember.id}>
                        <h2>{teamMember.name}</h2>
                        <p>{teamMember.email}</p>
                <p>{teamMember.role}</p>
                </div>
                )
            })}
        </div>
    )
}

export default Team;