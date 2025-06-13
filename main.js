function betterTypeOf(value) {
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'symbol') return 'symbol';
    return typeof value;
}
function showType() {
    let input = document.getElementById('inputValue').value.trim();
    let parsed;
    if (input.startsWith('symbol:')) {
        parsed = Symbol(input.slice(7));
    } else {
        try {
            parsed = eval('(' + input + ')');
        } catch {
            parsed = input;
        }
    }
    document.getElementById('output').innerText = betterTypeOf(parsed);
}