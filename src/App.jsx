import CountryData from "./components/CountryData";
import Finder from "./components/Finder";

const App = () => {
  return (
    <>
      <div className="grid items-center h-screen text-center bg-neutral-900 ">
        <Finder/>
      <CountryData/>
      </div>
    </>
  );
};
export default App;
