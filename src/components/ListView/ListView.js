import ListItem from './ListItem';

const ListView = ({products}) => {
	return(
		<ul className="list">
		{products.map(product => 
			<ListItem
				product={product}
				key={product.img}
			/>)}
		</ul>
	)
}

export default ListView;