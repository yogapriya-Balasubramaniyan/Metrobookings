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
<<<<<<< HEAD
          <div className="card shadow border-0 rounded-4 h-100 p-3">

            {/* ===== Slot Header ===== */}
            <div
              className="bg-primary text-white text-center fw-semibold py-3 rounded-4"
              style={{ cursor: "pointer", fontSize: "17px" }}
=======
          <div className="card shadow-sm rounded-4 p-3 h-100 border-0">

            {/* ================= SLOT HEADER ================= */}
            <div
              className="bg-primary text-white text-center fw-bold py-3 rounded-4"
              style={{ cursor: "pointer", fontSize: "18px" }}
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
              onClick={() =>
                setExpandedSlot(
                  expandedSlot === slot.id ? null : slot.id
                )
              }
            >
              Slot {slot.id}
            </div>

<<<<<<< HEAD
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
=======
            {/* ================= TIME SLOTS ================= */}
            {expandedSlot === slot.id && (
              <div className="mt-3">

                {slot.times.map((t, index) => {
                  const isSelected =
                    selected &&
                    selected.slotId === slot.id &&
                    selected.timeIndex === index;

                  const isOccupied = t.status === "occupied";
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3

                  return (
                    <div
                      key={index}
<<<<<<< HEAD
                      className={`d-flex justify-content-between align-items-center mb-2 px-3 py-2 rounded-3 ${bgClass}`}
                      style={{
                        transition: "all 0.25s ease",
                        cursor: isOccupied ? "not-allowed" : "pointer",
=======
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
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
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
<<<<<<< HEAD
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
=======
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
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
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
