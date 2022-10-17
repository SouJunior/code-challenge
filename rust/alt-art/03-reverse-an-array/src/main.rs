fn reverse_array(arr: Vec<i32>) -> Vec<i32> {
    arr.iter().rev().cloned().collect::<Vec<i32>>()
}

fn main() {
    let arr = vec![1, 2, 3, 4, 5];
    println!("{:?}", reverse_array(arr.clone()));
    assert_eq!(reverse_array(arr), vec![5, 4, 3, 2, 1]);
}
