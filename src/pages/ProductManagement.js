import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ProductHeader from '../components/ProductHeader/ProductHeader'
import ProductManagement from '../components/ProductManagement/ProductManagement'
export default () =>
    <Layout>
        <ProductHeader></ProductHeader>
        <ProductManagement></ProductManagement>
    </Layout>
