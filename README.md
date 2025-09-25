SCHOOL MANAGEMENT SYSTEM

Streamline school management, class organization, and add students and faculty.
Seamlessly track attendance, assess performance, and provide feedback.
Access records, view marks, and communicate effortlessly.


[LinkedIn](https://www.linkedin.com/in/Saykot-biswas-shawon)
About

The School Management System is a web-based application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to streamline school management, class organization, and facilitate communication between students, teachers, and administrators.

Features

User Roles: The system supports three user roles: Admin, Teacher, and Student. Each role has specific functionalities and access levels.

Admin Dashboard: Administrators can add new students and teachers, create classes and subjects, manage user accounts, and oversee system settings.

Attendance Tracking: Teachers can easily take attendance for their classes, mark students as present or absent, and generate attendance reports.

Performance Assessment: Teachers can assess students' performance by providing marks and feedback. Students can view their marks and track their progress over time.

Data Visualization: Students can visualize their performance data through interactive charts and tables, helping them understand their academic performance at a glance.

Communication: Users can communicate effortlessly through the system. Teachers can send messages to students and vice versa, promoting effective communication and collaboration.

Technologies Used

Frontend: React.js, Material UI, Redux
Backend: Node.js, Express.js
Database: MongoDB
Installation

git clone https://github.com/Yogndrr/MERN-School-Management-System.git
Open 2 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend

cd backend
npm install
npm start
Create a file called .env in the backend folder. Inside it write this :

MONGO_URL = mongodb://127.0.0.1/school
If you are using MongoDB Compass you can use this database link but if you are using MongoDB Atlas then instead of this link write your own database link.

Terminal 2: Setting Up Frontend

cd frontend
npm install
npm start
Now, navigate to localhost:3000 in your browser. The Backend API will be running at localhost:5000.

Error Solution

You might encounter an error while signing up, either a network error or a loading error that goes on indefinitely.

To resolve it:

Navigate to the frontend > .env file.

Uncomment the first line. After that, terminate the frontend terminal. Open a new terminal and execute the following commands:

cd frontend
npm start
After completing these steps, try signing up again. If the issue persists, follow these additional steps to resolve it:

Navigate to the frontend > src > redux > userRelated > userHandle.js file.

Add the following line after the import statements:

const REACT_APP_BASE_URL = "http://localhost:5000";
Replace all instances of process.env.REACT_APP_BASE_URL with REACT_APP_BASE_URL.
IMPORTANT: Repeat the same process for all other files with "Handle" in their names.

For example, in the redux folder, there are other folders like userRelated. In the teacherRelated folder, you'll find a file named teacherHandle. Similarly, other folders contain files with "Handle" in their names. Make sure to update these files as well.

The issue arises because the .env file in the frontend may not work for all users, while it works for me.

Additionally:

When testing the project, start by signing up rather than logging in as a guest or using regular login if you haven't created an account yet.

To use guest mode, navigate to LoginPage.js and provide an email and password from a project already created in the system. This simplifies the login process, and after creating your account, you can use your credentials.

These steps should resolve the network error in the frontend. If the issue persists, feel free to contact me for further assistance.

Delete Feature Not Working Solution

When attempting to delete items, you may encounter a popup message stating, "Sorry, the delete function has been disabled for now." This message appears because I have disabled the delete function on my live site to prevent guests from deleting items. If you wish to enable the delete feature, please follow these steps:

Navigate to the frontend > src > redux > userRelated > userHandle.js file.

If you haven't made any changes, you should find the deleteUser function at line 71. It may be commented out. It might look like this:

// export const deleteUser = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getDeleteSuccess());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }
Uncomment above deleteUser function and comment out this deleteUser function that is currently running from line 87 to line 90 :
export const deleteUser = (id, address) => async (dispatch) => {
    dispatch(getRequest());
    dispatch(getFailed("Sorry the delete function has been disabled for now."));
}
If you have previously modified the code, you may find the deleteUser functions at different lines. In this case, uncomment the original code and comment out the current one.

Next, navigate to the frontend > src > pages > admin folder. Here, you will find different folders suffixed with "Related". Open each folder and locate files prefixed with "Show".

Open each file with "Show" as a prefix and search for a function named deleteHandler. For example:

const deleteHandler = (deleteID, address) => {
  console.log(deleteID);
  console.log(address);
  setMessage("Sorry, the delete function has been disabled for now.");
  setShowPopup(true);
  // dispatch(deleteUser(deleteID, address))
  //   .then(() => {
  //     dispatch(getAllSclasses(adminID, "Sclass"));
  //   })
}
This is an example snippet from ShowClasses. In other files with "Show" as a prefix, it may differ.

Uncomment the commented-out code inside the deleteHandler function and comment out the existing code. It should resemble this:

const deleteHandler = (deleteID, address) => {
  // console.log(deleteID);
  // console.log(address);
  // setMessage("Sorry, the delete function has been disabled for now.");
  // setShowPopup(true);
  dispatch(deleteUser(deleteID, address))
    .then(() => {
      dispatch(getAllSclasses(adminID, "Sclass"));
    })
}
Repeat these steps for every other file. In some cases, the deleteHandler function may also be found in files prefixed with "View". Check those files and repeat the same process.
If the issue persists, feel free to contact me for further assistance.

Don't forget to leave a star for this project if you found the solution helpful. Thank you!

Deployment

Render - server side
Netlify - client side


something error
i cant find the error