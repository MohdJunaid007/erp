export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Junaid",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    status: "active",
    email: "Juanid@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Harsh",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "Harsh@gmail.com",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    username: "Vikram",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "Vikram@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Aniket",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "aniket@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Priyanshu",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "priya@gmail.com",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    username: "Vipin",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "Vipin@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Parvej",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "parvej@gmail.com",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    username: "Bunty",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "bunty@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Verma",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "verma@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Deepak",
    img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
    email: "deepak@gmail.com",
    status: "active",
    age: 65,
  },
];
