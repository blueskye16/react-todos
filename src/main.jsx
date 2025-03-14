import { createRoot } from 'react-dom/client'
import TodosApp from './components/TodosApp'

// Styling
import './styles/styles.css'

createRoot(document.getElementById('root')).render(
    <TodosApp />
)
