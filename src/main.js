const metaformsStreamId = 'metaforms';


const saveField = require('./saveField');


// ------ START OF DATA WE SUPPOSE YOU HAVE IN THE CONTEXT OF METAFORM ---- //

const patient =  {
	username: 'test23',
	token: 'cjw9b8e5600601hd34ivoc1tm',
	domain: 'pryv.me',
};

const project = {
	id: 'first',
	name: 'First Project'
}

const form = {
	id: 'body',
	name: 'Body',
}

const record1 = {
	id: 'record-a'
}

const fieldMass = {
	id: 'body-mass',
	name: 'Body Mass',
	type: 'kg',
	content: 72,
	record: record1
}

const fieldHeight = {
	id: 'body-height',
	name: 'Body Height',
	type: 'cm',
	content: 178,
	record: record1
}


// -------------- END OF CONTEXT DATA -----//


/**
 * Call to be issued at every field saved
 */
saveField({ 
	patient: patient, 
	project: project, 
	form: form,
	field: fieldHeight 
}, function (err, res) {
	console.log('done', err, JSON.stringify(res, null, 2));
} );
