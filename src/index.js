import x from "./x.js";
function component() {
	const element = document.createElement("div");
	const button = document.createElement("button");
	const br = document.createElement("br");
	button.innerHTML = "Click me and look at the console!";
	element.innerHTML = "Hello,webpack";
	element.appendChild(br);
	element.appendChild(button);
	button.onclick = e => import("./print.js").then(module => {
		const print = module.default;

		print();
	});
	return element;
}
document.body.appendChild(component());

console.log(x);