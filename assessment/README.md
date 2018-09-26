# Assessment

The goal of this project is to use ReactJS capabilitites and its paradigms by creating a TODO app. This app should be able to add TODOs and track the number of total TODOs as well as the number of unchecked TODOs.

This exercise must be completed within a week. The fully functional code must be uploaded to github. The work must be yours, no other person should be directly or indirectly involved.  After you complete the work please provide us the git hub link where we can download and assess the work.

## Instructions
Inside of [index.html](/index.html), you'll find some starter HTML. You shouldn't need to edit this file at all. Open this file on your computer into any browser to run the project. Make sure that [script.js](/script.js) and [styles.css](/styles.css)
are in the same local directory. With the file open in your browser, you should see a `New TODO` button, which `alert`s when clicked. Your goal will be to get this button to create new TODOs.

Inside [styles.css](/styles.css), you'll find some pre-written CSS for your convenience. You shouldn't need to edit this file at all, but feel free to if desired.

[script.js](/script.js) is where most of your work will be done. There is some starter code for you in the file. The `classNames` variable can be used to link any elements you create in js with the associated CSS class names. The next 3 lines of code are the HTML elements that you'll need to update when creating new
TODOs. Lastly, you'll see the `addTodo()` function. This gets executed when creating a new TODO. You should replace the `alert()` call with logic to create new TODOs.
Reminder: The above work needs to be done using ReactJS


Good luck!

## Challenge! (Not Required)
If you finish early and are up for a challenge, try adding delete functionality. This should be in the form of a button within each TODO that removes that TODO when clicked. 

## Features Implemented

* Clicking on `New TODO` button creates an new editable todo item.
* Pressing `Enter` key in the keyboard will save the new todo item to the list and create a new editable field.
* Clicking on `✓` button will save the new todo item.
* Each todo item in the field has a checkbox to mark completed and an `X` button to delete that todo item from the list.
* There are two counters - `Item Count` and `Unchecked Count`. `Item Count` keeps track of no. of items in the list. `Unchecked Count` keeps track of unchecked items in the list.

## Components
* Parent component - `ToDoList`

    ToDoList maintains the state of the Todo list and also holds handler for save(`✓`), delete(`X`) and the counters - `Item Count` and `Unchecked count`.
* Child components - `Todo` and `CreateToDo`

    * `Todo` - renders each item in the list and receives function props for checkbox and delete features.

    * `CreateTodo` - renders the editable field for entering a new todo item and receives function prop for saving the item to the list.

## To run
Open the file in any browser.






## Thanks for the opportunity to work on this assessment.
