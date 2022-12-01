async function getData(city: any) {
    const res = await fetch(
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`
    )
    return res.json()
 }

const Fetch = async (city:any) => {
  const data = await getData(city);
  return (
    <>Api</>
  )
}

export default Fetch