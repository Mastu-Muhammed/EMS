import React from 'react'

const TaskListNum = ({data}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-between mt-10 gap-5 screen'>


          <div className='bg-[#3498db] py-3 md:py-6 md:px-9 px-4 h-fit  rounded-xl '>
               <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
               <h3 className='text-2xl font-bold'>New Task</h3>
          </div>
          <div className='bg-yellow-400  py-3 md:py-6 md:px-9 px-4 h-fit  rounded-xl '>
               <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
               <h3 className='text-2xl font-bold'>Active Task</h3>
          </div>
          <div className='bg-[#2ecc71]  py-3 md:py-6 md:px-9 px-4 h-fit  rounded-xl '>
               <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
               <h3 className='text-2xl font-bold'>Complete Task</h3>
          </div>
          <div className='bg-[#e74c3c] py-3 md:py-6 md:px-9 px-4 h-fit  rounded-xl '>
               <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
               <h3 className='text-2xl font-bold'>Failed Task</h3>
          </div>
          
     
     
    </div>
  )
}

export default TaskListNum
