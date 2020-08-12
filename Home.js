import React, {useState, useEffect} from "react";
import Layout from './Layout'
import {getProducts} from './apiCore'
import Card from './Card'
import Search from './Search'


const Home = () => {

    const[productsBySell, setProductsbySell] = useState([]);
    const[productsByArrival, setProductsbyArrival] = useState([]);
    const[error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsbySell(data)
            }
        })
    }
    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsbyArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
        loadProductsBySell()
    }, [])

 return (

        <Layout title="Bud King Home Page" 
                description='Welcome to Bud Kings, Your one stop Bud shop' 
                className="container-fluid">
          <Search></Search>        
            <h2 className="mb-4">New Arrivals</h2>
                <div className="row">
                  {productsByArrival.map((product, i) => (
                     <div key={i} className='col-4 mb-3'>
                        <Card product={product}/>
                     </div>
                   )
                 )}
                </div>

            <h2 className="mb-4">Best Sellers</h2>
                <div className="row">
                  {productsBySell.map((product, i) => (
                    <div key={i} className='col-4 mb-3'>
                      <Card key={i} product={product}/>
                      </div>
                   )        
                 )}
                </div>
        </Layout>
    );
  };


export default Home;
