export default function generateEmailTemplate({
    name = "there",
    title,
    alertMessage,
    bodyMessage,
    listItems = [],
    date = new Date().toLocaleDateString(),
  }: {
    name?: string;
    title: string;
    alertMessage: string;
    bodyMessage: string;
    listItems?: string[];
    date?: string;
  }) {
    const listHTML = listItems.length
      ? `<ul>${listItems.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : "";
  
    return `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
          }
          h2 {
            color: #1e3a8a; /* dark blue */
          }
          .alert {
            background-color: #dbeafe; /* light blue background */
            border: 1px solid #3b82f6; /* blue border */
            color: #1e40af; /* dark blue text */
            padding: 12px 20px;
            border-radius: 5px;
            margin: 20px 0;
          }
          ul {
            padding-left: 20px;
            margin-top: 10px;
          }
          li {
            margin-bottom: 5px;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 12px;
            color: #666;
          }
          .brand {
            font-weight: bold;
            color: #1e3a8a; /* dark blue */
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>${title}</h2>
          <p>Hello ${name},</p>
          <div class="alert"><strong>✓ Success!</strong> ${alertMessage}</div>
          <p>${bodyMessage} on <strong>${date}</strong>.</p>
          ${listHTML}
          <div class="footer">
            <p>Thank you for contacting <span class="brand">HealthPulse Africa</span>.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
    `;
  }
  