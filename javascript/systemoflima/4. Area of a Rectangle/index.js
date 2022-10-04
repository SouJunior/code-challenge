function AreaRectangle(base, height) {
    if(base <= 0 || height <= 0) {
        return -1
    }
    
    return base * height
}

module.exports = AreaRectangle