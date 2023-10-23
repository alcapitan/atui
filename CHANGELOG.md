# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0-beta] - 2023-09-26

### Added

-   Create `.vkModal`.
-   Create `.vkSlider`.
-   Add `.styleScrollable` for `.vkHeader` levels.
-   Add `.styleMini` for `.vkNotification`.
-   Add `.styleGroup` for Input containers.
-   Implement again `.vkScrolltop`.
-   Set an instable image support in `.vkParagraph` titles.
-   Create `.vkList` with `<dl>`, `<ul>` and `<ol>` HTML tags.
-   Create JavaScript storage functions to store data between 2 web page visits : `vkStorageGet`, `vkStorageSet`, `vkStorageRemove`.
-   Support RTL languages (Right-To-Left direction languages such as Arabic or Hebrew).

### Changed

-   About `vkClosest` :
    -   Practical JS function `findElement` has been renamed to `vkClosest`.
    -   It returns only arrays now.
    -   Warning ! This function is now deprecated, it will be replaced by native javascript function `closest()`.
-   JS function `stopAllMedia()` is renamed to `mpStop()`.
-   Change `system` Notification key to `type`, and `option` key to `style` for Notification's buttons.
-   Hardly lighten footer's CSS code and remove almost all specific components.
-   `.vkLogotype` become a global component, not only for Header.
-   Hardly lighten Licensing and change features.
-   Lighten HTML structure with some light visual changes to `.vkPopupGlobalpanel`.
-   Rename `.vkList` to `.vkGroup` due to conflicting names with the new list component.
-   Completely rewrite SearchService :
    -   All new visual design.
    -   Now really usable for all desires, even out of `.vkHeader` and without panel, with multiples search instance on the same page.
    -   Implement an efficient filter function named `ssFilter`.
    -   Set up submit action for `.vkInputSubmit`, add as replacement `.ssTrigger` for `.vkHeader .ssBar`.
-   Replace `.optionMobileonly` and `.optionDesktoponly` with `.optionHideOnDesktop` `.optionHideOnTablet` and `.optionHideOnPhone` for `.vkHeader`.
-   Add the ability to use `.vkCarousel` in `.vkStructureBodyContent` in addition to next to `.vkHeader`.
-   Add controls arrows to `.vkCarousel` in addition to sliding on a touchscreen.
-   Add danger, warning, success, and info color themes to `.vkButton`.
-   The color theme status cookie is checked before the system preferences at startup, plus its lifetime has been set to 2 hours for better startup color theme choice.
-   Rewrite input stylesheet.
-   Rewrite Squarelink :
    -   Change HTML structure.
    -   More flexible visual possibilities.
    -   Add `.styleFilled` and `.styleNavigator` (to transpose former interface).
-   Rewrite `.vkCard` :
    -   Almost rationalize the operation of Cards.
    -   Hardly lighten HTML and CSS code of Cards.
    -   Remove container feat.
    -   Remove `.vkCard.optionStandard` and `.vkCard.optionContrast`.
    -   New operation largely inspired by Bootstrap.
    -   Largely rebuilt overlay style.
    -   Add `.vkCardHighlight`.
-   Use unpkg instead of jsdelivr for CDN content (like icons, and ATUI itself) to avoid domain blockage in Egypt and China.
-   Remove `!important` from CSS code and use `@layer` for better inheritance management with minor visual changes.
-   Set up a better responsive that better integrates tablets.
-   Port CSS code to SCSS :
    -   SASS feats are used in a limited part of the code (boxes, buttons and colors for now).
    -   Create `color` function, `iconSize` mixin and `iconSelector` global variable.
-   Change all variables, component classes and option classes structure ! You need to update classes in your projects to restore ATUI's operation.
-   Change `vkStructureBody` and `vkStructureSection` from id to class.
-   Replace `.vkBox.styleAlert` to `.vkBox.styleDanger`.
-   Improve MediasPlayer stability and flexibility :
    -   Update options for `mpAssign`. Audio and video have the same options now.
    -   Merge music title and author.
    -   Change some media info classes.
    -   Create `.mpHeader`, mostly for VideoPlayer title.
    -   Improve a lot the stability of `mpAssign` with resolution in every case.

