import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Main from "./Components/Main";
import Products from './Components/Products';
import { ProductData, DesertData } from './Components/Products/data';
import Feature from './Components/Feature';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main />
      <Products heading="Chose your favourite" data={ProductData}/>
      <Feature />
      <Products heading="Sweet Treats for You" data={DesertData}/>
      <Footer />
    </Router>
  );
}

export default App;
