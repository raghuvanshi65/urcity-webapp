import React , {useState , useEffect , useContext} from 'react';
import { GeolocationContext } from '../Contexts/GeolocationContextProvider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import '../Style/Precipitation.css';

function Precipitation() {

    const { coordinates , weather } = useContext(GeolocationContext);

    const columns = 
    [
        {
            id : 'hr' , label : 'Time(in 24hrs)' , minwidth : 150
        } ,
        {
            id : 'pre' , label : 'Precipitation(in mm)' , minwidth : 120
        },
        {
            id : 'humid' , label : 'Humidity' , minwidth : 140
        }
    ]

    const useStyles = makeStyles({
        root: {
          width: '100%',
        },
        container: {
          maxHeight: 440,
        },
      });

    const classes = useStyles();
    return (
        <div className="Precipitation">
            <h4 id="pre" className="">Precipitation And Humidity</h4>
            <div className="PreTable">
            <Paper className={classes.root} maxHeight="200">
                <TableContainer className={classes.container}>
                    <Table stickyHeader area-label="sticky table"> 
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            weather.forecast.forecastday[0].hour.map((row)=>
                            {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    <TableCell>
                                        {row.time.split(" ")[1]}
                                    </TableCell>
                                    <TableCell>
                                    {row.precip_mm}
                                    </TableCell>
                                    <TableCell>
                                    {row.humidity}
                                    </TableCell>
                                </TableRow>
                                );
                            })
                        }
                    </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            </div>
        </div>
    )
}

export default Precipitation
