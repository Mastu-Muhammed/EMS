const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      // Active + New
      {
        title: "Prepare Monthly Sales Report",
        description: "Compile and finalize the monthly sales data.",
        date: "2025-06-15",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Proposal Draft",
        description: "Write and review new client proposal.",
        date: "2025-06-16",
        category: "Client",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      // Completed
      {
        title: "Inventory Update",
        description: "Check stock levels and update system.",
        date: "2025-06-10",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Product Upload",
        description: "Upload new product images.",
        date: "2025-06-11",
        category: "E-Commerce",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      // Failed
      {
        title: "Late Invoice Submission",
        description: "Missed submission of April invoices.",
        date: "2025-06-05",
        category: "Accounts",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Missed Client Call",
        description: "Forgot to attend scheduled Zoom call.",
        date: "2025-06-03",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 2,
    },
  },
  {
    id: 2,
    firstName: "Rahul",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Feature Testing",
        description: "Test new dashboard feature on staging.",
        date: "2025-06-14",
        category: "QA",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Sync",
        description: "Daily 15-min check-in.",
        date: "2025-06-13",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Refactor",
        description: "Refactor user service logic.",
        date: "2025-06-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "API Integration",
        description: "Integrated new payment gateway.",
        date: "2025-06-07",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Merge Conflict",
        description: "Failed to resolve git conflict in time.",
        date: "2025-06-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Missed Standup",
        description: "Did not join morning meeting.",
        date: "2025-06-02",
        category: "HR",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 2,
    },
  },
  {
    id: 3,
    firstName: "Priya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "UX Audit",
        description: "Audit all landing pages.",
        date: "2025-06-12",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Accessibility Review",
        description: "Fix low contrast text.",
        date: "2025-06-13",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Blog Design",
        description: "Designed layout for blog module.",
        date: "2025-06-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Landing Page Polish",
        description: "Implemented suggestions from manager.",
        date: "2025-06-09",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Skipped Review",
        description: "Forgot to submit mockups.",
        date: "2025-06-06",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Broken Figma File",
        description: "Didn't update version properly.",
        date: "2025-06-03",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 2,
      completed: 2,
      failed: 2,
    },
  },
  // ... You can duplicate structure for Sanya and Vikram
];


const admin = {
  id: 1,
  email: "admin@example.com",
  password: "123",
  firstName: "Admin",
  
};


// ✅ Function to set localStorage only if not already set
// export const setLocalStorage = () => {
//   if (!localStorage.getItem("employees")) {
//     localStorage.setItem("employees", JSON.stringify(employees));
//     console.log("Default employees set.");
//   }
//   if (!localStorage.getItem("admin")) {
//     localStorage.setItem("admin", JSON.stringify(admin));
//     console.log("Default admin set.");
//   }
// };

export const setLocalStorage = () => {
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};


// ✅ Function to retrieve localStorage safely
export const getLocalStorage = () => {
  let employees = JSON.parse(localStorage.getItem("employees"));
  let admin = JSON.parse(localStorage.getItem("admin"));

  if (!employees || !admin) {
    console.warn("LocalStorage empty, initializing...");
    setLocalStorage();
    employees = JSON.parse(localStorage.getItem("employees"));
    admin = JSON.parse(localStorage.getItem("admin"));
  }

  return { employees, admin };
};





