function Dashboard({ slots }) {
  if (!slots || slots.length === 0) return null;

  // Get time labels from first slot (all slots have same times)
  const timeLabels = slots[0].times.map((t) => t.time);

  // Count availability per hour
  const hourAvailability = timeLabels.map((time, index) => {
    let availableCount = 0;

    slots.forEach((slot) => {
      if (slot.times[index].status === "available") {
        availableCount++;
      }
    });

    return {
      time,
      available: availableCount,
      isFull: availableCount === 0,
    };
  });

  return (
<<<<<<< HEAD
    <div className="card shadow-sm p-2 mb-2 rounded-2">
      <h4 className="text-center mb-2">📊 Hour-wise Availability</h4>
=======
    <div className="card shadow-sm p-4 mb-4 rounded-4">
      <h4 className="text-center mb-4">📊 Hour-wise Availability</h4>
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3

      <div className="row">
        {hourAvailability.map((hour, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
            <div
<<<<<<< HEAD
              className={`p-2 rounded-4 text-center ${
=======
              className={`p-3 rounded-4 text-center ${
>>>>>>> fb16a60562e15302fa3e734179dc6bc73aff90a3
                hour.isFull
                  ? "bg-danger text-white"
                  : "bg-light"
              }`}
            >
              <h6>{hour.time}</h6>

              {hour.isFull ? (
                <p className="fw-bold mb-0">
                  🚫 Parking Full
                </p>
              ) : (
                <p className="fw-bold mb-0">
                  🟢 {hour.available} Slots Available
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
