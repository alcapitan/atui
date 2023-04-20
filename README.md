<p align="center"><img src="atui/kernel/medias/logo.png" alt="Logo ATUI" width="170" height="170"></p>
<h3 align="center">ATUI (Alex Tech User Interface)</h3>
<p align="center"><i>Front-end library to build your website easier.</i></p>

![GitHub tag (latest SemVer pre-release)](https://img.shields.io/github/v/tag/alcapitan/atui?include_prereleases&label=latest%20release)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/alcapitan/atui?label=jsdelivr%20hits)
![GitHub issues](https://img.shields.io/github/issues-raw/alcapitan/atui)
![GitHub milestone](https://img.shields.io/github/milestones/progress/alcapitan/atui/2?label=issues%20in%20milestone)
![GitHub repo size](https://img.shields.io/github/repo-size/alcapitan/atui)

## This version is now unsupported !

Attention, version 0.3 is now end of life. Its last version is v0.3.2.  
From now on, there will be no more patches for this version.  
It is strongly advised to update ATUI to a supported version.  

## This library is still under development !

Currently, there is beta versions which you can use, but keep in mind it's still in development !  
Anyway, you can already contribute to the project and give your opinions !

## Download and use ATUI (with Git)

Don't worry, in version 0.4.0 distribution methods will be easy.  
You should display your website with an VScode extension like <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a>.

### With CDN (for users)

Put this line to your HTML `<head>` :  
`<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/alcapitan/atui@0.3/atui/kernel/main.css" />`

Put this line at the end of `<body>` in your HTML :  
`<script src="https://cdn.jsdelivr.net/gh/alcapitan/atui@0.3/atui/kernel/main.js"></script>`

Then, change the links above for reach extensions files.

### With release package (for users)

<a href="https://github.com/alcapitan/atui/releases/tag/v0.3.2">Download the ZIP file.</a>  
After downloading the ZIP file, extract it, then copy the `/atui` folder and paste it into your website root.

### With git (for developers)

```
git clone https://github.com/alcapitan/atui.git
git checkout v0.3-support
```

## Contributing

ATUI is an open-source project that invites collaboration.  
You can help in the development of the project even without coding ! So you can test ATUI, report bugs, give your opinions and ideas for improvement, and more...  
Before contributing, please read <a href="https://alcapitan.github.io/atui/CONTRIBUTING.md">CONTRIBUTING.md</a>.
All your reports must be done in <a href="https://github.com/alcapitan/atui/issues">Issues on GitHub</a>. The road map is also in the Issues page.

## What is this project in a nutshell ?

### The goals of ATUI

-   to have optimal performance (thinking for those with old devices and low internet speeds)
-   to be simple to understand and use
-   to be always reliable
-   to have an active development
-   support stable versions for a long time (some years)

### Tree structure explanation

-   The root `/` contains HTML files and some config and meta files.
-   The folder `/atui` contains `kernel` (ATUI core files) and some <a href="#extensions">extensions</a>.
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

Project released under <a href="https://alcapitan.github.io/atui/LICENSE.md">GNU General Public License</a>.

### Softwares

-   Code editor : <a href="https://code.visualstudio.com/">Visual Studio Code</a>.
-   Version control : <a href="https://git-scm.com/">Git</a>

### Websites

-   Know the compatibility of web browsers about different things : <a href="https://caniuse.com">Caniuse</a>.
-   Icons : <a href="https://icons8.com/">Icons8</a>.
-   Illustrations : <a href="https://www.pexels.com">Pexels</a>.
-   Performance measurement and advices for improvement : <a href="https://developers.google.com/speed/pagespeed/insights">Google Insights</a>.
-   Checking HTML code : <a href="https://validator.w3.org/">W3C Markup Validation Service</a>.
-   Checking CSS code : <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation Service</a>.
-   And a lot of more...
