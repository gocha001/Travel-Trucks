import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css'
import { Loader } from './components/Loader/Loader.jsx';
import { Navigation } from './components/Navigation/Navigation.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const CamperPage = lazy(() => import("./pages/CamperPage/CamperPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));
const Features = lazy(() => import("./components/Features/Features.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

function App() {


  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />} >
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/catalog' element={<CatalogPage />} />
          <Route path='/catalog/:id' element={<CamperPage />} >
            <Route path='features' element={<Features />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
