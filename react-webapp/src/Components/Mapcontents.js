import React, { Component } from "react";

class MapContents extends Component {
    componentDidMount() {
        const mapContent = document.createElement(mapContent);
            mapContent.async = true;
            // mapContent.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76ca9236bc363cb579d11ca8d617f00b&libraries=services"
            document.head.appendChild(mapContent);

        mapContent.onload = () => {
            kakao.maps.load(() => {
                const mapContainer = document.getElementById("map");
                const mapOption = {
                    center: new kakao.maps.LatLng(37.20993410884578, 127.05867025427891), // 지도의 중심좌표
                    level: 3 // 지도의 확대 레벨
                };

                const map = new.kako.maps.Map(mapContainer, mapOption);
            });
        };
    }
}

export default Mapcontents;