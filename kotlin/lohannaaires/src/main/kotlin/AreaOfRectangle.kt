fun main() {
    println(calculateArea(4, 4))
    println(calculateArea(-1, 5))
    println(calculateArea(10, 11))
}

fun calculateArea(width: Int, height: Int): Int {
    return if(width == height) { -1 }
        else if(width <=0 || height <= 0) { -1 }
        else { width * height }
}