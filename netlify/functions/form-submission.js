const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }

  try {
    const data = JSON.parse(event.body);
    
    // Create transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format the email content
    const platformsUsed = Array.isArray(data.platforms) ? data.platforms.join(', ') : data.platforms || 'None selected';
    const primaryNeeds = Array.isArray(data.primaryNeeds) ? data.primaryNeeds.join(', ') : data.primaryNeeds || 'None selected';

    const emailContent = `
      New Form Submission from PropAI Website

      Contact Information:
      -------------------
      Name: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Company: ${data.company}

      Property Details:
      ----------------
      Number of Properties: ${data.properties}
      Platforms Used: ${platformsUsed}

      Needs & Requirements:
      --------------------
      Primary Needs: ${primaryNeeds}

      Additional Information:
      ---------------------
      ${data.message || 'No additional information provided'}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.NOTIFICATION_EMAIL,
      subject: 'New PropAI Contact Form Submission',
      text: emailContent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
      }),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: 'Internal server error',
      }),
    };
  }
};