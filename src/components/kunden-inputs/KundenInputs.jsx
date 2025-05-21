import './KundenInputs.css'

function KundenInputs() {
    return (
        <div className="kunden-inputs">
            <div className="input-group input-full">
                <input className="input-field" id="name" name="name" type="text" placeholder="Name" />
                <label className="input-label" htmlFor="name">Name</label>
            </div>

            <div className="input-group input-small">
                <input className="input-field" id="email" name="email" type="email" placeholder="Email" />
                <label className="input-label" htmlFor="email">Email</label>
            </div>

            <div className="input-group input-small">
                <input className="input-field" id="telefon" name="telefon" type="text" placeholder="Telefon" />
                <label className="input-label" htmlFor="telefon">Telefon</label>
            </div>

            <div className="input-group input-full">
                <input className="input-field" id="adresse" name="adresse" type="text" placeholder="Adresse" />
                <label className="input-label" htmlFor="adresse">Adresse</label>
            </div>
        </div>
    );
}

export default KundenInputs;
