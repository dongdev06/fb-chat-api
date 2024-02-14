'use strict';

switch (global.Fca.Require.FastConfig.BroadCast) {
    case true: {
        try {
            var logger = global.Fca.Require.logger;
            var broadcastData = [
                "Chúc ngày tốt lành ✨",
                "Chúc một ngày tốt lành ✨",
                "Chạy bot vui vẻ nha ✨"
            ];
            var random = broadcastData[Math.floor(Math.random() * broadcastData.length)] || "Ae Zui Zẻ Nhé !";
            logger.Normal(random);
        } catch (e) {
            console.log(e);
        }
        return setInterval(() => {
            try {
                try {
                    var logger = global.Fca.Require.logger;
                    var random = broadcastData[Math.floor(Math.random() * broadcastData.length)] || "Ae Zui Zẻ Nhé !";
                    logger.Normal(random);
                } catch (e) {
                    console.log(e);
                    return;
                }
            } catch (e) {
                console.log(e);
            }
        }, 3600 * 1000);
    }
    case false: {
        break;
    }
    default: {
        break;
    }
}
