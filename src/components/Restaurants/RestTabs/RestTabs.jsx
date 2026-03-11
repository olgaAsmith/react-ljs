export const RestTabs = ({ restaurants, onChange }) => {
  return (
    <ul>
      {restaurants.map((item) => (
        <li key={item.id}>
          <button
            type='button'
            onClick={() => onChange(item.id)}
          >
            {item.name}
          </button>
        </li>
      ))}
    </ul>
  );
};
