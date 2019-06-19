# Pryv.io upload

This simple function provides a way to save a field and its value to a Pryv.io account. In case the Pryv.io streams structure does not exist in the account, it creats in a subsequent [API batch call](https://api.pryv.com/reference/#call-batch).

## Usage

- Download dependencies: `npm install` or `yarn`

- Run: `node src/main.js` to create the stream structure and data point described in [src/main.js](src/main.js#L7).

Feel free to modify the data in order to create other data points.

## Visualize

You can visualize the data using:

- the dashboard app: [https://mfdemo1.pryv.me](https://mfdemo1.pryv.me) (password: mfdemo1)
- the API call for streams: [https://mfdemo1.pryv.me/streams?auth=cjwbz6m0300871j405lqtfqsp](https://mfdemo1.pryv.me/streams?auth=cjwbz6m0300871j405lqtfqsp)
- the API call for events: [https://mfdemo1.pryv.me/events?auth=cjwbz6m0300871j405lqtfqsp](https://mfdemo1.pryv.me/events?auth=cjwbz6m0300871j405lqtfqsp)
- The API call for events of a certain record: [https://mfdemo1.pryv.me/events?auth=cjwbz6m0300871j405lqtfqsp&tags[]=record-mf-oiabwoidaw](https://mfdemo1.pryv.me/events?auth=cjwbz6m0300871j405lqtfqsp&tags[]=record-mf-oiabwoidaw)
- The API call for a certain project: [https://mfdemo1.pryv.me/streams?auth=cjwbz6m0300871j405lqtfqsp&parentId=project-mf-irst](https://mfdemo1.pryv.me/streams?auth=cjwbz6m0300871j405lqtfqsp&parentId=project-mf-irst)

## Context

For this example we use the pryv.me platform with username:mfdemo1 and password:mfdemo1 the token cjwbz6m0300871j405lqtfqsp provides access to the 'metaforms' stream with level `manage`

### Assumptions 

- We assumed that **tags** on Pryv could be the holder for **metaform's records**
- All other objects from metaform have their own id and will be used to create a stream structure (as per the current docuement we exchanged)



