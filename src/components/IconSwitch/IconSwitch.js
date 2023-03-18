import './IconSwitch.css';

export default function IconSwitch({ icon, onSwitch }) {
	
	return (
		<div className='icon-container'>
			<button className="material-icons" onClick={onSwitch}>
				{icon}
			</button>
		</div>
	)
}