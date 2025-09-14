import './index.css'
import { useState, useEffect } from 'react'

function Book(props) {
    const [bookData, setBookData] = useState(null);

    // Fetch book data when component mounts
    useEffect(() => {
        const getBook = async () => {
            try {
                // response is the promise object that get returned when we ask for the book data.
                // eventually, the object will update with either: the data we asked for, or an error.
                const response = await fetch(props.image);
                
                // bookData is the data is the data we are pulling off of the object, and then formatting with JSON
                const data = await response.json();
                console.log(JSON.stringify(data));
                
                setBookData(data);
            } catch (error) {
                console.log("the error is " + error);
            }
        };

        getBook();
    }, [props.image]);

    // Handle Learn more button click
    const handleLearnMoreClick = () => {
        if (bookData && bookData.url) {
            window.open(bookData.url, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="book">
            <div className="book-image-container">
                <img src={bookData?.image} alt={bookData?.title} className="book-image" />
            </div>
            <div className="author">
                <p>by</p>
                <p className="author-name">{bookData?.authors}</p>
            </div>
            <button className="learn" onClick={handleLearnMoreClick}>
                Learn more
            </button>
        </div>
    );
}

export default Book;