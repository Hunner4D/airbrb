import sprite from "images/symbol-defs.svg";

export default function Search() {
    return (
        <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels..."
        />
        <button className="search__button">
          <svg className="search__icon">
            <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>
    )
}