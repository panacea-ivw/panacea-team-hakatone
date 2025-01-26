import React, { useState } from 'react';
import { supabase } from '../../Auth/supabaseConfig';
import './addPointe.css';

function AddPointe() {
    const [affilation, setAffilation] = useState('');
    const [coordinates, setCoordinates] = useState('');
    const [accident, setAccident] = useState(false);
    const [workload, setWorkload] = useState(0);
    const [ilConnection, setIlConnection] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data, error } = await supabase
            .from('points')
            .insert([
                { affilation, coordinates, accident, workload, ilConnection }
            ]);

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data inserted successfully:', data);
        }
    };

    return (
        <div className="AddPointeContainer">
            <form onSubmit={handleSubmit}>
                <h1 className='AddPointeTitle'>Добавить точку</h1>
                <p className='text'>Номер точки</p>
                <input
                    className='ped'
                    type="text"
                    placeholder='Введите номер точки'
                    value={affilation}
                    onChange={(e) => setAffilation(e.target.value)}
                />
                <p className='text'>Координаты</p>
                <input
                    className='ped'
                    type="text"
                    placeholder='Введите координаты'
                    value={coordinates}
                    onChange={(e) => setCoordinates(e.target.value)}
                />
                <p className='text'>Аварийность</p>
                <select
                    className='ped'
                    value={accident}
                    onChange={(e) => setAccident(e.target.value === '1')}
                >
                    <option value="1">Да</option>
                    <option value="0">Нет</option>
                </select>
                <p className='text'>Загруженность</p>
                <input
                    className='ped'
                    type="number"
                    placeholder='Введите количество подключений к столбу (0/5)'
                    value={workload}
                    onChange={(e) => setWorkload(parseInt(e.target.value))}
                />
                <p className='text'>Незаконные подключений</p>
                <select
                    className='ped'
                    value={ilConnection}
                    onChange={(e) => setIlConnection(e.target.value)}
                >
                    <option value="1">Да</option>
                    <option value="0">Нет</option>
                </select>
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

export default AddPointe;