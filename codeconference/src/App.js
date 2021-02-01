import { useState, useEffect } from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { EventComponent } from './components/EventComponent';
import { EventTalkComponent } from './components/EventTalkComponent';
import * as GetEvents from './api/getEvents';

function App() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    GetEvents.getAllEvents().then((dataEvents) => {
      if (dataEvents) {
        setEvents(dataEvents);
      }
    }).catch(err => {
      console.log('Error on get API')
    })
  }, []);

  return (
    <div className="pageGeneric">
      <HeaderComponent />
      <main className="siteMain">
        <div className="mainWrap">
          <header className="schedule-header">
            <h1 className="schedule-heading">Schedule</h1>
          </header>
          <div className="schedule-list active">
            {events.map(event => (  //map scorre tutti gli elementi dell'array e per ogni elemento esegue la arrow function  
              event.type === "basic" ? (
                <EventComponent key={event.id} time={event.time} title={event.title} location={event.location} image={event.image} />
              ) : (
                  <EventTalkComponent key={event.id} time={event.time} title={event.title} person={event.person} image={event.image} />
                )
            ))}
          </div>
        </div>
      </main>
      <FooterComponent />
    </div>
  );
}

export default App;
