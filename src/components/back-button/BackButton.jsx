import './BackButton.css'

function BackButton({onBack}) {
    return (<button className="back-button" onClick={onBack} type="button">{'X'}</button>)
}

export default BackButton