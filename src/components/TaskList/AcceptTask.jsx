import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div>
       <div className="h-full  flex-shrink-0 p-5 bg-red-200 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded-full text-sm ">Active</h3>
          <h4 className="text-sm"> {data.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div className="flex justify-between items-center">
          {/* <button className="bg-green-500 text-white  px-4 py-2 rounded-md mt-4">
            Accept 
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4 ml-2">
            Reject 
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default AcceptTask
