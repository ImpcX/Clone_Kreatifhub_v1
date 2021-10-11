import './App.css';
import Navbar2 from './component/navbar2';
import Sec1 from './component/section1';
import Sec2 from './component/section2';
import Sec3 from './component/section3';
import Sec4 from './component/section4';
import Footer from './component/footer';


function App() {
  return (
    <div>
      <Navbar2 />
      <main>
        <div className="mb-5 mt-2">
          <Sec1 />
        </div>
        <div className="mb-5">
          <Sec2 />
        </div>
        <div>
          <Sec3 />
        </div>
        <div className="mb-5">
          <Sec4 />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
