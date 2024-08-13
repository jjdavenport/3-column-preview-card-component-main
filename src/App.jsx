import "./App.css";
import Column from "./components/column";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="grid h-screen">
        <main className="md:px-custom flex flex-col items-center justify-center px-8 py-10 md:flex-row md:py-0">
          <Column />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
