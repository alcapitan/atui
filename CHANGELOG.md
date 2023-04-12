# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
-   Textarea dimension style avoid HTML attributes working.
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
