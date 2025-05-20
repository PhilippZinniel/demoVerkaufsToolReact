import './KundenForm.css'

const TEST_DATA = [
    {
        schienentyp: "UIC60",
        schienenhaerte: 260,
        maximale_geschwindigkeit: 160,
        laenge: 2.5,
        id: 1
    },
    {
        schienentyp: "S54",
        schienenhaerte: 240,
        maximale_geschwindigkeit: 120,
        laenge: 1.8,
        id: 2
    }
]

function KundenForm() {
    const abschnittRows = TEST_DATA.map(abschnitt =>
        <tr key={abschnitt.id}>
            <td>{abschnitt.schienentyp}</td>
            <td>{abschnitt.schienenhaerte}</td>
            <td>{abschnitt.maximale_geschwindigkeit}</td>
            <td>{abschnitt.laenge}</td>
        </tr>
    );

    return (
        <div className="kunden-eingabe">
            <h2>Kunden hinzufügen</h2>
            <form className="kunden-form">

                <div className="kunden-inputs">
                    <span className="input-field input-full">
                        <label htmlFor="name">Name</label>
                        <input name="name" type="text" placeholder="Name"/>
                    </span>

                    <span className="input-field input-small">
                        <label htmlFor="email">Email</label>
                        <input name="email" type="email" placeholder="Email"/>
                    </span>

                    <span className="input-field input-small">
                        <label htmlFor="telefon">Telefon</label>
                        <input name="telefon" type="text" placeholder="Telefon"/>
                    </span>

                    <span className="input-field input-full">
                        <label htmlFor="adresse">Adresse</label>
                        <input name="adresse" type="text" placeholder="Adresse"/>
                    </span>
                </div>

                <table className="schienenabschnitt-liste">
                    <thead>
                    <tr>
                        <th>Schienentyp</th>
                        <th>Schienenhärte</th>
                        <th>Maximale Geschwindigkeit</th>
                        <th>Länge</th>
                    </tr>
                    </thead>
                    <tbody>
                        {abschnittRows}
                    </tbody>
                </table>

                <input name="submit" type="submit" value="Hinzufügen"/>
            </form>
        </div>
    )
}

export default KundenForm