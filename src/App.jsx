import './App.css'
import KundenForm from "./components/kunden-form/KundenForm.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import {useState} from "react";
import Details from "./components/details/Details.jsx";

/**
 * App is the root component of the application.
 *
 * It handles navigation between three views:
 * - Dashboard (overview of entries)
 * - KundenForm (form to add a new customer)
 * - Details (view detailed info about a customer)
 *
 * State:
 * - `view` (string): Controls the active screen ('dashboard', 'add', 'detail')
 * - `kunde` (object): Stores the selected customer data (used in Details view)
 */
function App() {
    const [view, setView] = useState('dashboard');
    const [kunde, setKunde] = useState({});

    /**
     * Switch to the "add customer" view.
     * Resets the customer data to an empty object.
     */
    function onAdd() {
        setView('add');
        setKunde({});
    }

    /**
     * Switch to the "details" view for the selected customer.
     * @param {Object} entry - Customer object to view in detail
     */
    function onDetail(entry) {
        setView('detail')
        setKunde(entry)
    }

    /**
     * Navigate back to the dashboard view.
     * Clears any selected customer data.
     */
    function onBack() {
        setView('dashboard')
        setKunde({})
    }

    // View rendering logic
    if (view === 'add') {
        return (
            <>
                <KundenForm onBack={onBack}/>
            </>
        )
    } else if (view === 'detail') {
        return (
            <>
                <Details kunde={kunde} onBack={onBack}/>
            </>
        )
    }

    // Default view: dashboard with customer list
    return (
        <>
            <Dashboard onAdd={onAdd} onDetail={onDetail}/>
        </>
    )
}

export default App
