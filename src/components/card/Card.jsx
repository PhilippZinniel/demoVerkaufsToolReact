import './Card.css'

/**
 * Card component
 *
 * @description displays a styled card with a header and content text.
 * @param {string} header - Title text displayed in an <h3> tag
 * @param {string} content - Main content displayed in a <p> tag
 */
function Card({header, content}) {
    return (
        <div className="card">
            <h3>{header}</h3>
            <p className="card-text">{content}</p>
        </div>
    )
}

export default Card