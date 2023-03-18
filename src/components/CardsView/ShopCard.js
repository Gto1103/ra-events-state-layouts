const ShopCard = (props) => {
	const {name, price, color, img} = props.product;

	return (
		<div className="card">
			<h1 className="card__name">{name}</h1>
			<h2 className="card__color">{color}</h2>
			<div className="card__image-container">
				<img className="card__image" src={img} alt="" />
			</div>
			<div className="card__cart">
				<div className="card__price">{price}</div>
				<button className="card__button" type="button">Add to cart</button>
			</div>
		</div>
	)
}

export default ShopCard;