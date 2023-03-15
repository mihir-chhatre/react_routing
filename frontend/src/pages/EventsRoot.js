//EventRouteLayout is like a wrapper around to the other pages where content of those pages is rendered to the location where Outlet is a marker

import { Outlet } from "react-router";

import EventsNavigation from '../components/EventsNavigation'


function EventsRootLayout() {
    return (
        <>
          <EventsNavigation></EventsNavigation>
          <Outlet></Outlet>
          </>
      );
}

export default EventsRootLayout