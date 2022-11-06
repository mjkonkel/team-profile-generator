
function generatePage(data) {
    return
    `
    <!DOCTYPE html>
    <html>
    <head>
      <title>My Team</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="style.css" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
    </head>
    <header></header>
    <body>
    <h1>My Team</h1>
    <h1>${(data.managerName)}</h1>
    <section>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${(data.managerName)}</h5>
            <p class="card-text">Som</p>

        </div>

        </div>
    </section>
    </body>
    </html>
    `
}





module.exports = generatePage;