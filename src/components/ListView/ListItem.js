const ListItem = (props) =>{
	const {name, price, color, img} = props.product;

	return (
		<li className="item">
			<div className="item__image-container">
				<img className="item__image" src={img} alt="" />
			</div>
			<h1 className="item__name">{name}</h1>
			<h2 className="item__color">{color}</h2>
			<div className="item__price">{price}</div>
			<button className="item__button" type="button">Add to cart</button>
		</li>
	)
}

export default ListItem;
