import React, { useRef, useState } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
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

  const pdfRef = useRef();

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };


  const generatePDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${student.name}_Details.pdf`);
    });
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


      <div ref={pdfRef} className="card p-4 bg-light">
        <h5 className="mb-3">Preview:</h5>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Age:</strong> {student.age}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Gender:</strong> {student.gender}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Course:</strong> {student.course}</p>
        <p><strong>Enrollment No:</strong> {student.enrollment}</p>
        <p><strong>Address:</strong> {student.address}</p>
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
