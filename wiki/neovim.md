---
layout: wiki-note
title: neovim
---
Instalar con homebrew

    brew install neovim

Actualizar con homebrew

    brew update
    brew upgrade neovim

Ubicación del archivo de configuración

    $HOME/.config/nvim/init.vim

Algunos directorios utilizados por nvim

    $HOME/.config/nvim
    $HOME/.local/share/nvim

Si al hacer

    :echo has('python3')

Retorna 0 falta instalar

    pip3 install neovim

## Diagnostics (LSP)

Los diagnósticos del LSP se renderizan como *virtual text* al final de la línea
y se truncan si no caben en el ancho de la ventana. Para verlos completos:

* `:lua vim.diagnostic.open_float()` — popup flotante con el mensaje entero.
* `:lua vim.diagnostic.setqflist()` + `:copen` — quickfix con todos los diagnósticos.
* `:lua vim.diagnostic.setloclist()` + `:lopen` — location list del buffer actual.
* `:lua =vim.diagnostic.get(0)` — volcado crudo del buffer.

Defaults útiles de Neovim:

* `[d` / `]d` - saltar al diagnóstico previo/siguiente.
* `<C-W>d` - mostrar diagnóstico bajo el cursor (`open_float`).
* `gq` - formatear, separar una linea en varias.
* `J` - unir varias lineas en una sola.

Mapeo propio (en `~/.config/nvim/lua/init.lua`):

```lua
vim.keymap.set("n", "<leader>dq", function()
  vim.diagnostic.setqflist()
end, { desc = "Diagnostics → quickfix" })
```

## Inspeccionar virtual text / extmarks

Para saber qué plugin genera un texto virtual en una línea (índice base 0):

```vim
:lua =vim.inspect(vim.api.nvim_buf_get_extmarks(0, -1, {13,0}, {13,-1}, {details=true}))
:lua =vim.api.nvim_get_namespaces()
```

El `ns_id` del primer comando cruzado con el segundo revela el namespace
(y por tanto el plugin) responsable.

## Troubleshooting

### Neovim 0.12 en macOS 12 Apple Silicon

Jueves 11 junio 2026.

Registro de una actualización. Este procedimiento permite usar una versión
reciente de Neovim sin actualizar macOS ni Xcode. Las fórmulas y requisitos de
Homebrew pueden cambiar, por lo que conviene reintentar primero la instalación
normal.

#### Homebrew no puede compilar una dependencia

Al actualizar de Neovim 0.10.2 a 0.12.3 en macOS 12 (Monterey), Homebrew
intentó compilar varias dependencias porque esta versión de macOS tiene soporte
Tier 3. La instalación falló al compilar `gettext 1.0`:

```text
spit.c:39:10: fatal error: 'json.h' file not found
make: *** [all] Error 2
```

El error ocurrió en una dependencia de la fórmula, no al compilar Neovim.
Como alternativa se utilizó el binario oficial precompilado para macOS arm64:

```bash
version=0.12.3

mkdir -p "$HOME/opt/src" "$HOME/opt/bin"
curl -LO "https://github.com/neovim/neovim/releases/download/v${version}/nvim-macos-arm64.tar.gz"
xattr -c nvim-macos-arm64.tar.gz
tar xzf nvim-macos-arm64.tar.gz
mv nvim-macos-arm64 "$HOME/opt/src/nvim-${version}"
ln -sfn "$HOME/opt/src/nvim-${version}/bin/nvim" "$HOME/opt/bin/nvim"
```

`$HOME/opt/bin` debe aparecer antes que Homebrew en `PATH`. Verificar qué
binario se está ejecutando:

```bash
command -v nvim
nvim --version
```

#### Revisar plugins después de actualizar Neovim

Una actualización mayor de Neovim puede exponer plugins antiguos que todavía
usan APIs eliminadas u obsoletas. En este caso aparecieron los siguientes
problemas.

##### nvim-treesitter

Una versión antigua de `nvim-treesitter` fallaba durante el resaltado:

```text
query_predicates.lua: attempt to call method 'parent' (a nil value)
```

El repositorio fue archivado el 3 de abril de 2026 y su rama principal contiene
una reescritura incompatible con la configuración anterior.

Se eliminó el plugin y su bloque `setup`.

Deshabilitar Tree-sitter puede afectar resaltado, indentación o folds, pero no
deshabilita `gopls`, rename, definiciones, referencias ni diagnósticos LSP.


##### vim-go

Una versión de `vim-go` de 2024 fallaba al abrir archivos Go:

```text
E519: Option not supported: noshellslash
```

El plugin ya había corregido este problema. Fue suficiente actualizarlo:

```vim
:PlugUpdate vim-go
```

##### nvim-lspconfig

La forma `require('lspconfig').gopls.setup()` está obsoleta en Neovim 0.11 o
superior. Después de actualizar `nvim-lspconfig`, `gopls` se habilitó con la
API actual:

```lua
vim.lsp.enable("gopls")
```


##### Telescope

Telescope 0.1.8 funcionaba, pero generaba advertencias por llamadas a APIs LSP
obsoletas:

```text
client.supports_method is deprecated
position_encoding param is required in vim.lsp.util.make_position_params
```

Se actualizó Telescope a 0.2.2 junto con `plenary.nvim`:

```vim
Plug 'nvim-lua/plenary.nvim'
Plug 'nvim-telescope/telescope.nvim', { 'tag': 'v0.2.2' }
```

```vim
:PlugUpdate telescope.nvim plenary.nvim
```

#### Validación

Abrir un archivo Go dentro de un módulo y ejecutar:

```vim
:LspInfo
:checkhealth vim.lsp
:checkhealth telescope
:checkhealth vim.deprecated
```

## Referencias

* [Instalar en centos 6 con script](https://gist.github.com/juanpabloaj/3b2184e951f7f8161fabf8d4cbf89438)
* [Instalar en centos 6 con rpm/spec](https://gist.github.com/juanpabloaj/62cd3f1a5bad97e19e1e1e9bc5dc2672)
* [Neovim 0.12.3](https://github.com/neovim/neovim/releases/tag/v0.12.3)
* [Homebrew Support Tiers](https://docs.brew.sh/Support-Tiers)
* [Migración de nvim-lspconfig](https://github.com/neovim/nvim-lspconfig#migration-instructions)
* [Corrección de `noshellslash` en vim-go](https://github.com/fatih/vim-go/pull/3691)
* [Telescope 0.2.2](https://github.com/nvim-telescope/telescope.nvim/releases/tag/v0.2.2)
* [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter)
* [Configuración utilizada en troubleshooting 0.12 en macOS 12](https://github.com/juanpabloaj/dotfiles/blob/fc651d87d58cee5641a8f94c80fa6b3dd9cb3e38/.config/nvim/init.vim)
* [homebrew-neovim](https://github.com/neovim/homebrew-neovim)
