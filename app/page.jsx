import Image from "next/image";
import WeatherCards from "@/components/Cards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl">
          Dynamic Weather App
      </h1>
      <p>
        An app created by <a className="text-blue-700" href="https://github.com/Echek99" target="_blank">Eche</a>
      </p>
      <WeatherCards/>
    </main>
  );
}
