import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './context/Context'
// import { Darkmode } from './context/Darkmode'
import { QueryClient, QueryClientProvider } from 'react-query'
import { persistor, store } from './redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 5000 * 100,
      refetchOnMount: 'always',
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      refetchIntervalInBackground: false,
      suspense: false,
    },
    mutations: {
      retry: 0,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            {/* <Darkmode> */}
            <Context>
              <App />
            </Context>
            {/* </Darkmode> */}
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
