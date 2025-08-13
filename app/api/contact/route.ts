import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const contactData = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get("user-agent"),
    }

    console.log("=== NEW CONTACT FORM SUBMISSION ===")
    console.log(`From: ${name} (${email})`)
    console.log(`Time: ${new Date().toLocaleString()}`)
    console.log(`Message: ${message}`)
    console.log("=====================================")

    // In production, you would integrate with:
    // - Resend: https://resend.com
    // - SendGrid: https://sendgrid.com
    // - Nodemailer with Gmail/SMTP

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        message: "Message received successfully! I'll get back to you within 24 hours.",
        data: {
          name,
          timestamp: contactData.timestamp,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      {
        error: "Failed to send message. Please try emailing me directly at ghisingniranjan@gmail.com",
      },
      { status: 500 },
    )
  }
}
