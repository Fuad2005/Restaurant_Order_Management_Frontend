import React from 'react'

function Login() {



  return (
    <div className='min-h-[80vh] flex flex-col gap-7 justify-center items-center'>
        <h1 className='text-4xl font-semibold'>Login</h1>
        <form class="lg:w-1/3 md:w-1/2 sm:w-3/4 w-[96%] mx-auto">
        <div class="mb-5">
            <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[98%] p-2.5 m-auto" placeholder="Your Username" required />
        </div>
        <div class="mb-5">
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[98%] p-2.5 m-auto" placeholder="Your Password" required />
        </div>        
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>

    </div>

  )
}

export default Login