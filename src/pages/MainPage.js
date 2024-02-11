import React from 'react'

export default function MainPage() {
  return (
    <div>
        <h1 className=' lg:mx-32 text-5xl font-bold text-green-500'>
            Convert your Currencies Today
        </h1>
        <p className='lg:mx-32 opacity-40 py-6'>
            Welcome to "Covert your Currencies Today"! this application allows you
            to easily convert currencies based on lastest exchange rates . Whether
             you'r planning a trip, managing your finances ,or simply curious about 
             the value of your money in different currencies, this tool is here to 
             help.
        </p>
        <div className='mt-5 flex items-center justify-center flex-col'>
            <section className='w-full lg:w-1/2'>
                <form>
                <div class="mb-5">
    <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
    <input type="date" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="name@flowbite.com" required/>
  </div>

  <div class="mb-5">
    <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
    <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "name='' id=''>
        <option value="">Select source Currency</option>
    </select>
    
  </div>

  <div class="mb-5">
    <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
    <select  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500 "name='' id=''>
        <option value="">Select target Currency</option>
    </select>
     </div>

     <div class="mb-5">
    <label for="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in source Currency</label>
    <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Amount in source Currency" required/>
  </div>

        <button className='bg-green-600 hover:bg-green-700
        text-white font-bold py-2 px-4 rounded-md'>Get the target Currency</button>

       

                </form>
            </section>
        </div>
    </div>
  )
}
