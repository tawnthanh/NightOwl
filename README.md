
# NightOwl

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Features](#features)
	- [Register](#register)
	- [Login](#login)
	- [Posts](#posts)
	- [User Experience](#user-experience)
		- [Create Posts](#create-posts)
		- [Reblog](#reblog)
		- [Likes](#likes)
		- [View](#view)
			- [View Posts](#view-posts)
			- [View Likes](#view-likes)

## Introduction

NightOwl is a clone of [Tumblr](http://tumblr.com) to support true crime and horror junkies. It will allow users to view different content that relates to the true-crime and horror as well as interact with different users.

Check it out [here](https://nightowl-app.herokuapp.com/)

## Dependencies

- Heroku
- React / Redux
- Express Server
- Sequelize

## Features

 - ### Register
	 A page where the user will input their information to be registered into our database.

- ### Login
	A function integrated into our homepage that will allow the user to login before they can view any content on the site.

- ### Posts
	Logged in users to the site will be able to view all content that relates to any true crime/ horror stories made by other users.

- ### User Experience
	A registered user will be able to gain more functionality to the site.

	The user can create their own posts with various content-types (text, video, and images), reblog other user content to their profile, "like" posts they see, and view their "Likes" and "Posts" list.

	- #### Create Posts
		The logged in user will have an opportunity to create their own posts. The types of posts they can make will be: text, audio(with embeded source), video (with embedded source), and a photo.

	- #### Delete Posts
		The user will be able to delete their own posts.

	- #### Edit Posts
		The user will be able to edit their own posts.
		(Coming soon!)

	- #### Reblog
		The user will be able to re-post other people's content.
		(Coming soon!)

	- #### Likes
		User will be able to add a post to their "Likes" list.

	- #### View
		Provide the user the ability to view their custom routes and places 	they have visited
		- ##### View Posts
			User will have access to see all the posts they have created as a nav bar on their own "Menu" page.
		- ##### View Likes
			There will be a link for the user to see all the posts they have liked in their "Menu" page.
