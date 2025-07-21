import { SearchProvider } from "./context/SearchContext";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <SearchProvider>
        <HomePage />
      </SearchProvider>
    </>
  );
}

export default App;
