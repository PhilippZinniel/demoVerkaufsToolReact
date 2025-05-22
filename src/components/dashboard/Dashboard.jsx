import './Dashboard.css'

function Dashboard() {
    return (
        <div className="dashboard">
            <div className="dashboard-content">
                <h2>Dashboard</h2>
                <section className="dashboard-cards">
                    <div className="dashboard-card">
                        <h3>Kunden</h3>
                        <p className="card-text">34 aktive Kunden</p>
                    </div>
                    <div className="dashboard-card">
                        <h3>Schienenabschnitte</h3>
                        <p className="card-text">128 Einträge</p>
                    </div>
                    <div className="dashboard-card">
                        <h3>Letzte Änderung</h3>
                        <p className="card-text">22. Mai 2025</p>
                    </div>
                </section>

                <section className="dashboard-table">
                    <div className="dashboard-table-header">
                        <h3>Einträge</h3>
                        <div className="search-bar">
                            <input type="text" placeholder="Suchen..." className="search-input"/>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        <table className="dashboard-table-list">
                            <thead>
                            <tr>
                                <th>Kunde</th>
                                <th>E-Mail</th>
                                <th>Telefon</th>
                                <th>Adresse</th>
                                <th>Schienennetz</th>
                                <button className="table-action-button">+</button>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Müller GmbH</td>
                                <td>info@mueller.com</td>
                                <td>+431105523</td>
                                <td>Müllergasse 27, 1040 Wien</td>
                                <td>17 Abschnitte</td>
                                <button className="table-action-button">{'>'}</button>
                            </tr>
                            <tr>
                                <td>RailNet AG</td>
                                <td>info@railnet.at</td>
                                <td>+436811014242</td>
                                <td>Korneuburgerstraße 47/14, 1230 Wien</td>
                                <td>100 Abschnitte</td>
                                <button className="table-action-button">{'>'}</button>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Dashboard