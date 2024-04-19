document.addEventListener('DOMContentLoaded', function () {
    // Button to open Google Forms page
    const googleFormButton = document.getElementById('googleFormButton');
    googleFormButton.addEventListener('click', function () {
        window.open('https://forms.gle/EmHhMqE38PwQmCB99');
    });

    // Dropdown menu with doctor names and specializations
    const doctors = [
            { name: 'Dr. John Smith', specialization: 'Cardiologist', department: 'Cardiology' },
            { name: 'Dr. Emily Johnson', specialization: 'Dermatologist', department: 'Dermatology' },
            { name: 'Dr. Michael Brown', specialization: 'Pediatrician', department: 'Pediatrics' },
            { name: 'Dr. Sarah Miller', specialization: 'Oncologist', department: 'Oncology' },
            { name: 'Dr. Robert Wilson', specialization: 'Neurologist', department: 'Neurology' },
            { name: 'Dr. Laura Taylor', specialization: 'Gynecologist', department: 'Gynecology' },
            { name: 'Dr. Mark Thompson', specialization: 'Orthopedic Surgeon', department: 'Orthopedics' },
            { name: 'Dr. Jennifer Martinez', specialization: 'Endocrinologist', department: 'Endocrinology' },
            { name: 'Dr. William Rodriguez', specialization: 'Urologist', department: 'Urology' },
            { name: 'Dr. Rebecca Garcia', specialization: 'Ophthalmologist', department: 'Ophthalmology' },
            { name: 'Dr. Daniel Clark', specialization: 'Psychiatrist', department: 'Psychiatry' },
            { name: 'Dr. Lisa Lewis', specialization: 'Pulmonologist', department: 'Pulmonology' },
            { name: 'Dr. Matthew Turner', specialization: 'Radiologist', department: 'Radiology' },
            { name: 'Dr. Amanda King', specialization: 'Allergist', department: 'Allergy' },
            { name: 'Dr. Benjamin Lee', specialization: 'Hematologist', department: 'Hematology' },
            { name: 'Dr. Samantha Wright', specialization: 'Rheumatologist', department: 'Rheumatology' },
            { name: 'Dr. Anthony Scott', specialization: 'Dentist', department: 'Dentistry' },
            { name: 'Dr. Kimberly Adams', specialization: 'Gastroenterologist', department: 'Gastroenterology' },
            { name: 'Dr. Timothy Hall', specialization: 'Otolaryngologist', department: 'Otolaryngology' },
            { name: 'Dr. Jessica Evans', specialization: 'Nephrologist', department: 'Nephrology' },
            { name: 'Dr. Andrew White', specialization: 'Anesthesiologist', department: 'Anesthesiology' },
            { name: 'Dr. Stephanie Hill', specialization: 'Dietician', department: 'Nutrition' },
            { name: 'Dr. David Baker', specialization: 'Podiatrist', department: 'Podiatry' },
            { name: 'Dr. Lauren Garcia', specialization: 'Oncology Nurse', department: 'Oncology' },
            { name: 'Dr. Justin Cooper', specialization: 'Orthodontist', department: 'Orthodontics' },
            { name: 'Dr. Nicole Perez', specialization: 'Cardiac Surgeon', department: 'Cardiology' },
            { name: 'Dr. Ryan Mitchell', specialization: 'Gynecologic Oncologist', department: 'Oncology' },
            { name: 'Dr. Danielle Turner', specialization: 'Physical Therapist', department: 'Physical Therapy' },
            { name: 'Dr. Kyle Edwards', specialization: 'Cardiothoracic Surgeon', department: 'Cardiology' },
            { name: 'Dr. Megan Martinez', specialization: 'Speech Therapist', department: 'Speech Therapy' },
            { name: 'Dr. Patrick Wood', specialization: 'Pediatric Surgeon', department: 'Pediatrics' },
            { name: 'Dr. Amanda Collins', specialization: 'Dermatopathologist', department: 'Dermatology' },
            { name: 'Dr. Joshua Phillips', specialization: 'Gynecologic Surgeon', department: 'Gynecology' },
            { name: 'Dr. Elizabeth Carter', specialization: 'Genetic Counselor', department: 'Genetics' },
            { name: 'Dr. Taylor Foster', specialization: 'Neonatologist', department: 'Pediatrics' },
            { name: 'Dr. Gregory Bell', specialization: 'Geriatrician', department: 'Geriatrics' },
            { name: 'Dr. Sandra Rivera', specialization: 'Neonatal Nurse', department: 'Pediatrics' },
            { name: 'Dr. Kevin Long', specialization: 'Optometrist', department: 'Ophthalmology' },
            { name: 'Dr. Rachel Wright', specialization: 'Emergency Physician', department: 'Emergency Medicine' },
            { name: 'Dr. Joseph Hill', specialization: 'Hospice and Palliative Care Specialist', department: 'Palliative Care' },
            { name: 'Dr. Vanessa Morris', specialization: 'Psychiatric Nurse Practitioner', department: 'Psychiatry' },
            { name: 'Dr. Christopher Martinez', specialization: 'Cardiovascular Technologist', department: 'Cardiology' },
            { name: 'Dr. Emily Scott', specialization: 'Clinical Psychologist', department: 'Psychiatry' },
            { name: 'Dr. Brandon Bailey', specialization: 'Diagnostic Medical Sonographer', department: 'Radiology' },
            { name: 'Dr. Rachel King', specialization: 'Forensic Pathologist', department: 'Pathology' },
            { name: 'Dr. Thomas Reed', specialization: 'Neurosurgeon', department: 'Neurosurgery' },
            { name: 'Dr. Allison Coleman', specialization: 'Gerontological Nurse Practitioner', department: 'Geriatrics' },
            { name: 'Dr. Nicholas Moore', specialization: 'Family Physician', department: 'Family Medicine' },
            { name: 'Dr. Michelle Stewart', specialization: 'Physician Assistant', department: 'Primary Care' },
            { name: 'Dr. Rachel Phillips', specialization: 'Chiropractor', department: 'Chiropractic' },
            { name: 'Dr. Eric Turner', specialization: 'Clinical Nurse Specialist', department: 'Nursing' },
            { name: 'Dr. Nicole Peterson', specialization: 'Certified Nurse Midwife', department: 'Obstetrics' }
        ];
        

    const doctorDropdown = document.getElementById('doctorDropdown');
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.text = `${doctor.name} - ${doctor.specialization}`;
        option.value = doctor.department;
        doctorDropdown.add(option);
    });
});