### Fixed

-   Webpage's min-height follows now the dynamic height of the viewport to prevent issues on floating panels in phones' web browsers.
-   Fix an alignment bug in `.vkGrid`.

### Removed

-   The ability to assign and play media with HTML attributes has been removed due to JSON incompatibility. From now on, you can only do this with JavaScript function calls.
-   Remove all Contacts components. These components have been replaced with common buttons and inputs.
-   Remove all form and fieldset containers' CSS properties for free use.
-   Remove useless and orphan pictures in `patch/illustrations` for lighting package size.
-   Removing licensing header in source code files.

## [0.4.3] - 2023-09-25

### Fixed

-   Fix Netlify deployment fatal errors discovered pushing v0.4.2.

## [0.4.2] - 2023-07-30

### Added

-   Let nightly CSS/JS links in the README to get ATUI from the latest commit in the github repository.
-   Create `.atuiKernel_Header > div.optionLevelLink` to substitute icons size patch in Header.

### Changed

-   Rewrite NPM scripts and dependencies' configuration files :
    -   Speed up the check process from 60s to 45s and the build process from 30s to 13s thanks to some optimizations and parallel executions.
    -   More flexible, simple and rich NPM scripts with better code coverage ; plus every dependencies are now used.
    -   Source maps now entirely works.
    -   Remove partial dist files.
    -   Deploy ATUI on Netlify for each tag push.
-   Remove underline for `.atuiKernel_Header a`.
-   Move some CSS styles of HTML `<h*>` to global.
-   Remove the gray background color of the HTML `<input>` tags and lighten borders.

### Fixed

-   Set a lighter color for `.atuiKernel_Header.optionAccent`.
-   Remove outline for `input[type="submit"].atuiKernel_Button`.

## [0.4.1] - 2023-06-20

### Changed

-   Replace imports on CSS dist files by imported files content.
-   Set max-width for Cards' images

### Fixed

-   Scroll-behavior was not smooth.
-   Remove comments in CSS dist files except unique licensing comment.
-   Prevent default `<form>` submission in SearchServices.
-   Remove color dimming in dark mode.
-   Remove the underlining of compact contact icons when the mouse hovers over them.
-   Center text in Carousel slide content.
-   Polish Cards' margin and padding.

### Removed

-   Delete about page.

## [0.4.0] - 2023-05-27

### Added

-   Create SectionList element.
-   Create Spinner element.
-   Add quote for Paragraph.
-   Create practical JS functions :
    -   Clipboard API.
    -   Share API.
    -   Verify link if it responds with 200.
-   Some style refinements :
    -   Add font monospace CSS variable.
    -   Set up scrollbar styling with both Firefox and Webkit syntax.
    -   Set up font-size guidelines.
-   Set up rich links on the HTML `<head>` tag.
-   Display an error for broken media links in Mediaplayer.

### Changed

-   Completely rewrite Notification element :
    -   Easier to use, more flexible, and more stable.
    -   Support system notifications.
    -   Check notification permission.
    -   Allow custom sound.
-   Completely rewrite Display Mode script :
    -   Check the system status at startup, then in cookies.
    -   Icon color adapts to the display mode.
-   Completely rewrite color CSS variables management :
    -   Include danger, warning, success, and info.
    -   Manage CSS variables entirely without JavaScript.
    -   Use less bright colors for dark mode.
-   Set up NPM :
    -   Reorganize file architecture.
    -   Fix JS bugs raise by 'use strict' mode.
    -   Replace legacy icons with Tabler icons.
    -   Lint, format, verify, and minify HTML, CSS and JS files.
    -   Check code when committing.
    -   Make ATUI available as a NPM package.
-   Completely rewrite popup script :
    -   More flexible and easier to use (HTML structure, JS call function, content possibilities).
    -   Completely rewrite ToolsInfotip and rename it to PopupTooltip.
    -   Completely rewrite Contextmenu, move and rename it from Tools to Popup.
    -   Move Global Panel from Navigation to Popup.
-   Completely rewrite Header :
    -   Add separators.
    -   Add option styles.
    -   Create proper levels.
    -   Easier to use, more flexible, and more stable.
