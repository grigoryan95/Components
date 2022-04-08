import * as React from 'react';
import {Loader} from "../index";
import {useEffect, useState} from "react";
import TableCell from '@mui/material/TableCell';
import {Input, Pagination} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {Table, Paper, TableContainer, TableBody, TableHead, TableRow} from '@mui/material';
import {setCategories} from "../../api/setCategories/setCategories";
import {changeIsLoaderActionCreatorCategories} from "../../redux/actions";

const CategoriesPage = () => {

    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const isLoader = useSelector(data => data.categoriesReducer.isLoader);
    const categories = useSelector(data => data.categoriesReducer.categories);
    const categoriesCount = useSelector(data => data.categoriesReducer.categoriesCount);

    const handleChange = (event) => {
        setCurrentPage(1);
        setName(event.target.value);
    };

    const changeCurrentPage = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        (async () => {
            dispatch(changeIsLoaderActionCreatorCategories());
            await dispatch(setCategories(name, (currentPage - 1) * 10));
            dispatch(changeIsLoaderActionCreatorCategories());
        })()
    }, [name, currentPage]);

    return (
        <div className="secondDiv">
            <Input name={name} handleChange={handleChange}/>
            {
                isLoader
                    ? <Loader/>
                    : <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Manufacturer</TableCell>
                                    <TableCell align="right">Box Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {categories.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{'&:last-child td': {border: 0}}}
                                    >
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell align="right">{item.price}</TableCell>
                                        <TableCell align="right">{item.producer}</TableCell>
                                        <TableCell align="right">{item.quantityInBox}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }
            <Pagination changeCurrentPage={changeCurrentPage} count={categoriesCount}/>
        </div>
    );
}

export default CategoriesPage;