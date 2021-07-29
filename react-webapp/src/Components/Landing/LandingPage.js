import React, { useState } from "react";
import MapContainer from "maps/MapContainer";

function LandingPage() {
    const [InputText, setInputText] = useState("")
    const [Place, setPlace] = useState("")
    
    const onChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setPlace(InputText)
        setInputText("")
    }

    return (
        <div>
            <form className="inputForm" onSubmit={handleSubmit}>
                <input  placeholder="찾고자 하는 장소를 입력하세요." />
                <button type="submit">검색</button>
            </form>
        </div>
    )
}