import './index.css'

function Book(props) {
    return (
        <div className="book">
            <image src={props.image}></image>
            <div>
                <p>by</p>
                <p>{props.author}</p>
            </div>
            <button className="learn">Learn more</button>
        </div>
    );
}

export default Book;