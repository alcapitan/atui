# ATUI Contribution Rules
First of all, thank you for investing in this project !  
Please read these rules to keep the project in order and save time for developers.

## Using the Issue Tracker
Firstly, you must report any problems or suggestions on the [Issue Tracker](https://github.com/alcapitan/atui/issues).  
More generally, anything related to ATUI development should be posted on GitHub.  
  
- Please, avoid using the Issue Tracker to post your usage issues.  
Prefer to use Overstackflow or any other dev help blog.  
You can also look the cause of the problem in the ATUI source code and temporarily fixing it locally, then posting the problem and your solution on the [Issue Tracker](https://github.com/alcapitan/atui/issues).
- Be serious in your activities about ATUI ; do not troll and do not vandalize the directory. Respect others people, even beginners.
- Do not spam on the Issue Tracker, like "+1" or ":thumbsup:" messages.  
Use [GitHub's reactions](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) instead. We will delete comments which violate this rule.

## Labels on Issues
The severals labels on Issues help us to classify and identify issues. Here's what they represent and how we use them :
- `break` : Modifications can break the code !
- `community` : Let the community resolve the issue with forking and making a pull request.
- `css` : The issue or the solution mainly involves CSS contributors.
- `doc` : It concern the documentation.
- `feat` : Add or remove or modify a feature.
- `fix` : Fix a bug.
- `html` : The issue or the solution mainly involves HTML contributors.
- `improve` : Clear the code or improve the performances.
- `in progress` : An official contributor is resolving it. So, don't work on it !
- `javascript` : The issue or the solution mainly involves JavaScript contributors.
- `meta` - Concern the overall project.
- `php` : The issue or the solution mainly involves PHP contributors.
Be precise in choosing your labels. Do not put too many labels.

## Bug reports
Good bug reports are extremely helpful, so thanks !  
- Make sure your problem is not caused by a simple error in your own code or by an extension.
- Use the GitHub issue search tool to check if the issue has already been reported.
- Check the issue has not already been fixed with an update. 
- Be as relevant and efficient as possible in your reports. A good bug report shouldn't force others to ask you for more information. Use the issue templates to help you be complete.

## Feature requests
Feature requests are welcome !  
Make sure your idea is useful, give as much detail and context as possible.  
The goal is to convince the developers of the project.  

## Pull requests
Contributing code helps us grow faster!  
- Your pull request must be clean and only resolve the issue which it is associated.
- Ask first before make a contribution, otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project.
- Please adhere to the [coding guidelines](#code-guidelines) used throughout the project (indentation, accurate comments, etc...).
- When you add, remove, or modify a feature, you must also update the documentation.
  
When contributing, please follow these steps :
1. Fork the project, and clone your fork into your computer.
2. If you want to update your fork with the work of the original directory.
```
git remote add upstream https://github.com/twbs/bootstrap.git
git checkout {branch}
git pull upstream {branch}
```
3. Please, always respecting coding and Git conventions.
4. Push your work into your fork.
```
git push origin {branch}
```
5. Open a Pull Request with a link to your issue and with a clear title and description.

**IMPORTANT** : By submitting a patch, you agree to allow the project owners to license your work under the licence [GNU General Public Licence](https://github.com/alcapitan/atui/blob/beta/LICENSE.md).

## Code guidelines
### Common
- 5 spaces (no tabs).
- Avoid depreciated elements.
- [Respect the rules of the Code Guide. ](https://codeguide.co/)
### HTML
- Use tags and elements of HTML5.
- Use existing elements (such as buttons, cards, or context menus) when it is possible.
### CSS
- Use tags and elements of CSS3.
- Use existing elements (such as variables, common properties) when it is possible.
### JS
- Use HTTPS protocol to open ATUI on your computer (if you use VS Code, you can use the extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) because `file://` format can break JavaScript (such as modules).
