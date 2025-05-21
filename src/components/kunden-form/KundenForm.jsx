import './KundenForm.css'
import {useState} from "react";
import KundenInputs from "../kunden-inputs/KundenInputs.jsx";
import SchienenabschnittTable from "../schienenabschnitt-table/SchienenabschnittTable.jsx";

function KundenForm() {
    function uploadData(formData) {
        console.log(formData);
        console.log(rows);
        setRows([
            {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
        ]);
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

    const handleChange = (index, field, value) => {
        const updatedRows = [...rows];
        updatedRows[index][field] = value;
        setRows(updatedRows);
    };

    return (
        <div className="kunden-eingabe">
            <h2>Kunden hinzufügen</h2>
            <form className="kunden-form" action={uploadData}>

                <KundenInputs/>

                <SchienenabschnittTable abschnitte={rows} handleChange={handleChange} />

                <div className="button-group">
                    <button className="add-schienenabschnitt-button" onClick={addRow} type="button">
                        Neuen Abschnitt hinzufügen
                    </button>

                    <input type="submit" className="save-button" value="Hinzufügen"/>
                </div>

            </form>
        </div>
    )
}

export default KundenForm