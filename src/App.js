import { useEffect, useRef, useState } from "react";

function App() {
  const [newList, setNewList] = useState(true);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setNewList(true);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="App" ref={wrapperRef}>
      <div>
        {newList && (
          <div>
            <h2 onClick={() => setNewList(!newList)}>1st div </h2>
          </div>
        )}

        {!newList && (
          <div>
            <h2>2nd div</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;