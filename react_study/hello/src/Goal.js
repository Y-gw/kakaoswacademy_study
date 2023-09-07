function MissedGoal(){
    return <h1>MISSED!</h1>;
}

function MadeGoal(){
    return <h1>Goal!</h1>;
}

export default function Goal(props){
    const isGoal = props.isGoal;
    if(isGoal){
        return <MadeGoal/>;
    }
        return <MissedGoal/>;   // default
}