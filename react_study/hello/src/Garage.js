function Car(props){
    return (
        <tr>
        <td>{'['}{ props.num+1 }{']'}</td>
        <td>{ props.car.brand }</td>
        <td>{ props.car.price }</td>
        <td>{ props.car.ex }</td>
        </tr>   
    );        
}

export default function Garage(){
    const cars = [
        {id: 1, brand: 'Porsche', price: 11000, ex: '911 Turbo S is famous'},
        {id: 2, brand: 'Audi', price: 8000, ex: '4 circles in logo'},
        {id: 3, brand: 'BMW', price: 7500, ex: 'From Germany'},
        {id: 4, brand: 'Ferrari', price: 9500, ex: 'horse'},
        {id: 5, brand: 'Mercedez', price: 10000, ex: 'Benz Maybach is my dream car'}
    ];
    return (
        <>
            <h1>Car List</h1>
            <table>{cars.map((car, i) => <Car num={i} car={car}/>)}</table>
        </>
    );
}