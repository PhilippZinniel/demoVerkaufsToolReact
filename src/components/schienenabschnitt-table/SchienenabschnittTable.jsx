import './SchienenabschnittTable.css'

function SchienenabschnittTable({abschnitte, handleChange, className}) {
    return (
        <div className={`schienenabschnitt-table ${className}`}>
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
                {abschnitte.map((abschnitt, index) =>
                    <tr key={index}>
                        <td>
                            <input className="table-input" type="text"
                                   value={abschnitt.schienentyp}
                                   onChange={(e) => handleChange(index, 'schienentyp', e.target.value)}/>
                        </td>
                        <td>
                            <input className="table-input" type="number"
                                   value={abschnitt.schienenhaerte}
                                   onChange={(e) => handleChange(index, 'schienenhaerte', e.target.value)}/>
                        </td>
                        <td>
                            <input className="table-input" type="number"
                                   value={abschnitt.maximale_geschwindigkeit}
                                   onChange={(e) => handleChange(index, 'maximale_geschwindigkeit', e.target.value)}/>
                        </td>
                        <td>
                            <input className="table-input" type="number"
                                   value={abschnitt.laenge}
                                   onChange={(e) => handleChange(index, 'laenge', e.target.value)}/>
                        </td>
                    </tr>
                )
                }
                </tbody>
            </table>
        </div>
    )
}

export default SchienenabschnittTable;