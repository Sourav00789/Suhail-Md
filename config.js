const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "918597210761";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "918597210761";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_54_05_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTg0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODQsXG4gICAgICAgIDgyLFxuICAgICAgICA0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgODAsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDM4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk3LFxuICAgICAgICA2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDYsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMixcbiAgICAgICAgNjksXG4gICAgICAgIDQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxODAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDQyLFxuICAgICAgICA0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDk0LFxuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA5OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJWSGV3bEJuY0ZUUTcva0VNL2xRQllpQU8zRHZ0SmlkNHNobENXWUlnd1BjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxODU5NzIxMDc2MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjc3NTE5MEFFMjI1MTY0Mzc2Q0MyQUE1MzQ3MzlBQjBcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE1MDcyMDc2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE4NTk3MjEwNzYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNzI4MDE3MkExMEU3RDNCRTYyMDlFRUFBMTYzODE2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTUwNzIwNzdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSzNvOTJuTUNSV2UyZDZFRWo4MzRMQVwiLFxuICBcInBob25lSWRcIjogXCI5MjMxNTE1NC02MzdkLTRlYzUtYjhkZi02OWM3OWExYTc2NzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgNjIsXG4gICAgICA0MyxcbiAgICAgIDIyNyxcbiAgICAgIDE1NixcbiAgICAgIDE4NyxcbiAgICAgIDkxLFxuICAgICAgMjAwLFxuICAgICAgMjIyLFxuICAgICAgNjUsXG4gICAgICAyMjUsXG4gICAgICAxMSxcbiAgICAgIDkzLFxuICAgICAgODksXG4gICAgICA1OSxcbiAgICAgIDE0MixcbiAgICAgIDM2LFxuICAgICAgMjIyLFxuICAgICAgMTI2LFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyMTgsXG4gICAgICAyNCxcbiAgICAgIDcyLFxuICAgICAgMTI1LFxuICAgICAgMTQ3LFxuICAgICAgNixcbiAgICAgIDE5OSxcbiAgICAgIDIxMyxcbiAgICAgIDEyNixcbiAgICAgIDIwNyxcbiAgICAgIDE1NSxcbiAgICAgIDE5NyxcbiAgICAgIDQzLFxuICAgICAgMjMsXG4gICAgICA4MyxcbiAgICAgIDYxLFxuICAgICAgMTYsXG4gICAgICAxMSxcbiAgICAgIDE5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4S0s2TVFIQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE4NTk3MjEwNzYxOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0NzUyNzYyMjM1Mjk4NzozQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkpVU1QgU09VUkFWXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT0NreUxvREVNZlk1N0VHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTSTNuVlBUd1Ivb2wxaTVPRVhEazlkU1d2NzY3UnZmSjdUb3NEQ3NNUFMwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInBvTit6RkIvRitYL2R4aVVQeEJyQ21IVStUQ1NnbURQcTZ1RXd5bEIrOUh3VXRTMEU5NUJwb2tZV0VjaTUySE5rZVFIUVJQaGczdS9BSGNxam9SaUNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlluYWh1UUdSSlBwYzFwUUtOZVNVbmNSOW5pYmpsdHp3QSsxc3h6R2xCMjQ1c2U1M0xhTjdNc0NYZDhFUkFJQ3RqYjhuc2oxdHZmdjMyN3dhVmZiMGhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxODU5NzIxMDc2MTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1MDcyMDc0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSGozXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIajMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJaUHkwVWpvU1R2KytjYVVaY2x1MnpKNXdBOUhrUWxVcXFkOUgyT25iaFNVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkyODEyNTUzNixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE0NTc1MzEzNTAxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
