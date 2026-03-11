import { MenuItem } from '../MenuItem/MenuItem';

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <MenuItem name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
