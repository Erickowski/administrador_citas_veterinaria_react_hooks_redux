import React from 'react';
import AgregarCita from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';

//Redux
import store from './store';
import {Provider} from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administrador de pacientes de veterinaria</h1>
        </header>
        <div className="row mt-3">
          <div className="col-md-7">
            <AgregarCita />
          </div>
          <div className="col-md-5">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
    
  );
}

export default App;
