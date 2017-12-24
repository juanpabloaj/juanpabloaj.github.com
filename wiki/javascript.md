---
layout: default
title: javascript
---
### Arrays
Regular

    var nums = new Array();
    nums[0] = "cero";
    nums[1] = "uno";

Condensado

    var nums = new Array("cero", "uno");

Literal

    var nums = ["cero", "uno"];

### Porque usar === y no ==

    > '' == '0'
    false
    > '' == 0
    true
    > 0 == '0'
    true

    > '  \t\r\n  ' == 0
    true

    > false  === ''
    false
    > false == ''
    true

    > 10 == '10'
    true
    > 10 === '10'
    false


# Referencias

* [w3schools](http://www.w3schools.com/js/js_obj_array.asp)
* JavaScript: The Good Parts, Douglas Crockford
