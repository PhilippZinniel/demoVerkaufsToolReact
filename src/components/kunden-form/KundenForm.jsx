import './KundenForm.css'
import {useState} from "react";
import KundenInputs from "../kunden-inputs/KundenInputs.jsx";
import SchienenabschnittTable from "../schienenabschnitt-table/SchienenabschnittTable.jsx";
import {post} from "../../utils/api.js";
import BackButton from "../back-button/BackButton.jsx";

/**
 * KundenForm component
 *
 * @description provides a form interface to add a new customer (Kunde)
 * along with multiple railway network sections (Schienenabschnitte).
 *
 * @param {Function} onBack - Callback to navigate back from the form.
 */
function KundenForm({onBack}) {
    const [rows, setRows] = useState([
        {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
    ]);

    // Upload customer and railway sections data via POST requests
    async function uploadData(formData) {
        // return if the name is empty
        if(formData.get('name').trim() === ""){
            console.log("Name ist leer!");
            return;
        }

        try {
            const kunde = await post('kunden', {
                name: formData.get('name'),
                email: formData.get('email'),
                telefon: formData.get('telefon'),
                adresse: formData.get('adresse'),
            });
            console.log("Kunde erfolgreich gespeichert...");

            // Filter out rows where all fields are empty or falsy
            const filteredRows = rows.filter(row => {
                return Object.values(row).some(value => value && value.toString().trim() !== "");
            });

            filteredRows.forEach(row => {
                post('schienenabschnitte', {...row, kunde: kunde.id})
                    .then(() => console.log("Schienenabschnitt erfolgreich gespeichert..."));
            })

            onBack();
        } catch (error) {
            console.error("Fehler beim Speichern: ", error.message);
        } finally {
            // Reset rows after submission
            setRows([
                {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}
            ]);
        }

    }

    // Add a new empty row for railway sections
    const addRow = () => {
        setRows(prev => [...prev, {schienentyp: "", schienenhaerte: "", maximale_geschwindigkeit: "", laenge: ""}]);
    };

    // Update specific field value of a row by index
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
                    <h1>Kunden hinzufügen</h1>

                    <section className="kunden-inputs-card">
                        <h2>Informationen</h2>
                        <KundenInputs/>
                    </section>

                    <section className="table-container">
                        <h2>Schienennetzwerk</h2>
                        <SchienenabschnittTable abschnitte={rows} handleChange={handleChange}/>

                        <div className="button-group">
                            <button className="add-button" onClick={addRow} type="button">
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