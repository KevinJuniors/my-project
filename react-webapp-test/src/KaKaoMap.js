import React, { useEffect, useState, useRef } from "react";

export default function KaKaoMap(props) {
    const { markerPositions, size } = props;
    const [kakaoMap, setKaKaoMap] = useState(null);
    const [, setMarkers] = useState([]);
    const container = useRef();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = 
            "//dapi.kakao.com/v2/maps/sdk.js?appkey=76ca9236bc363cb579d11ca8d617f00b&libraries=services";
        document.head.appendChild(script);
        
        script.onload = () => {
            kakao.maps.load(() => {
              const center = new kakao.maps.LatLng(37.50802, 127.062835);
              const options = {
                center,
                level: 3
              };
              const map = new kakao.maps.Map(container.current, options);
              //setMapCenter(center);
              setKakaoMap(map);
            });
          };
        }, [container]);
      
        useEffect(() => {
          if (kakaoMap === null) {
            return;
          }
      
          // save center position
          const center = kakaoMap.getCenter();
      
          // change viewport size
          const [width, height] = size;
            container.current.style.width = `${width}px`;
            container.current.style.height = `${height}px`;
      
            kakaoMap.relayout();
            kakaoMap.setCenter(center);
        }, [kakaoMap, size]);

        useEffect(() => {
            if (kakaoMap === null) {
                return;
            }

            const positions = markerPositions.map(pos => new kakao.maps.LatLng(...pos));

            setMarkers(markers => {
                markers.forEach(markers => marker.setMap(null));
                
                return positions.map(
                    positions => new kakao.maps.Marker({
                        map: kakaoMap, position
                    })
                );
            });

            if (positions.length > 0) {
                const bounds = positions.reduce(
                    (bounds, latlng) => bounds.extend(latlng),
                    new kakao.maps.LatLngBounds()
                );

                kakaoMap.setBounds(bounds);
            }
        }, [kakaoMap, markerPositions]);

        return (
            <div id="container" ref={container}></div>
        );
}