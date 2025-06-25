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
![Screenshot 2025-06-25 191509](https://github.com/user-attachments/assets/2bedd935-68c5-4015-bfc9-6f9ea7938ea1)

![Screenshot 2025-06-25 191527](https://github.com/user-attachments/assets/3ee9326e-f650-411b-82c8-59e6df02c02e)

### LEAD MANAGEMENT
![Screenshot 2025-06-25 191719](https://github.com/user-attachments/assets/3211d00f-3c62-485c-9a7a-a2f5e0061ba4)

![Screenshot 2025-06-25 191733](https://github.com/user-attachments/assets/7b411275-e554-4cc9-9be7-b0c7fb35a756)

### LEAD DETAILS
![Screenshot 2025-06-25 191553](https://github.com/user-attachments/assets/8c28bca1-7a4e-4725-a5cf-9c671468df3b)

![Screenshot 2025-06-25 191608](https://github.com/user-attachments/assets/68ac68de-2f1a-4ff4-b8d7-e9f5754f31cc)

![Screenshot 2025-06-25 191639](https://github.com/user-attachments/assets/0eeab98a-b8e4-48c9-9a1c-7bb8eaeacd0d)

![Screenshot 2025-06-25 191657](https://github.com/user-attachments/assets/c3ccf293-e78b-4b6e-ac2b-3bd0b0865d3f)

### SALES AGENT MANAGEMENT
![Screenshot 2025-06-25 191748](https://github.com/user-attachments/assets/94b50d0b-b332-4a47-8328-74f18ffe93ee)

![Screenshot 2025-06-25 191803](https://github.com/user-attachments/assets/77189c04-3a8b-46c7-a07d-3e1060213050)

### LEAD BY SALES AGENT 
![Screenshot 2025-06-25 191818](https://github.com/user-attachments/assets/5893bef1-596a-4691-9614-bfbad2202fda)

### REPORT
![Screenshot 2025-06-25 191834](https://github.com/user-attachments/assets/51588088-4e56-4765-a051-78d4cd4e7ea7)

![Screenshot 2025-06-25 191848](https://github.com/user-attachments/assets/2fe7eddd-d156-4eee-a6a9-b8b51b6007ed)

![Screenshot 2025-06-25 191905](https://github.com/user-attachments/assets/f1edbb9c-5bf8-4e1c-8d69-55f223b54570)


