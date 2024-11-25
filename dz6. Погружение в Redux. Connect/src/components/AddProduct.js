import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/productsSlice';

const AddProduct = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState({ name: '', description: '', price: '', available: true });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: name === 'available' ? value === 'true' : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Проверка на отрицательную цену
        if (parseFloat(product.price) < 0) {
            alert('Цена не может быть отрицательной');
            return;
        }
        dispatch(addProduct({ ...product, id: Date.now() }));
        setProduct({ name: '', description: '', price: '', available: true });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={product.name} onChange={handleChange} placeholder="Название" required />
            <input name="description" value={product.description} onChange={handleChange} placeholder="Описание" required />
            <input
                name="price"
                type="number"
                value={product.price}
                onChange={handleChange}
                placeholder="Цена"
                min="0" // Запрет на отрицательные значения
                required
            />
            <select name="available" value={product.available} onChange={handleChange}>
                <option value={true}>Доступно</option>
                <option value={false}>Недоступно</option>
            </select>
            <button type="submit">Добавить продукт</button>
        </form>
    );
};

export default AddProduct;
