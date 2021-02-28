import hotelOne from "images/hotel-1.jpg";
import hotelTwo from "images/hotel-2.jpg";
import hotelThree from "images/hotel-3.jpg";

export default function HotelView() {
  return (
    <div className="hotel-view">
      <div className="hotel-view__gallery">
        <figure className="hotel-view__gallery__item">
          <img
            src={hotelOne}
            alt="Photo of hotel 1"
            className="hotel-view__gallery__photo"
          />
        </figure>

        <figure className="hotel-view__gallery__item">
          <img
            src={hotelTwo}
            alt="Photo of hotel 2"
            className="hotel-view__gallery__photo"
          />
        </figure>

        <figure className="hotel-view__gallery__item">
          <img
            src={hotelThree}
            alt="Photo of hotel 3"
            className="hotel-view__gallery__photo"
          />
        </figure>
      </div>
    </div>
  );
}
