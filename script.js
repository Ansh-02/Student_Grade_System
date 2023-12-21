function calculateGrades() {
 
  var marks1 = parseFloat(document.getElementById("subject1").value);
  var marks2 = parseFloat(document.getElementById("subject2").value);
  var marks3 = parseFloat(document.getElementById("subject3").value);
  var marks4 = parseFloat(document.getElementById("subject4").value);

  var totalMarks = marks1 + marks2 + marks3 + marks4;
  var percentage = (totalMarks / 400) * 100;
  var passingMarks = 40 * 4; 

  var passStatus = totalMarks >= passingMarks ? "Passed" : "Failed";

  var resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `
        <p>Total Marks: ${totalMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Passing Marks: ${passingMarks}</p>
        <p>Pass Status: ${passStatus}</p>
    `;
}
