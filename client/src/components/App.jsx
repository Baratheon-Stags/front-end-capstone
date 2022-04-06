import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './overview/Overview';
import RelatedProducts from './RelatedProducts';
import Reviews from './Reviews';
import Outfit from './Outfit';

import FlexContainer from './styled/FlexContainer.styled';
import Navbar from './styled/Navbar.styled';
import AppContainer from './styled/AppContainer.styled';

const App = () => {
  const [product, setProduct] = useState([]);

  // grab product on mount
  useEffect(() => {
    axios.get('/product/40360').then((res) => {
      setProduct(res.data);
    });
  }, []);

  // destructure product to use as props
  const [overview, metadata, styles, related] = product;

  return (
    <>
      <Navbar />
      <h4 className="text-center">Site-wide Announcement Message</h4>
      {product.length === 0
        ? null
        : (
          <AppContainer>
            <FlexContainer direction="column" gap="5em">
              <Overview
                product={product}
                overview={overview}
                styles={styles}
                metadata={metadata}
              />
              <RelatedProducts related={related} />
              <Outfit productId={overview.id} />
              <Reviews productId={overview.id} />
            </FlexContainer>
          </AppContainer>
        )}
    </>
  );
};

export default App;
