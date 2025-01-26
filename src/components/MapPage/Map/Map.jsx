import React, { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import {MapWrapper} from './MapWrapper';

export const Map = () => {
    useEffect(() => {
        let map;
        load().then((mapglAPI) => {
            map = new mapglAPI.Map('map-container', {
                center: [43.995383, 56.32971],
                zoom: 13,
                key: '60fc20c8-4850-4401-9665-e8dba974c49b',
            });
            const coords = [
                [43.995383, 56.32971],
                [43.993383, 57.32971],
            ];
            coords.forEach((coord) => {
                const marker = new mapgl.Marker(map, {
                    coordinates: coord,
                });
            });
        });

        // Clean up the map on component unmount
        return () => map && map.destroy();
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <MapWrapper />
        </div>
    );
};
