# What is MyMocha? 
MyMocha is my repository containing different functions and tests for each function.
I am using Mocha framework and assertion library Chai together to write my unit tests.

#### Installation

##### 1) Open WebStorm

If not yet installed please visit https://www.jetbrains.com/webstorm/download/ and follow the instructions on the web for installation.

##### 2) Once you get to a Welcome Page on WebStorm, click on the very last option "Get From Version Control"

![](img/webStormWelcomePage.PNG)

##### 3) Screen similar to a picture below should appear. 
Click on the left click on "Repository URL"

In "URL" field past  "https://github.com/YelenaDipon/MyMocha.git"

Click "Clone" on the bottom right 

![](img/getFromVersionControlScreen.PNG)

##### 4) Click "Yes" for a screen which will pop up
 
 ![](img/okToOpen.PNG)

##### 5) Open up a terminal on the bottom left of your WebStorm screen, type in "npm install".

Example: ```$ npm install ``` and click "enter"

![](img/npmInstall.PNG)  

##### 6) Once terminal has completed a process of installation and a message below shows up, you are able to use all of the functions and tests in the repository.
 
![](img/npmInstalled.PNG)

#### Usage

The primary use for this repository is test out created functions, modify them, and get more practice/knowledge.
Functions are located in `index.js` file and tests are located in `test` folder / `index.spec.js` file. 

#### Details

This repository will be acquiring new functions often. 

Explanation of each test and functions are and will be indicated in their title/description.


#### How to install Node, Mocha, and Chai individually ?
In case you decide to use Mocha and Chai together, while using your own repository, follow instructions below.
1) Go to https://nodejs.org/en/ and download Node to your system. To check if Node has been installed successfully, type in `node -v` in your terminal, and a version of an installed Node should display in your terminal.
2) Install npm to your system. In your terminal type in `npm install` and then press `Enter`. To check if npm has been successfully installed, type in `node -v` in your terminal, and a version of an installed npm should display in your terminal. 
3) To install Mocha , go to https://mochajs.org/ and follow instructions on their website for installation. On this website you can also find detailed information on how to use this framework. If unable to access, type in `npm install mocha` in your terminal. After, type in `mkdir test` to create a "Test" folder in your repository. 
 Create an `index.spec.js` file in which you will be writing you tests. 
5) Make sure to create a `index.js` file in your repository in which you will be writing your function. Use `module.exports = {name of your function1, name of your function2, etc};` , on a vey bottom of your code to export your code to a `index.spec.js` file.  
4) To intall Chai, in your terminal type in `npm install chai`. 
6) After everything has been installed, please do the following.
 In `index.spec.js` file type in the following on a very top to link your tests to your functions which are located in `index.js` :
 
    `const assert = require('assert');`
                                         
    `const {expect} = require('chai');`
                                          
     `const {name of your function1, name of your function2, etc} = require('../index.js');`
