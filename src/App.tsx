import Navbar from "components/layout/Navbar";
import Footer from "components/layout/Footer";
import HomePage from "pages/HomePage";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
