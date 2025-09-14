import './index.css'
import { useEffect, useRef } from 'react'

function Book(props) {
    const containerRef = useRef(null);
    const buttonRef = useRef(null);

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
            
            // Update the container with book image
            if (containerRef.current) {
                containerRef.current.innerHTML = `<img src="${bookData.image}" alt="${bookData.title}" />`;
            }
            
        } catch (error) {
            console.log("the error is " + error);
        }
    };

    // Event listener setup
    useEffect(() => {
        const button = buttonRef.current;
        const container = containerRef.current;

        if (button && container) {
            // Add event listener to the button
            button.addEventListener("click", () => {
                // Call the async function with the book API URL
                getBook("https://api.itbook.store/1.0/books/9781642002270");
            });
        }

        // Cleanup function to remove event listener
        return () => {
            if (button) {
                button.removeEventListener("click", () => {
                    getBook("https://api.itbook.store/1.0/books/9781642002270");
                });
            }
        };
    }, []);

    return (
        <div className="book">
            <div ref={containerRef}>
                <img src={props.image} alt={props.title} />
            </div>
            <div className="author">
                <p>by</p>
                <p className="author-name">{props.author}</p>
            </div>
            <button ref={buttonRef} className="learn">Learn more</button>
        </div>
    );
}

export default Book;