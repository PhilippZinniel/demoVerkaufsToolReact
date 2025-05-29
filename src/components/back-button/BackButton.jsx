import './BackButton.css'

/**
 * BackButton component
 *
 * @description a reusable "X" button in the top-right corner.
 * @param {Function} onBack - Callback executed when the button is clicked
 */
function BackButton({onBack}) {
    return (<button className="back-button" onClick={onBack} type="button">{'X'}</button>)
}

export default BackButton