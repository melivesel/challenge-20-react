import Footer from './components/Footer';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';


// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
}
