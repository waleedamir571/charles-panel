import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Documents from '../../components/Network/NetworkDetail/Documents'

const DocumentPage = () => {
  return (
    <>
    <Sidebar />
    <section className="main_content dashboard_part large_header_bg">
      <Header />
      <Documents />
    </section>
    <Footer />
  </>
  )
}

export default DocumentPage