const userModel=require('../models/user');
const crypto =require('crypto');
const bcrypt =require('bcrypt')
const { createTransport } =require("nodemailer");
const jwt =require('jsonwebtoken')

exports.ForgotPassword = async (req, res) => {
    const { email } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const token = jwt.sign({id: user._id}, "in3WuuW5L~8}?_03l?y|wBN$Dn[u*Ia<Bnw%KD", {expiresIn: "1d"})

    const resetUrl=`http://localhost:3000/forgotpass/resetpass/${user._id}/${token}`
    var transporter = createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          // user:'praamsdknasnqe@gmail.com',
          // pass:'2aslkdkqlk'
            user: process.env.GMAIL_USERNAME,
            pass: process.env.GENERATED_PASSWORD
        }
    });


    //mail template
    var mailOptions = {
        from: 'prabinchalaune@gmail.com',
        to: 'prabinchalaune@gmail.com',
        subject: "Reset Password",
        html:`<h1>Reset Password</h1><h2>Click on the link to reset your password</h2><h3>${resetUrl}</h3>`
    };

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.status(200).json({ message: 'A link to reset your password have been sent to your email.' });
  };


  exports.ResetPassword = async (req, res) => {
  const {id, token} = req.params;
  const {password} = req.body;

  jwt.verify(token, "in3WuuW5L~8}?_03l?y|wBN$Dn[u*Ia<Bnw%KD", (err, decoded) => {
      if(err) {
          return res.json({Status: "Error with token"})
      } else {
          bcrypt.hash(password, 10)
          .then(hash => {
              userModel.findByIdAndUpdate({_id: id}, {password: hash})
              .then(u => res.send({Status: "Success"}))
              .catch(err => res.send({Status: err}))
          })
          .catch(err => res.send({Status: err}))
      }
  })
}



// exports.ResetPassword = async (req, res) => {
//   const {id,token} = req.params;
//   const { newPassword } = req.body;
//   console.log(newPassword,token);
//   try {
//     const user = await userModel.findOne({ token: token });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid token' });
//     }
//     // Update password
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(newPassword, salt);
//     user.newToken = null; // Assuming the token needs to be invalidated after reset
//     await user.save();

//     return res.status(200).json({ message: 'Password reset successful' });
//   } catch (error) {
//     console.error('Password reset error:', error);
//     return res.status(500).json({ message: 'Error resetting password' });
//   }
// };




