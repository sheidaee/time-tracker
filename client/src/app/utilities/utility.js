/**
 * update old object immutable
 * 
 * @param {object} oldObject 
 * @param {object} updatedProperties 
 * @returns updated object
 */
export function updateObject(oldObject, updatedProperties) {
    return {
        ...oldObject,
        ...updatedProperties
    }
}

/**
 * validating form field
 * 
 * @export
 * @param {string|number} value 
 * @param {object} rules 
 * @returns true if is valid
 */
export function checkValidity(value, rules) {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }

    return isValid;
}

/**
 * Joining strings with space
 * 
 * @param {array|string} class names
 * @returns {string} class names
 */
export function classNames(classes) {
    if (classes && classes.constructor === Array) {
        return classes.join(' ')
    }
    else if (arguments[0] !== undefined) {
        return [...arguments].join(' ')
    }
    return ''
}