

import "./itemPage.css"
import { useEffect } from 'react';

const ItemPage = () => {
   useEffect (() => { window.scrollTo (0, 0); }, [])
   return (
      <div className="item-page">i promise to come back</div>
   )
}

export default ItemPage