import { restaurants } from '../../constants/mock';
import { RestTabs } from './RestTabs/RestTabs';
import { Menu } from './Menu/Menu';
import { Reviews } from './Reviews/Reviews';
import { useState } from 'react';

export const Restaurants = () => {
  const [activeRestId, setActiveRestId] = useState(restaurants[0].id);

  const activeRest = restaurants.find((item) => item.id === activeRestId);

  return (
    <div>
      <RestTabs
        restaurants={restaurants}
        activeRestId={activeRestId}
        onChange={setActiveRestId}
      />
      <div>
        <h2>{activeRest.name}</h2>
        {activeRest.menu.length ? <Menu menu={activeRest.menu} /> : null}
        {activeRest.reviews.length ? (
          <Reviews reviews={activeRest.reviews} />
        ) : null}
      </div>
    </div>
  );
};
