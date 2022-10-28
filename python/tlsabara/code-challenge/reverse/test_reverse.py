"""
Testes da função reverse
"""
import pytest
from .function import reverse


@pytest.mark.parametrize(
    'arg_errado',
    [1, '2', int]
)
def test_raise_type_error_if_to_revert_not_is_list(arg_errado):
    with pytest.raises(TypeError):
        reverse(arg_errado)

@pytest.mark.parametrize(
    'arg_list, revese_list',
    [
        ([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]),
        (['a', 'b', 'c', 'd'], ['d', 'c', 'b', 'a']),
        (['Z', 'b', 2, 'd'], ['d', 2, 'b', 'Z'])

    ]
)
def test_assert_list_reverse(arg_list, revese_list):
    assert reverse(arg_list) == revese_list