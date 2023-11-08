const Menu = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <p className="price">${price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  )
};

export default Menu;
