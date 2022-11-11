FBInstant.initializeAsync()
    .then(function () {
        var progress = 0;
        var interval = setInterval(function () {
            progress += 3;
            FBInstant.setLoadingProgress(progress);
            if (progress >= 95) {
                clearInterval(interval)
                FBInstant.startGameAsync()
                    .then(function () {
                        console.log("start")
                        var playerName = FBInstant.player.getName();
                        var playerPic = FBInstant.player.getPhoto();
                        var playerId = FBInstant.player.getID();
                        console.log(playerName, playerId,playerPic);
                    });
            }
        }, 100)
        console.log("loaded")
    });

