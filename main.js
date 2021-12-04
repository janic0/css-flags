document
	.querySelector("input")
	.addEventListener("keyup", ({target: {value}}) => {
		if (value && value.length > 1) {
			const elem = document.querySelector(".flag");
			elem.classList.remove(elem.classList.item(1));
			elem.classList.add("flag-" + value);
		}
	});
