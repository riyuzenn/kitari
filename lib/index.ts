
/// Simplified the given string. (replace spaces to hyphens 
/// and remove special chars)
function simplified(str: string) {
    return str.replace(/[\. ,:-]+/g, "-")
}

export default simplified;