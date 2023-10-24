import React, { useState } from 'react';
import { FaArrowLeft, FaPlusCircle } from 'react-icons/fa';

const Directions = () => {
    const [isFormExpanded, setIsFormExpanded] = useState(true);
    const [address, setAddress] = useState('');
    const [addresses, setAddresses] = useState([]);

    const toggleForm = () => {
        setIsFormExpanded(!isFormExpanded);
    };

    const handleAddAddress = (event) => {
        event.preventDefault();
        setAddresses([address, ...addresses]);
        setAddress('');
    };

    return (
        <div className="h-screen flex justify-center items-start">
            <div className="bg-white p-4 rounded-lg w-80">
                <div className="flex items-center space-x-6 mb-[5rem] pt-10">
                    <span onClick={toggleForm} className="cursor-pointer text-[#41BCAC]">
                        <FaArrowLeft />
                    </span>
                    <h1 className="text-2xl font-bold text-black">Mis direcciones</h1>
                </div>
                {isFormExpanded && (
                    <form onSubmit={handleAddAddress}>
                        <div class="flex items-center justify-between mb-6 bg-slate-100 ">
                            <label class="text-gray-700 font-bold pl-2" for="nombre">
                                Casa
                            </label>
                            <input class="
                                    bg-slate-100 text-right  appearance-none  rounded 
                                    py-2 px-3 text-gray-700 leading-tight focus:outline-none 
                                    focus:-outline w-1/2 " id="nombre"
                                type="text" placeholder="Crnel. Pouch 750" value={address} onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div>
                            <button type="submit"
                                className="flex items-center  space-x-2 w-full py-2 mt-4 text-sm font-medium
                                text-black bg-[#D2EBE7] rounded-2xl hover:bg-[#bebebe] focus:outline-none
                                shadow-bottom-black focus:ring-2 focus:ring-offset-2 focus:ring-[#41BCAC]">
                                <span className='text-[#41BCAC] ml-4 mr-4 text-xl'><FaPlusCircle /></span>
                                Agregar dirección
                            </button>
                        </div>
                        <ul className={`bg-slate-100 mt-4 text-black ${addresses.length >= 10 ? 'overflow-auto max-h-[10rem]' : ''}`}>
                            {addresses.map((address, index) => (
                                <li className='ml-2' key={index}>{address}
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#41BCAC] shadow-bottom-black text-white text-base rounded-[24px] w-[220px] h-[40px] mt-4">
                                GUARDAR CAMBIOS
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};
export default Directions;
