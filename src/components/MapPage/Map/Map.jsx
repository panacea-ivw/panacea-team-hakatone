import React, { useEffect } from 'react';
import { MapWrapper } from './MapWrapper';
import { load } from '@2gis/mapgl';

export const Map = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [43.98157, 56.326455],
                zoom: 18,
                key: '60fc20c8-4850-4401-9665-e8dba974c49b',
            });
            const marker = new mapglAPI.Marker(map, {
                coordinates: [43.98157, 56.326455],
            });
            const tooltipEl = document.getElementById('tooltip');

            marker.on('mouseover', (event) => {
                const offset = 5;

                tooltipEl.style.top = `${event.point[1] + offset}px`;
                tooltipEl.style.left = `${event.point[0] + offset}px`;
                tooltipEl.style.display = 'block';
            });

            marker.on('mouseout', (e) => {
                tooltipEl.style.display = 'none';
            })
        });
    }, []);

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative', margin: 0, padding: 0 }}>
            <div id="map-container" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
                <MapWrapper />
            </div>
            <div id="tooltip" style={{ display: 'none', position: 'absolute', padding: '20px 40px', background: '#fff', boxShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', borderRadius: '4px', pointerEvents: 'none' }}>Номер опоры: 1, <br/>Принадлежность опоры: Россети, <br/>Координаты: 48.635151 53.623616, <br/>Аварийность: нет, <br/>Загруженность: 4/5, <br/>Незаконные подключения: нет</div>
        </div>
    );
};