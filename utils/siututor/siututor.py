__version__ = "0.0.1"

import siuba
from siuba.dply.verbs import DPLY_FUNCTIONS
from functools import wraps

class Blank:
    def __call__(self, *args, **kwargs):
        return self.__class__()

    def __repr__(x):
        return "⚠️: <b>Don't forget to replace all the blanks!</b>"

    def _repr_html_(x):
        return "⚠️: <b>Don't forget to replace all the blanks!</b>"

    def __rshift__(self, x):
        return self.__class__()

    def __rrshift__(self, x):
        return self.__class__()


def blanks_wrapper(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        all_vals = itertools.chain(args, kwargs.values)
        if any(isinstance(x, Blank) for x in all_vals):
            return Blank()

        return f(*args, **kwargs)

def wrap_func(func_name):
    verb = getattr(siuba, func_name)
    # TODO: fix joins not have register attribute
    if hasattr(verb, 'register'):
        verb.register(Blank, lambda x, *args, **kwargs: Blank())
        wrapped = blanks_wrapper(verb)
        globals()[func_name] = wrapped


for _func_name in DPLY_FUNCTIONS:
    wrap_func(_func_name)
    

