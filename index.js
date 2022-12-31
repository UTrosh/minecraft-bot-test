const mineflayer = require('mineflayer');
const AutoAuth = require('mineflayer-auto-auth')

///////////////////////////// CONFIGURATION
///
let host = "node.lineria.fr:25013" /// L'ip du serveur (exemple : play.funcraft.fr:25565)
let version = "1.8.9" /// La version du serveur
let passwordregister = "allahakbar" /// Le mot de passe lors du register
let doublepassword = false /*
Le double password correspond au register.
Si jamais vous utilisez un plugin du type authme ou il faut confirmer le mot de passe, mettez true, sinon false.
(/register <mdp> <mdp> = true) (/register <mdp> = false)
*/
let nombrebot = "50" /// Nombre de bot a connectez
let interval = "1000" /// Temps pour que les bots se connaissent (en ms)

/////////////// NE PAS MODIFIER A PARTIR DICI
let i = 0;
function next () {
    if (i < parseInt(nombrebot)) {
      i++
      setTimeout(() => {
        createBot(`utroshsbots_${i}`)

        next()
      }, interval)
    } else {
      const thisBot = bots[0]

      thisBot.on('serverAuth', function() {
        if (doublepassword == false) {

            console.log(`[${thisBot.username}] register/login succès !`)
        } else {
            console.log(`[${thisBot.username}] register/login succès !`)

        }
        
    });
    
    }
  }
  next()
  
  let bots = []
  let adresse = host.split(':')
  function createBot (name) {
    const bot = mineflayer.createBot({
        host: adresse[0],
        port: adresse[1],
        username: name,
        plugins: [AutoAuth],
        version: version,
        AutoAuth: { password: passwordregister, logging: true }
    })
  
    bots.push(bot)
    console.log(`${name} connecté !`)
  }