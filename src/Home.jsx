import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/footer";
import CardProduct from "./components/CardsProduct";

const Home = () => {
    //variable para almacenar los productos
    const [products, setProducts] = useState([
        { id: 1, image: 'https://picsum.photos/id/16/450/300', title:'Product 1', price: 10 },
        { id: 2, image: 'https://picsum.photos/id/16/450/300', title:'Product 2', price: 10 },
        { id: 3, image: 'https://picsum.photos/id/16/450/300', title:'Product 3', price: 10 },
        { id: 4, image: 'https://picsum.photos/id/16/450/300', title:'Product 4', price: 10 },
        { id: 5, image: 'https://picsum.photos/id/16/450/300', title:'Product 5', price: 10 },
        { id: 6, image: 'https://picsum.photos/id/16/450/300', title:'Product 6', price: 10 },
        { id: 7, image: 'https://picsum.photos/id/16/450/300', title:'Product 7', price: 10 },
        { id: 8, image: 'https://picsum.photos/id/16/450/300', title:'Product 8', price: 10 },
    ]);

  return (
    <>
      {/* <!-- Navigation--> */}
      <Navbar />
      {/* <!-- Header--> */}
      <Header />
      {/* <!-- Section--> */}
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                products.length > 0 ?
                products.map((product) => {
                    return (
                        <div className="col mb-5">
                            <CardProduct />
                        </div>  
                    )
                })
                : (
                    <div className="col mb-5">
                        <h6 className="text-center">Sin productos a listar</h6>
                    </div>
                )
            }
            {/* <div className="col mb-5">
              <CardProduct
                image={"https://picsum.photos/id/16/450/300"}
                title={"Pasajes ida sin vuelta a la conchetumare"}
                price={20000}
              />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div>
            <div className="col mb-5">
              <CardProduct />
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- Footer-->*/}
      <Footer />
    </>
  );
};

export default Home;
