import { useEffect, useState } from 'react';
import { useInstantSearch } from 'react-instantsearch';

function MainTypes() {

  const { indexUiState, setIndexUiState } = useInstantSearch();

  useEffect(()=>{
    console.log(indexUiState);
  },[indexUiState])

  return (
    <div>Main Types</div>
  );
}

export default MainTypes;