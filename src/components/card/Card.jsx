import './Card.css'

function Card({header, content}) {
    return (
        <div className="dashboard-card">
            <h3>{header}</h3>
            <p className="card-text">{content}</p>
        </div>
    )
}

export default Card