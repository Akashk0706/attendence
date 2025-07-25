const attendanceList = [];
function markAttendance(name) {
  attendanceList.push(name);
  console.log(`${name} is marked present.`);
}
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const studentName = this.student.value.trim();
  if(studentName) {
    markAttendance(studentName);
    alert(`${studentName} attendance marked!`);
    this.reset();
  }
});
