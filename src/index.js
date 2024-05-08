import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Context } from './context/Context'
import { Darkmode } from './context/Darkmode'
import { QueryClient, QueryClientProvider } from 'react-query'

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
        <QueryClientProvider client={queryClient}>
          <Darkmode>
            <Context>
              <App />
            </Context>
          </Darkmode>
        </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>
)
