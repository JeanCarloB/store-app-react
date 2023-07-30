
import { Routes, Route, Navigate } from 'react-router-dom'
import { ProductosProvider } from '../context/ProductosProvider'
import { NavBar } from './NavBar'
import { ComprasPage } from '../pages/ComprasPage'
import { CarritoPage } from '../pages/CarritoPage'
import { CarritoProvider } from '../context/CarritoProvider'

export const CarritoApp = () => {
    return (
        <ProductosProvider>
            <CarritoProvider>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path='/' element={<ComprasPage />}></Route>
                        <Route path='/carrito' element={<CarritoPage />}></Route>
                        <Route path='/*' element={<Navigate to='/' />}></Route>
                    </Routes>
                </div>
            </CarritoProvider>
        </ProductosProvider>
    )
}
