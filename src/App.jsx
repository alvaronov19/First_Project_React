
import './App.css'
import Header from './components/Header' 
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* Usamos el enrutador independiente */}
        <AppRouter />
      </div>
    </>
  )
}

export default App