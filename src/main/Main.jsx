import React, { useContext } from 'react'
import "./Main.css"
import { ThemeContext } from '../ThemeContext'
import Header from '../components/header/Header'
import Dashboard from '../pages/dashboard/Dashboard'

const Main = () => {
    const {DarkTheme} = useContext(ThemeContext)
  return (
    <div className={`main ${DarkTheme && "dark"}`}>
        <Header/>
        <Dashboard/>
    </div>
  )
}

export default Main