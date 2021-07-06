const ADB = require('appium-adb');

class deviceCommands {
	
	deviceCommands()
		{

		}


	connectDevice()
	{
		async function deviceConnect()
            {
            const adb = await ADB.createADB();  
            await adb.shell("input keyevent 26");
            //adb.shell("sleep 5");
            await adb.shell("input keyevent 3")
            //adb.shell("sleep 3");
            await adb.shell("monkey -p com.sevenprinciples.android.mdm.safeclient 1");
            await adb.shell("sleep 3");
            await adb.shell("input tap 540 1160");
            await adb.shell("sleep 2");
            await adb.shell("input text 'Password'");
            await adb.shell("sleep 2");
            await adb.shell("input tap 864 740");          
            }; 
        deviceConnect();
        //browser.pause(10000);
	}

	pressPowerButton()
	{
		async function powerButton()
		{
			const adb = await ADB.createADB();  
            await adb.shell("input keyevent 26");
		}
		//powerButton();
		browser.pause(15000);
	}


}

module.exports = new deviceCommands();