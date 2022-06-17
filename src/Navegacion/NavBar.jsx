import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { About } from '../Componentes/About'
import { Dashboard } from '../Componentes/Dashboard'
import { Home } from '../Componentes/Home'
import "../styles/Gen.css"

function NavBar() {
  return (
    <BrowserRouter>
        <header className='Titulo'>
        <nav>
            <ul className='Desplaza'>
                <NavLink to ="/Home">
                <li>Home</li>
                </NavLink>
                <NavLink to ="/Dashboard">
                <li>Dashboard</li>
                </NavLink>
                <NavLink to ="/About">
                <li>About</li>
                </NavLink>
            </ul>
        </nav>
    </header>
        <Routes>
            <Route path='/Home' element={ <Home/>}/>
            <Route path='/Dashboard' element={ <Dashboard/>}/>
            <Route path='/About' element={ <About/>}/>
            <Route path='/*' element={ <Home/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export {NavBar}