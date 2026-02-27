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

  /* ================= SLOT TOGGLE ================= */
  const toggleSlot = (slotNumber) => {
    if (bookedSlots[slotNumber]) return; // prevent opening booked slot
    setOpenSlot((prev) =>
      prev === slotNumber ? null : slotNumber
    );
  };

  /* ================= SELECT TIME ================= */
  const handleSelectTime = (slotNumber, time) => {
    if (bookedSlots[slotNumber]) return;

    setSelectedTimes((prev) => ({
      ...prev,
      [slotNumber]: time,
    }));
  };

  /* ================= BOOK SLOT ================= */
  const handleBook = (slotNumber) => {
  console.log("CONFIRM CLICKED", slotNumber);   // 👈 ADD THIS LINE

  const selectedTime = selectedTimes[slotNumber];
  if (!selectedTime) return;

  setBookedSlots((prev) => ({
    ...prev,
    [slotNumber]: selectedTime,
  }));

  setOpenSlot(null);
};

  /* ================= CANCEL BOOKING ================= */
  const handleCancel = (slotNumber) => {
    setBookedSlots((prev) => {
      const updated = { ...prev };
      delete updated[slotNumber];
      return updated;
    });

    setSelectedTimes((prev) => {
      const updated = { ...prev };
      delete updated[slotNumber];
      return updated;
    });
  };

  return (
    <div className="parking-wrapper">
      {Array.from({ length: totalSlots }, (_, index) => {
        const slotNumber = index + 1;
        const isBooked = bookedSlots[slotNumber];
        const selectedTime = selectedTimes[slotNumber];

        return (
          <div key={slotNumber} className="parking-card">

            {/* ================= SLOT HEADER ================= */}
            <div
              className={`parking-slot ${isBooked ? "booked" : ""}`}
              onClick={() => toggleSlot(slotNumber)}
            >
              Slot {slotNumber}

              {isBooked && (
                <span className="booked-time">
                  {isBooked}
                </span>
              )}
            </div>

            {/* ================= TIME LIST ================= */}
            {openSlot === slotNumber && !isBooked && (
              <div className="time-container">
                {timeSlots.map((time, i) => (
                  <div key={i} className="time-row">
                    <button
                      className={`time-btn ${
                        selectedTime === time ? "active" : ""
                      }`}
                      onClick={() =>
                        handleSelectTime(slotNumber, time)
                      }
                    >
                      {time}
                    </button>

                    {selectedTime === time && (
                      <button
                        className="book-btn"
                         style={{ marginTop: "12px", background: "#dc3545" }}
                        onClick={() => handleBook(slotNumber)}
                      >
                        Confirm Booking
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* ================= CANCEL BUTTON ================= */}
            {isBooked && (
              <button
                className="book-btn"
                style={{ marginTop: "12px", background: "#dc3545" }}
                onClick={() => handleCancel(slotNumber)}
              >
                Cancel Booking
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Registration form 
// login form 
// Pre-booking   
// parking person name 
// transport type,timing  
// fee -cash or upi 

