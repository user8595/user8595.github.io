---
date: 2025-05-25T03:09:08Z
draft: false
title: Using chdman to reduce .iso filesizes
tags: ["Emulation"]
summary: "How to save several bytes of storage from large games."
ShowToc: true
TocOpen: true
cover:
  image: "/disc.png"
---

# Intro

> NOTE: If you don't want to do everyrhing from this article, consider downloading [namDHC](https://github.com/umageddon/namDHC) if you're using Windows. Otherwise continue reading below.

Having an interest in emulation in general, it's obvious if i need to face with such painfully large files, particularly games from the 6-7th generation consoles. Thia might not be a problem for some people, but it's not bad to save several gigabytes in your storage for other content, especially for mobile users like me or people who have limited storage. Because of this, the only way to shrinken the filesizes is to use tools that let you do so.

For the tools are chdman from the [MAME](https://www.mamedev.org/) emulator to convert the .iso files. and for this tutorial i will use [Termux](https://github.com/termux/termux-app) for the entire tutorial, as now i dont have access to a computer now on. And the source i wil compile is from this [repository here.](https://github.com/charlesthobe/chdman) in this tutorial, which is based on MAME 0.238.

# IMPORTANT NOTE

This article is not encouraging or promoting potentially illegal actiions such as [Piracy](https://en.m.wikipedia.org/wiki/Copyright_infringement) as a whole. Therefore, it is advised to do this only if you have bought the game legally.

# Prerequisites

- build-essential
- git
- cmake
- ninja

Or download MAME [in this page](https://www.mamedev.org/release.html) if you dont want to compile from source.

If you only have access to a mobile phone, then you must compile from source because there are no native builds for MAME in ARM.

# Process

## Install Prerequisites

Before compiling, make sure to download the prerequisites first.

```bash
apt update && apt upgrade -y
apt install build-essential git cmake ninja
```
If you don't want to compile it manully using the below steps or have installed MAME, [go to this link](#convert-iso-to-chd).

## Compile chdman

After installing the prerequisites, clone the [repository here](https://github.com/charlesthobe/chdman), and build using the folowing commands.

```bash
git clone https://github.com/CharlesThobe/chdman.git
cd chdman
cmake -B build -G Ninja
cmake --build build
```

The process might take a while to compile, depending on your device.

Once done, the program will be built in the `./build` directory.

## Move chdman to bin (Termux only)

Move the compiled program to the `./usr/bin` folder, then running chmod so you can use it.

```bash
cp build/chdman ~/../usr/bin/.
chmod +x $PATH/chdman
```

## Convert .iso to .chd

Finally, convert the .iso file to .chd with this command below.

(If you skipped to this link, the `chdman` is in the root of the MAME emulator.)

```bash
chdman createcd -i "GAME-NAME.iso" -o "GAME-NAME.chd"
```

OR on newer versions of MAME and the game is in DVD format:

```bash
chdman createdvd -i "GAME-NAME.iso" -o "GAME-Name.chd" -hs 2048 # untested
```

Where:

- `createcd`: Converts the CD disk file (.iso) into a .chd.
- `createdvd`: Converts the DVD disk file (.iso) into a .chd. (untested now)
- `-i`: The file to convert (input).
- `-o`: The converted result's file name.
- `-hs`: Hunk size for .chd file. (optional)

Replace `"GAME-NAME"` with the name of the game you wish to convert, e.g

```
chdman createcd -i "Auto Modellista (Europe) (En,Fr,De,Es,It).iso" -o "Auto Modellista (Europe) (En,Fr,De,Es,It).chd"
```

(This example is apparently a CD disk game, so `createcd` works on this.)

(On another note, i converted [GT4 Spec II](https://www.theadmiester.co.uk/specii/) using namDHC, so i can't tell if it used `createcd` or `createdvd`.)

The process might take a moment to finish, depending on the size of the game.

## Result

![Convert result](/result.png)

The result of the converted file should be smaller than the original .iso file, usually a ~1-2GB difference, depending on the game itself.

# Conclusion

This tool can be effecive for saving space, especially when storing such files in a device with limited storage. Be wary however though, as for applying ROM hack patches will be impossible according to a source i found off the internet, as the converted file is different from the original. Therefore, patches aren't possible to apply onto the .chd file.
