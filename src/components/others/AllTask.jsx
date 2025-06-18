import React, { useContext } from 'react'
import { use } from 'react'
import { AuthContext } from '../../context/AuthProvider';


const AllTask = () => {

  const authData = useContext(AuthContext);

  return (
    <div className='bg-[#1C1C1C] p-5 rounded mt-5'>
      {
        authData?.employees?.map((employee) => (
          <div key={employee.id} className='bg-gray-800 py-2 px-4 mb-2 rounded flex flex-col md:flex-row justify-between'>
            <h2>{employee.firstName}</h2>
            <h3>Tasks Assigned</h3>
            <h5>Active: {employee.taskNumbers.active}</h5>
            <h5>New: {employee.taskNumbers.newTask}</h5>
            <h5>Completed: {employee.taskNumbers.completed}</h5>
            <h5>Failed: {employee.taskNumbers.failed}</h5>
          </div>
        ))
      }
  
    </div>
  )
}

export default AllTask
