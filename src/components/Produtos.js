import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Produtos() {
	let listaProdutos = [];
	for (let i = 0; i < 5; i++) {
		listaProdutos.push({ produto: "Nome", id: i });
	}

	const jsxProdutos = listaProdutos.map(p => {
		return (
			<Link to={`/produtos/${p.id}`}>
				<h1>{p.produto}</h1>
			</Link>
		);
	});

	return <div className="container">{jsxProdutos}</div>;
}

export default Produtos;
