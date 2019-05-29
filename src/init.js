const postToApI = require('./postToApi');
const patient = require('./credentials');

const data = [
  {
    method: 'streams.create',
    params: {
      id: 'projects',
      name: 'Projects',
      parentId: 'metaforms', // this stream was created during app token generation
    },
  },
];

postToApI(patient, '/', data, (err, res) => {
  if (err) return console.log('error', err);
  console.log('results', JSON.stringify(res.body, null, 2));
});

