import emailjs from "@emailjs/browser";

export const useEmail = () => {
  const sendEmail = async (formData: {
    FullName: string;
    email: string;
    phoneNumber: string;
    subject: string;
    message: string;
  }) => {
    try {
      const response = await emailjs.send(
        "service_kta72db", // ID الخاص بالخدمة من EmailJS
        "template_0yga2g5", // ID الخاص بالقالب (template)
        {
          fullName: formData.FullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          subject: formData.subject,
          message: formData.message,
        },
        "gtQMwdnFpnpuqd312", // Public key من EmailJS
      );
      return response;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  return { sendEmail };
};
