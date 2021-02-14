const help = (prefix) => {
	return `> *Sticker Commands* <
comando : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em adesivo
uso : imagem de resposta/gif/video, or send image/gif/video com legenda \ n
comando : *${prefix}sticker nobg* or *${prefix}stiker nobg*
desc : converter imagem em adesivo enquanto removendo o fundo
uso : responder imagem ou enviar imagem com legenda \ n
comando : *${prefix}toimg*
desc : converter adesivo em imagem
usage : adesivo de resposta \ n
command : *${prefix}tsticker* or *${prefix}tstiker*
desc : converter texto em adesivor
uso : *${prefix}texto do adesivo aqui*\ n
> *Meme Commands* <
comando : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
uso : apenas envie o comando\n
comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : apenas envie o comando\n
> *Others Commands* <
comando : *${prefix}gtts*
desc : converter texto em fala/áudio
uso : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : random loli images
uso : apenas envie o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso : apenas envie o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi yourmessage*\n
comando : *${prefix}ocr*
desc : pegue o texto na foto
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}wait*
desc : procure anime com imagem [ Que anime é Este/aquilo ]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : substituir prefixo
uso : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
comando : *${prefix}add*
desc : adicionar membro ao grupo
uso : *${prefix}add 62813xxxxx*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}kick*
desc : chutar membros do grupo
uso : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}promote*
desc : tornar o membro do grupo como administrador do grupo
uso : *${prefix}promote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}demote*
desc : tornar o administrador do grupo como membro do grupo
usage : *${prefix}demote @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : apenas envie o comando
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}leave*
desc : Faça o bot sair do grupo
uso : apenas envie o comando
note : Só pode ser usado por administradores de grupo e proprietário do bot\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : apenas envie o comando
note : Este comando pode ser usado se você for um administrador de grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
note : Este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
