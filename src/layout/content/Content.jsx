import React from 'react';
import {Route, Routes} from "react-router-dom";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import {CategoriesPage, ContainerPage, ProductsPage} from "../../pages";

const Content = () => {
    return (
        <div className="contentPage">
            <Routes>
                <Route
                    path="*"
                    element={
                        <ErrorPage/>
                    }/>
                <Route
                    path="/"
                    element={
                        <ContainerPage/>
                    }/>
                <Route
                    path="/products-page"
                    element={
                        <ContainerPage>
                            <ProductsPage/>
                        </ContainerPage>
                    }/>
                <Route
                    path="/categories-page"
                    element={
                        <ContainerPage>
                            <CategoriesPage/>
                        </ContainerPage>
                    }/>
            </Routes>
        </div>
    );
};

export default Content;