import sprite from "images/symbol-defs.svg";
import mockUser from "images/user-1.jpg";

export default function UserNav() {
    return (
        <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-bookmark`} />
          </svg>
          <span className="user-nav__icon__notification">2</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
            <use xlinkHref={`${sprite}#icon-chat`} />
          </svg>
          <span className="user-nav__icon__notification">7</span>
        </div>
        <div className="user-nav__user">
          <img src={mockUser} alt="User photo" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Kenny Ng</span>
        </div>
      </nav>
    )
}