-   Completely rewrite Carousel :
    -   More flexible.
    -   Support multiple slides.
-   Completely rewrite Buttons :
    -   Improve animations on hover and active states.
    -   Add pill, tinted, grouped options for Button.
    -   Buttons can be based on any HTML tag.
-   Some style refinements :
    -   Add pill option style for HTML inputs.
    -   Set a light gray background color for HTML inputs.
    -   Change the default CSS style for `<a>` tags.
    -   Set a light accent color to Pagination Text.
    -   Make light style refinements for the search panel.
    -   Set a gradient color for the section content split bar.
-   Improve shadows :
    -   Diversify styles.
    -   Adapt shadows to dark mode.
-   Replace id with class for tools in Footer.
-   Rename SectionText to SectionParagraph.
-   Rewrite the HTML structure of Accordion.
-   Replace HTML links with Markdown links.

### Fixed

-   Fix text wrapping due to icons in Boxes.
-   Improve color contrast on Card Overlay.

### Removed

-   Remove Scrolltop (will be replaced later).

## [0.3.2] - 2023-04-20

### Added

-   Add fixed option for Header.

### Changed

-   Decrease font size of version in about page.
-   Better size management of Card.
-   Set Navigation bar sticky instead of fixed.

### Fixed

-   Texts in Box were unreadable on dark mode.
-   There was a margin on bottom of Footer when there was no navbar.
-   There was a margin inconsistency on bottom bar of the header.
-   The textarea dimension style was preventing the HTML dimension attributes from working.
-   Better margin for elements in Text.

## [0.3.1] - 2023-03-16

### Changed

-   Rename badge on README for number of opened issues in the related milestone.
-   Rewrite JS code of accordion.
-   Set up font-size guidelines.
-   All title tags are stylized in SectionText.

### Fixed

-   Fix badge on README for latest version.
-   Update installation instructions in README.
-   If the body is shorter than the screen, the footer will be at the bottom of the screen anyway.
-   Fix missing split bar for section management.
-   Fix margin exceptions mistake for first and last child when there is only one child.

## [0.3.0] - 2023-02-15

### Added

-   Customize fonts and accent color.
-   Add atuiMediasplayer_Metadata in kernel and extensions JS file.
-   Add footer info which display ATUI version used and latest modification date.
-   New contact tools.
-   Add "About ATUI" page.
-   Add button style.
-   Add JavaScript accent color algorithm.
-   Add contribution files.
-   The browser header color on smartphone follow the accent color.
-   Add input style.
-   Add infotip.
-   Add tab.
-   Add accordion.
-   Add box.
-   Create section and body containers management.
-   Add table.
-   Add breadcrumb.
-   Add pagination.
-   Add grid.
-   Add squarelink.
-   Add some navigation bars.
-   Introduce option styles.
-   Add overlay style for videoplayer.
-   Add findElement practical function.

### Changed

-   Optimizes height carousel according to height screen.
-   Change contacts icons.
-   Rewrite the README.
-   Rename atuiKernel_ToolsSelector to atuiKernel_ToolsContextmenu.
-   Rename MediasPlayer to Mediasplayer and SearchService to Searchservice.
-   Atomization of CSS files.
-   Rewrite completely audioplayer.
-   Display of search panel optimized for smartphones.
-   Clean cards code.
-   Stabilize JavaScript.
-   Translate all texts from French to English.
-   Enhance atuiKernel_SectionDownload feats.
-   Rewrite cards.
-   Enhance footer feats.
-   Merges globalpanel and contextmenu scripts.
-   Add width and height attributes to `<img>` tags.
-   Format code with Prettier.
-   Rename navigator to navigation.
-   Card fill screen width.
-   Add licensing banner to CSS and JS files.
-   Replace id by class.
-   Verify spelling mistakes with CSpell.

### Removed

-   Remove some useless navigators.
-   Remove blur effect on contextmenu and globalpanel.
-   Switch native fonts to default according to browser.
-   Remove footer option styles.
-   Delete licensed files.
-   Remove ServerExchanges.
-   Remove PHP experimental code.
