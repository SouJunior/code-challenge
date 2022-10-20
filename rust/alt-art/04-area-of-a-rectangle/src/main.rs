fn area(h: i32, w: i32) -> i32 {
    if h <= 0 || w <= 0 {
        -1
    } else {
        h * w
    }
}

fn main() {
    println!("{}", area(3, 4));
    println!("{}", area(0, 4));
    assert!(area(3, 4) == 12);
    assert!(area(-1, 4) == -1);
}
