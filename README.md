# Welcome to Sync Test!

You're going to create a very simple application to display a list of users.

Several objectives will be analyzed:

- Understanding project requirements
- Use of libraries
- Code cleanliness and lifecycle understanding

**You have 1 hour to complete the project, good luck to you!**

---

## Step 1

Once the project has been initialized, you can run the command below to launch the project and start the exercises.

```npm run start```

## Step 2

Create two pages named "Home" and "Details".

You can use a custom router, your own router or manage the navigation as you like!

## Step 3

In this step, 3 concepts will be addressed:

- List of elements
- Library
- HTTP request

You'll need to use the "react-query" library to make an HTTP request.

```
METHOD: GET
URL: https://dev.api.syncremote.co/api/v1/admin/users
```

Once you've retrieved the data (in array form), you'll need to use it by creating a component to display this list on the "Home" page.

In this list, only one piece of information is required for display: ``name``.

We're calling on your creativity for the data display!

## Step 4

When we click on one of the lines in your list, we should be redirected to the "Details" page, displaying more information. 

In this section, the minimum information display is :

```
- name
- interest
```

## Step BONUS

- Optimize the display of the list and your components.
- Set up a client cache on the HTTP request with react-query
