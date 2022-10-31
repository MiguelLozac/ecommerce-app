import React from 'react'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { CartWidget } from './CartWidget';



export const NavBar = () => {
    const items = [
        {
            label: 'Inicio'
        },
        {
            label: 'Nosotros'
        },
        {
            label: 'Categorias',
            items: [
                {
                    label: 'Hombre',
                },
                {
                    label: 'Mujer',
                }
            ]
        },
        {
            label: 'Novedades',
        },
        {
            label: 'Especiales',
        },
    ];

    const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
    const end = <CartWidget/>;
  return (
    <>
        <div >
            <Menubar model={items} start={start} end={end} />
        </div>
    </>
  )
}
