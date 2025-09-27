function showTopics() {
  document.getElementById("topic-selection").style.display = "block";
}
function startQuiz(topic) {
  fetchQuestions(topic);
}
async function fetchQuestions(topic) {
  try {
    let res = await fetch(`https://techtrivia-backend.herokuapp.com/api/questions?topic=${topic}`);
    let data = await res.json();
    console.log("Questions received:", data);
  } catch (err) {
    alert("Error fetching questions.");
  }
}
