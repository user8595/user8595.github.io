---
date: 2025-03-24T16:42:44Z
draft: false
title: LSPs not working solution in Termux
tags: ["Termux", "LSP"]
---

While i was configure nvim via termux, specifically it's lsp servers, it will always give an error that the lsp is not installed (Error code 2(?)), even though it's properly configured already. the same issue with distributions like NvChad, and (probably) LazyVim. This bug also happens on Helix either, which gives a sign that this is a problem to Android's side.

And so i did a quick Google search about the problem and quickly found a [closed GitHub issue](https://github.com/termux/termux-packages/issues/19342) at the Termux repository and it also [linked another issue](https://github.com/termux/termux-exec-package/pull/24#issuecomment-1873059748) at the comments, which included the solution for the problem (and it's on the comments.)

If you want just the .zip file, here's the link for it:

[**termux-exec.zip**](https://github.com/termux/termux-exec/files/13802391/termux-exec.zip)

### How to install?

Unpack the .zip file, then copy the termux-exec with the right architecture as your phone's to termux's home directory (not necessarily)

```bash
cp termux-exec_2.0.0_aarch64.deb ~ # change 'aarch64' into yout phone's architecture
```

Then, run dpkg to install the package:

```bash
dpkg -i termux-exec_2.0.0_aarch64.deb
```

Now run any text editor, and your lsp servers should work at this point.

I dont know what the package fixes, but at least this solution works.

This bug seems to only happens to phones with Android 14+ apparently.
