// import './App.css';
import NavBar from "./component/navBar/Nav";
import Footer from "./component/sections/10Footer/Footer";
import WelcomeToMyWorld from "./component/sections/1Welcome/WelcomeToMyWorld";
import Features from "./component/sections/2features/features";
import Portfolio from "./component/sections/3Portfolio/Portfolio";
import Resume from "./component/sections/4Resume/Resume";
import Testimonial from "./component/sections/5Testimonial/Testimonial";
import PopulerClient from "./component/sections/6populerClient/PopulerClient";
import Price from "./component/sections/7Prising/Price";
import Blog from "./component/sections/8Blog/Blog";
import Contact from "./component/sections/9Contact/Contact";
// import motion from "framer-motion";
function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeToMyWorld />
      <Features />
      <Portfolio />
      <Resume />
      <Testimonial />
      <PopulerClient />
      <Price />
      <Blog />
      <Contact />
      <Footer />
      

      {/* <div className="container2">
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>
        <div className="item3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae tenetur atque accusamus non iusto voluptatum, quisquam aliquid, voluptatibus praesentium dolor dolore obcaecati commodi vero nobis explicabo reprehenderit aspernatur, voluptate consectetur?
        </div>

      </div> */}
    </div>
  );
}

export default App;
