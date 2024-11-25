import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../features/productsSlice';

const EditProduct = ({ product, onClose }) => {
    const dispatch = useDispatch();
    const [updatedProduct, setUpdatedProduct] = useState(product);

    useEffect(() => {
        setUpdatedProduct(product);
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedProduct({ ...updatedProduct, [name]: name === 'available' ? value === 'true' : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct(updatedProduct));
        onClose(); // Закрытие формы редактирования
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={updatedProduct.name} onChange={handleChange} placeholder="Название" required />
            <input name="description" value={updatedProduct.description} onChange={handleChange} placeholder="Описание" required />
            <input name="price" type="number" value={updatedProduct.price} onChange={handleChange} placeholder="Цена" required />
            <select name="available" value={updatedProduct.available} onChange={handleChange}>
                <option value={true}>Доступно</option>
                <option value={false}>Недоступно</option>
            </select>
            <button type="submit">Обновить продукт</button>
            <button type="button" onClick={onClose}>Отмена</button>
        </form>
    );
};

export default EditProduct;