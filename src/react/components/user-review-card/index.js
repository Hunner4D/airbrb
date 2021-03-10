export default function UserReviewCard(props) {
  return (
    <figure className="review">
      <blockquote className="review__text">{props.package.text}</blockquote>
      <figcaption className="review__user">
        <img
          src={props.package.profileImg}
          alt="reviewer profile pic"
          className="review__user-photo"
        />
        <div className="review__user-box">
          <p className="review__user-box__name">{props.package.name}</p>
          <p className="review__user-box__date">{props.package.date}</p>
        </div>
        <div className="review__rating">{props.package.rating}</div>
      </figcaption>
    </figure>
  );
}
