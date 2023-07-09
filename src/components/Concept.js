const Concept = (props) => {
	return (
		<li className="concept">
			{/* <img src={concepts[0].image} alt={concepts[0].title} />
			<h2>{concepts[0].title}</h2>
			<p>{concepts[0].description}</p> */}
            <img src={props.image} alt={props.title} />
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</li>
	);
};

export default Concept;
