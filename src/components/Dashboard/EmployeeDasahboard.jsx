import React from 'react'
import Header from '../others/Header'
import TaskListNum from '../others/TaskListNum'
import TaskList from '../TaskList/TaskList'

const EmployeeDasahboard = ({ changeUser, data }) => {
  return (
    <div className='p-5 sm:p-10  bg-[#1C1C1C] h-screen'>
      
      <Header data={data} changeUser={changeUser} />
      <TaskListNum data={data}  />
      <TaskList data={data} />
    </div>
  )
}

export default EmployeeDasahboard
