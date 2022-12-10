import { useEffect, useState } from 'react';

import axios from 'axios';
//import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../components/Product';
import { Helmet } from 'react-helmet-async';
//import LoadingBox from '../components/LoadingBox';

// import data from '../data';


function HomeScreen() {
  
   const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
     
        const result = await axios.get('/api/products');
       

      setProducts(result.data);
    };
    fetchData();
  }, []);
  useEffect(()=>{
    const scrolledY=sessionStorage.getItem(window.location.pathname)?? 0;
    window.scroll(0,scrolledY);
  })
  
  return (
    <div>
      <Helmet>
        <title>EatNow</title>
      </Helmet>
      <h1> Foods Store</h1>
      <div className="products">
        
          <Row>
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        
      </div>
    </div>
  );
}
export default HomeScreen;