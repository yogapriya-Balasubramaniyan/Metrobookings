function Dashboard({ slots }) {
  let total = 0;
  let booked = 0;

  slots.forEach((slot) => {
    slot.times.forEach((t) => {
      total++;
      if (t.status === "occupied") booked++;
    });
  });

  return (
    <div className="dashboard shadow-sm rounded p-3 mt-3">
      <div>Total Time Slots: {total}</div>
      <div>Booked: {booked}</div>
      <div>Available: {total - booked}</div>
    </div>
  );
}

export default Dashboard;