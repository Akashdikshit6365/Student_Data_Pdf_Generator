import React, { useState } from 'react';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [student, setStudent] = useState({
    name: '',
    age: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    course: '',
    enrollment: '',
    address: '',
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Adding title
    doc.setFontSize(20);
    doc.text('Student Information', 20, 20);
    
    // Add details
    doc.setFontSize(12);
    doc.text(`Name: ${student.name}`, 20, 30);
    doc.text(`Age: ${student.age}`, 20, 40);
    doc.text(`Date of Birth: ${student.dob}`, 20, 50);
    doc.text(`Gender: ${student.gender}`, 20, 60);
    doc.text(`Email: ${student.email}`, 20, 70);
    doc.text(`Phone: ${student.phone}`, 20, 80);
    doc.text(`Course: ${student.course}`, 20, 90);
    doc.text(`Enrollment No: ${student.enrollment}`, 20, 100);
    doc.text(`Address: ${student.address}`, 20, 110);

    // Save the PDF
    doc.save(`${student.name}_Details.pdf`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Student Info Form 📝</h2>

      <div className="card p-4 mb-4">
        <div className="mb-3">
          <label>Name</label>
          <input name="name" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Age</label>
          <input name="age" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Date of Birth</label>
          <input type="date" name="dob" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <select name="gender" className="form-control" onChange={handleChange}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input name="phone" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Course</label>
          <input name="course" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Enrollment No</label>
          <input name="enrollment" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <textarea name="address" className="form-control" rows="2" onChange={handleChange} />
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={generatePDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
}

export default App;
