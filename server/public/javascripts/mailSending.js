const send = require('gmail-send')
({
    user: 'eytanetest@gmail.com',
    pass: 'qwert613',
    to:   'eytanereal@gmail.com',
    subject: "confirmation d'achat go foot",
});

  


function sendOrderEmail(destEmail, items) {
    var itemsHTML = ''
    items.forEach((item) => itemsHTML += `<div> ${item.count} ${item.name}  ${item.description} <img src=${item.photo}/> </div>`)
    console.log(itemsHTML)
    send(
        {
            to: destEmail,
            html: `<div> nous vous remercions de votre commande chez go foot,vous venez de commander : <br> ${itemsHTML} <br> la commande vous sera livré d'ici 2 semaine </div>`
        },
        (error, result, fullResult) => {
            if (error) console.error(error);
            console.log(result);
    })
}
module.exports= {sendOrderEmail}