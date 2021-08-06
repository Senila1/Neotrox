/* Copyright (C) 2021 TeenuhX.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Neotro-X Project
*/

const {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
const Asena = require('../events');
const DEL = "Delet all messages from you"
const Language = require('../language');
const Lang = Language.getString('AsenaPlug');
const axios = require('axios');

 Asena.addCommand({pattern: 'delall', fromMe: true, desc: DEL}, (async (message, match) => {

    await message.sendMessage(Lang.DELETING);
    await message.client.modifyChat (message.jid, ChatModification.delete);
    await message.sendMessage('```🕊All deleted....```');
