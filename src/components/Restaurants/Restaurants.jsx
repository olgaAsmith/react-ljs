import { restaurants } from '../../constants/mock';
import { Menu } from './Menu/Menu';
import { Reviews } from './Reviews/Reviews';

export const Restaurants = () => {
  return (
    <ul>
      {restaurants.map((item) => (
        <li key={item.id}>
          <div>
            <h2>{item.name}</h2>
            <Menu menu={item.menu} />
            <Reviews reviews={item.reviews} />
          </div>
        </li>
      ))}
    </ul>
  );
};
