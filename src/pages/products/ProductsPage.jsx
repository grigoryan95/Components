import * as React from 'react';
import {Loader} from "../index";
import {useEffect, useState} from "react";
import {Input, Pagination} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {setProducts} from "../../api/setProducts/setProducts";
import {changeIsLoaderActionCreatorProducts} from "../../redux/actions";
import { Table, Paper, TableBody, TableHead, TableRow, TableContainer, TableCell } from '@mui/material';

const ProductsPage = () => {
    //TODO -> add loader to redux
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const isLoader = useSelector(data => data.productsReducer.isLoader);
    const products = useSelector(data => data.productsReducer.products);
    const productsCount = useSelector(data => data.productsReducer.productsCount);

    const handleChange = (event) => {
        setCurrentPage(1);
        setName(event.target.value);
    };

    const changeCurrentPage = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        (async () => {
            dispatch(changeIsLoaderActionCreatorProducts());
            await dispatch(setProducts(name, (currentPage - 1) * 10));
            dispatch(changeIsLoaderActionCreatorProducts());
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
                                {products.map((item) => (
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
            <Pagination changeCurrentPage={changeCurrentPage} count={productsCount}/>
        </div>
    );
}

export default ProductsPage;