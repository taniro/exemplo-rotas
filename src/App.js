import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Produtos from "./components/Produtos";
import Contato from "./components/Contato";
import DetalheProduto from "./components/DetalheProduto";

export default function App() {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/produtos" exact component={Produtos} />
					<Route path="/produtos/:id" component={DetalheProduto} />
					<Route path="/contato" component={Contato} />
					<Route path="/" exact component={Home} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
