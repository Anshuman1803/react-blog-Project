
import './App.css';
import NavbarCompo from './Route/NavbarCompo';
import HeaderCompo from './Components/HeaderCompo';
import BlogRouteCompo from './Route/BlogRouteCompo';
import BlogFooter from './Components/BlogFooter';
function App() {
  return (
    <div className="App" >
      <HeaderCompo />
      <NavbarCompo />

      <BlogRouteCompo />
      <BlogFooter />
    </div>
  );
}

export default App;
