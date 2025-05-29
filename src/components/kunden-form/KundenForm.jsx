import './KundenForm.css'
import {useState} from "react";
import KundenInputs from "../kunden-inputs/KundenInputs.jsx";
import SchienenabschnittTable from "../schienenabschnitt-table/SchienenabschnittTable.jsx";
import {post} from "../../utils/api.js";
import BackButton from "../back-button/BackButton.jsx";

function KundenForm({onBack}) {
    const [rows, setRows] = useState([
        {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
    ]);


    async function uploadData(formData) {
        try {
            const kunde = await post('kunden', {
                name: formData.get('name'),
                email: formData.get('email'),
                telefon: formData.get('telefon'),
                adresse: formData.get('adresse'),
            });
            console.log("Kunde erfolgreich gespeichert...");

            rows.forEach(row => {
                post('schienenabschnitte', {...row, kunde: kunde.id})
                    .then(() => console.log("Schienenabschnitt erfolgreich gespeichert..."));
            })
        } catch (error) {
            console.error("Fehler beim Speichern: ", error.message);
        } finally {
            setRows([
                {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
            ]);
        }

    }

    const addRow = () => {
        setRows(prev => [...prev, {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}]);
    };

    const handleChange = (index, field, value) => {
        setRows(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [field]: value};
            return updated;
        });
    };

    return (
        <div className="component">
            <BackButton onBack={onBack}/>
            <div className="component-content">
                <form className="kunden-form" action={uploadData}>
                    <h2>Kunden hinzufügen</h2>

                    <section className="kunden-inputs-card">
                        <h3>Informationen</h3>
                        <KundenInputs/>
                    </section>

                    <section className="schienenabschnitt-table-card">
                        <h3>Schienennetzwerk</h3>
                        <SchienenabschnittTable abschnitte={rows} handleChange={handleChange}/>

                        <div className="button-group">
                            <button className="add-schienenabschnitt-button" onClick={addRow} type="button">
                                Neuen Abschnitt hinzufügen
                            </button>

                            <input type="submit" className="save-button" value="Hinzufügen"/>
                        </div>
                    </section>

                </form>
            </div>
        </div>
    )
}

export default KundenForm