import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import css from './App.module.css';

const Navigation = lazy(() => import('../Navigation/Navigation.jsx'));
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(
  () => import('../../pages/CatalogPage/CatalogPage.jsx')
);
const CamperPage = lazy(() => import('../../pages/CamperPage/CamperPage.jsx'));
const NotFoundPage = lazy(
  () => import('../../pages/NotFoundPage/NotFoundPage.jsx')
);
const CamperFeatures = lazy(
  () => import('../CamperFeatures/CamperFeatures.jsx')
);
const CamperReviews = lazy(
  () => import('../../components/CamperReviews/CamperReviews.jsx')
);

function App() {
  return (
    <div className={css.app_container}>
      <Navigation />
      <div className={css.container}>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/catalog/:id" element={<CamperPage />}>
              <Route index element={<Navigate to="features" replace />} />
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
