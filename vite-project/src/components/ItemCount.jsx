import React, { useRef, useState } from 'react'
import { InputNumber } from 'primereact/inputnumber';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const ItemCount = () => {
    const toast = useRef(null);
    const stock = 5;
    const [count, setCount] = useState(1);

    const showSuccess= () => {
        toast.current.show({severity: 'success', summary: 'Agregado con exito' , detail: `${count} producto(s) agregados con exito`});
    };
    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <div className='d-flex '>    
    <InputNumber 
    inputId="horizontal" 
    value={count} onValueChange={(e) => setCount(e.value)} 
    showButtons buttonLayout="horizontal" 
    step={1}
    decrementButtonClassName="p-button-danger" 
    incrementButtonClassName="p-button-primary" 
    incrementButtonIcon="pi pi-plus" 
    decrementButtonIcon="pi pi-minus" 
    mode="decimal"
    min={0} max={stock}
    size="1"/>
    <Button onClick={showSuccess} label="Agregar" className=" ml-3 p-button-outlined" />
        </div>
    );

  return (
    <div> 
    <Toast ref={toast} />
    <Card 
    title="Item" subTitle="Precio" style={{ width: '20em' }} footer={footer} header={header}>
    </Card>
    </div>
  )
}
