import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DetalheProduto({ match }) {
	console.log(match);
	return (
		<div className="container">
			<h1>Detalhes de {match.params.id}</h1>
		</div>
	);
}

export default DetalheProduto;
