import './Dashboard.css'
import Card from "../card/Card.jsx";
import KundenTable from "../kunden-table/KundenTable.jsx";
import {get} from "../../utils/api.js";
import {useEffect, useState} from "react";

function Dashboard({onAdd, onDetail}) {
    const [kunden, setKunden] = useState([]);
    const [schienenabschnitte, setSchienenabschnitte] = useState([])
    const [lastUpdate, setLastUpdate] = useState(new Date());

    useEffect(() => {
        get('kunden')
            .then(response => setKunden(response))
            .catch(error => console.error(error))
    }, []);

    useEffect(() => {
        get('schienenabschnitte')
            .then(response => setSchienenabschnitte(response))
            .catch(error => console.error(error))
    }, [])

    useEffect(() => {
        get('letzte_aenderung')
            .then(response => setLastUpdate(response))
            .catch(error => console.error(error))
    })

    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                <section className="dashboard-cards">
                    <Card header="Kunden"
                          content={(kunden.length !== 1)
                              ? kunden.length + ' aktive Kunden'
                              : kunden.length + ' aktiver Kunde'}/>
                    <Card header="Schienenabschnitte"
                          content={(schienenabschnitte.length !== 1)
                              ? schienenabschnitte.length + ' Einträge'
                              : schienenabschnitte.length + ' Eintrag'}/>
                    <Card header="Letzte Änderung" content={lastUpdate.toLocaleString()}/>
                </section>

                <section className="dashboard-table">
                    <div className="dashboard-table-header">
                        <h3>Einträge</h3>
                        <div className="search-bar">
                            <input type="text" placeholder="Suchen..." className="search-input"/>
                        </div>
                    </div>
                    <KundenTable entries={kunden} onAdd={onAdd} onDetail={onDetail}/>
                </section>
            </div>
        </div>
    )
}

export default Dashboard