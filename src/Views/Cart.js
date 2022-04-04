import { useCart } from "react-use-cart"

import React from "react";

const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>

    return (
        < section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>
                        Product ({totalUniqueItems})
                    </h5>
                    <table class="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (

                                    <tr key={index} >
                                        <td>
                                            <img src={item.image} style={{ height: '5rem' }} alt={item.brand} />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.color}</td>
                                        <td>${item.price}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <button className="btn btn-primary ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}> - </button>
                                            <button className="btn btn-primary ms-2" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}> + </button>
                                            <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}> Remove Item </button>
                                        </td>

                                    </tr>

                                )


                            })}
                        </tbody>
                    </table>
                    <div className="cil-auto ms-auto">
                        <h3>Total Items: {totalItems}</h3>
                    </div>
                    <div className="cil-auto ms-auto">
                        <button className="btn btn-danger ms-2" onClick={() => emptyCart()}> Clear Cart </button>
                    </div>

                </div>
            </div>
        </ section >
    );

};

export default Cart;