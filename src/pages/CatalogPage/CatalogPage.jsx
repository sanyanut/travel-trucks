import { useEffect } from 'react';
import { fetchCatalog } from '../../redux/catalog/operations.js';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCatalog,
  selectIsLoading,
  selectError,
} from '../../redux/catalog/selectors.js';

import CatalogList from '../../components/CatalogList/CatalogList.jsx';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';

function CatalogPage() {
  const dispatch = useDispatch();
  const catalogData = useSelector(selectCatalog);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!isLoading && catalogData.length === 0 && !error) {
      dispatch(fetchCatalog());
    }
  }, [isLoading, catalogData, error, dispatch]);

  if (isLoading && catalogData.length === 0) {
    return <Loader />;
  }

  if (error && catalogData.length === 0) {
    return <Error message={error} onRetry={() => dispatch(fetchCatalog())} />;
  }

  return <CatalogList />;
}

export default CatalogPage;
