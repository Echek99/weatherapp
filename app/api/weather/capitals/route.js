// pages/api/weather/route.js

export const Cities = [
    'new?york',
    'london',
    'bogota',
    'sydney',
    'cardiff',
    'dubai',
    'medellin',
  ]
  
  export const GET = async (req, res) => {
    const allCitiesWeather = []
    try {
      for (let index = 0; index < Cities.length; index++) {
  
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f9bb01ffe4594a67ab6204708241605&q=${Cities[index]}&lang=en`);
        const weather = await response.json();
  
        allCitiesWeather.push({ weather })
      }
      console.log(allCitiesWeather)
      return new Response(JSON.stringify(allCitiesWeather), { status: 200 })
  
    } catch (error) {
      return new Response('Internal server error, please try again.', { status: 500 });
    }
  };