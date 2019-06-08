export default function format(message, parameters) {
    const params = Array.isArray(parameters) ? parameters : [parameters];
    let output = message;
    params.forEach((p) => {
        output = output.replace('%s', p);
    });
    return output;
}
