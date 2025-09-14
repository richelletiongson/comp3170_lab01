import './index.css'

function Book(props) {
    // Async function to fetch book data
    const getBook = async (url) => {
        try {
            // response is the promise object that get returned when we ask for the book data.
            // eventually, the object will update with either: the data we asked for, or an error.
            const response = await fetch(url);
            
            // bookData is the data is the data we are pulling off of the object, and then formatting with JSON
            const bookData = await response.json();
            console.log(JSON.stringify(bookData));
            
            // Open the book URL in a new tab
            if (bookData.url) {
                window.open(bookData.url, '_blank', 'noopener,noreferrer');
            }
            
        } catch (error) {
            console.log("the error is " + error);
        }
    };

    // Handle Learn more button click
    const handleLearnMoreClick = () => {
        getBook(props.image);
    };

    return (
        <div className="book">
            <div className="book-image-container">
                <img src="" alt="Book cover" className="book-image" />
            </div>
            <div className="author">
                <p>by</p>
                <p className="author-name">Loading...</p>
            </div>
            <button className="learn" onClick={handleLearnMoreClick}>
                Learn more
            </button>
        </div>
    );
}

export default Book;