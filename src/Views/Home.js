import React from 'react';
import ItemCart from './Itemcart';
import datapro from '../Dataset/datapro';

const Home = () => {

    return (
        <>
            <h1 className="text-center mt-3">All Items</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">

                    {datapro.productData.map((item, index) => {
                        return (
                            <ItemCart
                                key={index}
                                item={item}
                                price={item.price}
                                img={item.image}
                                title={item.brand}
                                name={item.name}
                                color={item.color}
                            />

                        )
                    })}
                </div>
            </section>
        </>
    );
};
export default Home;