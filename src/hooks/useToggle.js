import { useEffect, useRef, useState } from 'react';

const useToggle = () => {
    const [newList, setNewList] = useState(true);

    const wrapperRef = useRef();

    useEffect(() => {
        function handleClickOutside(event) {
            if (!wrapperRef.current.contains(event.target)) {
                setNewList(newList);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

    }, []);
    return [newList, setNewList, wrapperRef]

};

export default useToggle;