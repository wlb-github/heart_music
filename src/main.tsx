import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import { persistor, store } from './store'
import 'modern-normalize/modern-normalize.css'
import './assets/base.scss'
import MyModal from './components/MyModal'
import Loader from '../src/pages/Loading/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <RouterProvider router={router} fallbackElement={<Loader />} />
        <MyModal />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
