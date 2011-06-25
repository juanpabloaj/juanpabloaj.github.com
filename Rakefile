desc "git commit + push"
task :push do	
	File.open('_includes/gitDiffStat.markdown','w') do |archivo|
		IO.popen('git diff --stat HEAD') do |io|
			io.each_line do |line|
				if not ( line =~ /.*_include.*/ or line =~ /.*files changed.*/ or line =~ /.*Rakefile.*/)  then
					archivo.puts line
				end
			end
		end
	end
	sh 'git commit -a '
	sh 'git push'
end
desc 'un post rapido'
task :post, [:nombre] do |t,args|
	require 'date'
	nombre = "#{args.nombre}"
	fecha = Time.now.strftime("%Y-%m-%d")
	fichero = '_posts/'+fecha+'-'+nombre+'.markdown'
	if nombre != "" 
		File.open(fichero,'w') do |salida|
			salida.puts '---'
			salida.puts 'layout: default'
			salida.puts 'title : '+nombre.gsub('-',' ')
			salida.puts 'categories:'
			salida.puts '---'
			salida.puts '{:enlaces: .enlaceGris}'
		end
		sh 'vim '+fichero+' +$' # vim en modo insert al final del fichero
		sh 'git add .'
	else 
		puts "Debe ingresar el nombre del post"
		puts "rake post[nombre-del-post]"
	end
end
