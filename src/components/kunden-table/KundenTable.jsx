import './KundenTable.css'
import '../../shared/table.css'

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
    /**
     * Returns the given value if it is a non-empty string (after trimming),
     * or the value itself if not a string and truthy.
     * Otherwise, returns 'N/A' as a fallback.
     *
     * @param {string|any} value The value to display.
     * @return {string|any} The original value or 'N/A' if empty or falsy.
     */
    const displayOrNA = (value) => {
        return value && value.trim() !== '' ? value : 'N/A';
    };

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
                                <td data-label="Name">{entry.name}</td>
                                <td data-label="E-Mail">{displayOrNA(entry.email)}</td>
                                <td data-label="Telefon">{displayOrNA(entry.telefon)}</td>
                                <td data-label="Adresse">{displayOrNA(entry.adresse)}</td>
                                <td data-label="Schienenabschnitte">{entry.schienenabschnitte.length}</td>
                                <td className='button-cell'>
                                    <button className="table-action-button"
                                            onClick={() => onDetail(entry)}>{'>'}</button>
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