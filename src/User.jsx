
function Card(props){
    return(
        <div className="card">
            <img className="card-image" src={props.image} alt="profile picture"></img>
            <h2 className="card-title">{props.username}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    );
}

export default Card