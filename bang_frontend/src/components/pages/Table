import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button} from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Dato', firstName: 'Bil', age: 20 },
  { id: 2, lastName: 'Carbonara', firstName: 'Rian', age: 80 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  
];

export default function Table() {

  return (
        <div className="App">
            <header className="App-header">
            <h1> Registered Users </h1>
                <div style={{margin:90,borderRadius:10,height: 400, width: '80%' ,backgroundColor:'white'}}>
                     <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    
                    
                />
                
                
                </div>
            </header>
        </div>
  );
}
