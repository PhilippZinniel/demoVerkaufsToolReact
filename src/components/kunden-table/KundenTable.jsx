import './KundenTable.css'

function KundenTable({entries, onAdd, onDetail}) {
    return (
        <>
            <div className="table-wrapper">
                <table className="dashboard-table-list">
                    <thead>
                    <tr>
                        <th>Kunde</th>
                        <th>E-Mail</th>
                        <th>Telefon</th>
                        <th>Adresse</th>
                        <th>Schienennetz</th>
                        <td className='button-cell'>
                            <button className="table-action-button" onClick={onAdd}>+</button>
                        </td>
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