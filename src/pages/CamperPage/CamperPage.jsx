import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCatalogItem } from '../../redux/catalog/operations.js';
import { resetCatalogItem } from '../../redux/catalog/slice.js';
import Camper from '../../components/Camper/Camper.jsx';
import {
  selectIsLoading,
  selectError,
  selectCatalogCamper,
} from '../../redux/catalog/selectors.js';
import Loader from '../../components/Loader/Loader.jsx';
import Error from '../../components/Error/Error.jsx';

function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const camper = useSelector(selectCatalogCamper);

  useEffect(() => {
    dispatch(fetchCatalogItem(id));

    return () => dispatch(resetCatalogItem());
  }, [dispatch, id]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Error message={error} onRetry={() => dispatch(fetchCatalogItem(id))} />
    );
  }

  if (!camper && !isLoading) {
    return <Error message="Camper not found" />;
  }

  return <Camper />;
}

export default CamperPage;
