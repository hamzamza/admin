
import './App.css';
import Home from './pages/home/Home';
import { Routes, Route } from "react-router-dom";
import Login from './pages/login/Login';
import List from './pages/list/List';
import New from './pages/new/New';
import Single from './pages/single/Single';
import { Link } from 'react-router-dom';
import Protectedroute from './Protectedroute';
import { userInputs } from './formSource';
const Error = () => {
  return <h1 style={{ fontSize: "200px" }}> Error assahbi</h1>
}


function App() {
  return (

    <Routes>
      <Route path='/' element={
        <Protectedroute>
          <Home />

        </Protectedroute>
      } />
      <Route path='/login'
        element={<Login />}
      />



      <Route path='/users'  >
        <Route index element={
          <Protectedroute>
            <List />
          </Protectedroute>
        } />
        <Route index path=':userId'
          element={
            <Protectedroute>
              < Single />
            </Protectedroute>
          } />
        <Route index path='new'
          element={
            <Protectedroute>
              < New inputs={userInputs} />
            </Protectedroute>
          }
        />
      </Route>


      <Route path='/hotels'  >
        <Route index element={<Protectedroute>
          <List />
        </Protectedroute>} />
        <Route index path=':hotelId' element={<Protectedroute>
          < Single />
        </Protectedroute>} />
        <Route index path='new' element={<Protectedroute>
          < New />
        </Protectedroute>} />
      </Route>

      <Route path='/rooms'  >
        <Route index element={<Protectedroute>
          <List />
        </Protectedroute>} />
        <Route index path=':roomId' element={<Protectedroute>
          < Single />
        </Protectedroute>} />
        <Route index path='new' element={<Protectedroute>
          < New />
        </Protectedroute>} />
      </Route>

      <Route path='*' element={<Error />} />
    </Routes>

  );
}

export default App;
