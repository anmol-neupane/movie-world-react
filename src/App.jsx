import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";
import MovieCatalogue from "./components/MovieCatalogue";

function App() {
  return (
    <>
      <div className="container min-vh-100 min-vw-100">
        <Header />
        <Hero />
        <MovieCatalogue />
      </div>
    </>
  );
}

export default App;
