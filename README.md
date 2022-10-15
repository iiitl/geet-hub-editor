### Audio Editing tool made for [Geet-Hub](https://www.github.com/PrerakMathur20/geet-hub-frontend)

Visit here : [SunGeet](https://sungeet.netlify.com)

# Setup

This is a complete guide on how you can setup this project locally on your device


# Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
*  Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.

* Node.js - [ Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this GitHub Gist to install Node.js.




# Getting Started 

These are a set of instructions to follow for you to setup the project locally and run it.


# Step 1: Fork the project repository

Fork the repository to you GitHub


# Step 2: Clone your fork

While still in your repository, click on the code drop down menu. Now you can either download the zip file and extract it on your local system or copy the https url and use the command git clone <https url> to clone it to a local directory/folder. 

```bash
git clone https://github.com/<YOUR USERNAME>/geet-hub-editor.git
```

# Step 3: Navigate to your local folder

Since the clone was downloaded into a subdirectory of your working directory, you can navigate to it using: cd NAME_OF_REPOSITORY.

For example,

```bash
cd geet-hub-editor
```

# step 4 : Install NPM packages

Before running npm you should have node Js installed on you system [node install instructions](https://nodejs.org/en/download/package-manager/)

```bash
npm install
```

# Step 5: Usage

```bash
npm start
```

# Step 6: Create a new branch

Rather than making changes to the project's "main" branch, it's a good practice to instead create your own branch. This creates an environment for your work that is isolated from the master branch.

Use git checkout -b BRANCH_NAME to create a new branch and then immediately switch to it. The name of the branch should briefly describe what you are working on, and should not contain any spaces.

For example,

```bash
git checkout -b branch_name
```

Use git branch to show your local branches. You should see your new branch as well as "main", and your new branch should have an asterisk next to it to indicate that it's "checked out" (meaning that you're working in it).

```bash
git branch
```

# Step 5: Make changes in your local repository

Use a text editor or IDE to make the changes you planned to the files in your local repository. Because you checked out a branch in the previous step, any edits you make will only affect that branch.

# Step 6: Git Add and Commit your changes

After you make a set of changes, use `git add -A` or `git add .` (to stage all your changes) or `git add <fileName>` (to stage the change made in a specific file) and  `git commit -m "DESCRIPTION OF CHANGES"` to commit them.

For example, `commit -m "Instructions on setting up project locally"` for one of my commits.

 ```bash
git add . (To stages all your changes)
                         OR
git add <fileName> (To stage the changes made in a specific file) 

git commit -m"<Description of changes>"
```

If you are making multiple sets of changes, it's a good practice to make a commit after each set.

# Step 7: Push your changes to your fork

When you are done making all of your changes, upload these changes to your fork using git push origin BRANCH_NAME. This "pushes" your changes to the "BRANCH_NAME" branch of the "origin" (which is your fork on GitHub).

For example: `git push origin main`

  ```bash
git push origin <BRANCH_NAME>
```

# Step 9: Begin the pull request

Return to your fork on GitHub, and refresh the page. You may see a highlighted area that displays your recently pushed branch:

Click the green Compare & pull request button to begin the pull request.

# Step 10: Create the pull request

Before submitting the pull request, you first need to describe the changes you made .

If everything looks good, click the green Create pull request button!


# Community Platform for [Geet-Hub](https://github.com/PrerakMathur20/geet-hub-frontend)









