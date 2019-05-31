const metaformsStreamId = 'metaforms';


const saveField = require('./saveField');


// ------ START OF DATA WE SUPPOSE YOU HAVE IN THE CONTEXT OF METAFORM ---- //

const patient = {
	username: 'mfdemo1',
	token: 'cjwbz6m0300871j405lqtfqsp',
	domain: 'pryv.me',
};

const project = {
	id: 'project-mf-irst',
	name: 'First Project'
}

const record1 = {
	id: 'record-mf-oiabwoidaw'
}

const fieldMass = {
	id: 'field-mf-oiawdoinaowin',
	name: 'Body Mass',
	type: 'kg',
	content: 72,
	record: record1
}

const fieldHeight = {
	id: 'field-mf-ubdoib2obu4',
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
	field: fieldMass 
}, function (err, res) {
	console.log('done', err, JSON.stringify(res, null, 2));
} );
