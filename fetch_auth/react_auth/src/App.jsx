import RegisterForm from './component/RegisterForm.jsx'
import LoginForm from './component/LoginForm.jsx'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Profil from './component/ProfilPage.jsx'
import PageTest from './component/PageTest.jsx'
import PagePrompt from './component/PagePrompt.jsx'

function App() {

  return (
    <>
      {/* active le système de router */}
      <BrowserRouter>
        {/* conteneur de nos routes */}
        <Routes>
          {/* route d'enregsitrement */}
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/profil' element={<Profil/>}/>
          <Route path='/test' element={<PageTest/>}/>
          <Route path='/text' element={<PagePrompt/>}/>

          {/*si aucune route ne correspond -> register */}
          <Route path='*' element={<Navigate to="/login"/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
