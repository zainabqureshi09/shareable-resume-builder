// Resume Form and Elements
var form = document.getElementById("cv-form");
var resumeContent = document.getElementById("resume-content");
var downloadButton = document.getElementById("download-resume");
var sharingLinkContainer = document.getElementById("sharing-link-container");
var generatedLink = document.getElementById("generated-link");
// Event Listener for Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Form Data Retrieval
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var summary = document.getElementById("summary").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var educationStartDate = document.getElementById("education-start-date").value;
    var educationEndDate = document.getElementById("education-end-date").value || "Present";
    var skills = document.getElementById("skills").value;
    // Generate Resume HTML
    var resumeHTML = "\n        <div class=\"profile-section\">\n            <h3>".concat(name, "</h3>\n        </div><br>\n        <p><strong>Email:</strong> ").concat(email, "</p><br>\n        <p><strong>Phone:</strong> ").concat(phone, "</p><br>\n        <hr>\n        <h4>Professional Summary</h4><br>\n        <p>").concat(summary, "</p><br>\n        <hr>\n        <h4>Education</h4><br>\n        <p><strong>").concat(degree, "</strong> from ").concat(institution, " (").concat(educationStartDate, " - ").concat(educationEndDate, ")</p><br>\n        <hr>\n        <h4>Skills</h4><br>\n        <p>").concat(skills, "</p><br>\n    ");
    // Display Resume in Preview Section
    resumeContent.innerHTML = resumeHTML;
    // Show Download Button
    downloadButton.style.display = "block";
    downloadButton.onclick = function () { return downloadResume(resumeHTML); };
    // Generate Sharing Link
    var username = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to username
    var sharingLink = "http://example.com/resume/".concat(username);
    generatedLink.textContent = sharingLink;
    sharingLinkContainer.style.display = "block";
});
// Download Resume Function
function downloadResume(resumeHTML) {
    var completeHTML = "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <title>Resume</title>\n            <style>\n                .profile-pic {\n                    border-radius: 100%;\n                    max-width: 150px;\n                    display: block;\n                    margin: 0 auto;\n                }\n                    body{\n                    }\n            </style>\n        </head>\n        <body>\n            ".concat(resumeHTML, "\n        </body>\n        </html>\n    ");
    var blob = new Blob([completeHTML], { type: "text/html" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
}
