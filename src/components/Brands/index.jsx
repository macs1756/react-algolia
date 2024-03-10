import { useEffect, useState } from "react";
import { useInstantSearch, useRefinementList } from "react-instantsearch";


function Brands(props) {

  const [allBrands, setAllBrands] = useState(null)

  const { items } = useRefinementList(props);
  const { indexUiState, setIndexUiState } = useInstantSearch();

  useEffect(() => {
    if (allBrands === null) {
      setAllBrands(items)
    } else {
      if (allBrands.length < items.length) setAllBrands(items)
    }

  }, [items])

  useEffect(() => {
    console.log(indexUiState);
  }, [indexUiState])

  const changeFillters = (value, type) => {
    if (type === 'add') {
      setIndexUiState((prevIndexUiState) => ({
        ...prevIndexUiState,
        refinementList: {
          ...(prevIndexUiState.refinementList || {}), 
          brand: prevIndexUiState.refinementList && prevIndexUiState.refinementList.brand
            ? [...prevIndexUiState.refinementList.brand, value]
            : [value],
        },
      }));
    } else {
      setIndexUiState((prevIndexUiState) => ({
        ...prevIndexUiState,
        refinementList: {
          ...(prevIndexUiState.refinementList || {}),
          brand: prevIndexUiState.refinementList && prevIndexUiState.refinementList.brand
            ? prevIndexUiState.refinementList.brand.filter(item => item !== value)
            : [],
        },
      }));
    }
  };
  

  return (
    <div className={props.currentType !== 'products' ? "m50 opacity40" : 'm50'} >
    <h2 className="left">Brands</h2>
    <ul className="brandsWrapper">
      {
        allBrands && allBrands.map((e, i) => (
          <li key={e?.label + i} >
            <input
              type="checkbox"
              onChange={(event) => { changeFillters(e?.value, event.target.checked ? 'add' : 'remove') }}
            />
            {e?.label}
          </li>
        ))
      }
    </ul>
    </div>
  );
}

export default Brands;