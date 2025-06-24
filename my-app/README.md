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
- React Redux – State management
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
![Screenshot 2025-06-21 164437](https://github.com/user-attachments/assets/dd2b44da-534d-4b4b-96ce-f4fafa552aec)

![Screenshot 2025-06-21 164450](https://github.com/user-attachments/assets/b3a44e7c-6fd9-468c-b7c3-10deca3aac14)

![Screenshot 2025-06-21 164458](https://github.com/user-attachments/assets/3644dd3b-a524-4c48-b810-936ffa9d0ebd)

### LEAD MANAGEMENT
![Screenshot 2025-06-21 164508](https://github.com/user-attachments/assets/653a362b-bfcc-453f-b455-ee88a084ead9)

![Screenshot 2025-06-21 164515](https://github.com/user-attachments/assets/5a64aa0c-be86-47d2-bac3-db34b770e6a1)

### LEAD BY STATUS
![Screenshot 2025-06-21 164526](https://github.com/user-attachments/assets/a210eb3d-d0b3-431e-bb01-d4d92b8d7581)


### LEAD BY SALES AGENT 
![Screenshot 2025-06-21 164537](https://github.com/user-attachments/assets/ff15f93b-eb8e-4064-b1ef-876047b1720c)

### SALES AGENT MANAGEMENT
![Screenshot 2025-06-21 164549](https://github.com/user-attachments/assets/b466eb3e-c8b2-4a89-a7d9-183ec2386400)

### REPORT
![Screenshot 2025-06-21 164602](https://github.com/user-attachments/assets/72caf322-415c-490c-b89c-674eba1591d8)

![Screenshot 2025-06-21 164613](https://github.com/user-attachments/assets/43c7f3f9-b88d-46b2-893a-79005c162754)

![Screenshot 2025-06-21 164622](https://github.com/user-attachments/assets/8aed7400-98a7-4d9b-823f-ee2f8740931f)

![Screenshot 2025-06-21 164631](https://github.com/user-attachments/assets/98264d50-7572-4865-8c99-794b0a25b32a)

