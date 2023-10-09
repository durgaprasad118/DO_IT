import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { QueryClient } from '@tanstack/react-query'
import { useDispatch,useSelector } from 'react-redux';
const queryClient = new QueryClient()

function App() {
  
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </QueryClientProvider>
    </div>
  )
}

export default App
