import DesignSix from "./components/Articles/ArticleDesignSix/DesignSix";
import DesignFive from "./components/Articles/ArticleDesignFive/DesignFive";
import DesignFour from "./components/Articles/ArticleDesignFour/DesignFour";
import DesignThree from "./components/Articles/ArticleDesignThree/DesignThree";
import DesignTwo from "./components/Articles/ArticleDesignTwo/DesignTwo";
import Feature from "./components/Articles/Feature/Feature";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
//import Styles
import "./styles/app.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <DesignTwo />
      <DesignThree />
      <DesignFour />
      <DesignFive />
      <DesignSix />
      <Footer />
    </div>
  );
}

export default App;
