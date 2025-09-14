import './index.css'

function Book(props) {
    const handleLearnMoreClick = () => {props.url};

    return (
        <div className="book">
            <img src={props.image} alt={props.title} />
            <div className="author">
                <p>by</p>
                <p className="author-name">{props.author}</p>
            </div>
            <button className="learn" onClick={handleLearnMoreClick}>
                Learn more
            </button>
        </div>
    );
}

export default Book;