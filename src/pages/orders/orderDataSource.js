export const userColumns = [
    { field: "id", headerName: "order_id", width: 100 },
    {
        field: "user",
        headerName: "userId",
        width: 150,
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
        headerName: "Product",
        width: 200,
    },

    {
        field: "age",
        headerName: "Quantity",
        width: 80,
    },
    {
        field: "date",
        headerName: "Date",
        width: 130,
    },
    {
        field: "status",
        headerName: "Payment",
        width: 110,
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
        id: 12332,
        username: "user1",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        status: "COD",
        email: "product 1",
        age: 1,
        date: "01-05-2022",
    },
    {
        id: 22334,
        username: "user2",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "product 1, product 2",
        status: "Online",
        age: 2,
        date: "01-05-2022",
    },
    {
        id: 32323,
        username: "user3",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "product 3",
        status: "Online",
        age: 4,
        date: "01-05-2022",
    },
    {
        id: 41212,
        username: "user4",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "product 6",
        status: "COD",
        age: 4,
        date: "01-05-2022",
    },
    {
        id: 12335,
        username: "user5",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "product 1, product 5",
        status: "COD",
        age: 1,
        date: "01-05-2022",
    },
    {
        id: 13236,
        username: "user6",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "product 9",
        status: "Online",
        age: 6,
        date: "01-05-2022",
    },
    {
        id: 73454,
        username: "user7",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "Product 2,Product 4",
        status: "COD",
        age: 2,
        date: "01-05-2022",
    },
    {
        id: 83443,
        username: "user8",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "Product 6",
        status: "Online",
        age: 2,
        date: "01-05-2022",
    },
    {
        id: 93433,
        username: "user9",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "Product 1",
        status: "COD",
        age: 1,
        date: "01-05-2022",
    },
    {
        id: 13330,
        username: "user10",
        img: "https://th.bing.com/th?id=OIP.3bgybkXUznWxWvKvUOr_iQHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2",
        email: "Product 5, Product 1",
        status: "COD",
        age: 1,
        date: "01-05-2022",
    },
];
