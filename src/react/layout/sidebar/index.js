import sprite from "images/symbol-defs.svg";

export default function Sidebar() {

  const handleClick = () => {

  }

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#icon-home`} />
            </svg>
            <span>Hotel</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#icon-aircraft-take-off`} />
            </svg>
            <span>Flight</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#icon-key`} />
            </svg>
            <span>Car Rentals</span>
          </a>
        </li>

        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#icon-map`} />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>

      <div className="legal">&copy; 2021 by airbrb. All rights reserved.</div>
    </nav>
  );
}
