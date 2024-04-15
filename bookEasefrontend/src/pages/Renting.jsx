import React, { useEffect, useState } from 'react';
import style from "../css/renting.module.css";
import Singlebook from '../comp/Singlebook';
import Footer from '../comp/Footer';
import Addbookpopup from '../comp/Addbookpopup';
import { useNavigate } from 'react-router-dom';
export default function Renting({changeitem,loginstatus}) {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const [availability, setAvailability] = useState('All');
    const [sortOrder, setSortOrder] = useState('');
    let navigate=useNavigate()
    useEffect(() => {
        fetch("http://localhost:8080/books")
            .then(response => response.json())
            .then(data => {
                setData(data);
                setFilteredData(data);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        filterData();
    }, [searchTerm, selectedGenre, availability, sortOrder]);

    const filterData = () => {
        let filtered = data.filter(item => {
            if (searchTerm && !item.bookInfo.bookTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                return false;
            }
            if (selectedGenre !== 'All' && item.bookInfo.Genre !== selectedGenre) {
                return false;
            }
            if (availability !== 'All' && item.availableFor !== availability.toLowerCase()) {
                return false;
            }
            return true;
        });

        if (sortOrder === 'low-to-high') {
            filtered.sort((a, b) => parseFloat(a.bookInfo.bookRentPrice) - parseFloat(b.bookInfo.bookRentPrice));
        } else if (sortOrder === 'high-to-low') {
            filtered.sort((a, b) => parseFloat(b.bookInfo.bookRentPrice) - parseFloat(a.bookInfo.bookRentPrice));
        }

        setFilteredData(filtered);
    };

    const uniqueGenres = Array.from(new Set(data.map(item => item.bookInfo.Genre)));

    return (
        <>
            <div className={style.rentingbox}>
                <div className={style.searchandsellingbutton}>
                    <button onClick={() => {
                        
                        if (loginstatus) {
                            setToggle(true);
                        } else {
                            alert ("please signup or login first")
                            return
                        }
                        }} className={style.rentingbutton}>Add a book</button>
                    <div className={style.searchbox}>
                        <input placeholder='Search...' className={style.booksearch} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        <img src={"src/css/loupe.png"} alt="search icon" />
                    </div>

                </div>
                <div className={style.mainbox}>
                    <div className={style.filtersortbox}>
                        <div className={style.filterbox}>
                            <p>Filter</p>
                            <div className={style.Genre}>
                                <p>Genre :</p>
                                <select value={selectedGenre} onChange={e => setSelectedGenre(e.target.value)}>
                                    <option value="All">All</option>
                                    {uniqueGenres.map((genre, index) => (
                                        <option key={index} value={genre}>{genre}</option>
                                    ))}
                                </select>
                            </div>
                          

                        </div>
                        <div className={style.sortbox}>
                            <p>Sort</p>
                            <div className={style.price}>
                                <p>Price :</p>
                                <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                                    <option value="">None</option>
                                    <option value="low-to-high">Low to High</option>
                                    <option value="high-to-low">High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={style.booksectionbox}>
                        {filteredData.map((item, index) => (
                            <Singlebook loginstatus={loginstatus} changeitem={changeitem} key={index} item={item} />
                        ))}
                    </div>

                </div>

            </div>
            <Addbookpopup toggle={toggle} settoggle={setToggle} />
        </>
    );
}
