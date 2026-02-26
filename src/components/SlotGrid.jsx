export default function SlotGrid({
  slots,
  selected,
  setSelected,
  cancelBooking,
  expandedSlot,
  setExpandedSlot,
}) {
  return (
    <div className="row g-4 mt-3">
      {slots.map((slot) => (
        <div key={slot.id} className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm rounded-4 p-3 h-100">
            {/* Slot Header */}
            <div
              className="bg-primary text-white text-center fw-bold py-3 rounded-4"
              style={{ cursor: "pointer" }}
              onClick={() =>
                setExpandedSlot(
                  expandedSlot === slot.id ? null : slot.id
                )
              }
            >
              Slot {slot.id}
            </div>

            {/* Time Slots */}
            {expandedSlot === slot.id && (
              <div className="mt-3">
                {slot.times.map((t, index) => (
                  <div
                    key={index}
                    className={`d-flex justify-content-between align-items-center mb-2 p-2 rounded ${
                      t.status === "occupied"
                        ? "bg-danger text-white"
                        : selected &&
                          selected.slotId === slot.id &&
                          selected.timeIndex === index
                        ? "bg-success text-white"
                        : "bg-light"
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      if (t.status === "available") {
                        setSelected({
                          slotId: slot.id,
                          timeIndex: index,
                        });
                      }
                    }}
                  >
                    <span>{t.time}</span>

                    {t.status === "occupied" && (
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
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}