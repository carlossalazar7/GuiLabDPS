import { React, useState } from "react";

export const Headers = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
}) => {
    const [active, setActive] = useState(false);

    const onCleanCart = () => {
        let result = window.confirm("desea vaciar el carrito")

        if (result === true) {
            setAllProducts([]);
            setTotal(0);
            setCountProducts(0);
        }
    };

    const onDeleteProduct = product => {

        let result = window.confirm("desea eliminar el item")


        if (result === true) {
            const results = allProducts.filter(
                item => item.id !== product.id
            );

            setTotal(total - product.price * product.quantity);
            setCountProducts(countProducts - product.quantity);
            setAllProducts(results);
        }


    }
    return (
        <header>
            <h1>Tienda de Libros</h1>
            <div className="container-icon">
                <div className="container-cart-icon" onClick={() => setActive(!active)}>
                    <img src="https://static.vecteezy.com/system/resources/previews/014/530/490/non_2x/shopping-cart-outline-icon-vector.jpg" width={50} height={50} alt="carrito" className="iconcart" />
                    <div className="count-products">
                        <span id="contador-productos"> {countProducts} </span>
                    </div>
                </div>

                <div
                    className={`container-cart-products ${active ? '' : 'hidden-cart'}`} >
                    {allProducts.length ? (
                        <>
                            <div className='row-product'>
                                {allProducts.map(product => (
                                    <div className='cart-product'
                                        key={product.id}>
                                        <div className='info-cart-product'>
                                            <img src={`${product.urlImage}`} alt="libro" width={50} height={50} />
                                            <span className='cantidad-producto-carrito'>
                                                {product.quantity}
                                            </span>

                                            <p className='titulo-producto-carrito'>
                                                {product.title}
                                            </p>
                                            <span className='precio-producto-carrito'>
                                                ${product.price}
                                            </span>
                                        </div>
                                        <img
                                            src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png"
                                            alt="cerrar"
                                            className="icon-close"
                                            onClick={() => onDeleteProduct(product)}
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='cart-total'>
                                <h3>Total:</h3>
                                <span className='total-pagar'>${total}</span>
                            </div>
                            <button className='btn-clear-all'
                                onClick={onCleanCart}>
                                Vaciar Carrito
                            </button>
                        </>
                    ) : (
                        <p className='cart-empty'>El carrito está vacío</p>
                    )}
                </div>
            </div>
        </header>);
}