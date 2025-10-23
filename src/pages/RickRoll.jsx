import './RickRoll.css'

function RickRoll() {
  return (
    <div className="rickroll-container">
      <div className="rickroll-wrapper">
        <iframe
          className="rickroll-iframe"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="rickroll-message">
          <h1>🎵 You've Been Rick Rolled! 🎵</h1>
          <p>Never Gonna Give You Up, Never Gonna Let You Down</p>
        </div>
      </div>
    </div>
  )
}

export default RickRoll
