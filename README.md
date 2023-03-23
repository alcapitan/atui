<p align="center"><img src="atui/kernel/medias/logo.png" alt="Logo ATUI" width="170" height="170"></p>
<h3 align="center">ATUI (Alex Tech User Interface)</h3>
<p align="center"><i>Front-end library to build your website easier.</i></p>

![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/alcapitan/atui?include_prereleases&label=latest%20release)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/alcapitan/atui?label=jsdelivr%20hits)
![GitHub issues](https://img.shields.io/github/issues-raw/alcapitan/atui)
![GitHub milestone](https://img.shields.io/github/milestones/progress/alcapitan/atui/4?label=issues%20in%20milestone)
![GitHub repo size](https://img.shields.io/github/repo-size/alcapitan/atui)

## This library is still under development !

Currently, there is beta versions which you can use, but keep in mind it's still in development !  
Anyway, you can already contribute to the project and give your opinions !

## Download and use ATUI (with Git)

Don't worry, in version 0.4.0 distribution methods will be easy.  
You should display your website with an VScode extension like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### With CDN (for users)

Put this line to your HTML `<head>` :  
`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/alcapitan/atui/atui/kernel/main.css" />`

Put this line at the end of `<body>` in your HTML :  
`<script src="https://cdn.jsdelivr.net/gh/alcapitan/atui/atui/kernel/main.js"></script>`
Then, change the links above for reach extensions files.

### With release package (for users)

[Download the latest release.](https://github.com/alcapitan/atui/releases)  
After downloading ATUI, copy the `/atui` folder and paste it into your website root.

### With git (for developers)

`git clone https://github.com/alcapitan/atui.git`

## Contributing

ATUI is an open-source project that invites collaboration.  
You can help in the development of the project even without coding ! So you can test ATUI, report bugs, give your opinions and ideas for improvement, and more...  
Before contributing, please read [CONTRIBUTING.md](https://alcapitan.github.io/atui/CONTRIBUTING.md).
All your reports must be done in [Issues on GitHub](https://github.com/alcapitan/atui/issues). The road map is also in the Issues page.

## What is this project in a nutshell ?

### The goals of ATUI

-   to have optimal performance (thinking for those with old devices and low internet speeds)
-   to be simple to understand and use
-   to be always reliable
-   to have an active development
-   support stable versions for a long time (some years)

### Tree structure explanation

-   The root `/` contains HTML files and some config and meta files.
-   The folder `/atui` contains `kernel` (ATUI core files) and some [extensions](#extensions).
-   The folder `/patch` contains your files like CSS, JS, icons, illustrations, and so on.
-   The folders `*/medias` contains all files about someone except CSS and JS files.
-   The files `*/sources.txt` contains all links to the icons and other medias.
-   The folder `/.github` is the stuff created by GitHub to store issue templates for example.

## Extensions

One of ATUI's fun features is extensions. Extensions are additional features, coded to work on ATUI, to give you more possibilities.  
Anyone can create an extension, but you have to respect extension coding standards, and not break the sites that will use them.

### Official extensions

-   MediasPlayer : Contains all necessary tools to play music or video.
-   SearchServices : Contains all the necessary tools to search anything by sending a query to a server.

## License & Use of external service

Project released under [GNU General Public License](https://alcapitan.github.io/atui/LICENSE.md).

### Softwares

-   Code editor : [Visual Studio Code](https://code.visualstudio.com).
-   Version control : [Git](https://git-scm.com).

### Websites

-   Know the compatibility of web browsers about different things : [Caniuse](https://caniuse.com).
-   Icons : [Icons8](https://icons8.com).
-   Illustrations : [Pexels](https://pexels.com).
-   Performance measurement and advices for improvement : [Google Insights](https://developers.google.com/speed/pagespeed/insights).
-   Checking HTML code : [W3C Markup Validation Service](https://validator.w3.org).
-   Checking CSS code : [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator).
-   And a lot of more...
