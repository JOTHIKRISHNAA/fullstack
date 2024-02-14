import { DataGrid } from '@mui/x-data-grid';

// Sample data for rows and columns
const rows = [
  { id: 1, name: 'Krishnsarathy', age: "krishnsarathy@gmail.com", date: '31 Jan 2024',place:"Gandhipuram" },
  { id: 2, name: 'Sarathy', age: "sarathy@gmail.com", date: '31 Mar 2024',place:"Thudiyalur" },
  { id: 3, name: 'Vijay', age: "vijay@gmail.com", date: '31 Apr 2024',place:"RS Puram" },
  { id: 4, name: 'Vishnu', age: "vishnu@gmail.com", date: '5 Feb 2024',place:"Gandhipuram" },
  { id: 5, name: 'Kumaresan', age: "kumaresan@gmail.com", date: '8 Feb 2024',place:"Mettupalayam" },
  { id: 6, name: 'Kanthasamy', age: "kanthasamy@gmail.com", date: '14 Feb 2024',place:"Ukkadam" },
  { id: 7, name: 'Muthukumar', age: "muthukumar@gmail.com", date: '28 Feb 2024',place:"Saibaba Colony" },
  { id: 8, name: 'Ramesh', age: "rames@gmail.com", date: '31 June 2024',place:"Gandhipuram" },
  { id: 9, name: 'Sekar', age: "sekar@gmail.com", date: '2 Mar 2024',place:"Thudiyalur" },
  { id: 10, name: 'Nantha', age: "nantha@gmail.com", date: '10 Mar 2024',place:"Ukkadam" },
  
  // Add more rows as needed
];
for (let i = 11; i <= 100; i++) {
  rows.push({
    id: i,
    name: `Name${i}`,
    age: `Email${i}@example.com`,
    city: `User${i}`,
  });
}
const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'age', headerName: 'Email', width: 150 },
  { field: 'date', headerName: 'Event Date', width: 150 },
  { field: 'place', headerName: 'Venue', width: 150 },
  
  
  // Add more columns as needed
];

// Component usage with values
const Table1 = () => {
  return (
  
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default Table1;
