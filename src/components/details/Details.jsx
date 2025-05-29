import './Details.css'
import Card from "../card/Card.jsx";
import SchienenabschnittTable from "../schienenabschnitt-table/SchienenabschnittTable.jsx";
import BackButton from "../back-button/BackButton.jsx";

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
                <section className="schienenabschnitte">
                    <h3>Schienennetzwerk</h3>
                    <SchienenabschnittTable
                        abschnitte={kunde.schienenabschnitte}/>
                </section>
            </div>
        </div>
    )
}

export default Details