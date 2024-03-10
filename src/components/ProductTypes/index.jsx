import React from 'react';
import { useHierarchicalMenu } from 'react-instantsearch';


export default function CustomHierarchicalMenu(props) {
  const {
  items,
  refine,
  canToggleShowMore,
  toggleShowMore,
  isShowingMore,
  createURL,
} = useHierarchicalMenu(props);

  return (
    <>
      <HierarchicalList
        items={items}
        onNavigate={refine}
        createURL={createURL}
      />
      {props.showMore && (
        <button disabled={!canToggleShowMore} onClick={toggleShowMore}>
          {isShowingMore ? 'Show less' : 'Show more'}
        </button>
      )}
    </>
  );
}
 function HierarchicalList({ items, createURL, onNavigate }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.value}>
          <a
            href={createURL(item.value)}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(item.value);
            }}
            style={{ fontWeight: item.isRefined ? 'bold' : 'normal' }}
          >
            <span>{item.label}</span>
            <span>{item.count}</span>
          </a>
          {item.data && (
            <HierarchicalList
              items={item.data}
              onNavigate={onNavigate}
              createURL={createURL}
            />
          )}
        </li>
      ))}
    </ul>
  );
}