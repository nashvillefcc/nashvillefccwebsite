## This Read Me file updated on 4-25-2020 by Joy Ittycheriah

## Location of Tickets and Project Status

Please use the Issues tab on GitHub to request features or report bugs.  The Projects tab contains the current status of the code changes and updates to this project.

Overall Project Status:  Ongoing Website Development in Progress
Current Project Phase:  Phase 2--Mockup, Research and Design Approval

## Milestones

1.  Laura Pinell, Tyler Carpenter and Joy Ittycheriah met to discuss the project.
2.  Laura Pinell put together a hand-drawn wireframe for this project.
3.  Reid Fuhrman got the intial splash page to morph into a menu page.
4.  James McClarty set-up a Mock API that will show data when you click on the Events menu option.
5.  John Hellrung created a more detailed, digital wireframe in Figma that will be used to create a full Mockup. (4/22/2020)

## How to Contribute Code on this Project

First of all, thank-you for wanting to contribute!  For those who have volunteered to work with me on this project, please create a directory on your hard drive and then clone down the project.  Make sure to create a feature branch to work on (don't work on the Master copy please!). My feature branch names will be like this:  joy0227addimage (the 0227 is the date that I initiated that code).  Please name your branches in a similar pattern so that I can tell whose code, when it was generated and what feature you worked on when we are looking at your pull requests.  If you aren't familiar with git or don't know what I'm talking about, I will be happy to get with you to explain how to make this work.

Sincerely,

Joy Ittycheriah

## Coding Guidelines/Remarks

1.  Anyone can contribute to this Freecodecamp website but you must first get permission from a Project Director or Project Manager.  When approved, you will be added to a NashvilleFCC2020WebDevs Team that has been put together to develop and maintain the site.

2.  To request features/report bugs/better the UI/UX use the issues tab on GitHub to add a new issue.

3.  One review is Required on pull requests to be merged to master.  Currently, the only people allowed to dismiss pull requests/merge to master are: Laura Pinell, John Hellrung or Joy Ittycheriah.  To minimize merge conflicts, please inform the team in the Discord Channel set-up for this project (#2020-fcc-nashville-website) when you/we have a new Master.  In addition, please inform the team on this Discord channel when you have a pull request waiting as well.  To access the correct Discord Server, use:  https://discord.gg/gugduRM

4.  Some tickets have been completed.  More tickets are forthcoming.  If you select a ticket from the To Do column, please click the right upper corner of the card/note, choose <edit note> and add your name as the person working on the ticket and click save.  Then move the card/note to the In Progress column by dragging the card/note.  In addition, you can assign yourself to any item in the Backlog column by clicking on the link, scrolling down to Assignees and adding your name.  Thanks!

5.  The backlog column may contain items that may be too large to finish as a single ticket item.  Therefore, it is HIGHLY recommended that you initiate multiple tickets for any single item in the backlog column.  When ALL tickets related to the Backlog item in question have been completed, then the item in the Backlog column can be moved directly to the completed column as well.  This, of course, means that no items from backlog column should be moved to the Completed column without making sure that all sub-items related to it have been completed first.

6.  Please add comments (within your codebase) on each section of code BEFORE you pull request it so that a reviewer can do a better job of reviewing/understanding your code and approving it.  The word "section" in the previous sentence is subjective.  In addition, add in-line comments within your code when possible to explain hard-to-understand concepts or anything that may confuse a future code reviewer/maintainer.

7.  Fix merge conflicts LOCALLY before you push up a branch and place a pull request on the branch.  If you have fixed merge conflicts or have other related comments on the pull request, please enter detailed comments on it when requesting the pull request on the branch.  Of course, if you have merge conflicts you were not expecting or don't know which version to keep/throw away, it is best to resolve that through communication on our Discord channel before you commit and push up a branch.

Just as importantly, make sure that you have merged the most up-to-date master branch into your branch and checked for conflicts before you push up a branch.

By fixing merge conflicts LOCALLY (see above), I mean that:

A.  Add and Commit your existing branch.
B.  Checkout to the Master branch locally.
C.  Pull down the latest Master.
D.  Checkout to your branch.
E.  Type "git merge master"
F.  Type code . to review any potential merge conflicts. (Assuming you are using VS Code as your Interactive Development Environment)

## Contributors to this project

If you are contributor to this project and don't see your name below, please add it and update the readme information on the very first line of this Read Me.

Laura Pinnell [GitHub:  https://github.com/lapinell]  Current Role:  Project Director\
Joy Ittycheriah [GitHub:  https://github.com/bestyoucanbe]  Current Role:  Project Manager\
John Hellrung [https://github.com/Hellrungj]  Current Role:  Assistant Project Manager\
Ellen Bailey [GitHub:  https://github.com/lnbailey]  Current Role:  Chief Designer/Assistant Project Manager\
Tyler Carpenter [GitHub:  https://github.com/TylerCarpenter92]\
Christian Black [GitHub: https://github.com/blackcl3]\
James McClarty [Github: https://github.com/JamesMcClarty]\
Reid Fuhrman [GitHub: https://github.com/rjfuhrman42]

## Code/Frameworks/Libraries Used in this project

1.  The project was initiated with the Create React App command (https://github.com/facebook/create-react-app).
2.  Then installed a package using the following command on the command line:  npm install --save react-render-html.

----------------------------------------------------------------------------------------------------

## Information Related to using the React framework

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

----------------------------------------------------------------------------------------------------
