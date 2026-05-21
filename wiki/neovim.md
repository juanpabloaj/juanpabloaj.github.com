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

* `[d` / `]d` — saltar al diagnóstico previo/siguiente.
* `<C-W>d` — mostrar diagnóstico bajo el cursor (`open_float`).

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

## Referencias

* [Instalar en centos 6 con script](https://gist.github.com/juanpabloaj/3b2184e951f7f8161fabf8d4cbf89438)
* [Instalar en centos 6 con rpm/spec](https://gist.github.com/juanpabloaj/62cd3f1a5bad97e19e1e1e9bc5dc2672)
* https://github.com/neovim/homebrew-neovim
