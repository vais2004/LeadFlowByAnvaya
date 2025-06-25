# Anavaya App
It's built using **HTML**, **CSS**, and **JavaScript**

##### Hosted Link: (https://lead-flow-by-anvaya.vercel.app/)
 
##### Backend code URL: (https://github.com/vais2004/LeadFlowByAnvaya-backend)

##### Frontend code URL: (https://github.com/vais2004/LeadFlowByAnvaya)


## ✨ Pages:

### • Dashboard (Home Page)
- Lead List:
  - Lead according to status
- Each lead displays: 
  - Lead Name
- Clicking a lead opens its Lead Details page
- Quick Filters
  - Show number of leads by status
  - Clicking a status filters the list accordingly
- Add New Lead Button
  - Clicking opens a form with the following fields:
    - Lead Name (text)
    - Lead Source (dropdown)
    - Assigned Sales Agent (dropdown)
    - Lead Status (dropdown)
    - Tags (checkboxes — multiple selections allowed)
    - Time to Close (number input)
    - Priority (dropdown)
    - Add Lead button          
- Clears form after submission
- Remove Add Form button hides the form
          
### • Lead Details Page
- Displays:
  - Lead Name
  - Sales Agent Name
  - Lead Source
  - Status
  - Priority
  - Time to Close
- Edit Lead Details Button
  - Opens a form similar to Add Lead Form
  - After editing, clicking Add Lead updates the lead info
- Remove Edit Form button hides the form.
- Comment Section
  - Shows existing comments with:
    - Commenter's name
    - Date & Time
    - Comment text
- Input field to post a new comment.

### • Lead Management Page
- Shows list of all leads with:
  - Lead Name
  - Status
  - Assigned Agent
- Includes Filters:
  - Filter by Status
  - Filter by Sales Agent
  - Sort by Closing Date
- Clear All Filters button to reset all filters
- Add New Lead button opens the add form

### • Leads by Status Page
#### Opens when a status is clicked in the Lead Management Page
- Shows all leads with the selected status.
- Each lead shows:
  - Lead Name
  - Sales Agent Name
- Filters at the bottom:
  - Filter by Priority
  - Filter by Agent
  - Sort by Closing Date

### • Sales Agents Page
#### Opens when a agent is clicked in the Lead Management Page
- Sales Agents Management Page
- Table shows:
  - Agent Name
  - Email    
- Add New Agent Button
- Opens a form with
  - Name (input)
  - Email (input)
  - Submit button
- Remove Add Form button hides the form

### • Reports Page
#### Shows lead performance visually using charts:
- 📊 Report 1: Total Leads Closed & In Pipeline Pie Chart view
- 📊 Report 2: Leads Closed by Sales Agent (Last 7 Days) Bar Chart view
- 📊 Report 3: Lead Status Distribution Bar Chart showing how many leads are in each status


## 🎨 Frontend

**Core Technologies**
- React.js – Component-based UI development
- React Router DOM – Routing and navigation
- Axios – API communication and data fetching

**Charting / Visualization Library**
-	Recharts - for creating various types of charts

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
### DASHBOARD
![Screenshot 2025-06-25 182211](https://github.com/user-attachments/assets/a5016022-5761-4322-92a5-5676b433d0bf)

![Screenshot 2025-06-25 182221](https://github.com/user-attachments/assets/42a9dc3a-c2a7-40e3-b872-8006a86e5328)


### LEAD MANAGEMENT
![Screenshot 2025-06-25 182257](https://github.com/user-attachments/assets/9ad64cf3-c6e4-4b9e-967e-71008e6ead3a)

![Screenshot 2025-06-25 182305](https://github.com/user-attachments/assets/40dffa1a-7945-45d1-a42e-f83713dc62f9)

### LEAD DETAILS
![Screenshot 2025-06-25 182234](https://github.com/user-attachments/assets/4d6da46c-fb8f-43cf-9d4f-4cb387b618aa)

![Screenshot 2025-06-25 182247](https://github.com/user-attachments/assets/733972bf-88a0-42ef-9159-6a442bc39e7c)

### SALES AGENT MANAGEMENT
![Screenshot 2025-06-25 182314](https://github.com/user-attachments/assets/4c6be4ca-bb31-49f7-8322-7fff17720048)

![Screenshot 2025-06-25 182324](https://github.com/user-attachments/assets/82ac75b3-3715-49c1-a3e0-eb3ebcec181d)

### LEAD BY SALES AGENT 
![Screenshot 2025-06-25 183012](https://github.com/user-attachments/assets/d1bb92ea-01b8-4364-ba90-82881fd5a000)

### REPORT
![Screenshot 2025-06-25 182338](https://github.com/user-attachments/assets/7d9d7b08-01f4-445b-8591-d827980e2da0)

![Screenshot 2025-06-21 164613](https://github.com/user-attachments/assets/43c7f3f9-b88d-46b2-893a-79005c162754)

![Screenshot 2025-06-21 164622](https://github.com/user-attachments/assets/8aed7400-98a7-4d9b-823f-ee2f8740931f)

![Screenshot 2025-06-21 164631](https://github.com/user-attachments/assets/98264d50-7572-4865-8c99-794b0a25b32a)

