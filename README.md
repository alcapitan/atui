<p align="center"><img src="atui/kernel/assets/logo.png" alt="Logo ATUI" width="170" height="170"></p>
<h3 align="center">ATUI (Alex Tech User Interface)</h3>
<p align="center"><i>Front-end library to build your website easier.</i></p>

![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/alcapitan/atui?include_prereleases&label=latest%20release)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/alcapitan/atui?label=jsDelivr%20hits)
![npm](https://img.shields.io/npm/dm/@alcapitan/atui?label=NPM%20downloads)
![GitHub milestone](https://img.shields.io/github/milestones/progress/alcapitan/atui/5?label=issues%20in%20milestone)
![GitHub contributors](https://img.shields.io/github/contributors/alcapitan/atui?label=GitHub%20contributors)

## This library is still under development !

Currently, there is only beta versions which you can use, but keep in mind this is still in development !  
Anyway, you can already contribute to the project and give your opinions to help me in the work !

## Download and use ATUI

For all these links, duplicate these 2 import lines and replace `kernel` by the name of the extension you want to use :

-   `MediasPlayer` if you need audio and video players.
-   `SearchServices` if you need search components such as bar, panel and filter.

### By NPM package (recommended)

Install the NPM package :

```bash
npm install @alcapitan/atui
```

Then, import ATUI in your project using the way you want :

```
# Links with node_modules
node_modules/@alcapitan/atui/atui/kernel/dist/dist.css
node_modules/@alcapitan/atui/atui/kernel/dist/dist.js
# Imports in JavaScript
import '@alcapitan/atui/atui/kernel/dist/main.css'
import '@alcapitan/atui/atui/kernel/dist/main.js'
```

### By CDN (for those who don't want to use NPM)

Directly import ATUI in your project :

```
https://unpkg.com/@alcapitan/atui@0.5.0-beta/atui/kernel/dist/dist.css
https://unpkg.com/@alcapitan/atui@0.5.0-beta/atui/kernel/dist/dist.js
```

However, we warn you that using unpkg is quite slow in comparison of NPM install.

### Nightly channel (only for hard developers !)

To get ATUI from the latest commit in the github repo :

```
https://cdn.jsdelivr.net/gh/alcapitan/atui@dev/atui/kernel/dist/main.css
https://cdn.jsdelivr.net/gh/alcapitan/atui@dev/atui/kernel/dist/main.js
```

**Warning : `jsdelivr.net` is blocked in Egypt and China, so these links cannot be used. Consequently, we advise you to use a VPN in the absence of a practical way to get content from Github repository in real time.**

## Contributing

ATUI is an open-source project that invites collaboration.  
You can help in the development of the project even without coding ! So you can test ATUI, report bugs, give your opinions and ideas for improvement, and more...  
Before contributing, please read [CONTRIBUTING.md](https://alcapitan.github.io/atui/CONTRIBUTING.md).
All your reports must be done in [Issues on GitHub](https://github.com/alcapitan/atui/issues). The roadmap is also in the Issues page.

Besides, you will have to preview ATUI on your computer, you must preview ATUI in HTTP mode using an VScode extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). This is because some JavaScript functionalities of ATUI cannot work in local file mode.  
By the way, as ATUI use NPM, you will have to install and update NPM dependencies regularly (about once a week).

## What is this project in a nutshell ?

### The goals of ATUI

-   To be as understandable and simple to use as possible for beginners.
-   To provide useful tools to make websites faster to avoid wasting time on tedious things

### Tree structure explanation

-   In the `/atui` folder, you will find the source code of ATUI in the `kernel` folder. As well as the officials extensions in the others folders.

## Extensions

One of ATUI's fun features is extensions. Extensions are additional features, coded to work on ATUI, to give you more possibilities.  
Anyone can create an extension, but you have to respect extension coding standards, and not break the sites that will use them.

### Official extensions

-   MediasPlayer : Contains all necessary tools to play music or video.
-   SearchServices : Contains all the necessary tools to search anything by sending a query to a server.

## License & Use of external service

This project is released under [GNU General Public License](https://alcapitan.github.io/atui/LICENSE.md).

### Thanks to some services which I use

-   Know the compatibility of web browsers about something : [Caniuse](https://caniuse.com).
-   Icons : [Tabler Icons](https://tabler-icons.io/).
-   Documentations : [MDN Web Docs](https://developer.mozilla.org) & [W3Schools](https://www.w3schools.com).
-   Illustrations : [Pexels](https://pexels.com).
-   Performance measurement and advices for improvement : [Google Insights](https://developers.google.com/speed/pagespeed/insights).
-   Checking HTML code : [W3C Markup Validation Service](https://validator.w3.org).
-   Checking CSS code : [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator).
-   As well as other notable websites, NPM dependencies and even some Instagram accounts...
