import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadCart } from "../store/cartSlice";

const CartInitializer = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadCart())
    }, [dispatch])

    return<>{children}</>
};

export default CartInitializer;