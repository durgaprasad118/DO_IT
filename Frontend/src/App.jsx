import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Int from './utils/Int'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
const queryClient =new QueryClient()
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <Navbar></Navbar>
      </QueryClientProvider>
      <Outlet></Outlet>
    </div>
  )
}

export default App

