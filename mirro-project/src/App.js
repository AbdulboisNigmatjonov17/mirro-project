import Button from "./components/button/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import { library } from "@fortawesome/fontawesome-svg-core";
import Header from "./components/header/header"
import Services from "./components/servicesPart/services"
import Store from "./components/store/store";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

library.add(faCartShopping);

function App() {
  return (
    <>
      <Header />
      <Services />
      <Store/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
