export const Reviews = ({ reviews }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};
