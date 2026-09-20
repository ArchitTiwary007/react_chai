import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
    return (
        <div className="app">

            <h1>Learn about redux toolkit</h1>

            <AddTodo />

            <h2>Todos</h2>

            <Todos />

        </div>
    )
}

export default App
