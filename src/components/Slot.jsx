import { useState } from "react";
import "./Slot.css";

export default function Slot() {
  const totalSlots = 12;

  const timeSlots = [
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 1:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  const [openSlot, setOpenSlot] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState({});
  const [bookedSlots, setBookedSlots] = useState({});

  const handleSelectTime = (slot, time) => {
    setSelectedTimes({ ...selectedTimes, [slot]: time });
  };

  const handleBook = (slot) => {
    if (!selectedTimes[slot]) {
      alert("Please select a time first!");
      return;
    }

    setBookedSlots({ ...bookedSlots, [slot]: true });
    setOpenSlot(null);
  };

  return (
    <div className="parking-wrapper">
      {Array.from({ length: totalSlots }, (_, index) => {
        const slotNumber = index + 1;
        const isBooked = bookedSlots[slotNumber];

        return (
          <div key={slotNumber} className="parking-card">
            <div
              className={`parking-slot ${isBooked ? "booked" : ""}`}
              onClick={() =>
                !isBooked &&
                setOpenSlot(openSlot === slotNumber ? null : slotNumber)
              }
            >
              Slot {slotNumber}
            </div>

            {openSlot === slotNumber && !isBooked && (
              <div className="time-container">
                {timeSlots.map((time, i) => (
                  <button
                    key={i}
                    className={`time-btn ${
                      selectedTimes[slotNumber] === time
                        ? "active blink"
                        : ""
                    }`}
                    onClick={() => handleSelectTime(slotNumber, time)}
                  >
                    {time}
                  </button>
                ))}

                <button
                  className="book-btn"
                  onClick={() => handleBook(slotNumber)}
                >
                  Confirm Booking
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}