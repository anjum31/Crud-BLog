import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Read from './page/read'
import Create from './page/create'
import Update from './page/update'

const App=()=> {
 

  return (
    
      <div>
        <BrowserRouter>
        <Routes>
          <Route element={<Read/>} path="/"/>
          <Route element={<Create/>} path="/create"/>
          <Route element={<Update/>} path="/update/:id"/>
        </Routes>
        </BrowserRouter>
       
      </div>
  )
     
}

export default App
