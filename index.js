const fs = require('fs');

let BASE_PATH = './'
let MASHED_PATH = BASE_PATH + 'mash'
let ORGANIZED_PATH = BASE_PATH + 'organized'

console.log(`Starting`);

const mashed_files = fs.readdirSync(MASHED_PATH);

mashed_files.forEach( function(element, index) {
	let ext = element.split('.').pop();
	let folderName = ORGANIZED_PATH + '/' + ext; 
	if(!fs.existsSync(folderName)){
		fs.mkdirSync(folderName);
	}
	oldPath  = MASHED_PATH + '/' + element;
	newPath  = folderName + '/' + element;
	fs.copyFileSync(oldPath,newPath);
	console.log(element,' moved successfully.'); 
});

console.log(`End`);