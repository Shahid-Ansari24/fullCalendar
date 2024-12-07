import logo from './logo.svg';
import './App.css';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import rrulePlugin from '@fullcalendar/rrule';


const events = [
  { title: 'Meeting', start: new Date() }
]


function App() {
  return (
    <div className="App">
      <FullCalendar
        plugins={[dayGridPlugin, rrulePlugin]}
        initialView="dayGridMonth" // Set the initial view to a month grid
        events={[
          {
            title: 'John\'s Birthday',
            rrule: {
              freq: 'yearly',
              dtstart: '1990-05-15T00:00:00', // Start date (can be a past year)
            },
          },
          {
            title: 'Jane\'s Birthday',
            rrule: {
              freq: 'yearly',
              dtstart: '2000-12-25T00:00:00', // Start date (can be a past year)
            },
          },
          {
            title: 'Michael\'s Birthday',
            rrule: {
              freq: 'yearly',
              dtstart: '1985-03-10T00:00:00', // Start date (can be a past year)
            },
          },
        ]}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek',
        }}
        height="auto"
      />

    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}

export default App;
