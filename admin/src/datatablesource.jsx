export const userColumns = [
  {
    field: "username",
    headerName: "Username",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || 'https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png'} alt="avatar" />
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
    field: "createdAt",
    headerName: "Created",
    width: 200,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated",
    width: 200
  }
];

export const equipmentColumns = [
  { field: "id", headerName: "ID", width: 125 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "location",
    headerName: "Location",
    width: 100,
  },
  {field: "equipment_condition", 
    headerName: "Condition",
    width: 100
  },
  /*{
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
  }, */ 
  {
    field: "createdAt",
    headerName: "Created",
    width: 200,
  },
];


export const workOrderColumns = [
  { field: "id", headerName: "ID", width: 125 },
  {
    field: "cost",
    headerName: "Cost",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "createdAt",
    headerName: "Created",
    width: 200,
  },
];

export const logColumns = [
  { field: "id", headerName: "ID", width: 125 },
  {
    field: "description",
    headerName: "Cost",
    width: 100,
  },
  {
    field: "cost",
    headerName: "Cost",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "createdAt",
    headerName: "Created",
    width: 200,
  },
]

export const requestColumns = [
  {
    field: "id",
    headerName: "Id",
    width: 200,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 120,
  },
  {
    field: "date_requested",
    headerName: "Requested on",
    width: 200,
  },  
  {
    field: "email",
    headerName: "Requested by",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
]