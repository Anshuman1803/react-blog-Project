
import './App.css';
import NavbarCompo from './Route/NavbarCompo';
import HeaderCompo from './Components/HeaderCompo';
import BlogRouteCompo from './Route/BlogRouteCompo';
import BlogFooter from './Components/BlogFooter';
import BlogDataBase from './Data/BlogDataBase';
function App() {
  return (
    <div className="App" >
      <HeaderCompo />
      <NavbarCompo />
      <BlogDataBase>
        <BlogRouteCompo />
      </BlogDataBase>
      <BlogFooter />
    </div>
  );
}

export default App;
