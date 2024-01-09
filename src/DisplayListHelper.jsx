import classes from './display_list.module.css';

function DisplayListHelper({ item, isActive, onClick }) {
  return (
    <li className={isActive ? classes['active-item'] : ''} onClick={onClick}>
      {item}
    </li>
  );
}

export default DisplayListHelper;
