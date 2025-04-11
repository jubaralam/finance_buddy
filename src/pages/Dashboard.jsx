import React from 'react'
import Button from '../components/Button'

const Dashboard = () => {
  const  handleLogout = ()=>{
        alert("You have logged out")
    }
  return (
    <div>Dashboard

        <div className="btn">
            <Button text="Logout"
            action={handleLogout} />
        </div>
    </div>
  )
}

export default Dashboard