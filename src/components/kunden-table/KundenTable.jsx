import './KundenTable.css'

/**
 * KundenTable component
 *
 * @description displays customer entries with options to add new customers or view details.
 *
 * @param {Object[]} entries - Array of customer objects to display in the table.
 * @param {Function} onAdd - Callback triggered when the add button is clicked.
 * @param {Function} onDetail - Callback triggered when a detail button is clicked, receives the selected entry.
 */
function KundenTable({entries, onAdd, onDetail}) {
    return (
        <>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                    <tr>
                        <th>Kunde</th>
                        <th>E-Mail</th>
                        <th>Telefon</th>
                        <th>Adresse</th>
                        <th>Schienennetz</th>
                        <th className='button-cell'>
                            <button className="table-action-button" onClick={onAdd}>+</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        entries.map((entry, index) =>
                            <tr key={index}>
                                <td>{entry.name}</td>
                                <td>{entry.email}</td>
                                <td>{entry.telefon}</td>
                                <td>{entry.adresse}</td>
                                <td>{entry.schienenabschnitte.length}</td>
                                <td className='button-cell'>
                                    <button className="table-action-button" onClick={() => onDetail(entry)}>{'>'}</button>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default KundenTable