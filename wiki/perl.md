---
layout: default
title : perl
---
Fecha de hoy y en tres días más

    #!/usr/bin/perl
    use POSIX qw/ strftime /;

    $hoy= strftime "%Y-%m-%d_00:00:00",localtime;
    $siguiente= strftime "%Y-%m-%d_00:00:00",localtime(time + 86400 * 3);

    print "$hoy\n";
    print "$siguiente\n";
