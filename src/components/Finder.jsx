import { useGlobalContext } from "../context";

const Finder = () => {
    const { setSearchTerm} = useGlobalContext()

    const submitForm =(e)=>{
        e.preventDefault()
        const inputName = e.target.country.value;
        if(!inputName) return
        if(inputName === "number") return
        setSearchTerm(inputName);
    }

  return (
    <>
      <form onSubmit={submitForm} className="">
        <input
          type="text"
          className="p-2 rounded-l-xl outline-none"
          placeholder="Find country..."
          name="country"
        />
        <button
          type="submit"
          className="p-2 bg-cyan-500 rounded-r-xl hover:bg-cyan-300 transition duration-300"
        >
          Submit
        </button>
      </form>
    </>
  );
};
export default Finder;
