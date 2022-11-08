
function generatePage(data) {
    const manager = data[0]
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Team</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    <header class="bg-danger header text-white"><h1>My Team</h1></header>
    
    <body>
        <section class="section">
            <div class="card">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title ">${(manager.name)}</h5>
                </div>
                <ul>
                    <li class="card-text">${(manager.id)}</li>
                    <li class="card-text">${(manager.email)}</li>
                    <li class="card-text">${(manager.officeNum)}</li>
                </ul>
            </div>
            
        </section>
    </body>

    </html>
    `
}





module.exports = generatePage;