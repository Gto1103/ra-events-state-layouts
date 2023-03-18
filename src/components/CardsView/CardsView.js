import ShopCard from "./ShopCard";

const CardsView = ({products}) => {
	return(
		<div className="cards">
			{products.map(product => 
			<ShopCard 
				product={product}
				key={product.img}
			/>)}
		</div>
	)
}

export default CardsView;