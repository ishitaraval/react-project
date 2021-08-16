import React from 'react'
import Layout from 'components/Layout'
import Products from 'pages/Products'

const FourOhFour = () => {
  return (
    <Layout>
      <h1>Woops</h1>
      <p>This path does not exist</p>
      <p>click the link: <a href= {productsAr}>iphone products</a></p>
    </Layout>
  )
}

export default FourOhFour