import fondo from '../imagenes/fondo.jpg'

const Inicio = () => {
    return (
        <main className="bg-black w-[100%] h-[100%]">
            <div className="text-white text-4xl flex justify-around justify-center justify-items-center font-bold">
                <img className='h-[600px]' src={fondo} alt="" />
                <p className='flex items-center'>Venta de Comics<span className='text-red-700'>MARVEL</span></p>
            </div>
        </main>
    );
}

export default Inicio;