export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "Name",
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
      headerName: "Description",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Quantity",
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
      username: "Product 1",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      status: "available",
      email: "this is description",
      age: 35,
    },
    {
      id: 2,
      username: "Product 2",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 42,
    },
    {
      id: 3,
      username: "Product 3",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 45,
    },
    {
      id: 4,
      username: "Product 4",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 16,
    },
    {
      id: 5,
      username: "Product 5",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "not available",
      age: 0,
    },
    {
      id: 6,
      username: "Product 6",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 15,
    },
    {
      id: 7,
      username: "Product 7",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "not available",
      age: 0,
    },
    {
      id: 8,
      username: "Product 8",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 36,
    },
    {
      id: 9,
      username: "Product 9",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 65,
    },
    {
      id: 10,
      username: "Product 10",
      img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
      email: "this is description",
      status: "available",
      age: 65,
    },
  ];
  