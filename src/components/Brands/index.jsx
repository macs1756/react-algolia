import { useEffect, useState } from "react";
import { useRefinementList } from "react-instantsearch";


function Brands(props) {

  const [allBrands, setAllBrands] = useState(null)

  const {
    items,
    refine,
    searchForItems,
    canToggleShowMore,
    isShowingMore,
    toggleShowMore,
  } = useRefinementList(props);

  useEffect(() => {
    if (allBrands === null) {
      setAllBrands(items)
    } else {
      if (allBrands.length < items.length) setAllBrands(items)
    }


  }, [items])

  //console.log(currentType);

  return (
    <ul className={props.currentType !== 'products' ? "m50 brandsWrapper opacity40" : "m50 brandsWrapper"}>
      {
        allBrands && allBrands.map((e, i) => (
          <li key={e?.label + i} >
            <input type="checkbox" />
            {e?.label}
          </li>
        ))
      }
    </ul>
  );
}

export default Brands;