function sumValuesFromString(valuesString) {
    return valuesString
        .split(",")
        .reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0);
}

module.exports = sumValuesFromString;