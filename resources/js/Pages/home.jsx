import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // Default to the first event
  const [activeEvent, setActiveEvent] = useState(null); // Active event for displaying at the top

  useEffect(() => {
    axios.get('http://localhost:8000/api/events')
      .then(response => {
        setEvents(response.data);
        if (response.data.length > 0) {
          setActiveEvent(response.data[0]); // Set the first event as default
        }
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index); // Set the clicked year as active
    setActiveEvent(events[index]); // Update the active event for displaying
  };

  return (
    <div className="timeline-container">
      <div className="timeline">
        <div className="timeline-item-line"></div>
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div
              className={`timeline-year ${activeIndex === index ? 'active' : ''}`} // Add active class if clicked
              onClick={() => handleClick(index)} // Handle click event
            >
              {event.year}
            </div>
          </div>
        ))}
      </div>
      {activeEvent && (
        <div className="event-details">
          <h3>{activeEvent.title}</h3>
          <p>{activeEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
