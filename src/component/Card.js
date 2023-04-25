import './Card.css';

function Card(props) {
    return(
        <div className="row">
            <div className="card">
                <img src={props.imgUrl} alt="Makanan"/>
                <h4>{props.title}</h4>
                <p>Lorem ipsum dolor sit amet, {props.desc}</p>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    );
}

export default Card;