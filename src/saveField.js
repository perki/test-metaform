const postToApI = require('./postToApi');
const translateType = require('./translateType');

/**
 * Saves a Metaforms field into Pryv.io
 */
module.exports = (infos, callback) => {
  const event = {
    type: translateType(infos.field.type),
    streamId: infos.field.id,
    content: infos.field.content,
    tags: [infos.field.record.id],
  }

  postToApI(infos.patient, '/events', event, function (err, res) {
    if (err) return callback(err);
    if (res && res.body) {
      if (res.status === 201) {
        return callback(null, res.body);
      }
      if (res.body.error && (res.body.error.id === 'unknown-referenced-resource')) {
        return saveFieldWithFullStreamPath(infos, event, callback)
      }
    }
    return callback(res.error); // network error
  });
}

function saveFieldWithFullStreamPath(infos, event, callback) {
  const batch = [
    {
      method: 'streams.create',
      params: {
        id: 'projects',
        name: 'Projects',
        parentId: 'metaforms', // this stream was created during app token generation
      }
    },
    {
      method: 'streams.create',
      params: {
        id: infos.project.id,
        name: infos.project.name,
        parentId: 'projects',
        clientData: {
          'metaforms:type': 'project'
        }
      }
    },
    {
      method: 'streams.create',
      params: {
        id: infos.form.id,
        name: infos.form.name,
        parentId: infos.project.id,
        clientData: {
          'metaforms:type': 'form',
        },
      }
    },
    {
      method: 'streams.create',
      params: {
        id: infos.field.id,
        name: infos.field.name,
        parentId: infos.form.id,
        clientData: {
          'metaforms:type': 'field',
        },
      }
    },
    {
      method: 'events.create',
      params: event
    },
  ];

  postToApI(infos.patient, '/', batch, function (err, res) {
    if (err) return callback(err);
    if (res && res.body) {
      if (res.status === 200) {
        return callback(null, res.body);
      }
    }
    return callback(res); // error
  });

}