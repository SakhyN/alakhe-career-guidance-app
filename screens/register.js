function renderRegisterScreen() {
  return `
    <section class="register-screen">
      <h1>Register</h1>
      <p class="register-sub">
        Create your learner profile so Alakhe App can guide you from Grade 8 to Grade 12.
      </p>

      <div class="form-card">
        <label>First Name</label>
        <input type="text" id="firstName" placeholder="Enter first name" />

        <label>Surname</label>
        <input type="text" id="lastName" placeholder="Enter surname" />

        <label>Age</label>
        <input type="number" id="age" placeholder="Enter age" />

        <label>Grade</label>
        <select id="registerGrade">
          <option value="">Select Grade</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </select>

        <label>School</label>
        <input type="text" id="school" placeholder="Enter school name" />

        <label>Location</label>
        <input type="text" id="location" placeholder="Enter town / village / city" />

        <label>District / Province</label>
        <input type="text" id="districtProvince" placeholder="Enter district or province" />

        <label>Gender</label>
        <select id="gender">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
          <option>Prefer not to say</option>
        </select>

        <label>Phone Number</label>
        <input type="tel" id="phoneNumber" placeholder="Enter phone number" />

        <label>Email Address</label>
        <input type="email" id="emailAddress" placeholder="Enter email address" />

        <label>Parent / Guardian Name</label>
        <input type="text" id="guardianName" placeholder="Enter parent or guardian name" />

        <label>Parent / Guardian Contact Number</label>
        <input type="tel" id="guardianPhone" placeholder="Enter parent or guardian contact number" />

        <button class="primary-btn" onclick="saveRegister()">
          Save Registration
        </button>
      </div>
    </section>
  `;
}



function saveRegister() {
  const register = {
    firstName: document.getElementById("firstName")?.value || "",
    lastName: document.getElementById("lastName")?.value || "",
    age: document.getElementById("age")?.value || "",
    grade: document.getElementById("registerGrade")?.value || "",
    school: document.getElementById("school")?.value || "",
    location: document.getElementById("location")?.value || "",
    districtProvince: document.getElementById("districtProvince")?.value || "",
    gender: document.getElementById("gender")?.value || "",
    phoneNumber: document.getElementById("phoneNumber")?.value || "",
    emailAddress: document.getElementById("emailAddress")?.value || "",
    guardianName: document.getElementById("guardianName")?.value || "",
    guardianPhone: document.getElementById("guardianPhone")?.value || ""
  };

  if (
    !register.firstName ||
    !register.lastName ||
    !register.age ||
    !register.grade ||
    !register.school ||
    !register.location ||
    !register.districtProvince ||
    !register.gender ||
    !register.phoneNumber ||
    !register.emailAddress ||
    !register.guardianName ||
    !register.guardianPhone
  ) {
    alert("Please complete all registration fields");
    return;
  }

  localStorage.setItem("alakhe_register", JSON.stringify(register));
  if (typeof saveHistory === "function") saveHistory("register", register);

  alert("Registration saved successfully!");
  navigate("profile");
}
