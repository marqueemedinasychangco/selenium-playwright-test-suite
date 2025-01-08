function addTimestamp(username){
    return '${username}_${Date.now()}';
}

module.exports = { addTimestamp };

//adding comment