import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview';
import RelatedProducts from './relatedproducts/RelatedProducts';
import Reviews from './reviews-ratings/Reviews';
import Outfit from './yourOutfit/Outfit';
import FlexContainer from './styled/FlexContainer.styled';
import { Navbar, Logo, NavLinks } from './styled/Navbar.styled';
import AppContainer from './styled/AppContainer.styled';
import LoadingSpinner from './LoadingSpinner';

const App = () => {
  const [product, setProduct] = useState([]);
  // grab product on mount
  useEffect(() => {
    axios.get('/product/40344').then((res) => {
      setProduct(res.data);
    });
  }, []);

  // destructure product to use as props

  const [overview, metadata, styles, related] = product;

  const handleClick = (id) => {
    // Gets product id on click
    axios.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navbar>
        <Logo><a href="#">LOGO</a></Logo>
        <NavLinks>
          <li><a href="#">Overview</a></li>
          <li><a href="#related">Related Products</a></li>
          <li><a href="#outfit">Your Outfit</a></li>
          <li><a href="#reviews">Reviews &amp; Ratings</a></li>
        </NavLinks>
      </Navbar>
      <h4 className="text-center">Site-wide Announcement Message</h4>
      {product.length === 0
        ? <LoadingSpinner />
        : (
          <AppContainer>
            <FlexContainer direction="column" gap="3em">
              <Overview
                product={product}
                overview={overview}
                styles={styles}
                metadata={metadata}
              />
              <RelatedProducts
                related={related}
                productId={overview.id}
                handleClick={handleClick}
              />
              <Outfit productId={overview.id} />
              <Reviews productId={overview.id} productName={overview.name} />
            </FlexContainer>
          </AppContainer>
        )}
    </div>
  );
};

export default App;
