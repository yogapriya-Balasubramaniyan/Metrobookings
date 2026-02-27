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
    <div className="row g-4 mt-4">
      {slots.map((slot) => (
        <div key={slot.id} className="col-12 col-md-6 col-lg-4">
          <div className="card shadow border-0 rounded-4 h-100 p-3">

            {/* ===== Slot Header ===== */}
            <div
              className="bg-primary text-white text-center fw-semibold py-3 rounded-4"
              style={{ cursor: "pointer", fontSize: "17px" }}
              onClick={() =>
                setExpandedSlot(
                  expandedSlot === slot.id ? null : slot.id
                )
              }
            >
              Slot {slot.id}
            </div>

            {/* ===== Time Slots ===== */}
            {expandedSlot === slot.id && (
              <div className="mt-3">

                {slot.times.map((timeObj, index) => {
                  const isSelected =
                    selected?.slotId === slot.id &&
                    selected?.timeIndex === index;

                  const isOccupied = timeObj.status === "occupied";

                  let bgClass = "bg-light";
                  if (isOccupied) bgClass = "bg-danger text-white";
                  else if (isSelected) bgClass = "bg-success text-white";

                  return (
                    <div
                      key={index}
                      className={`d-flex justify-content-between align-items-center mb-2 px-3 py-2 rounded-3 ${bgClass}`}
                      style={{
                        transition: "all 0.25s ease",
                        cursor: isOccupied ? "not-allowed" : "pointer",
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
                      {/* Time */}
                      <span className="fw-medium">
                        {timeObj.time}
                      </span>

                      {/* Actions */}
                      <div>
                        {isOccupied && (
                          <button
                            className="btn btn-sm btn-light fw-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              cancelBooking(slot.id, index);
                            }}
                          >
                            Cancel
                          </button>
                        )}

                        {isSelected && !isOccupied && (
                          <button
                            className="btn btn-sm btn-success fw-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              bookSlot(slot.id, index);
                            }}
                          >
                            Confirm
                          </button>
                        )}
                      </div>
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