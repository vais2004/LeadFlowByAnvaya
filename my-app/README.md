# Anavaya App
It's built using **HTML**, **CSS**, and **JavaScript**

##### Hosted Link: (https://lead-flow-by-anvaya.vercel.app/)
 
##### Backend code URL: (https://github.com/vais2004/LeadFlowByAnvaya-backend)

##### Frontend code URL: (https://github.com/vais2004/LeadFlowByAnvaya)


## ✨ Pages:

### Dashboard (Home Page)
--> Lead List:
      - Lead according to status
--> Each lead displays: 
      - Lead Name
--> Clicking a lead opens its Lead Details page
--> Quick Filters
      - Show number of leads by status
      - Clicking a status filters the list accordingly
--> Add New Lead Button
      - Clicking opens a form with the following fields:
          • Lead Name (text)
          • Lead Source (dropdown)
          • Assigned Sales Agent (dropdown)
          • Lead Status (dropdown)
          • Tags (checkboxes — multiple selections allowed)
          • Time to Close (number input)
          • Priority (dropdown)
          • Add Lead button
          
--> Clears form after submission
--> Remove Add Form button hides the form
          
### Lead Details Page
--> Displays:
    - Lead Name
    - Sales Agent Name
    - Lead Source
    - Status
    - Priority
    - Time to Close

--> Edit Lead Details Button
    - Opens a form similar to Add Lead Form
    - After editing, clicking Add Lead updates the lead info
    - Remove Edit Form button hides the form.

--> Comment Section
    - Shows existing comments with:
       • Commenter's name
       • Date & Time
       • Comment text

--> Input field to post a new comment.

### Lead Management Page

--> Shows list of all leads with:
     - Lead Name
     - Status
     - Assigned Agent

--> Includes Filters:
     - Filter by Status
     - Filter by Sales Agent
     - Sort by Closing Date

--> Clear All Filters button to reset all filters
--> Add New Lead button opens the add form

### Leads by Status Page
####Opens when a status is clicked in the Lead Management Page
--> Shows all leads with the selected status.
--> Each lead shows:
      - Lead Name
      - Sales Agent Name
--> Filters at the bottom:
      - Filter by Priority
      - Filter by Agent
      - Sort by Closing Date

###Sales Agents Page
--> Sales Agents Management Page
--> Table shows:
      - Agent Name
      - Email
      
--> Add New Agent Button
--> Opens a form with
      - Name (input)
      - Email (input)
      - Submit button

--> Remove Add Form button hides the form

###  7. Reports Page
#### Shows lead performance visually using charts:
-->📊 Report 1: Total Leads Closed & In Pipeline
Pie Chart view
-->📊 Report 2: Leads Closed by Sales Agent (Last 7 Days)
Bar Chart view
-->📊 Report 3: Lead Status Distribution
Bar Chart showing how many leads are in each status






## 🎨 Frontend

**Core Technologies**
- React.js – Component-based UI development
- React Redux – State management
- Redux Toolkit – Simplified Redux logic and async actions
- Redux Persist – State in localStorage (like login info, cart)
- React Router DOM – Routing and navigation
- Axios – API communication and data fetching

**Styling & UI**
- Bootstrap 5 – Responsive design framework for consistent UI components
- Inline Styling – Quick, component-level styling using JSX
- React Toastify (Notifications)
---

## 🛠️ Backend

**Server Technologies**
- Node.js
- Express.js
- Mongoose (MongoDB)
- CORS (Cross-Origin Resource Sharing)

**Database**
- MongoDB

## 📸 Demo Images:
