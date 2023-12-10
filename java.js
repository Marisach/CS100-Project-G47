function showFormData() {
    const submittedDataSection = document.querySelector('.submitted-data');
    submittedDataSection.style.display = 'block';

    const fullname_th = document.getElementById('fullname_th').value;
    const fullname_en = document.getElementById('fullname_en').value;
    const act = document.querySelector('input[name="actt"]:checked').value;
    const studentID = document.getElementById('student_id').value;
    const faculty = document.getElementById('faculty').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
   
  

    let submittedInfo = `
        ชื่อ-นามสกุล: ${fullname_th}<br>
        ชื่อเล่น: ${fullname_en}<br>
        รหัสนักศึกษา: ${studentID}<br>
        คณะที่ศึกษา: ${faculty}<br>
        ที่อยู่อีเมล: ${email}<br>
        วัน/เดือน/ปีเกิด: ${dob}<br>
        กิจกรรมที่เคยร่วม: ${act}<br>
        
        
    `;
    const submittedInfoContainer = document.getElementById('submitted-info');
    submittedInfoContainer.innerHTML = submittedInfo;
  }