export default (s) => {
    return s.replace(/ /g, '').replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
};
