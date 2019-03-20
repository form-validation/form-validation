export default (s) => {
    return s.replace(/ /g, '').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}