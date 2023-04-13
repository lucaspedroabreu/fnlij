import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req, res) {
  try {
    console.log('REQ.BODY', req.body)
    await sendgrid.send({
      to: 'contato@gtrw.com.br', // Your email where you'll receive emails
      from: {
        email: 'contato@gtrw.com.br',
        name: '[Formulário de Contato - GTRW]',
      }, // your website email address here
      subject: `[Assunto]: ${req.body.subject}`,
      replyTo: req.body.email,
      html: `<!DOCTYPE html>
      <html lang="pt-BR">
        <head>
          <meta charset="utf-8">
      
          <title>GTRW Holding - Formulário de Contato</title>
          <meta name="description" content="Email provindo do formulário de contato da gtrw.com.br/contact">
          <meta name="author" content="gtrw.com.br">
          <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        </head>
      
        <body>
          <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
                </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                <h4 style="padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">GTRW possui uma nova mensagem provinda do formulário de contato do site</h4>
                <br>
                <h3>✉️</h3>
                <div style="font-size: 16px;">
                <div style="background: #f9f9f9; border-left: 10px solid #ccc; margin: 1.5em 10px; padding: 0.5em 10px;">
                <p><span style="font-weight: bold;">Remetente:</span> ${req.body.email}</p>
                <p><span style="font-weight: bold;">Nome:</span> <i>${req.body.name}</i></p>
                <p><span style="font-weight: bold;">Telefone:</span> ${req.body.phone}</p>
                <p><span style="font-weight: bold;">Assunto:</span> ${req.body.subject}</p>
                <p style="font-weight: bold;">Mensagem:</p>
                <blockquote>${req.body.message}</blockquote>
                </div>
                <br>
                </div>
                <div class="footer">
                  <p style="font-size: 16px;padding-top: 20px;border-top: 1px solid #D1D5DB;">Mensagem automática de CONTATO</p>
                  <span style="font-size: 54px; font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bolder;">GTRW <img src="https://gtrw.com.br/logo-icon.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;"></span>
                </div>
        </body>
      </html>`,
    })
  } catch (error) {
    console.log(error)
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ status: 'success' })
}

export default sendEmail
