const metaformsStreamId = 'metaforms';

const patient = require('./credentials');
const saveField = require('./saveField');

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

saveField({ 
	patient: patient, 
	project: project, 
	form: form,
	field: fieldHeight 
}, function (err, res) {
	console.log('done', err, JSON.stringify(res, null, 2));
} );
