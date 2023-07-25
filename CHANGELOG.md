# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

-   Create `.atuiKernel_Modal`.
-   Create `.atuiKernel_Slider`.
-   Add `.optionScrollable` for `.atuiKernel_Header` levels.
-   Add `.optionMini` for `.atuiKernel_Notification`.
-   Add `.optionGroup` for Input containers.
-   Implement again `.atuiKernel_Scrolltop`.
-   Set an instable image support in `.atuiKernel_SectionParagraph` titles.
-   Create `.atuiKernel_List` with `<dl>`, `<ul>` and `<ol>` HTML tags.
-   Create JavaScript storage functions to store data between 2 web page visits : `atuiKernel_StorageGet`, `atuiKernel_StorageSet`, `atuiKernel_StorageRemove`.

### Changed

-   Practical JS function `findElement` is renamed to `atuiKernel_ToolsFindElement`.
-   `atuiKernel_ToolsFindElement` returns only arrays.
-   JS function `stopAllMedia()` is renamed to `atuiMediasplayer_StopAllMedia()`.
-   Change `system` Notification key to `type`.
-   Hardly lighten footer's CSS code and remove almost all specific components.
-   `.atuiKernel_Logotype` become a global component, not only for Header.
-   Hardly lighten Licensing and change features.
-   Some light visual changes to `.atuiKernel_PopupGlobalpanel`.
-   Rename `.atuiKernel_SectionList` to `.atuiKernel_Group` due to conflicting names.
-   Completely rewrite SearchService :
    -   All new visual design.
    -   Now really usable for all desires, even out of `.atuiKernel_Header` and without panel, with multiples search instance on the same page.
    -   Implement an efficient filter function named `atuiSearchservice_Filter`.
-   Replace `.optionMobileonly` and `.optionDesktoponly` to `.optionHideOnDesktop` `.optionHideOnTablet` and `.optionHideOnMobile` for `.atuiKernel_Header`.
-   Check the color mode status at startup in localStorage instead of cookies.
-   Rewrite input stylesheet.

### Removed

-   The ability to assign and play media with HTML attributes has been removed due to JSON incompatibility. From now on, you can only do this with JavaScript function calls.
-   Remove all Contacts components. These components have been replaced with common buttons and inputs.
-   Remove all form and fieldset containers' CSS properties for free use.

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
