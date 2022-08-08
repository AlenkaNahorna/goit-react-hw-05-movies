import { ReviewsListItem, ReviewerName } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <ReviewsListItem key={review.id}>
            <ReviewerName>{review.author}</ReviewerName>
            <p>{review.content}</p>
          </ReviewsListItem>
        );
      })}
    </ul>
  );
};
