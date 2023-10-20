import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'

const Router = () => {
  return useRoutes([
    {path: '/',element: <Layout>
        <Home />
    </Layout>}
  ])
}

export default Router