<template>
    <div id="map"></div>
</template>

<script>
    export default {
        mounted() {
            window.kakao && window.kakao.maps ? this.initMap() : this.addScript();
        },

        methods: {
            initMap() {
                var container = document.getElementById("map");
                var options = {
                    center: new kakao.maps.LatLng(37.20993410884578, 127.05867025427891),
                    level: 3
                };

                var map = new kakao.maps.Map(container, options);

                // 마커를 추가하기 위해 Object를 함께 생성
                var marker = new.kakao.maps.Marker ({
                    position: map.getCenter()
                });
                marker.setMap(map);
            },

            addScript() {
                const script = document.createElement("script");
                    script.onload = () => kakao.maps.load(this.initMap);
                    script.src = "http://dapi.kakao.com/v2/maps/sdk.js?appkey=76ca9236bc363cb579d11ca8d617f00b&libraries=services";
                document.head.appendChild(script);
            }
             
        }
    }
</script>

<style scoped lang="scss">
    @import "@/assets/stylesheets/index.scss";

    #map {
        @include css-size(1200px, 800px);
    }
</style>