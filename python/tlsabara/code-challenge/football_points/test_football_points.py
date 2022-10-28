import pytest
from .function import football_points


@pytest.mark.parametrize(
    'valor_wins, valor_draws, valor_loss',
    [
        (1, 1, -1),
        (0, -1, 0),
        (-1, 0, 0)
    ]
)
def test_raises_value_error_if_any_parameter_is_less_than_0(valor_loss, valor_wins,valor_draws):
    with pytest.raises(ValueError):
        football_points(valor_wins, valor_draws, valor_loss)


@pytest.mark.parametrize(
    'valor_wins, valor_draws, valor_loss',
    [
        (1, 1, 'V'),
        (0, 'V', 0),
        ('V', 0, 0)
    ]
)
def test_raises_type_error_if_any_parameter_not_is_int(valor_loss, valor_wins, valor_draws):
    with pytest.raises(TypeError):
        football_points(valor_wins, valor_draws, valor_loss)


@pytest.mark.parametrize(
    'valor_wins, valor_draws, valor_loss, expected',
    [
        (1, 1, 1, 4),
        (10, 5, 900000, 35),
        (15, 45, 0, 90),
        (0, 0, 0, 0)
    ]
)
def test_raises_type_error_if_any_parameter_not_is_int(valor_loss, valor_wins, valor_draws, expected):
    assert football_points(valor_wins, valor_draws, valor_loss) == expected