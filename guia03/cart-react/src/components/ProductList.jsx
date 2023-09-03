import {React, useState} from "react";
import { data } from "./data.js";
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "./Modal.jsx";

export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [titleProduct, setTitleProduct] = useState("");
    const [descriptionProduct, setDescriptionProduct] = useState("");
    const [img, setImg] = useState("");

    const onViewModal = product => {
        setTitleProduct(product.title) ;
        setDescriptionProduct(product.descripcion) ;
        setImg(product.urlImage)
    };

    return (
        <>
            <div className="container-items">
                {data.map(product => (
                    <div className="item" key={product.id}>
                        <figure>
                            <img src={product.urlImage} alt={product.title}  onClick={ () => { onViewModal(product); handleShow()}} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.title}</h2>
                            <p className="price">${product.price}</p>
                            <button className="btn-add-cart" onClick={() => onAddProduct(product)}>Añadir al
                                carrito</button>
                        </div>
                    </div>
                ))}
            </div>

            <Modal show={show} title={titleProduct} descripcion={descriptionProduct} img={img} handleClose={handleClose} />

        </>

    );
}