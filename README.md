# Here's my first Node.js app!

In this project I've implemented my new knowledge of Node.js.
The most valuable part of the project is in the folder [notes-app](https://github.com/kusamops/node-notes/tree/master/notes-app).
The second project's part - folder [playground](https://github.com/kusamops/node-notes/tree/master/playground), where I did some small tasks (such as working with file system or using arrow functions).

## How to use
0. You should have `node` and `npm` packages installed on your local machine. 
1. Clone the project
2. In project's folder run: `npm install`

## [Notes-app](https://github.com/kusamops/node-notes/tree/master/notes-app)
This small application is a tool for notes. Running the commands you will be able to:
1. [Create a note](#Create);
2. [Remove a note](#Remove);
3. [List all notes](#List);
4. [Read a specific note](#Read).

There is a json file: **'notes-app/notes.json'**. 
## Create
By using this command you will be able to add a new item to json file. There will be **title** and **body** as required fields, you may add any note following this example:

`notes add --title="My todo list" --body="reading, gym"`

Of course, you can run it in general way: 

`node app.js add --title="My todo list" --body="reading, gym"`,

but I've launched package.json to be able to run only 'notes' in the begining: 

`"bin": {
    "notes": "app.js"
  },`

If you try to add a note with the same title, a yellow warning notification will be displayed.

## Remove
By using this command you will be able to remove a note by title. Follow example code:

`notes remove --title="My todo list"`

## List
You can see all existing notes by running this command:

`notes list`

## Read
You can read info about specific note by its title. Example:

`notes read --title="My todo list"`

## That's it! Enjoy using my app :) 