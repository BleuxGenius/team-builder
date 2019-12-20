import React, {useState, useEffect} from 'react';


export function Teammate(props) {
    const [Teammate, SetTeammate] = useState({});

    useEffect(() => {
        SetTeammate(props.teammate);
    }, [props.teammate])

    return (
        <div>
    <p>{Teammate.name}</p>
    <p>{Teammate.email}</p>
    <p>{Teammate.role}</p>
        </div>
    );
}

export default Teammate;