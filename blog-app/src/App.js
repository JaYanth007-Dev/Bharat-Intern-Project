import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomeCard from "./components/HomeCard";
const App = () => {
  return (
    <div className="w-full">
      <Header />
      <SearchBar />
      <HomeCard/>
  </div>);
};

export default App;