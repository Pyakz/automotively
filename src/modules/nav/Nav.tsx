import { FiSearch } from "react-icons/fi";
import Input from "../../components/Input";
import Car from "../../assets/car.svg";
import { useStore } from "../../stores/useStore";
import { debounce } from "lodash";

const Nav = () => {
  const { store, setFilters } = useStore();

  const handleSearchChange = (query: string) => {
    // Update the search term state
    setFilters({ ...store, query, page: 1 });
  };
  const debouncedHandleSearchChange = debounce(handleSearchChange, 200);

  return (
    <nav id="nav" className="mt-2 md:flex items-center justify-between">
      <div className="flex items-center justify-between">
        <img src={Car} alt="" className="md:mr-3" />
        <h2 className="text-2xl text-gray-100  font-bold">Automotively</h2>
      </div>
      <Input
        placeholder="Honda or 2003 or 5999"
        onChange={(query: string) => debouncedHandleSearchChange(query)} // Use the debounced function instead of the original
        rightIcon={<FiSearch color="gray" />}
      />
    </nav>
  );
};

export default Nav;
