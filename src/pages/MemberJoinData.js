import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import MemberManagement from '../components/MemberManagement/MemberManagement'
import MemberJoinData from '../components/MemberJoinData/MemberJoinData'
export default () =>
    <Layout>
        <MemberManagement></MemberManagement>
        <MemberJoinData></MemberJoinData>
    </Layout>
