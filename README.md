# Tweed.r Pt. 1

# Learning Objectives

* Create a web server using Node.js and Express
* Save and persist data
* Use forms to POST information

## Intro

You have been given a starter `.css` file and a starter `index.html` file. Please integrate these into your express handlebars layout. You have also been provided with all the module dependencies you will need for this assignment. Run `npm install` from your command line from inside the directory with the included `package.json`

## Server

- Set up your `server.js` to inclulde all the necassary dependenices for this application. Your `server.js` file should leverage `express` and be set up to render your views using `handlebars`

## Layout

- You have been provided with an `index.html` file which should serve as your primary layout for this application. Please set your application up to render this layout. You will however need to adjust some of the information provided in the `index.html` file in order for your application to work properly. Please review the `index.html` file and make the proper adjustments.

## The Database

- Please create a file called `data.js`, since we do not yet have a true database this file will serve as one.

- Please think about the best structures to store data. Try to weigh the pros and cons of your design choice prior to moving forward.

## Route

- This application will require two routes:

- A `Home / Root` route
    - This route should retrieve all the tweeds currently stored in your 'database'
    - This route should render all the tweeds currently stored in your 'database'
    - Please follow restful standards for naming this route.

- A `Post` route
    - This route should store a new tweed in your 'database'
    - When a `post` is successful the page should render the new tweed above the previous new tweed.
    - Please follow restful standards for naming this route.

## Views

- You have been provided a `style.css` file, which has the necassary css to render the page. Please read over this `css` file and leverage it to properly render your `UI`. You will need to use the proper `id's` or `classes` to render the views properly.

<br />

---

# Tweed.r Pt. 2

# Learning Objectives

* Create a web server using Node.js, Express, Postgres 
* Full CRUD for hte data
* Use forms to post, update and destroy information

## Intro

You will be using the same app that we built yesterday. The previous iteration of this application implemented routes for reading and creating tweeds. Today we will be implementing routes to update and destroy tweeds.

## Server

- Set up your `server.js` to inclulde all the necassary dependenices for this application. Your `server.js` file should leverage `express` and be set up to render your views using `handlebars`

**YOU SHOULD ALREADY HAVE THIS SET UP FROM YESTERDAYS LAB**

## Layout

- Yesterdays starter files provided you with an `index.html` file which should serve as your primary layout for this application. Please set your application up to render this layout. You will however need to adjust some of the information provided in the `index.html` file in order for your application to work properly. Please review the `index.html` file and make the proper adjustments.

**YOU SHOULD ALREADY HAVE THIS SET UP FROM YESTERDAYS LAB**

## The Database

- Please create a file called `data.js`, since we do not yet have a true database this file will serve as one.

- Please think about the best structures to store data. Try to weigh the pros and cons of your design choice prior to moving forward.

**YOU SHOULD ALREADY HAVE THIS SET UP FROM YESTERDAYS LAB**

## Route

- In yesterdays lab we added routes for the `Root / Home` and a `Post` route for a tweed. Today we will be implementing two additional routes to our application. The following routes and functionality needs to be implemented:

- A `PUT` route
    - This route should retrieve a tweed by `id` and update the tweed and store the tweed in your 'database'.
        - This route will have the ability to update the text or author of a tweed.
    - This route should render all the tweeds currently stored in your 'database' including the newly updated tweed upon successful save.
    - Please follow restful standards for naming this route.
- A `DELETE` route
    - This route should completely remove a tweed from your 'database'
    - This route should redirect to the `Home / Root` route upon successful deletion of a tweed.

## View

- To your layout please implement UI for your user to edit a tweed.
    - Some UI ideas
        - A user clicks an edit button, the user is redirected to an edit form and can edit from that page and then is redirect back to 'Home / Root`
        - A user clicks the text of the tweed itself and the text transforms into a form, allowing the user to have an experience of a single page application.
    - You will also need to implement a `delete` button, which will send the proper request to your server to delete a tweed.

## BONUS

- Implement `upvoting` and `down-voting`. Create UI to allow a user to perform this action. Persist the data in your 'database'
