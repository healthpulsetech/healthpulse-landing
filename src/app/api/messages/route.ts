import { NextRequest, NextResponse } from "next/server";
import sendEmail from "@/helpers/sendEmail";
import generateEmailTemplate from "@/helpers/templates.helper";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  requestType?: string;
};


const departmentEmails: Record<string, string> = {
  demo: "team@healthpulse.africa",
  support: "support@healthpulse.africa",
  partnership: "partnerships@healthpulse.africa",
  general: "team@healthpulse.africa", 
};

export async function POST(req: NextRequest) {
  try {
    const formData: ContactFormData = await req.json();
    const { firstName, lastName, email, message, requestType = "general" } = formData;

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

   
    const recipientEmail = departmentEmails[requestType.toLowerCase()] || departmentEmails.general;

    
    const adminEmailHtml = generateEmailTemplate({
      name: "HealthPulse Africa Team",
      title: "New Contact Form Submission",
      alertMessage: `You received a message from ${fullName}.`,
      bodyMessage: `Message: "${message}"`,
      listItems: [
        `Name: ${fullName}`,
        `Email: ${email}`,
        `Request Type: ${requestType}`,
      ],
    });

    await sendEmail({
      to: recipientEmail,
      subject: `New Contact Submission: ${requestType}`,
      body: adminEmailHtml,
    });

    
    const userConfirmationHtml = generateEmailTemplate({
      name: fullName,
      title: "We've received your message",
      alertMessage: "Your message has been sent successfully.",
      bodyMessage: "Thank you for contacting HealthPulse Africa. We'll get back to you as soon as possible.",
      listItems: [
        `Request Type: ${requestType}`,
        `Message: "${message}"`,
      ],
    });

    await sendEmail({
      to: email,
      subject: "HealthPulse Africa - Message Received",
      body: userConfirmationHtml,
    });

    return NextResponse.json(
      { message: "Emails sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending emails:", error);
    return NextResponse.json(
      { message: "Failed to send emails." },
      { status: 500 }
    );
  }
}
