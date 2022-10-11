fun main() {
    val numbers = arrayOf(9, 9, 2, 3, 4)

    reverseArray(numbers).forEach { print("$it ") }
}

fun reverseArray(numbers: Array<Int>): IntArray {
    val numbersReversed = IntArray(numbers.size)

    for((i, j) in ((numbers.size - 1) downTo 0).withIndex()) {
        numbersReversed[i] = numbers[j]
    }

    return numbersReversed
}