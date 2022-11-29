export default function Home() {
   return (
      <>
         <h1 className="text-3xl font-bold text-center my-8">Clima</h1>
         <div className="grid place-content-center">
            <label
               htmlFor="Seach"
               className="relative block overflow-hidden rounded-md border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
            >
               <input
                  type="text"
                  id="Seach"
                  placeholder="Buscar ciudad"
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
               />

               <span className="absolute left-3 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                  Buscar ciudad...
               </span>
            </label>
         </div>
      </>
   )
}
