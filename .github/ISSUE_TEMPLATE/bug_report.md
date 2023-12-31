---
name: Bug report
about: Create a report to fix a bug.
title: ""
labels: fix
assignees: alcapitan
---

  - type: checkboxes
    attributes:
      label: Prerequisites
      description: Take a couple minutes to help our maintainers work faster.
      options:
        - label: I have [searched](https://github.com/alcapitan/atui/issues?q=is%3Aissue) for duplicate or closed features requests.
          required: true
        - label: I checked my HTML to avoid common problems such as HTML classes typing mistakes, CSS overwriting, and issues that are caused by ATUI.
          required: true
        - label: I have read the [contributing guidelines](https://github.com/alcapitan/atui/blob/dev/CONTRIBUTING.md)
          required: true
   - type: textarea
   id: what-happened
   attributes:
      label: Describe the issue
      description: Tell us the issue with as many details as possible, and explain how to reproduce the unexpected behavior. Moreover, adding screenshots is also very useful !
   validations:
      required: true
