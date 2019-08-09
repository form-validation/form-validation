export default (s) => {
    return s.replace(/ /g, '-').replace(/:/g, '').toLowerCase();
};
