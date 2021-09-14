const User = require("../models/User")
const { transporter } = require("../helpers/sendMail")

exports.contactUser = (req,res) => {
    const {email, userContact} = req.params
    try {
        transporter.sendMail({
            from:"Artify <artify_notif@outlook.com>",
            to:email,
            subject:"Un usuario te ha contactado",
            text: `responde`,
            html:`
            <p> Enviale un mensaje para iniciar su diseño personalizado</p>
            <p> datos ${userContact}</p>`,
        })
        res.status(200).json({message: "ok"})
    } catch(error) {
        res.status(400).json( {error} )
    }
}