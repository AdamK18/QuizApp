export const createArrayN = (n) => {
    const array = []
    for (let i = 0; i < n; i = i + 1) {
        array.push(i)
    }
    return array
}

export const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}