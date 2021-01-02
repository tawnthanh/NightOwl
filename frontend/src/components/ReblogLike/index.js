import "./ReblogLike.css";
import { useState, useEffect } from "react";


const ReblogLike = () => {
  const [showDiv, setShowDiv] = useState(false);

  const openMenu = () => {
    if (showDiv) return;
    setShowDiv(true);
  };

  useEffect(() => {
    if (!showDiv) return;

    const closeMenu = () => {
      setShowDiv(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showDiv]);

  return (
    <div className="footer">
      <button onClick={openMenu}>LIKE</button>
      <button onClick={openMenu}>REBLOG</button>
      { showDiv && (
        <div className="like-dropdown">
          Coming Soon! 
        </div>
      )}
    </div>
  )
}

export default ReblogLike;
