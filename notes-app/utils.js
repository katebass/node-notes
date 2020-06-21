const name = "Kate"

export const add = function(a, b) {  // such export style only if in package.json "type": "module"
    return a + b
}

export const minus = (a, b) => { return a - b}

export default {
    add,
    minus
};

module.exports  = minus
