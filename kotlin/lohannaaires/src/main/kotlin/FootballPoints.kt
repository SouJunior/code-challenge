fun main() {
    val result = footballPoints(5, 0, 2)
    println(result)
}

fun footballPoints(wins: Int, draws: Int, losses: Int): Int {
    return wins * 3 + draws
}