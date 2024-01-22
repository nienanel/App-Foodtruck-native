import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCart } from "../store/cartSlice";
import { selectItemByCategory } from "../store/selectors";
import { fetchItems, setSelectedCategory } from "../store/categoriesSlice";

const useItems = (selectedCategory) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.categories.loading);
    const filteredItems = useSelector(selectItemByCategory);
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        dispatch(fetchItems());
        dispatch(setSelectedCategory(selectedCategory));
        dispatch(loadCart());
    }, [selectedCategory, dispatch]);

    const handlePressItem = (item) => {
        setSelectedItem(item);
    };

    return {
        loading,
        filteredItems,
        selectedItem,
        handlePressItem,
        setSelectedItem,
    };
};

export default useItems;