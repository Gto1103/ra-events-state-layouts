import { useState } from "react";
import IconSwitch from "../IconSwitch/IconSwitch";
import CardsView from "../CardsView/CardsView";
import ListView from "../ListView/ListView";
import products from '../data';


const Store = () => {
	const [iconState, setView] = useState('view_list');
	const cards = products;
	
	const onSwitch = () => {
		iconState === 'view_list' ? setView('view_module') : setView('view_list')
	}

	const view = (iconState === 'view_list') ? <CardsView products={cards} /> : <ListView products={cards} />
	return(
		<div className="wrapper">
			<IconSwitch
				icon={iconState}
				onSwitch={onSwitch}
			/>
			{view}
		</div>
	)
}

export default Store;