import './Details.css'
import Card from "../card/Card.jsx";
import SchienenabschnittTable from "../schienenabschnitt-table/SchienenabschnittTable.jsx";
import BackButton from "../back-button/BackButton.jsx";

/**
 * Details component
 *
 * @description displays detailed information about a single customer (kunde).
 *
 * Shows contact info, address, last update timestamp,
 * and a table of related railway network sections (schienenabschnitte).
 *
 * @param {Object} kunde - The customer data object containing details and related railway sections.
 * @param {Function} onBack - Callback function to handle back navigation.
 */
function Details({kunde, onBack}) {
    return (
        <div className="component">
            <BackButton onBack={onBack}/>
            <div className="component-content">
                <h2>{kunde.name}</h2>

                <section className="info-cards">
                    <Card header="Kontakt Informationen" content={`${kunde.email} \n ${kunde.telefon}`}/>
                    <Card header="Adresse" content={kunde.adresse.replace(',', '\n')}/>
                    <Card header="Zuletzt bearbeitet" content={new Date(kunde.updated_at).toLocaleString()}/>
                </section>
                <section className="table-container">
                    <h3>Schienennetzwerk</h3>
                    <SchienenabschnittTable
                        abschnitte={kunde.schienenabschnitte}/>
                </section>
            </div>
        </div>
    )
}

export default Details