import { useState } from "react";
import SlotGrid from "./components/SlotGrid";
import Dashboard from "./components/Dashboard";

function App() {

  // Generate time slots (10AM – 8PM)
  const generateTimeSlots = () => {
    const times = [];
    for (let hour = 10; hour < 20; hour++) {
      const start = formatTime(hour);
      const end = formatTime(hour + 1);

      times.push({
        time: `${start} - ${end}`,
        status: "available",
      });
    }
    return times;
  };

  const formatTime = (hour) => {
    const suffix = hour >= 12 ? "PM" : "AM";
    const formatted = hour > 12 ? hour - 12 : hour;
    return `${formatted}:00 ${suffix}`;
  };

  // 🔥 20 Slots
  const initialSlots = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    times: generateTimeSlots(),
  }));

  const [slots, setSlots] = useState(initialSlots);
  const [selected, setSelected] = useState(null);
  const [expandedSlot, setExpandedSlot] = useState(null);

  const handleBooking = () => {
    if (!selected) return;

    const updated = slots.map((slot) => {
      if (slot.id === selected.slotId) {
        const updatedTimes = slot.times.map((t, index) =>
          index === selected.timeIndex
            ? { ...t, status: "occupied" }
            : t
        );
        return { ...slot, times: updatedTimes };
      }
      return slot;
    });

    setSlots(updated);
    setSelected(null);
    setExpandedSlot(null);
  };

  const cancelBooking = (slotId, timeIndex) => {
    const updated = slots.map((slot) => {
      if (slot.id === slotId) {
        const updatedTimes = slot.times.map((t, index) =>
          index === timeIndex
            ? { ...t, status: "available" }
            : t
        );
        return { ...slot, times: updatedTimes };
      }
      return slot;
    });

    setSlots(updated);
  };

  return (
    <div className="app-bg">
      <div className="container main-card">
        <h1 className="title">🚗 Welcome To Metro Smart Parking Bookings!!</h1>
        <p className="subtitle">
          20 Parking Slots | 10AM – 8PM
        </p>

        <Dashboard slots={slots} />

        <SlotGrid
          slots={slots}
          selected={selected}
          setSelected={setSelected}
          cancelBooking={cancelBooking}
          expandedSlot={expandedSlot}
          setExpandedSlot={setExpandedSlot}
        />

        <div className="text-center mt-4">
          <button
            className="btn btn-primary px-4 py-2 fw-bold"
            onClick={handleBooking}
            disabled={!selected}
          >
            Confirm Booking
          </button>

          <button
            className="btn btn-outline-secondary ms-3 px-4 py-2 fw-bold"
            onClick={() => setSelected(null)}
            disabled={!selected}
          >
            Cancel Selection
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;