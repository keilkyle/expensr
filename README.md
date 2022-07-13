# Welcome to Expensr!
A place to track your expenses. We'll work on the branding.

## App Walkthrough

![Expensr Gif](expensr.gif)

## Frontend: Using the app
Users of Expensr can do a few things: add expenses to their list, view all expenses, view summaries of the expenses (specifically, what "tags" their expenses have), and edit their profile. In the current build, they have the ability to delete their accounts or change the email address associated with their account.

Users can only do so after logging in, or creating a new account if they don't already have one.

This is accomplished across three views:
- the home view, which contains the expense list and a place to add expenses
- the "summary" view, which lists the tags their expenses have
- the "profile" view, which displays the email address currently associated with their account and a place to change that email if desired

Persistent across all views is a header which allows users to logout.

## Backend: Data Structure
In order to support this, the backend is structured as follows: 
- Users have many expenses, and expenses belong to users (1:many relationship).
- Expenses have many tags, and tags have many expenses (many:many relationship; a join table expensetags accomplishes this relationship).

Users have full create, read, update, and destroy capability for their account, and create and read abilities for their expenses.

Authentication is accomplished using bcrypt, which stores the user's id in the session.