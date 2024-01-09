import { useState } from 'react';
import DisplayListHelper from './DisplayListHelper';
import classes from './display_list.module.css';

function DisplayList({ data, getActiveKey }) {
  // Get the keys of the data object
  const lists = Object.keys(data);

  // State to track the currently active item
  const [activeItem, setActiveItem] = useState(lists[0]);

  // Handle click on each list item
  const handleItemClick = (item) => {
    // Set the clicked item as the active item
    setActiveItem(item);

    // Notify the parent component about the active item change
    getActiveKey(item);
  };

  return (
    // Render the list with CSS class from the module
    <ul className={classes['resin-list']}>
      {/* Map over the data keys and render DisplayListHelper for each */}
      {lists.map((each) => (
        <DisplayListHelper
          item={each}
          key={each}
          isActive={each === activeItem} // Check if the item is active
          onClick={() => handleItemClick(each)} // Handle click event
        />
      ))}
    </ul>
  );
}

export default DisplayList;
