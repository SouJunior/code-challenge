const INPUT_ONE = document.querySelector('#input__one');
const INPUT_TWO = document.querySelector('#input__two');
const OUTPUT_RESULT = document.querySelector('#result');
const BUTTON_CALCULATE = document.querySelector('#sum');

function calculate(value_1, value_2) {
	return value_1 + value_2;
}

BUTTON_CALCULATE.addEventListener('click', (e) => {
	e.preventDefault();

	const value_1 = +INPUT_ONE.value;
	const value_2 = +INPUT_TWO.value;

	const result = calculate(value_1, value_2);

	if (!result)
		return (OUTPUT_RESULT.innerHTML = 'Por favor, insira números válidos.');

	OUTPUT_RESULT.innerHTML = result;
});
