+++
date = '2025-03-24T16:42:44Z'
draft = false
title = 'a solution to lsps not working in termux'
tags = ["Termux", "LSP"]
+++
while i was configure nvim via termux, specifically it's lsp servers, it will always give an error that the lsp is not installed (error code 2(?)), even though it's properly configured already. the same issue with distributions like nvchad, and (probably) lazyvim. this bug also happens on helix either, which gives a sign that this is a problem to android's side.

and so i did a quick google search about the problem and quickly found a closed github issue at the termux repository ([link](https://github.com/termux/termux-packages/issues/19342)) and it also linked another issue at the comments, which included the solution for the problem (on the comments.) [link](https://github.com/termux/termux-exec-package/pull/24#issuecomment-1873059748)

if you want just the .zip file, here's the link for it:

[**link**](https://github.com/termux/termux-exec/files/13802391/termux-exec.zip)

### how to install?

unpack the .zip file, then copy the termux-exec with the right architecture as your phone's to termux's home directory (not necessarily)

``` bash
cp termux-exec_2.0.0_aarch64.deb ~ # change 'aarch64' into yout phone's architecture
```
then, run dpkg to install the package:

``` bash
dpkg -i termux-exec_2.0.0_aarch64.deb
```
now run any text editor, and your lsp servers should work at this point.

i dont know what the package fixes, but at least this solution works.

this bug seems to only happens to phones with android 14 and above apparently.
