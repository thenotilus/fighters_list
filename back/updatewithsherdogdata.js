var sherdog = require('sherdog');
var fs = require('fs');

const { Parser } = require('json2csv');
var fightersList = null;
// Lecture du fichier JSON
fs.readFile('./fightersList.json', function(err, data) {
	// Création de la liste de combattabns
	fightersList = JSON.parse(data);

	fightersList.forEach((infos, position, self) => {
		if (infos.image && infos.sherdog) {
			sherdog.getFighter(infos.sherdog, function(sherdogData) {
				self[position]['nickname'] =  sherdogData['nickname'];
				self[position]['birthday'] = sherdogData['birthday'];
				self[position]['age'] = sherdogData['age'];

				self[position]['Wins'] = sherdogData['wins']['total'];
				self[position]['Losses'] = sherdogData['losses']['total'];

				self[position]['height'] = sherdogData['height'];
				self[position]['weight'] = sherdogData['weight'];
				self[position]['weight_class'] = sherdogData['weight_class'];
				
				self[position]['factorien'] = sherdogData['association'] === "MMA Factory";
				self[position]['ufc_position'] = "";

			});
		}
	});

});


setTimeout(function(){
	fs.writeFileSync('./fightersList.json', JSON.stringify(fightersList));
	if (fightersList) {
		const json2csvParser = new Parser();
		const csv = json2csvParser.parse(fightersList);
		fs.writeFileSync('./fightersList.csv', csv);
 	}
}, 10000);

