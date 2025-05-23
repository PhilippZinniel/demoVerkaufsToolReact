import './App.css'
import KundenForm from "./components/kunden-form/KundenForm.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import {useState} from "react";

function App() {
    const [view, setView] = useState('dashboard');

    function onAdd() {
        setView('add');
    }

    function onDetail() {
        setView('detail')
    }

    function onBack() {
        setView('dashboard')
    }

    if (view === 'add') {
        return (
            <>
                <KundenForm/>
            </>
        )
    } else if (view === 'detail') {
        return (
            <>
                <p>detail</p>
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
