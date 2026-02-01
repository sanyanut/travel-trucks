import { useEffect } from 'react';
import { fetchCatalog } from '../../redux/catalog/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCatalog,
  selectIsLoading,
} from '../../redux/catalog/selectors.js';

import css from './CatalogPage.module.css';
import CatalogList from '../../components/CatalogList/CatalogList.jsx';

function CatalogPage() {
  const dispatch = useDispatch();

  const catalogData = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (!isLoading && catalogData.length === 0) {
      dispatch(fetchCatalog());
    }
  }, [isLoading, catalogData, dispatch]);

  return <CatalogList />;
}

export default CatalogPage;
