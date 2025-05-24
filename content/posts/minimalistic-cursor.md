---
date: 2025-05-03T03:55:57Z
draft: false
title: Minimalistic Cursor - A Cursor Theme
tags: ["Customization"]
cover:
  image: /cursor.png
  caption: "A minimalist cursor i made using Inkscape and RealWorld Cursor Editor, using a simple yet functional design, while still looking aesthetically pleasing to use."
summary: "An old cursor theme i made a year ago."
---

If you just want to download the theme instead of reading everything, you can open this [link here](#where-to-download), or scroll to the very bottom of the page instead.

## Intro

So probably a year ago, i tried to make my own cursor theme solely using a vector editor, which is Inkscape, instead of using Photoshop or simillar because i dont know how to make a simple square in that particular program.

## Process

So i decided to start making the entire thing, all done without a concept or so. The hardest part about the entire cursor is making the hand pointing cursor. I had to look at my hand several times, doing the generic "finger-pointing gesture" in cursors, as a reference while making the entire thing, and usually the result befure i figured out the shape of the hand itself, is that the lower part of the hand is sometimes too small or probably too large. At least this is one of the first ones i made before moving on to the other ones.

Probably the most non-functional design i made is the old "busy cursor" (as shown in the preview). No ones going to focus on a bar that's small as a speck of hair _(this is according to my opinion btw.)_. Instead i opted to do the generic blue color for the busy cursor, with the shape also resembling Windows's (so creative).

Once i finished all of the cursor designs, i converted all of the cursor designs one-by-one as PNGs, then opened them using [RW Cursor Editor](http://www.rw-designer.com/cursor-maker) to convert them into `.cur` files. This process is quite "straight forward", as i just adjusted the cursor hotspots into the center of the image (15,15 or 31,32 maybe, i forgot).

After all is done. i need to do one last thing: the `install.inf` file. I had to find another cursor theme that has this file so that i dont need to write it all myself (i meant as a template). I forgot what cursor theme i used for the installer for the cursor, but what i did is edit only the `[Scheme.cur]` sections with the respeftive file names from the cursors, then rename the files from the `[Strings]` sectipn into also the filenames in the cursor theme either. Also change the name of the cursor pack either, and the directory name for the cursor theme.

Finally, after i finished the cursor theme itself, i made _alot_ of revisions for the cursor theme (light mode, cursor size fixes, etc) that you could see for yourself in this [changelog file](https://github.com/user8595/minimal-cursor/blob/main/changelog.txt) at the GitHub repository.

## Where to download?

You can download this cursor theme from the [GitHub Releases](https://github.com/user8595/minimal-cursor/releases/latest) on this [repository](https://github.com/user8595/minimal-cursor/).

## Closing

I probably put too much documentation about the whole process since this still needs some polishing, such as the busy cursor being almost bright and the messy source code in the GitHub repository. But anyways at least this cursor is still somewhat useable and i might make another one soon.
