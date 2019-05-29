# Pryv.io upload

This simple function provides a way to save a field and its value to a Pryv.io account. In case the Pryv.io streams structure does not exist in the account, it creats in a subsequent [API batch call](https://api.pryv.com/reference/#call-batch).

## Usage

- Download dependencies: `npm install` or `yarn`

- Run: `node src/main.js`

## Context

For this example we use the pryv.me platform with username:test23 and password:test23 the token cjw97owsq005p1gd3ekxhiaaa provides access to the 'metaforms' stream with level `manage`

### Assumptions 

- We assumed that **tags** on Pryv could be the holder for **mataform's records**
- All other objects from metaform have their own id and will be used to create a stream structure (as per the current docuement we exchanged)



