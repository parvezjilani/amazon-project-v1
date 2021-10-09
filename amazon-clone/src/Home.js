import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
 
    return (
        <div className="home">
           <div className="home-container">
           <img className="home-image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt=""/>

           <div className="home-row">
            <Product 
               id="01"
               title="See U in C by Ali Karim Sayed (Author)"
               price={4444}
               image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SY344_BO1,204,203,200_.jpg"
              />
            <Product 
               id="02"
               title="Apple iPhone 7 (32GB) - Black"
               price={10000}
               image="https://m.media-amazon.com/images/I/41D9NDiSzjL._SL1024_.jpg"
              />
              <Product 
               id="03"
               title="HP 15 (2021) Thin & Light 11th Gen Core i3 Laptop"
               price={23000}
               image="https://m.media-amazon.com/images/I/81Ne5qKmE8L._SL1500_.jpg"
              />
           </div>
           <div className="home-row">
           <Product 
               id="04"
               title="
               SanDisk Cruzer Blade 32GB USB Flash Drive"
               price={379}
               image="https://m.media-amazon.com/images/I/61DjwgS4cbL._SL1500_.jpg"
              />
              <Product 
               id="05"
               title="Zebronics Zeb-Warrior 2.0 Multimedia Speaker "
               price={499}
               image="https://m.media-amazon.com/images/I/81grtcmxsyL._SL1500_.jpg"
              />
           </div>
           <div className="home-row">
           <Product 
               id="05"
               title="Lenovo Tab M10 FHD Plus Tablet "
               price={12000}
               image="https://m.media-amazon.com/images/I/61zGtTvNttL._SL1500_.jpg"
              />
           </div>
               </div>
        </div>
    )
}

export default Home
