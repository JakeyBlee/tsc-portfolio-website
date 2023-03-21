import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const App = () => {
  const [page, setPage] = useState('profile');
  const navigate = useNavigate();
  const updatePage = (target : string) : void => {
    setPage(target);
  }
  useEffect(() => {
    if(page === 'profile'){
      setTimeout(() => navigate('/'), 200);
    } else {
      setTimeout(() => navigate(page), 200);
    }
  }, [page]);

  return (
    <div id="app" className="dark-theme">
      <Header/>
      <Banner/>
      <Navbar updatePage={updatePage} page={page}/>
      <div className='viewBackground'>
        <Outlet context={[page, updatePage]} />
      </div>
      <Footer/>
    </div>
  );
}