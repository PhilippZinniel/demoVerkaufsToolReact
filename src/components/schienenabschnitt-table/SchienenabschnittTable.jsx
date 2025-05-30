import './SchienenabschnittTable.css'
import '../../shared/table.css'

/**
 * SchienenabschnittTable component
 * @description displays a table of rail segments with editable inputs for each property.
 *
 * @param {Object[]} abschnitte - Array of rail segment objects.
 * @param {Function} handleChange - Callback fired when an input value changes; receives (index, field, value).
 */
function SchienenabschnittTable({abschnitte, handleChange}) {
    const rowContainsValue = (row) => {return Object.values(row).some(value => value !== '')}

    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                <tr className="table-header">
                    <th>Schienentyp</th>
                    <th>Schienenhärte</th>
                    <th>Max. Geschwindigkeit</th>
                    <th>Länge</th>
                </tr>
                </thead>
                <tbody>
                {abschnitte.map((abschnitt, index) =>
                    <tr key={index}>
                        <td data-label="Schienentyp">
                            <input className="table-input" type="text"
                                   required={rowContainsValue(abschnitt)}
                                   value={abschnitt.schienentyp}
                                   onChange={(e) => handleChange(index, 'schienentyp', e.target.value)}/>
                        </td>
                        <td data-label="Schienenhärte">
                            <input className="table-input" type="number"
                                   required={rowContainsValue(abschnitt)}
                                   value={abschnitt.schienenhaerte}
                                   onChange={(e) => handleChange(index, 'schienenhaerte', e.target.value)}/>
                        </td>
                        <td data-label="Max. Geschw.">
                            <input className="table-input" type="number"
                                   required={rowContainsValue(abschnitt)}
                                   value={abschnitt.maximale_geschwindigkeit}
                                   onChange={(e) => handleChange(index, 'maximale_geschwindigkeit', e.target.value)}/>
                        </td>
                        <td data-label="Länge">
                            <input className="table-input" type="number"
                                   required={rowContainsValue(abschnitt)}
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