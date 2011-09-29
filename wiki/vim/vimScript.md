---
layout: default
title: Vim Scripts
---
Mostrar el tipo de archivo  

	:echo &ft

### Funciones
Algunos ejemplos de funciones para modificar csv.

	" for csv {{{1
	" ReordenarFecha {{{2

	function! ReordenarFecha()
		"de dia-mes-anno a anno-mes-dia
		exe "%s/^\\([0-9][0-9]\\)-\\([0-9][0-9]\\)-\\([0-9][0-9][0-9][0-9]\\)\t/\\3-\\2-\\1\t/"
	endfunction

	" }}}2
	" CambioFechas {{{2
	" cambiar junta dos columnas anno mes a un sola fecha para mysql
	function! CambioFechas(args)
		let s:meses = [
					\ [ "ene", "01" ],
					\ [ "feb", "02" ],
					\ [ "mar", "03" ],
					\ [ "abr", "04" ],
					\ [ "may", "05" ],
					\ [ "jun", "06" ],
					\ [ "jul", "07" ],
					\ [ "ago", "08" ],
					\ [ "sep", "09" ],
					\ [ "oct", "10" ],
					\ [ "nov", "11" ],
					\ [ "dic", "12" ]]
		"exe "echo ".a:args[0]
		if a:args[0] == "0"
			silent exe "%s/\t20\\([0-9][0-9]\\)\t/\t\\1\t/"
			for s:col in s:meses 
				silent exe "%s/\t".s:col[0]."\t/".s:col[1]."01\t/"
			endfor
			exe "echo "."\"Cambio formato fecha\""
		endif
		if a:args[0] == "1"
			silent exe "%s/^20\\([0-9][0-9]\\)\t/\\1\t/"
			silent exe "%s/\t\\([0-9]\\)\t/\t0\\1\t/"
			for s:col in s:meses 
				silent exe "%s/\t".s:col[0]."\t/".s:col[1]."/"
			endfor	
		endif
	endfunction

	" }}}2
	" CsvToSql {{{2
	" convierte un csv a sql, solo el ultimo campo numerico
	function! CsvToSql(entrada)
		"exe "%s/\(09[0-9][0-9]01\);/\1;0-10;/"
		exe "%s/ //g"
		exe "%s/;/','/g" 
		exe "%s/^/INSERT INTO `".a:entrada."` VALUES ('/"
		exe "%s/$/);/"
		exe "%s/,'\\([0-9,.]*\\));$/,\\1);/" 
	endfunction
	command! -nargs=+ -complete=command CsvToSql call CsvToSql(<q-args>)

	" }}}2
	" }}}1
