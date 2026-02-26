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

  const toggleSlot = (slotNumber) => {
    if (bookedSlots[slotNumber]) return;
    setOpenSlot(openSlot === slotNumber ? null : slotNumber);
  };

  const handleSelectTime = (slotNumber, time) => {
    setSelectedTimes((prev) => ({
      ...prev,
      [slotNumber]: time,
    }));
  };

  const handleBook = (slotNumber, time) => {
    setBookedSlots((prev) => ({
      ...prev,
      [slotNumber]: true,
    }));

    setSelectedTimes((prev) => ({
      ...prev,
      [slotNumber]: time,
    }));

    setOpenSlot(null);
  };

  return (
    <div className="parking-wrapper">
      {Array.from({ length: totalSlots }, (_, index) => {
        const slotNumber = index + 1;
        const isBooked = bookedSlots[slotNumber];
        const selectedTime = selectedTimes[slotNumber];

        return (
          <div key={slotNumber} className="parking-card">
            <div
              className={`parking-slot ${isBooked ? "booked" : ""}`}
              onClick={() => toggleSlot(slotNumber)}
            >
              Slot {slotNumber}
              {isBooked && (
                <span className="booked-time">
                  {" "}({selectedTime})
                </span>
              )}
            </div>

            {openSlot === slotNumber && !isBooked && (
              <div className="time-container">
                {timeSlots.map((time, i) => (
                  <div key={i} className="time-row">
                    <button
                      className={`time-btn ${
                        selectedTime === time ? "active" : ""
                      }`}
                      onClick={() => handleSelectTime(slotNumber, time)}
                    >
                      {time}
                    </button>

                    {selectedTime === time && (
                      <button
                        className="book-btn"
                        onClick={() => handleBook(slotNumber, time)}
                      >
                        Book
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
}
