import {Routes, Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Drift } from './pages/Drift'
import { Forza } from './pages/Forza'
import { TimeAttack } from './pages/TimeAttack'
import { NotFound } from './pages/NotFound'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path='/drift' element={<Drift />}/>
        <Route path='/timeattack' element={<TimeAttack />}/>
        <Route path='/forza' element={<Forza />}/>
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  )
}

export default App
