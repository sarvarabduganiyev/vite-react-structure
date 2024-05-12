
export type OpenGeoProps = {
    lat: number;
    long: number;
};


export const openGeo = ({ lat, long }: OpenGeoProps) => {
    const geoLink = document.createElement("a");
    // geoLink.href = `http://maps.google.com/maps?z=12&t=m&q=loc:${lat},${long}&daddr=${lat},${long}`;
    geoLink.href = `https://yandex.com/maps/10335/tashkent/?ll=${undefined}%2C${undefined}&mode=routes&rtext=${undefined}%2C${undefined}~${lat}%2C${long}&rtt=auto&ruri=ymapsbm`;

    geoLink.target = "_blank";
    geoLink.click();
    geoLink.remove();
};
