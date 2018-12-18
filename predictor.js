function predict(e) {
	let answer = document.getElementById("answer");
	answer.textContent = "";
	thinking.textContent = "I see...";
	setTimeout(function () {
		answer.textContent = "you will be rejected from UChicago. :(";
	}, 1500);
	e.preventDefault();
	return false;
}
