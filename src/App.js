import "./App.css";
import Testimonial from "./components/Testimonial";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <div className="container custom">
        <main>
          <div className="Page CustomPage">
            <div className="CustomBody">
              <Testimonial/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
