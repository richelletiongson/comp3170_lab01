import './index.css'

function Book(props) {
    // Async function to fetch book data
    const getBook = async (url) => {
        try {
            // Fetch data from API
            const response = await fetch(url);
            // response is a promise object that will eventually update with data or an error
            
            // Parse the JSON data
            const bookData = await response.json();
            // bookData is the data pulled off the object and formatted
            
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
        if (props.url) {
            // If we have a URL prop, open it directly
            window.open(props.url, '_blank', 'noopener,noreferrer');
        } else {
            // Otherwise, fetch book data from API
            getBook("https://api.itbook.store/1.0/books/9781642002270");
        }
    };

    return (
        <div className="book">
            <div className="book-image-container">
                <img src={props.image} alt={props.title} className="book-image" />
            </div>
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