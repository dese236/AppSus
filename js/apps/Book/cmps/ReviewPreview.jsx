const { Link } = ReactRouterDOM;

export function ReviewPreview({ review, onRemoveReview }) {
  return (
    <div className="card-review">
      <img onClick={() => {
          onRemoveReview(review.id);
        }}
        className="close-btn"
        src="../assets/img/close.png"
      />
      <div className="review-info">
        <span className="review-name"> {review.name}</span>
        <small className="review-date"> {review.date}</small>
      </div>
      <div>
        {review.rate >= 1 && <img src="../assets/img/star.png" />}
        {review.rate >= 2 && <img src="../assets/img/star.png" />}
        {review.rate >= 3 && <img src="../assets/img/star.png" />}
        {review.rate >= 4 && <img src="../assets/img/star.png" />}
        {review.rate >= 5 && <img src="../assets/img/star.png" />}
      </div>
      <div>{review.txt}</div>
    </div>
  );
}
