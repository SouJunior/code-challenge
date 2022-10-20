fn football_points(wins: i32, draws: i32, losses: i32) -> i32 {
    let wins_points = 3 * wins;
    let draws_points = 1 * draws;
    let losses_points = 0 * losses;
    let total = wins_points + draws_points + losses_points;
    total
}

fn main() {
    assert_eq!(football_points(3, 4, 2), 13);
    for i in 1..=5 {
        println!(
            "{} wins, {} draws, {} losses = {} points",
            i,
            i,
            i,
            football_points(i, i, i)
        );
    }
}
