import axios from 'axios';
import { useEffect, useState } from 'react'; // useEffect will help us stop re-fetching code from backend everytime we load the page. State will allow us to use the data inside react
import { Header } from '../../components/Header'
import { Subheader } from '../../components/Subheader';
import { ProductsGrid } from './Productsgrid';
import './Homepage.css';

export function HomePage({ cart, loadCart }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getHomeData = async () => {
      const response = await axios.get('/api/products')
        setProducts(response.data);
    }
    getHomeData();
  }, []);


  return (
    <>
      <title>awcean</title>

      <Header cart={cart}/>

      <div className="home-page">
         <Subheader />
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  );
}
