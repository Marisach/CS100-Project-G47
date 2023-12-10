function showFormData() {
    // แสดงส่วนที่มี id="submitted-info"
    const submittedDataSection = document.querySelector('.submitted-data');
    submittedDataSection.style.display = 'block';

const form = document.querySelector('form')
const fullname = document.querySelector('fullname')
const student = document.querySelector('student')
const email = document.querySelector('email')
const worktitle = document.querySelector('worktitle')
const activityType = document.querySelector('activityType')
const academicYear = document.querySelector('academicYear')
const semester = document.querySelector('semester')
const startDate = document.querySelector('startDate')
const endDate = document.querySelector('endDate')
const location = document.querySelector('location')
const description = document.querySelector('description')

let submittedInfo = `
      Name: ${fullname}<br>
      Student ID: ${student}<br>
      Email: ${email}<br>
      Work/Activity: ${worktitle}<br>
      Type of activity: ${activityType}<br>
      Academicyear: ${academicYear}<br>
      
  `;

  // การเก็บข้อมูลกิจกรรมที่ผู้ใช้เลือก
  const activities = [];
  const checkboxes = document.querySelectorAll('input[name="Activity"]:checked');
  checkboxes.forEach((checkbox) => {
      activities.push(checkbox.value);
  });

  // เพิ่มข้อมูลกิจกรรมในข้อความที่แสดงผล
  if (activities.length > 0) {
      submittedInfo += `กิจกรรมที่เคยเข้าร่วม: ${activities.join(', ')}<br>`;
  }

  // แสดงผลข้อมูลที่รวบรวมไว้ในส่วนที่ต้องการ
  const submittedInfoContainer = document.getElementById('submitted-info');
  submittedInfoContainer.innerHTML = submittedInfo;
}