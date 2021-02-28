import sprite from "images/symbol-defs.svg";

export default function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <svg className="overview__stars-icon">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        <svg className="overview__stars-icon">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        <svg className="overview__stars-icon">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        <svg className="overview__stars-icon">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
        <svg className="overview__stars-icon">
          <use xlinkHref={`${sprite}#icon-star`} />
        </svg>
      </div>

      <div className="overview__location">
        <svg className="overview__location-icon">
          <use xlinkHref={`${sprite}#icon-location-pin`} />
        </svg>
        <button
          className="btn-inline"
          onClick={() => {
            return;
          }}
        >
          Albufeira, Portugal
        </button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
}
