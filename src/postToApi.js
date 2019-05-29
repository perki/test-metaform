const request = require('superagent');

/**
 * API POST call to a Pryv.io account
 */
module.exports = (patient, path, data, callback) => {
  request.post('https://' + patient.username + '.' + patient.domain + path)
    .ok(res => res.status < 500) // to accept 400 (existing as non-error)
    .accept('application/json')
    .set('authorization', patient.token)
    .send(data)
    .then(res => {
      callback(null, res);
    }).catch(err => {
      callback(err);
    });
};