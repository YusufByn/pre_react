import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UsersPage from './components/UsersPage.jsx'
import UserById from './components/UserById.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/users' element={<UsersPage/>}/>
          <Route path='/users/:id' element={<UserById/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
