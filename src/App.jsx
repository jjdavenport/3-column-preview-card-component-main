import "./App.css";
import Column from "./components/column";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <main className="flex flex-col md:flex-row py-10 px-8">
        <Column />
      </main>
      <Footer />
    </>
  );
}

export default App;
