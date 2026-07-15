function generateEmail() {
    const input = document.getElementById("emailInput").value;

    document.getElementById("emailOutput").innerHTML =
        "<h3>Generated Email</h3>" +
        "<p>Subject: Workplace Request</p>" +
        "<p>" + input + "</p>";
}

function summarizeMeeting() {
    const notes = document.getElementById("meetingInput").value;

    document.getElementById("meetingOutput").innerHTML =
        "<h3>Meeting Summary</h3>" +
        "<p>" + notes + "</p>";
}

function planTasks() {
    const tasks = document.getElementById("taskInput").value;

    document.getElementById("taskOutput").innerHTML =
        "<h3>Task Plan</h3>" +
        "<p>" + tasks + "</p>";
}

function research() {
    const topic = document.getElementById("researchInput").value;

    document.getElementById("researchOutput").innerHTML =
        "<h3>Research Topic</h3>" +
        "<p>You searched for: <strong>" + topic + "</strong></p>";
}

function chat() {
    const question = document.getElementById("chatInput").value;

    document.getElementById("chatOutput").innerHTML =
        "<h3>Chatbot Response</h3>" +
        "<p>You asked: " + question + "</p>";
}