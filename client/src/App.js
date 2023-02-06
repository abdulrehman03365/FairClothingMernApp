import notFound from './pages/notFound/notFound'
import home from './pages/home/home'
import signIn from  './pages/signIn/signIn'
import signUp from './pages/singUp/signUp'
import becomePartner from './pages/becomePartner/becomePartner'
import { Component } from "react"
import {Route , Link , BrowserRouter as Router , Routes} from 'react-router-dom'


function App(params) {
    
  
return(
    <div className='App'>
      <Routes>
      <Route  path="/" element={<home/>} />
            <Route path='/signIn' element={<signIn/>} />
            <Route path='/signUp' element={<signUp/>} />
            <Route path='/becomePartner' element={<becomePartner/>} />
            <Route element={<notFound/>}/>
      </Routes>

    </div>


   )
}



export default App