This is an app that lets the user create flashcards. The user first lands on the creation page where they can add a flashcard group. After that, they can add as many flashcards as they want. Then, the entire data is verified, and a group of flashcards is generated.

All this data is stored in the localStorage and hence remains there even if the page is reloaded. 

For state management, I have used Redux. All the necessary files for Redux are stored in the Store folder. The Store folder has the following:

1. Action folder for action creators
2. Reducer folder for all the reducers
3. Store folder for creating a single store where all the data is stored

Then we have the Component folder. It contains the following:

1. Main page components for all the components needed on the landing page
2. Secondary page components for all the components needed thereafter

The rest are normal ReactJS files that need to be there.

Finally, we have a test case file that tests all the test cases for all the components of the app.
