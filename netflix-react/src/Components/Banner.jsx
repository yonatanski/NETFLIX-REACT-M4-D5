import React from "react"

function Banner() {
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Red Dot</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner-discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          laborum repudiandae, cupiditate praesentium eius cumque odit officia
          ab possimus alias sequi obcaecati nostrum quis ad dolore illo
          excepturi fugiat incidunt!
        </h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  )
}

export default Banner
