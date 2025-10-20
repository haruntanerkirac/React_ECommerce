import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import Loading from './components/Loading'
import RouterConfig from './config/RouterConfig'

function App() {


  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  )
}

export default App
