const DATA = [
  {
    columnId: "1",
    title: "To-Do",
    cards: [
      {
        id: "44",
        title: "Make a trello board",
        description: "We need to make a Camden, NJ board",
        due_date: Date.now(),
      },
      {
        id: "33",
        title: "Make a trello board2222",
        description: "We need to make a Camden, NJ board2222",
        due_date: Date.now(),
      },
    ],
  },
  {
    columnId: "2",
    title: "In Progress",
    cards: [
      {
        id: "22",
        title: "Make a trello board inprogress",
        description: "We need to make a Camden, NJ board inprogress",
        due_date: Date.now(),
      },
      {
        id: "11",
        title: "Make a trello board inprogress33333",
        description: "We need to make a Camden, NJ board inprogress3333",
        due_date: Date.now(),
      },
    ],
  },
  {
    columnId: "3",
    title: "Done",
    cards: [
      // {
      //   belongsToColumn: "3",
      //   title: "Make a trello board done",
      //   description: "We need to make a Camden, NJ board done",
      //   due_date: Date.now(),
      // },
    ],
  },
]; // Complex state containing user data of columns/cards/etc

export default DATA;
