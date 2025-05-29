import './Dashboard.css'
import Card from "../card/Card.jsx";
import KundenTable from "../kunden-table/KundenTable.jsx";
import {get} from "../../utils/api.js";
import {useEffect, useState} from "react";

/**
 * Dashboard component
 *
 * @description displays key statistics and a searchable customer table.
 *
 * Fetches data from the backend, displays summary cards, and shows a table of customer entries.
 * Includes live updates every 10 seconds.
 *
 * @param {Function} onAdd - Callback for handling "Add new customer" actions.
 * @param {Function} onDetail - Callback for showing details of a specific customer entry.
 */
function Dashboard({onAdd, onDetail}) {
    const [kunden, setKunden] = useState([]);
    const [schienenabschnitte, setSchienenabschnitte] = useState([])
    const [lastUpdate, setLastUpdate] = useState(new Date());
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch data on mount and refresh it every 10 seconds
    useEffect(() => {
        const fetchData = () => {
            get('kunden')
                .then(response => setKunden(response))
                .catch(error => console.error(error))

            get('schienenabschnitte')
                .then(response => setSchienenabschnitte(response))
                .catch(error => console.error(error))

            get('letzte-aenderung')
                .then(response => setLastUpdate(new Date(response.letzte_aenderung)))
                .catch(error => console.error(error))
        }

        fetchData();
        const interval = setInterval(fetchData, 10000);
        return () => clearInterval(interval);
    }, []);

    // Filter customer list by search input (name or email)
    const filteredKunden = kunden.filter((kunde) =>
        [kunde.name, kunde.email].some(field =>
            field.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="component">
            <div className="component-content">
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

                <section className="table-container">
                    <div className="dashboard-table-header">
                        <h3>Einträge</h3>
                        <div className="search-bar">
                            <input type="text" placeholder="Suchen..." className="search-input"
                                   value={searchQuery}
                                   onChange={(e) => setSearchQuery(e.target.value)}/>
                        </div>
                    </div>
                    <KundenTable entries={filteredKunden} onAdd={onAdd} onDetail={(entry) => onDetail(entry)}/>
                </section>
            </div>
        </div>
    )
}

export default Dashboard