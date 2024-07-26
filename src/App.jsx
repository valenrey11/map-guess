import { Home } from './pages/Home'
import './App.css'
import { Route, Router } from 'wouter'
import { Game } from './pages/Game'
function App() {
  return (
    <>
      <Router>
        <Route path='/home' component={Home} />
        <Route path='/' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/result' />
      </Router>
      {/* <Home /> */}
    </>
  )
}

export default App
