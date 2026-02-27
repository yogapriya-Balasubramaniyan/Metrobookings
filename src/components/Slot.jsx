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
<<<<<<< HEAD
    if (bookedSlots[slotNumber]) return; // prevent opening booked slot
    setOpenSlot((prev) =>
      prev === slotNumber ? null : slotNumber
    );
=======
    if (bookedSlots[slotNumber]) return;
    setOpenSlot((prev) => (prev === slotNumber ? null : slotNumber));
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
  };

  /* ================= SELECT TIME ================= */
  const handleSelectTime = (slotNumber, time) => {
<<<<<<< HEAD
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
=======
    setSelectedTimes((prev) => ({
      ...prev,
      [slotNumber]: time,
    }));
  };

  /* ================= BOOK SLOT ================= */
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
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
  };

  return (
    <div className="parking-wrapper">
      {Array.from({ length: totalSlots }, (_, index) => {
        const slotNumber = index + 1;
        const isBooked = bookedSlots[slotNumber];
        const selectedTime = selectedTimes[slotNumber];

        return (
          <div key={slotNumber} className="parking-card">
<<<<<<< HEAD

=======
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
            {/* ================= SLOT HEADER ================= */}
            <div
              className={`parking-slot ${isBooked ? "booked" : ""}`}
              onClick={() => toggleSlot(slotNumber)}
            >
              Slot {slotNumber}
<<<<<<< HEAD

              {isBooked && (
                <span className="booked-time">
                  {isBooked}
=======
              {isBooked && (
                <span className="booked-time">
                  {selectedTime}
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
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
<<<<<<< HEAD
                      onClick={() =>
                        handleSelectTime(slotNumber, time)
                      }
=======
                      onClick={() => handleSelectTime(slotNumber, time)}
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
                    >
                      {time}
                    </button>

                    {selectedTime === time && (
                      <button
                        className="book-btn"
<<<<<<< HEAD
                         style={{ marginTop: "12px", background: "#dc3545" }}
                        onClick={() => handleBook(slotNumber)}
                      >
                        Confirm Booking
=======
                        onClick={() => handleBook(slotNumber, time)}
                      >
                        Book
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
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
<<<<<<< HEAD

// Registration form 
// login form 
// Pre-booking   
// parking person name 
// transport type,timing  
// fee -cash or upi 

=======
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
