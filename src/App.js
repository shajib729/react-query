import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
import HomePage from './components/Home.page'
import SuperHerosPage from './components/SuperHeros.page'
import RQSuperHerosPage from './components/RQSuperHeros.page.jsx'
import Nav from './components/Nav'
import InfinitePaginationPage from './components/InfinitePagination.page'
import DebouncePage from './components/Debounce.page'

function App() {
  const queryClient = new QueryClient()
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/super-heroes' element={<SuperHerosPage/>}/>
        <Route path='/rq-super-heroes' element={<RQSuperHerosPage/>} />
        <Route path='/infinite-pagination' element={<InfinitePaginationPage/>} />
        <Route path='/debounce' element={<DebouncePage/>} />
      </Routes>
    </Router>
    <ReactQueryDevtools initialIsOpen={false} position={'bottom-right'}/>
    </QueryClientProvider>
    </>
  )
}

export default App