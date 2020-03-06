export const generateNextID = (arr, keyId) => {

    let newId = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][keyId] >= newId) {
            newId = (arr[i][keyId] + 1)
        }
    }

    return newId

};