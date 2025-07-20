import { FlightSearchForm } from "./components/search/FlightSearchForm";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <FlightSearchForm />
      </SearchProvider>
    </>
  );
}

export default App;
