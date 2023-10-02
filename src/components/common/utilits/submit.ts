import axios from "axios"
type objT = { name: string, email:string, message:string, phone:string }

export class FormFetching{

  static isEmpty(obj: objT ) {    
    const { name, email, message, phone } = obj
    switch (true) {
      case name === "": 
        return false
      case email === "": 
        return false
      case message === "": 
        return false
      case phone === "": 
        return false
      default:
        return true
    }
  }

  static postDataMessage(event:React.MouseEvent<HTMLButtonElement>, obj: objT) {
    event.preventDefault()
    if (!this.isEmpty(obj)) return
    this.fetching(obj)
  }


  static fetching(obj: objT) {
    const { name, email, message, phone } = obj
    const TOKEN = '6311982431:AAH3Ly7SFsEUOtEGE2eefpuuSxu4QT8lPQE'
    const CHAT_ID = '-1001481230538'
    const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

    let userMessage = `<b>new message!</b>\n`;
    userMessage += `<b>name: </b> ${name}\n`;
    userMessage += `<b>email: </b> ${email}\n`;
    userMessage += `<b>phone: </b> ${phone}\n`;
    userMessage += `<b>message: </b> ${message}\n`;

    axios.post(URL, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: userMessage
    })

  }

} 