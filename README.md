# Tweed.r App

# Learning Objectives

* Create an app using:
	* node.js
	* express
	* postgres 
	* mocha
	* chai
	* supertest
* Full CRUD, with views for your Tweed.rs
* Use forms to post, update and destroy Tweed.rs

## Intro

You will be creating an express generated app, called `tweedr-app` **from scratch**.  There is no starter code.  Install and require all of the dependencies needed.

## Server

- Set up your `app.js` to inclulde all the necassary dependenices for this application. Your `app.js` file should leverage all of the dependencies that you have installed.

## The Database

- Please create a postgres database called `tweedr_app_development` and update the necessary files.

## The Model

- Please create a model that has a name, up-vote and down-vote and attributes (plus any other fields that you would like to add).

## Route

- Create the routes for full CRUD.
- Make sure to add links between the various pages.

## Views

- Create a welcome page for your app.
- Create full CRUD views for your app.

## UI

- add bootstrap or materialize


## Testing

- npm install `--save-dev` the necessary test modules
- Set up a test folder, and test file
- update your `package.json` so you can run the mocha tests
	- remember that globally installing mocha will allow us to use the `mocha` command from the terminal
- Add testing for your API routes . 
	- Using mocha, chai and supertest, we can only check on the status of your routes.

<details>
	<summary>**hints on where to go from here**</summary>

Without a library like sinon, where you can mock your requests and responses, you will only be able to check whether or not your receive a 200 respose from the server.


**Example index route:**

```
api
	.get('/tweeds')
	.expect(200)
	.end(done)
```

We don't need to set our header because we **aren't** expecting a json response.  We are `res.render`-ing/`res.redirecting`-ing our views instead.
	
</details>

## When finished

- Please create a pull request on this repo, with:
	- Your name in the title
	- Your comfort level (out of 5)
	- The completness level (out of 5)


<br />

---

## BONUS

- Build out your users controller
- Create a `has_many`/`belongs_to `relationship between `users` and `tweed.rs`



