import './App.css'
import KundenForm from "./components/kunden-form/KundenForm.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import {useState} from "react";
import Details from "./components/details/Details.jsx";

function App() {
    const [view, setView] = useState('dashboard');
    const [kunde, setKunde] = useState({});

    function onAdd() {
        setView('add');
        setKunde({});
    }

    function onDetail(entry) {
        setView('detail')
        setKunde(entry)
    }

    function onBack() {
        setView('dashboard')
        setKunde({})
    }

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

    return (
        <>
            <Dashboard onAdd={onAdd} onDetail={onDetail}/>
        </>
    )
}

export default App
