import { Client } from './util/index'

/**
 * @author PC接続ユーザに対してユーティリティ関数を提供します
 */
export default class Default {
    constructor() { }

    operation_audio(audio, operation, option = null) {
        if (!audio) throw new Error(`DOMException: audio is ${typeof audio}`)
        if (option) {
            console.log(Client)
            Client.src_gen(audio.id)
                .then((result) => {
                    audio.src = result
                    audio.parentElement.load()
                    return audio.parentElement.play()
                })
                .catch((e) => {
                    throw new Error(e)
                })
        } else {
            if (operation) {
                audio.parentElement.play()
            }
            else if (typeof ope === 'undifined') return
            else if (!operation) audio.parentElement.pause()
        }
    }
}