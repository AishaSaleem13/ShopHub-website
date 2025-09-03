import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store ,persistor} from './Store'
import RouterConfig from './config/Router'
import BrandSlider from './Componenets/BrandSlider'
import Footr from './Componenets/Footr'
import Navbar from './Componenets/Navbar'
import Form from './Componenets/Form'

function App() {
  return (
      <BrowserRouter>
       <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
  
   <Navbar/>
      <RouterConfig />
   <BrandSlider/>
     
     <Footr/>
     <Form/>

  
       </PersistGate>
       </Provider>
         </BrowserRouter>
  )
}

export default App
