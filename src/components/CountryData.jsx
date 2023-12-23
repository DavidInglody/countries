import { useGlobalContext } from "../context";
import { useQuery } from "@tanstack/react-query";
import { customFetch } from "../utils/url";
import errorImg from "../images/error.svg"

const WeatherData = () => {
  const {searchTerm} = useGlobalContext()

  const response = useQuery({
    queryKey: ["country", searchTerm],
    queryFn: async () =>{
      const result = await customFetch.get(`/${searchTerm}`)
      return result.data
    }
  })

  if(response.isLoading) return <h1 className="text-white text-3xl font-bold">... Loading</h1>

  if(response.isError) return <div className="">
    <h1 className="text-white text-3xl font-bold">Can´t find country</h1>;
    <img className="w-36 h-36 mx-auto" src={errorImg} alt="" />
  </div>

  const country = response.data[0]


  return (
    <div className="max-w-96 w-[90%] h-[600px] mx-auto bg-slate-100 rounded-md hover:bg-slate-200 sm:hover:scale-110 transition duration-300 ">
      <img className="rounded-md object-cover border-2 border-black" src={country.flag} alt="" />
      <div>
        <h1 className="text-3xl font-bold mt-4">{country.name}</h1>
        <h2 className="uppercase font-semibold">{country.region}</h2>
        <div className="mt-8 flex flex-col gap-y-2">
          <h2 className="text-xl ">
            Population 🚶‍♂️: {(country.population / 1000).toFixed(1)} k
          </h2>
          <h2 className="text-xl">
            Currencies 💸: {country.currencies[0].name}
          </h2>
          <h2 className="text-xl">Language 🗣: {country.languages[0].name}</h2>
        </div>
      </div>
    </div>
  );
};
export default WeatherData;
