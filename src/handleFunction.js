import { useDispatch, useSelector } from "react-redux";
import { clearList, deleteItems, setBoughtTrue, addItem } from "./listSlice";

const handleDeleteItem = (selectedId) => {
    const dispatch = useDispatch()
    dispatch(deleteItems(selectedId))
    const list = useSelector((state) => state.list)
    localStorage.setItem('list', JSON.stringify(list))
};

const handleAddItem = (item) => {
    const dispatch = useDispatch()
    dispatch(addItems(item))
    const list = useSelector((state) => state.list)
    localStorage.setItem('list', JSON.stringify(list))
};
const handleClearList = () => {
    const dispatch = useDispatch()
    dispatch(clearList())
    localStorage.setItem('list', null)
};
const handleBought = (selectedId) => {
    const dispatch = useDispatch()
    dispatch(setBoughtTrue(selectedId))
    const list = useSelector((state) => state.list)
    localStorage.setItem('list', JSON.stringify(list))
};

export {handleAddItem, handleDeleteItem, handleBought, handleClearList};