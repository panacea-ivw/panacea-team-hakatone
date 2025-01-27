import React from "react";

export const MapWrapper = React.memo(
    () => {
        return <div id="map-container" style={{ width: '0%', height: '0%'}}></div>;
    },
    () => true,
);