// Resume Form and Elements
const form = document.getElementById("cv-form") as HTMLFormElement;
const resumeContent = document.getElementById("resume-content") as HTMLElement;
const downloadButton = document.getElementById("download-resume") as HTMLButtonElement;
const sharingLinkContainer = document.getElementById("sharing-link-container") as HTMLDivElement;
const generatedLink = document.getElementById("generated-link") as HTMLSpanElement;

// Event Listener for Form Submission
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Form Data Retrieval
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const institution = (document.getElementById("institution") as HTMLInputElement).value;
    const educationStartDate = (document.getElementById("education-start-date") as HTMLInputElement).value;
    const educationEndDate = (document.getElementById("education-end-date") as HTMLInputElement).value || "Present";
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;


    // Generate Resume HTML
    const resumeHTML = `
        <div class="profile-section">
            <h3>${name}</h3>
        </div><br>
        <p><strong>Email:</strong> ${email}</p><br>
        <p><strong>Phone:</strong> ${phone}</p><br>
        <hr>
        <h4>Professional Summary</h4><br>
        <p>${summary}</p><br>
        <hr>
        <h4>Education</h4><br>
        <p><strong>${degree}</strong> from ${institution} (${educationStartDate} - ${educationEndDate})</p><br>
        <hr>
        <h4>Skills</h4><br>
        <p>${skills}</p><br>
    `;

    // Display Resume in Preview Section
    resumeContent.innerHTML = resumeHTML;

    // Show Download Button
    downloadButton.style.display = "block";
    downloadButton.onclick = () => downloadResume(resumeHTML);

    // Generate Sharing Link
    const username = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to username
    const sharingLink = `http://example.com/resume/${username}`;
    generatedLink.textContent = sharingLink;
    sharingLinkContainer.style.display = "block";
});

// Download Resume Function
function downloadResume(resumeHTML: string) {
    const completeHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Resume</title>
            <style>
                .profile-pic {
                    border-radius: 100%;
                    max-width: 150px;
                    display: block;
                    margin: 0 auto;
                }
                    body{
                    }
            </style>
        </head>
        <body>
            ${resumeHTML}
        </body>
        </html>
    `;
    const blob = new Blob([completeHTML], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.html";
    a.click();
}
