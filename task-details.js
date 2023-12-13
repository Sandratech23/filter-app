
let date = new Date().toLocaleDateString("en-us", { day: "numeric" });
let month = new Date().toLocaleDateString("en-us", { month: "short" });
let year = new Date().toLocaleDateString("en-us", { year: "numeric" });
const FormattedDate = `${date}th ${month[0].toLowerCase() + month.slice(1)}, ${year}`;

const taskDetails={
    taskList: [
      {
        sn: 1,
        description: "Do some shopping at maxLand shopping mall",
        status: "done",
        date: "6th Nov, 2023",
        priority: "high",
      },
      {
        sn: 2, description: "	Read my books", status: "done", date: "7th Nov, 2023", priority: "low",
      },
      {
        sn: 3, description: "	Visit my family", status: "todo", date: "8th Nov, 2023", priority: "high",
      },
      {
        sn: 4, description: "	Relearn my codes", status: "in progress", date: "9th Nov, 2023", priority: "medium",
      },
      {
        sn: 5, description: "	Listen to podcasts", status: "done", date: "10th Nov, 2023", priority: "low",
      },
      {
        sn: 6, description: "	Cook", status: "todo", date: "11th Nov, 2023", priority: "low",
      },
      {
        sn: 7, description: "	Visit my project", status: "in progress", date: "12th Nov, 2023", priority: "high",
      },
      {
        sn: 8, description: "	Do kARAOKE", status: "done", date: "13th Nov, 2023", priority: "medium",
      },
      {
        sn: 9, description: "	Read my books", status: "done", date: "14th Nov, 2023", priority: "low",
      },
      {
        sn: 10, description: "	Revisit my codes", status: "done", date: "15th Nov, 2023", priority: "low",
      },
      {
        sn: 11, description: "	Go to work", status: "in progress", date: "16th Nov, 2023", priority: "medium",
      },
      {
        sn: 12, description: "	Prepare 2024 Budget", status: "todo", date: "17th Nov, 2023", priority: "low",
      },
      {
        sn: 13, description: "	Listen to the news", status: "todo", date: "18th Nov, 2023", priority: "low",
      },
      {
        sn: 14, description: "	Have a family hangout", status: "in progress", date: "19th Nov, 2023", priority: "high",
      },
      {
        sn: 15, description: "	Listen to podcasts", status: "done", date: "20th Nov, 2023", priority: "low",
      },
      {
        sn: 16, description: "	Read my books", status: "in progress", date: "21st Nov, 2023", priority: "high",
      },
      {
        sn: 17, description: "	Go to the barbers shop", status: "done", date: "22nd Nov, 2023", priority: "low",
      },
      {
        sn: 18, description: "	Visit my stylists", status: "todo", date: "23rd Nov, 2023", priority: "medium",
      },
      {
        sn: 19, description: "	Read my books", status: "todo", date: "24th Nov, 2023", priority: "high",
      },
      {
        sn: 20, description: "	Ensure all things are okay", status: "done", date: "25th Nov, 2023", priority: "high",
      },
      {
        sn: 21, description: "	Hang out with friends", status: "in progress", date: "26th Nov, 2023", priority: "low",
      },
      {
        sn: 22, description: "	Reconcile my books", status: "todo", date: "27th Nov, 2023", priority: "low",
      },
      {
        sn: 23, description: "	Close for the year", status: "in progress", date: "28th Nov, 2023", priority: "high",
      },
      {
        sn: 24, description: "	Visit the motherless", status: "todo", date: "29th Nov, 2023", priority: "medium",
      },
      {
        sn: 25, description: "	Sleep and rest", status: "todo", date: "30th Nov, 2023", priority: "low",
      },
      {
        sn: 26, description: "	Go to church and dance", status: "in progress", date: "1st Dec, 2023", priority: "high",
      },
      {
        sn: 27, description: "	Visit my family", status: "todo", date: "2nd Dec, 2023", priority: "high",
      },
      {
        sn: 28, description: "	Relearn my codes", status: "in progress", date: "3rd Dec, 2023", priority: "medium",
      },
      {
        sn: 29, description: "	Listen to podcasts", status: "done", date: "4th Dec, 2023", priority: "low",
      },
      {
        sn: 30, description: "	Cook", status: "todo", date: "5th Dec, 2023", priority: "low",
      },
      {
        sn: 31, description: "	Visit my project", status: "in progress", date: "6th Dec, 2023", priority: "high",
      },
      {
        sn: 32, description: "	Do kARAOKE", status: "done", date: "7th Dec, 2023", priority: "medium",
      },
      {
        sn: 33, description: "	Read my books", status: "done", date: "8th Dec, 2023", priority: "low",
      },
      {
        sn: 34, description: "	Revisit my codes", status: "done", date: "9th Dec, 2023", priority: "low",
      },
      {
        sn: 35, description: "	Go to work", status: "in progress", date: "10th Dec, 2023", priority: "medium",
      },
      {
        sn: 36, description: "	Prepare 2024 Budget", status: "todo", date: "11th Dec, 2023", priority: "low",
      },
      {
        sn: 37, description: "	Listen to the news", status: "todo", date: "12th Dec, 2023", priority: "low",
      },
      {
        sn: 38, description: "	Have a family hangout", status: "in progress", date: "13th Dec, 2023", priority: "high",
      },
      {
        sn: 39, description: "	Listen to podcasts", status: "done", date: "14th Dec, 2023", priority: "low",
      },
      {
        sn: 40, description: "	Read my books", status: "in progress", date: "15th Dec, 2023", priority: "high",
      },
      {
        sn: 41, description: "	Go to the barbers shop", status: "done", date: "16th Dec, 2023", priority: "low",
      },
      {
        sn: 42, description: "	Visit my stylists", status: "todo", date: "17th Dec, 2023", priority: "medium",
      },
      {
        sn: 43, description: "	Read my books", status: "todo", date: "18th Dec, 2023", priority: "high",
      },
      {
        sn: 44, description: "	Ensure all things are okay", status: "done", date: "19th Dec, 2023", priority: "high",
      },
      {
        sn: 45, description: "	Hang out with friends", status: "in progress", date: "20th Dec, 2023", priority: "low",
      },
      {
        sn: 46, description: "	Reconcile my books", status: "todo", date: "21st Dec, 2023", priority: "low",
      },
      {
        sn: 47, description: "	Close for the year", status: "in progress", date: "22nd Dec, 2023", priority: "high",
      },
      {
        sn:48 , description: "	Visit the motherless", status: "todo", date: "23rd Dec, 2023", priority: "medium",
      },
      {
        sn: 49, description: "	Sleep and rest", status: "todo", date: "24th Dec, 2023", priority: "low",
      },
      {
        sn: 50, description: "	Go to church and dance", status: "in progress", date: "25th Dec, 2023", priority: "high",
      },
  
      
      
    ]}
  
  