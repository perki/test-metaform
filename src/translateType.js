
/**
 * Translates a Metaforms type into a Pryv.io event type (https://api.pryv.com/event-types/)
 */
module.exports = (metaformsType) => {
  switch (metaformsType) {
    case 'kg':
      return 'mass/kg';
    case 'cm':
      return 'length/cm';
    default:
      return 'note/txt'
  }
}