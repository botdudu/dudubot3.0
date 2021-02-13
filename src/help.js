const help = (prefix) => {
	return `> *Sticker Commands* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : convert image/gif/video to sticker
uso : responder imagem / gif / vídeo ou enviar imagem / gif / vídeo com legenda \ n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
uso : responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}toimg*
desc : convert sticker to image
uso : reply sticker\n
comando : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivo
uso : *${prefix}tsticker text in here*\n
> *Meme Commands* <
comando : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
uso : just send the command\n
comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : just send the command\n
> *Others Commands* <
comando : *${prefix}gtts*
desc : converter texto em fala / áudio
uso : *${prefix}gtts [cc] [texto] * \ exemplo : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
uso : just send the command\n
comando : *${prefix}nsfwloli*
desc : random nsfw loli images
uso : just send the command\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : reply image, or send image with legenda \ n
comando : *${prefix}wait*
desc : procure anime com imagem [ Que anime é isto / aquilo ]
uso : reply image, or send image with legenda \ n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [text|opcional]*\nexample : *${prefix}setprefix ?*
Nota : Este comando só pode ser usado pelo proprietário do bot \ n
> *Comandos de Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
Nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
Nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
Nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
uso : *${prefix}demote @tagmember*\n
Nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : just send the command
Nota : can only be used when the bot becomes admin, and the one who sends the command is admin!\n
comando : *${prefix}licença*
desc : Faça o bot sair do grupo
usage : apenas envie o comando
note : Can only be used by Group admins and Bot owner\n
command : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
usage : just send the command
note : This command can be used if you are a group admin\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : Este comando pode ser usado se você for um administrador de grupo \ n`
}

exports.help = help
