                                                                    Advance Blog App


Setup:

Database is hoisted on MongoDBAtlas
Backend server is running on PORT 8080
Nodemon is used to run Backend server.
To start backend ---  npm run start
To run frontend  ---- npm run start




Features:

Home Page: Displays all blog posts to everyone, regardless of registration status. Each Post is clickable to look in detail.

Create Page: Only accessible to registered users/authors for creating new blog posts, without login can't be accessed.

Edit/Delete Posts: Registered users can only edit and delete their own posts, while the admin can edit/delete any post.

User Login Page: Secure way for users to authenticate and access their account, new users can also register.

Bcrypt Encryption: Used to encrypt both user and admin passwords and store them in the database.

JSON Web Tokens: Used to authenticate users while editing or deleting blog posts,so that no one can edit or delete other's posts.

Admin Login Page: Separate page for the administrator to log in and access the admin control panel.

Search Functionality: Allows users to search for blog posts by their titles.



