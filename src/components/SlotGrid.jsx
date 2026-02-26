import React from "react";

export default function SlotGrid({
  slots,
  selected,
  setSelected,
  cancelBooking,
  bookSlot,
  expandedSlot,
  setExpandedSlot,
}) {
  return (
    <div className="row g-4 mt-3">
      {slots.map((slot) => (
        <div key={slot.id} className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm rounded-4 p-3 h-100 border-0">

            {/* ================= SLOT HEADER ================= */}
            <div
              className="bg-primary text-white text-center fw-bold py-3 rounded-4"
              style={{ cursor: "pointer", fontSize: "18px" }}
              onClick={() =>
                setExpandedSlot(
                  expandedSlot === slot.id ? null : slot.id
                )
              }
            >
              Slot {slot.id}
            </div>

            {/* ================= TIME SLOTS ================= */}
            {expandedSlot === slot.id && (
              <div className="mt-3">

                {slot.times.map((t, index) => {
                  const isSelected =
                    selected &&
                    selected.slotId === slot.id &&
                    selected.timeIndex === index;

                  const isOccupied = t.status === "occupied";

                  return (
                    <div
                      key={index}
                      className={`d-flex justify-content-between align-items-center mb-2 p-2 rounded-3 transition ${
                        isOccupied
                          ? "bg-danger text-white"
                          : isSelected
                          ? "bg-success text-white"
                          : "bg-light"
                      }`}
                      style={{
                        cursor: isOccupied ? "not-allowed" : "pointer",
                        transition: "0.3s ease",
                      }}
                      onClick={() => {
                        if (!isOccupied) {
                          setSelected({
                            slotId: slot.id,
                            timeIndex: index,
                          });
                        }
                      }}
                    >
                      {/* Time Label */}
                      <span className="fw-medium">{t.time}</span>

                      {/* If Occupied → Cancel Button */}
                      {isOccupied && (
                        <button
                          className="btn btn-sm btn-light"
                          onClick={(e) => {
                            e.stopPropagation();
                            cancelBooking(slot.id, index);
                          }}
                        >
                          Cancel
                        </button>
                      )}

                      {/* If Selected & Available → Book Button */}
                      {isSelected && !isOccupied && (
                        <button
                          className="btn btn-sm btn-success"
                          onClick={(e) => {
                            e.stopPropagation();
                            bookSlot(slot.id, index);
                          }}
                        >
                          Book
                        </button>
                      )}
                    </div>
                  );
                })}

              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
