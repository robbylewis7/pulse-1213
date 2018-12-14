import React from 'react';
import Delete from './delete.png';
import teamList from './teamList';

export default class Teams extends React.Component {
    constructor(props) {
        super(props);
    }

    
    
    
    
    

    render() {

        let teams = this.props.team;

        console.log(teamList.NBA)

 

        let team = teams.map((team, index) => {

            let test = teamList.NBA.map(function(team){

                return team.team;

            }).indexOf(team);

 

            // console.log(teamList.NBA[test].logo);

           return <li key={index} className={"teams"}>{team}

           {/* <img src={teamList.NBA[test].logo}></img> */}

           
           </li>                

        });

        return (

            <>

                {team}

            </>

        );

    }
}

