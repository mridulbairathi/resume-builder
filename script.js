function generateResume() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const summary = document.getElementById("summary").value;
    const education = document.getElementById("education").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const projects = document.getElementById("projects").value;
    const certifications = document.getElementById("certifications").value;
    const hobbies = document.getElementById("hobbies").value;
    const references = document.getElementById("references").value;

    // Prepare Resume Content
    const resumeContent = [
        { heading: "Name", content: name },
        { heading: "Contact Information", content: contact },
        { heading: "Summary", content: summary },
        { heading: "Education", content: education },
        { heading: "Skills", content: skills },
        { heading: "Experience", content: experience },
        { heading: "Projects", content: projects },
        { heading: "Certifications", content: certifications },
        { heading: "Hobbies", content: hobbies },
        { heading: "References", content: references },
    ];

    // Render Resume on Canvas
    const canvas = document.getElementById("resumeCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 1400;

    // Set canvas background
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Text styling
    ctx.fillStyle = "#000";
    ctx.font = "bold 20px Arial";
    let y = 50; // Starting position for text

    // Render each field
    resumeContent.forEach(({ heading, content }) => {
        ctx.fillText(`${heading}:`, 20, y); // Add heading
        y += 30; // Move down for content
        ctx.font = "16px Arial";
        const lines = content.split("\n");
        lines.forEach((line) => {
            ctx.fillText(line, 40, y); // Add content (indented)
            y += 20; // Add spacing between lines of content
        });
        ctx.font = "bold 20px Arial"; // Reset font to bold for next heading
        y += 40; // Add 2-line gap between fields
    });

    document.getElementById("downloadBtn").style.display = "block";
}

function downloadResume() {
    const canvas = document.getElementById("resumeCanvas");
    const link = document.createElement("a");
    link.download = "resume.jpeg";
    link.href = canvas.toDataURL("image/jpeg", 1.0);
    link.click();
}
