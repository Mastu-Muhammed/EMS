import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>
      <div className="h-full  flex-shrink-0 p-5 bg-red-300 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 px-3 py-1 rounded-full text-sm ">Failed</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">
          {data.description}
        </p>
        <div>
          {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4">
            Retry Task
          </button> */}
        </div>
      </div>

    </div>
  )
}

export default FailedTask
