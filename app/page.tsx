import Form from './components/Form'

async function getData(city: any) {
   const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
   )
   return res.json()
}

export default function Home() {
   return (
      <>
         <h1 className="text-3xl font-bold text-center my-8">Clima</h1>
         <Form />
      </>
   )
}
