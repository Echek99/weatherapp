// pages/api/weather/route.js

export const GET = async (req, res) => {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('location');

  if (!city) {
    return new Response('Location query parameter is required', { status: 400 });
  }

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=f9bb01ffe4594a67ab6204708241605&q=${city}&lang=en`);
    const weather = await response.json();

    return new Response(JSON.stringify({ weather }), { status: 200 });
  } catch (error) {
    return new Response('Internal server error, please try again.', { status: 500 });
  }
};
