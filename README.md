# 🎓 SGPA & CGPA Calculator

A modern and responsive **SGPA & CGPA Calculator** built with **React, Tailwind CSS, and FastAPI**.

The application allows students to dynamically enter their subjects, grades, and credits and calculate their **SGPA**. It can also be extended to calculate **CGPA** across multiple semesters.

## Live Demo

- https://sgpa-cgpa-calculator-neon.vercel.app

## 🚀 Features

* 📚 Dynamic subject input fields
* 📝 Enter grade, and credit
* 🧮 Automatic SGPA calculation
* 📊 CGPA calculation support
* ⚡ FastAPI backend
* ⚛️ React frontend
* 🎨 Tailwind CSS styling
* 🔄 Frontend ↔ Backend API communication
* ✅ Input validation
* 📱 Responsive design

## 🛠️ Tech Stack

### Frontend

* React
* JavaScript
* Tailwind CSS
* Vite

### Backend

* Python
* FastAPI
* Pydantic
* Uvicorn

### For Backend

- Visit🔗 https://github.com/KrishnakumarModi/SGPA-CGPA-Backend

## 🧮 SGPA Calculation

The calculator uses the following formula:

```text
SGPA = Σ(Credit × Grade Point) / Σ(Credit)
```

### Example

| Subject                 | Grade | Grade Point | Credit |
| ----------------------- | ----- | ----------: | -----: |
| Compiler Design         | A+    |          10 |      4 |
| Artificial Intelligence | A     |           9 |      3 |
| Web Technology          | B+    |           8 |      3 |

Calculation:

```text
(4 × 10) + (3 × 8) + (3 × 9)
--------------------------------
        4 + 3 + 3

= 91 / 10

= 9.10
```

> **Note:** Grade points may vary depending on your university's grading system.

## 🔌 API

### Request Body

```json
{
  "subjects": [
    {
      "grade": "A+",
      "credit": 4
    },
    {
      "grade": "A",
      "credit": 3
    },
    {
      "grade": "B+",
      "credit": 3
    }
  ]
}
```

### Example Response

```json
{
  "total_credit": 10,
  "total_credit_points": 91,
  "sgpa": 9.1
}
```

## 📈 CGPA

The project can calculate CGPA using semester-wise SGPA and credits.

A commonly used weighted formula is:

```text
CGPA = Σ(SGPA × Semester Credit) / Σ(Semester Credit)
```

The exact calculation can be configured according to the grading system of the institution.

## 🔮 Future Improvements

* [ ] Add CGPA calculator UI
* [ ] Add semester management
* [ ] Save calculation history
* [ ] Add database support
* [ ] Add user authentication
* [ ] Add multiple grading systems
* [ ] Add result download
* [ ] Add result sharing
* [ ] Deploy the application
* [ ] Add dark mode
* [ ] Improve mobile responsiveness

## 👨‍💻 Author

**Krishna Kumar Modi**

Built as a learning project using **React, Tailwind CSS, FastAPI, and Python**.

