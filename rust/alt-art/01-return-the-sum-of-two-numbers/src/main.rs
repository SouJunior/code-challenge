fn addition(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    assert_eq!(addition(1, 2), 3);
    for i in 1..=5 {
        println!("{} + {} = {}", i, i, addition(i, i));
    }
}
