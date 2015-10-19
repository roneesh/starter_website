function get_word_statistics() {
	
	// 1. Getting input phrase
	var phrase_input = document.getElementById('phraseInput');
	console.log(phrase_input);

	var phrase = phrase_input.value;
	console.log(phrase);

	// 2. Getting desired statistics
	var character_count = phrase.length;
	console.log(character_count);

	var no_spaces_count = phrase.replace(/\s+/g, '').length;
	console.log(no_spaces_count);

	var word_count = phrase.split(' ').length;
	console.log(word_count);

	// 3. Putting Stats into the DOM
	var target_string_span = document.getElementById('js_target_string');
	target_string_span.innerHTML = phrase;

	var character_count_span = document.getElementById('js_character_count');
	character_count_span.innerHTML = character_count;

	var no_spaces_span = document.getElementById('js_character_count_no_spaces');
	no_spaces_span.innerHTML = no_spaces_count;

	var word_count_span = document.getElementById('js_word_count');
	word_count_span.innerHTML = word_count;

	// 4. Reset text field
	phrase_input.value = "";
}


function generate_character() {

	var first_names = ['Ragnar', 'Roneesh', 'Ellice', 'Starfire', 'Renita', 'Fargone', 'Zistop', 'Rigby'],
		last_names = ['Roxin', 'Piverr', 'Tristway', 'Mistborne', 'Walkfire', 'Lostlake', 'Cornithian', 'Wasberry'];

	function randomName() {
		// get a random element from each array, then return them as a string, replace mistborn with a random element from the last_names array;

		// The return statement is a short way of writing something like this...
		// var random_index = Math.floor(Math.random()*last_names.length);
		// var random_last_name = last_names[random_index];
		// return random_first_name + ' '  + random_last_name;

		return first_names[Math.floor(Math.random()*first_names.length)] + ' ' + 'Mistborne';
	}

	function rollStat() {
		// add up three rolls of a six-sided die
		// replace this with your function that doesn't allow a dice roll to be a 1

		return Math.floor(Math.random()*6) + Math.floor(Math.random()*6) + Math.floor(Math.random()*6);
	}

	document.getElementById('js_dnd_name').innerHTML = randomName();
	document.getElementById('js_dnd_str').innerHTML = rollStat();
	document.getElementById('js_dnd_dex').innerHTML = rollStat();

}



