
import { useEffect, useState } from 'react';
import CarCard from './CarCard';

const Car = () => {
    const [cars, setCars] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 6;

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, []);

    // Filter cars based on the search query
    const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate pagination indexes
    const startIndex = (currentPage - 1) * carsPerPage;
    const endIndex = startIndex + carsPerPage;
    const displayedCars = filteredCars.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPageCount = Math.ceil(filteredCars.length / carsPerPage);

    // Create an array of page numbers to render
    const pageNumbers = Array.from({ length: Math.min(totalPageCount, 10) }, (_, i) => i + 1);

    // Handle page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Handle "Next" and "Previous" buttons
    const handleNextPage = () => {
        if (currentPage < totalPageCount) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='lg:p-10 p-4'>
            <input
                type="text"
                placeholder="Search by name"
                className="input input-bordered w-24 md:w-auto mb-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
                {displayedCars.map((car) => (
                    <CarCard key={car._id} car={car}></CarCard>
                ))}
            </div>
            <div className="mt-4 flex justify-center gap-2 items-center">
                <button className='btn btn-outline btn-xs normal-case' onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <div className="flex gap-2">
                    {pageNumbers.map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={pageNumber === currentPage ? "active" : ""}
                        >
                            {pageNumber}
                        </button>
                    ))}
                </div>
                <button className='btn btn-outline btn-xs normal-case' onClick={handleNextPage} disabled={currentPage === totalPageCount}>Next</button>
            </div>
        </div>
    );
};

export default Car;

