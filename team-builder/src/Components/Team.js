import React, {useState, useEffect} from 'react';
import Teammate from './Teammate';


function Team(props) {


const [team, setTeam ] = useState([]);

useEffect(() => {
    setTeam(props.teammates);
}, [props.teammates])

console.log(team);

    return(
        <div>
            {team.map((item) => {
                return (
                    <Teammate teammate={item}/>
                )
            })}
            </div>
    );
        }


export default Team;