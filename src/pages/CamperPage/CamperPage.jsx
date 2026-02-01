import { NavLink, Outlet, useParams } from 'react-router-dom';

import css from './CamperPage.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCatalogItem } from '../../redux/catalog/operations.js';
import Camper from '../../components/Camper/Camper.jsx';

function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCatalogItem(id));
  }, [dispatch, id]);

  return <Camper />;
}

export default CamperPage;
