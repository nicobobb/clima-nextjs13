'use client'

import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Form = () => {
   const [city, setCity] = useState('')

   const fetchWeather = (e: any) => {
      e.preventDefault()
   }

   return (
      <div className="grid place-content-center">
         <form
            onSubmit={fetchWeather}
            className="flex justify-between items-center border border-gray-200 rounded-md shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-300"
         >
            <label
               htmlFor="Seach"
               className="relative block overflow-hidden px-3 pt-3"
            >
               <input
                  onChange={(e) => setCity(e.target.value)}
                  type="text"
                  id="Seach"
                  placeholder="Buscar ciudad"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
               />

               <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Buscar ciudad...
               </span>
            </label>
            <button className="mx-3" onClick={fetchWeather}>
               <BsSearch size={0} />
            </button>
         </form>
      </div>
   )
}

export default Form
