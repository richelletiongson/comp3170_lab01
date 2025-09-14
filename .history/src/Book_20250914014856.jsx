import './index.css'

function Book(props) {
    const handleLearnMoreClick = () => {
        if (props.url) {
            // Open the book's URL in a new tab
            window.open(props.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="book">
            <img src={props.image} alt={props.title || 'Book cover'} />
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