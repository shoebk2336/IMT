


const ReadMe=()=>{

    return(
        <div>
       <h1 style={{textAlign:"center"}}> How To use This web application</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <h3>Setup :</h3>
      <p>

<p>Database is hosted on MongoDB Atlas</p>
<p>Backend server is running on PORT 8080</p>
<p>Nodemon is used to run Backend server.</p>
<p>To start backend ---  npm run start</p>
<p>To run frontend  ---- npm run dev</p>
    </p>  
      
      
      <br/>
      <br/>
      <h3>Introduction:</h3>
      
      <p>
      The advanced blog application is a full-stack web application that allows registered users to create, edit, and delete blog posts. In this article, we will explore the various features of the application, including user authentication, encryption, and admin controls.
      </p>
      <h3>Features:</h3>
      <p>
      <h5>1] Home Page:</h5>
      Home Page: The home page of the application displays all the blog posts, regardless of whether the user is registered or not. This page provides a quick overview of the latest blog posts and allows users to click on a post to view its details.
      <h5>2] Create Page: </h5>
      The create page is only accessible to registered users/authors, and it allows them to create new blog posts. Once a post is created, it is automatically added to the home page for other users to see.
      <h5>3] Edit/Delete Posts:</h5>
      Registered users can edit and delete their own posts. This feature is useful when a user wants to update their post or remove it entirely.
      <h5>4] Admin Control:</h5>
      The application also includes an admin user who has the ability to edit and delete any post. This feature ensures that the application remains secure and free of spam or inappropriate content.
      <h5>5] User Login Page: </h5>
      To create a blog post, a user must first register and then log in to the application. The user login page provides a secure way for users to authenticate and access their account. Bcrypt is used to encrypt the user's password and store it in the database.
      <h5>6] JSON Web Tokens: </h5>
      The application uses JSON Web Tokens (JWT) to authenticate the user while editing or deleting the post. This feature ensures that only authorized users can make changes to the blog posts.
      <h5>7] Admin Login Page:</h5>
      The admin login page is a separate page that allows the administrator to log in and access the admin control panel. Bcrypt is also used to encrypt the admin's password and store it in the database.
      <h5>8] Search Functionality:</h5>
      The home page includes a search functionality that allows anyone to search for a blog post by its title. This feature makes it easy for users to find the blog post they are looking for.
      </p>

       
       
       </div>
    )
}
export default ReadMe