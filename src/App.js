import React from 'react'
import { ProductProvider } from './context/ProductsContext'
import { AppRouter } from './router/AppRouter'

const App = () => {
    return (
        <>
            <ProductProvider>
                <AppRouter />
            </ProductProvider>
        </>
    )
}

export default App