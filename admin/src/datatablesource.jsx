export const userColumns = [
  {
    field: "username",
    headerName: "Username",
    flex: 1,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || 'https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png'} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created",
    flex: 1,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated",
    flex: 1
  }
];

export const equipmentColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
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
    flex: 1,
  },
  {field: "equipment_condition", 
    headerName: "Condition",
    flex: 1
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
    width: 1,
  },
];


export const workOrderColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "cost",
    headerName: "Cost",
    flex: 1,
  },
  {
    field: "status",
    headerName: "Status",
    flex: 1,
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
    flex: 1,
  },
];

export const logColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "details",
    headerName: "Details",
    flex: 1,
  },
  {
    field: "createdAt",
    headerName: "Created",
    flex: 1,
  },
]

export const requestColumns = [
  {
    field: "description",
    headerName: "Description",
    flex: 1,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
  },
  {
    field: "location",
    headerName: "Location",
    flex: 1,
  },
  {
    field: "date_requested",
    headerName: "Requested on",
    flex: 1,
  },  
  {
    field: "email",
    headerName: "Requested by",
    flex: 1,
  },
]