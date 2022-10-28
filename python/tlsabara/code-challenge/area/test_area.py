"""
Testes da função area
"""
import pytest
from .function import area


@pytest.mark.parametrize(
    'lado_a, lado_b',
    [
        (1, 0),
        (0, 1)
    ]
)
def test_raises_value_error_if_value_of_parameters_is_less_than_zero(lado_a, lado_b):
    with pytest.raises(ValueError):
        area(lado_a, lado_b)


@pytest.mark.parametrize(
    'lado_a, lado_b',
    [
        (1, 'qwert'),
        ('qwert', 1)
    ]
)
def test_raises_type_error_if_value_of_parameters_not_is_number(lado_a, lado_b):
    with pytest.raises(TypeError):
        area(lado_a, lado_b)


@pytest.mark.parametrize(
    'lado_a, lado_b, expected',
    [
        (10, 10, 100),
        (2, 7, 14),
        (3, 3, 9)
    ]
)
def test_asset_return_is_product_of_parameters(lado_a, lado_b, expected):
    assert area(lado_a, lado_b) == expected
