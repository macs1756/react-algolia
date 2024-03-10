import { useEffect, useState } from "react";
import { useInstantSearch, useRefinementList } from "react-instantsearch";

function Substances(props) {
  const [allSubstances, setAllSubstances] = useState(null)

  const { items } = useRefinementList(props);
  const { setIndexUiState } = useInstantSearch();

  useEffect(() => {
    if (allSubstances === null) {
      setAllSubstances(items)
    } else {
      if (allSubstances.length < items.length) setAllSubstances(items)
    }
  }, [items])

  const changeFillters = (value, type) => {
    if (type === 'add') {
      setIndexUiState((prevIndexUiState) => ({
        ...prevIndexUiState,
        refinementList: {
          ...(prevIndexUiState.refinementList || {}), // Check if refinementList exists, otherwise initialize it as an empty object
          ['substances.name']: prevIndexUiState.refinementList && prevIndexUiState.refinementList['substances.name']
            ? [...prevIndexUiState.refinementList['substances.name'], value]
            : [value],
        },
      }));
    } else {
      setIndexUiState((prevIndexUiState) => ({
        ...prevIndexUiState,
        refinementList: {
          ...(prevIndexUiState.refinementList || {}), // Check if refinementList exists, otherwise initialize it as an empty object
          ['substances.name']: prevIndexUiState.refinementList && prevIndexUiState.refinementList['substances.name']
            ? prevIndexUiState.refinementList['substances.name'].filter(item => item !== value)
            : [],
        },
      }));
    }
  };
  

  return (
    <div className="m50">
    <h2 className="left">Substances</h2>
    <ul className="baseWrapper">
      
        {
        allSubstances && allSubstances.map((e, i)=>(
          <li key={e?.label + i}>
            <input
              type="checkbox"
              onChange={(event) => { changeFillters(e?.value, event.target.checked ? 'add' : 'remove') }}
            />{e?.label}
            </li>
        ))
        }
      
    </ul>
    </div>
  );
}

export default Substances;