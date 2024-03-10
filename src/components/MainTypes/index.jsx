import { useEffect, useState } from 'react';
import { useInstantSearch } from 'react-instantsearch';

function MainTypes({handleTypeChange}) {

  const { indexUiState, setIndexUiState } = useInstantSearch();
  const [currentPostType, setCurrentPostType] = useState()

  const mainTypes = [
    {
      label: 'Best of',
      value: 'best_of',
    },
    {
      label: 'Learn',
      value: 'learn',
    },
    {
      label: 'Products',
      value: 'products',
    },
    {
      label: 'Reviews',
      value: 'reviews',
    },
    {
      label: 'News',
      value: 'vape-news',
    },
  ]

  // useEffect(() => {
  //   setIndexUiState((prevIndexUiState) => ({
  //     refinementList: {
  //       post_type: ['best_of'],
  //     },
  //   }))
  // }, [])


  useEffect(() => {
    if(indexUiState?.refinementList?.post_type){
      setCurrentPostType(indexUiState?.refinementList?.post_type[0])
    }
  }, [indexUiState])

  const addNewFilter = (value) => {

    setIndexUiState({
      refinementList: {
        post_type: [value],
      },
    })

    handleTypeChange(value)
  }

  return (
    <ul className='m50'>
      {
        mainTypes.map((e, i) => (
          <li 
          className={currentPostType === e?.value ? 'currentPostType active' : 'currentPostType'} 
          onClick={() => addNewFilter(e?.value)} 
          key={e?.value + i}>{e?.label}</li>
        ))
      }
    </ul>
  );
}

export default MainTypes;