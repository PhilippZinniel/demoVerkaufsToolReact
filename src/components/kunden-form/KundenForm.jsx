import './KundenForm.css'
import {useState} from "react";

function KundenForm() {
    function uploadData(formData) {
        console.log(formData);
    }

    const [rows, setRows] = useState([
        {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
    ]);

    const addRow = () => {
        setRows([
            ...rows,
            {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
        ]);
    };

    const abschnittRows = rows.map((abschnitt, index) =>
        <tr>
            <td>
                <input name={"schienentyp" + index} className="table-input" type="text" defaultValue={abschnitt.schienentyp}/>
            </td>
            <td>
                <input name={"schienenhaerte" + index} className="table-input" type="number" defaultValue={abschnitt.schienenhaerte}/>
            </td>
            <td>
                <input name={"maximale_geschwindigkeit" + index} className="table-input" type="number" defaultValue={abschnitt.maximale_geschwindigkeit}/>
            </td>
            <td>
                <input name={"laenge" + index} className="table-input" type="number" defaultValue={abschnitt.laenge}/>
            </td>
        </tr>
    );

    return (
        <div className="kunden-eingabe">
            <h2>Kunden hinzufügen</h2>
            <form className="kunden-form" action={uploadData}>

                <div className="kunden-inputs">
                    <div className="input-group input-full">
                        <input className="input-field" id="name" name="name" type="text" placeholder="Name"/>
                        <label className="input-label" htmlFor="name">Name</label>
                    </div>

                    <div className="input-group input-small">
                        <input className="input-field" id="email" name="email" type="email" placeholder="Email"/>
                        <label className="input-label" htmlFor="email">Email</label>
                    </div>

                    <div className="input-group input-small">
                        <input className="input-field" id="telefon" name="telefon" type="text" placeholder="Telefon"/>
                        <label className="input-label" htmlFor="telefon">Telefon</label>
                    </div>

                    <div className="input-group input-full">
                        <input className="input-field" id="adresse" name="adresse" type="text" placeholder="Adresse"/>
                        <label className="input-label" htmlFor="adresse">Adresse</label>
                    </div>
                </div>

                <div className="schienenabschnitt-table">
                    <table className="schienenabschnitt-liste">
                        <thead>
                        <tr className="table-header">
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
                </div>

                <div className="button-group">
                    <button className="add-schienenabschnitt-button" onClick={addRow} type="button">
                        Neuen Abschnitt hinzufügen
                    </button>

                    <input name="submit" type="submit" className="save-button" value="Hinzufügen"/>
                </div>

            </form>
        </div>
    )
}

export default KundenForm