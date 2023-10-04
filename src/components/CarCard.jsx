import { BsPeople, BsFuelPumpFill, BsSpeedometer } from 'react-icons/bs';
import { MdOutlineBrightnessAuto, MdFavoriteBorder } from 'react-icons/md';


const CarCard = ({car}) => {
    const { _id, image, name, people_number, price, year, fuel, liter_range, system_name } = car;

    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img className='h-80 rounded p-3' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="flex justify-between mb-4">
                        <h2 className="card-title">{name}</h2>
                        <h2 className="card-title">{year}</h2>
                    </div>
                    <div className='grid grid-cols-2 mb-4'>
                        <div className='flex items-center gap-2'>
                            <span><BsPeople></BsPeople></span>
                            <span>{people_number} People</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><BsFuelPumpFill></BsFuelPumpFill></span>
                            <span>{fuel}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><BsSpeedometer></BsSpeedometer></span>
                            <span>{liter_range}</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span><MdOutlineBrightnessAuto></MdOutlineBrightnessAuto></span>
                            <span>{system_name}</span>
                        </div>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-4">
                        <h2><span className='text-xl font-semibold'>${price}</span>/month</h2>
                        <div className='flex items-center gap-2'>
                            <div className='bg-sky-300 h-8 w-8 pl-2 py-2 btn-circle '><MdFavoriteBorder></MdFavoriteBorder></div>
                            <button className='btn btn-primary normal-case btn-sm'>Rent now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;