import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store ,persistor} from './Store'
import RouterConfig from './config/Router'
import BrandSlider from './Components/BrandSlider'
import Footr from './Components/Footr'
import Navbar from './Components/Navbar'

function App() {
  return (
      <BrowserRouter>
       <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
  
   <Navbar/>
      <RouterConfig />
   <BrandSlider/>
     
     <Footr/>
  
       </PersistGate>
       </Provider>
         </BrowserRouter>
  )
}

export default App
