import Gallery from "react/components/gallery";
import Overview from "react/components/overview";
import UserReviewCard from "react/components/user-review-card"

export default function HotelView() {
  return (
    <div className="hotel-view">
      <Gallery />
      <Overview />
      <div className="hotel-view__detail">
        <div className="hotel-view__detail__description">
            Description
        </div>

        <div className="hotel-view__detail__user-reviews">
            <UserReviewCard />
        </div>
      </div>
    </div>
  );
}
