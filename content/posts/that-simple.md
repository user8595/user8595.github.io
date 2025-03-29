+++
date = '2025-03-28T16:50:28Z'
draft = false
title = 'that simple??'
tags = ["Git", "Hugo"]
+++

while i was migrating this site to papermod from hugo-paper, i noticed a weird problem while github was building my site, failing to do so because of a missing submodule.

this problem, yet with such simple solution (with the help of ai for me), made me waste so much time, from removing the themes folder and even as far as removing the .git folder itself. at last i knew how to pull the repository from github after i did this.

### what's the solution?

what i did is thst i remove the cached git submodule, then remove the theme folder, and cloning the theme as a submodule.

```bash
git rm --cached themes/PaperMod # in site home directory
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive # i didn't do this
```
i spent too much to find the solution for this, yet it was so simple.

but hey, at least the website is now already deployed, so now at least this solution works for me.

i hope this might be helpful.
