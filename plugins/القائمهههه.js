let handler = async (m, { conn, command, text }) => {
let love = `
*〄━╼⦿┄╏⦁〔القـائـمـة〕⦁╏┄⦿╼━〄*
    *֎━━━❐⊰الـفـعـالـيات⊱❐━━━֎*

_*❐『 بوالين 』*_
_*❐『الجرس  』*_
_*❐『 التصميم 』*_
_*❐『ديث نوت  』*_
_*❐『القلوب  』*_
_*❐『الدولة  』*_
_*❐『 الحروف 』*_
_*❐『 التكلمة 』*_
_*❐『 النقاش 』*_
_*❐『الشخصية  』*_
_*❐『 القائل 』*_
_*❐『نتائج الفعاليات  』*_
_*❐『نتائج الاسئلة  』*_

   *֎━━━❐⊰الأستمارات ⊱❐━━━֎*

_*❐『 رونين 』*_
_*❐『الترحيب  』*_
_*❐『 القوانين 』*_

*֎━━━❐⊰ الـمـتجـر ⊱❐━━━֎*

_*❐『 قـريـبــا 』*_

*〄━╼⦿┄╏⦁〔🕸〕⦁╏┄⦿╼━〄*
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['estupidez']
handler.tags = ['fun']
handler.command = /^(القائمة|القائمه)$/i
export default handler
