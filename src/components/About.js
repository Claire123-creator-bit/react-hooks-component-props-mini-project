


function About() {
  return (
    <section className="profile-section">
      <img
        className="profile-avatar"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Dan Abramov avatar"
      />
      <div className="profile-info">
        <span className="profile-desc">
          Personal blog by{' '}
          <a href="https://overreacted.io/" target="_blank" rel="noopener noreferrer">Dan Abramov</a>.
        </span>
        <span className="profile-desc">I explain with words and code.</span>
      </div>
    </section>
  );
}

export default About;
