// import modules
const fs = require('fs');
const path = require('path');

let BASE_PATH = './';
let MASHED = BASE_PATH + 'mash/';

const mashed = fs.readdirSync(MASHED);

function settingHandle(directory){
	const mashed = fs.readdirSync(directory);
	mashed.forEach( function (element,index) {
		let stat = fs.lstatSync(directory + element);
		if(stat.isFile()){
			let ext = path.extname(directory + element);
			if(!fs.existsSync(directory + "organized/")){
				fs.mkdirSync(directory+"organized/")
			}
			if(!fs.existsSync(directory + "organized/" + ext)){
				fs.mkdirSync(directory +  "organized/"+ ext);
			}
			oldPath = directory + element;
			newPath = directory + "organized/" + ext + "/" + element;
			fs.copyFileSync(oldPath,newPath);
			fs.unlinkSync(oldPath);
			console.log(element, "moved successfully.")
		}else if(stat.isDirectory()){
			settingHandle(directory + element + '/');
		}
	});
}

console.log("Starting ...")
settingHandle(MASHED);
console.log("End ...")