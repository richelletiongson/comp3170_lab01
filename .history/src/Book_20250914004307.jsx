import './index.css'

function Book(props) {
    return (
        <div className="book">
            <image src={props.image}></image>
            <div className="author">
                <p>by</p>
                <p className="author-name">{props.author}</p>
            </div>
            <button className="learn">Learn more</button>
        </div>
    );
}

export default Book;