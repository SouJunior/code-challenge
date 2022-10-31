"""
Tests do add
"""
import pytest
from .function import addiction


def test_add_function_raises_error_if_n1_not_is_number():
    with pytest.raises(TypeError):
        addiction('any', 3)


def test_add_function_raises_error_if_n2_not_is_number():
    with pytest.raises(TypeError):
        addiction(1, 'any')

@pytest.mark.parametrize(
    'valor_1, valor_2, expected',
    [
        (1, 2, 3),
        (-1, -2, -3),
        (1, -2, -1),
        (-1, 2, 1),
    ]
)
def test_assert_adiction_value_of_parameters_v1_and_v2(valor_1,valor_2,expected):
    assert addiction(valor_1,valor_2) == expected