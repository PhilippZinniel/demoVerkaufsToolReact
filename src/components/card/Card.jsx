import './Card.css'

/**
 * Card component
 *
 * @description displays a styled card with a header and content text.
 * @param {string} header - Title text
 * @param {string} content - Main content
 */
function Card({header, content}) {
    return (
        <div className="card">
            <h2>{header}</h2>
            <p className="card-text">{(content && content.trim() !== '') ? content : 'nicht eingetragen'}</p>
        </div>
    )
}

export default Card