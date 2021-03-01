import Gallery from "react/components/gallery";
import Overview from "react/components/overview";
import UserReviewCard from "react/components/user-review-card";

import userThree from "images/user-3.jpg";
import userFour from "images/user-4.jpg";
import userFive from "images/user-5.jpg";
import userSix from "images/user-6.jpg";

export default function HotelView() {
  return (
    <div className="hotel-view">
      <Gallery />
      <Overview />
      <div className="hotel-view__detail">
        <div className="hotel-view__detail__description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for all families</li>
          </ul>
          <div className="recommend">
            <div className="recommend__count">
              Lucy and 3 other friends recommend this hotel.
            </div>
            <div className="recommend__friends">
              <img src={userThree} alt="user 1" className="recommend__photo"/>
              <img src={userFour} alt="user 2" className="recommend__photo"/>
              <img src={userFive} alt="user 3" className="recommend__photo"/>
              <img src={userSix} alt="user 4" className="recommend__photo"/>
            </div>
          </div>
        </div>

        <div className="hotel-view__detail__user-reviews">
          <UserReviewCard />
        </div>
      </div>
    </div>
  );
}
