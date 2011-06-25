#!/usr/bin/env python
"""
setup.py file for SWIG stdVector
"""
from distutils.core import setup, Extension
stdVector_module = Extension('_stdVector',
                           sources=['stdVector_wrap.cxx']
                           )
setup (name = 'stdVector',
       version = '0.1',
       author      = "SWIG Docs",
       description = """Simple swig stdVector from docs""",
       ext_modules = [stdVector_module],
       py_modules = ["stdVector"],
       )
