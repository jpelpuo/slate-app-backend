module.exports = removeFromList = (array, itemToRemove) => {
    let tempArray = [...array]
    tempArray.splice(tempArray.indexOf(itemToRemove), 1)

    return tempArray;
}