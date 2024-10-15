import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, addItem, updateItem, deleteItem } from './slices/itemsSlice';
import { toggleTheme } from './slices/themeSlice';

const App = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };


  const handleAddItem = () => {
    const newItem = { id: Date.now(), name: 'New Item' }; 
    dispatch(addItem(newItem));
  };

  const handleUpdateItem = (id) => {
    const updatedItem = { id, name: 'Updated Item' }; 
    dispatch(updateItem(updatedItem));
  };

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button onClick={handleToggleTheme}>
        Toggle Theme
      </button>
      <button onClick={handleAddItem}>
        Add Item
      </button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => handleUpdateItem(item.id)}>Update</button>
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
