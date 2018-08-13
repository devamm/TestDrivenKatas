function wrap(string, column){
	if(string.length === 0){
		return '';
	}
	const lines = string.split(" ");
	let wordCount = 0;
	let wrapped = '';
	if(lines.length === 1){
		return lines[0];
	}
	lines.forEach(word =>{
		if(word.length >= column){
			wrapped = wrapped.slice(0,-1);
			wrapped+='\n'+word+'\n';
			wordCount = 0;
		}

		else if(word.length + wordCount > column){
			//dont add return line
			wrapped = wrapped.slice(0,-1);
			wrapped+="\n"+word+' ';
			wordCount = word.length+1;

		} else {
			wrapped+=word+" " ;
			wordCount += word.length+1;

		}
		

	});
	

	return wrapped.trim();
}


module.exports = wrap;