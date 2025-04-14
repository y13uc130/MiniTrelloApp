// HomeWrapper.jsx
import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Home from './Home'; // your actual class component

const HomeWrapper = (props) => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();

  return (
    <Home
      {...props}
      navigate={navigate}
      params={params}
      location={location}
    />
  );
};

export default HomeWrapper;
