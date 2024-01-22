import nodemailer from "nodemailer";

const SendMail = async (FristName, LastName, Phone, Email, Location) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.USER,
    to: `${Email}`,
    subject: "New inquiry - Bicycle",
    text: `Full Name: ${FristName} ${LastName}\nPhone: ${Phone}\nLocation: ${Location}\n\nYou have a new inquiry about a bicycle.`,
  });
};
export default SendMail;
