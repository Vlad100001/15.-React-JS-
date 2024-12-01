import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability, updateProduct } from '../features/productsSlice';

const ProductList = () => {
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();

    const [editingProductId, setEditingProductId] = useState(null);
    const [editedProduct, setEditedProduct] = useState({});

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: name === 'available' ? value === 'true' : value });
    };

    const handleEditSubmit = (e, productId) => {
        e.preventDefault();
        dispatch(updateProduct({ ...editedProduct, id: productId }));
        setEditingProductId(null);
    };

    return (
        <div className="product">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {editingProductId === product.id ? (
                            <form onSubmit={(e) => handleEditSubmit(e, product.id)}>
                                <input
                                    name="name"
                                    value={editedProduct.name || product.name}
                                    onChange={handleEditChange}
                                    placeholder="Название"
                                    required
                                />
                                <input
                                    name="description"
                                    value={editedProduct.description || product.description}
                                    onChange={handleEditChange}
                                    placeholder="Описание"
                                    required
                                />
                                <input
                                    name="price"
                                    type="number"
                                    value={editedProduct.price || product.price}
                                    onChange={handleEditChange}
                                    placeholder="Цена"
                                    required
                                />
                                <select
                                    name="available"
                                    value={editedProduct.available !== undefined ? editedProduct.available : product.available}
                                    onChange={handleEditChange}
                                >
                                    <option value={true}>Доступно</option>
                                    <option value={false}>Недоступно</option>
                                </select>
                                <button type="submit">Сохранить</button>
                                <button type="button" onClick={() => setEditingProductId(null)}>Отмена</button>
                            </form>
                        ) : (
                            <>
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Цена: ${product.price}</p>
                                <p>Доступно: {product.available ? 'Да' : 'Нет'}</p>
                                <button onClick={() => dispatch(toggleAvailability(product.id))}>
                                    Изменить доступность
                                </button>
                                <button onClick={() => {
                                    setEditingProductId(product.id);
                                    setEditedProduct(product); // Заполняем поля текущими значениями
                                }}>
                                    Редактировать
                                </button>
                                <button onClick={() => dispatch(removeProduct(product.id))}>
                                    Удалить
                                </button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
