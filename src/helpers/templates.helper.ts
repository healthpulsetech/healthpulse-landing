export default function generateEmailTemplate({
  name = "there",
  title,
  alertMessage,
  bodyMessage,
  listItems = [],
  date = new Date().toLocaleDateString(),
}: {
  name?: string
  title: string
  alertMessage: string
  bodyMessage: string
  listItems?: string[]
  date?: string
}) {
  const listHTML = listItems.length ? `<ul>${listItems.map((item) => `<li>${item}</li>`).join("")}</ul>` : ""

  return `
  <html>
    <head>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6; /* Lighter, softer background */
          margin: 0;
          padding: 0;
          color: #333;
          -webkit-text-size-adjust: 100%; /* Prevent font scaling on mobile */
          -ms-text-size-adjust: 100%;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background: #ffffff;
          border-radius: 12px; /* Slightly more rounded corners */
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); /* More prominent shadow */
        }
        .banner {
          background: linear-gradient(to right, #1e3a8a, #3b82f6);
          color: #fff;
          padding: 25px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .banner img {
          max-height: 50px; /* Slightly larger logo */
        }
        .content {
          padding: 30px 40px; /* Increased horizontal padding */
          line-height: 1.6; /* Better readability for paragraphs */
        }
        h2 {
          color: #1e3a8a;
          font-size: 24px;
          margin-bottom: 15px;
          font-weight: 600;
        }
        p {
            margin-bottom: 15px;
        }
        .alert {
          background-color: #dbeafe;
          border-left: 5px solid #3b82f6;
          padding: 15px 25px;
          border-radius: 8px;
          margin: 25px 0;
          color: #1e40af;
          display: flex;
          align-items: center;
          font-size: 15px;
        }
        .alert strong {
            margin-right: 8px;
        }
        .alert-icon {
            margin-right: 10px;
            color: #3b82f6;
            font-size: 20px;
        }
        ul {
          padding-left: 25px; /* Slightly more indent */
          margin-top: 15px;
          list-style-type: disc; /* Ensure disc style */
        }
        li {
          margin-bottom: 8px; /* More space between list items */
        }
        .footer {
          background-color: #f8f9fa; /* Lighter footer background */
          padding: 25px; /* More padding */
          font-size: 13px;
          color: #777; /* Softer text color */
          text-align: center;
          border-top: 1px solid #eef1f4; /* Lighter border */
        }
        .brand {
          font-weight: bold;
          color: #1e3a8a;
        }
        .website-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }
        /* Responsive adjustments */
        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px;
                border-radius: 0;
                box-shadow: none;
            }
            .content, .banner, .footer {
                padding: 20px;
            }
            .banner img {
                max-height: 40px;
            }
            h2 {
                font-size: 20px;
            }
            .alert {
                padding: 12px 15px;
                font-size: 14px;
            }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="banner">
          <img src="https://res.cloudinary.com/dv9cz01fi/image/upload/v1752827778/logo_ezyx1g.png" alt="HealthPulse Africa Logo" />
        </div>
        <div class="content">
          <h2>${title}</h2>
          <p>Hi ${name},</p>
          <div class="alert">
            <span class="alert-icon">&#10003;</span> <!-- Checkmark icon -->
            <strong>Success:</strong> ${alertMessage}
          </div>
          <p>${bodyMessage} on <strong>${date}</strong>.</p>
          ${listHTML}
        </div>
        <div class="footer">
          <p>Thank you for reaching out to <span class="brand">HealthPulse Africa</span>.</p>
          <p>Visit us at <a class="website-link" href="https://healthpulse.africa" target="_blank">healthpulse.africa</a></p>
          <p>This is an automated message. Please do not reply.</p>
        </div>
      </div>
    </body>
  </html>
  `
}
