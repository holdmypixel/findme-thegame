var stage;
var canvasW = 0;
var canvasH = 0;

function initGameCanvas(width, height) {
    const canvas = document.getElementById("gameCanvas");
    canvas.width = width;
    canvas.height = height;
    canvasW = width;
    canvasH = height;
    stage = new createjs.Stage("gameCanvas", {
        'antialias': true
    });
    createjs.Touch.enable(stage);
    stage.enableMouseOver(20);
    stage.mouseMoveOutside = true;
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", tick);
}
var canvasContainer;
var mainContainer;
var gameContainer;
var resultContainer;
var exitContainer;
var infoContainer;
var optionsContainer;
var shareContainer;
var shareSaveContainer;
var socialContainer;
var guideline;
var bg;
var bgP;
var logo;
var logoP;
var itemExit;
var itemExitP;
var popTitleTxt;
var popDescTxt;
var buttonConfirm;
var buttonCancel;
var itemResult;
var itemResultP;
var buttonContinue;
var resultTitleTxt;
var resultDescTxt;
var buttonShare;
var buttonSave;
var resultTitleOutlineTxt;
var resultDescOutlineTxt;
var resultShareTxt;
var resultShareOutlineTxt;
var popTitleOutlineTxt;
var popDescOutlineTxt;
var buttonSettings;
var buttonInfo;
var buttonFullscreen;
var buttonSoundOn;
var buttonSoundOff;
var buttonMusicOn;
var buttonMusicOff;
var buttonExit;
var infoTitleTxt;
var infoDescTxt;
var buttonInfoClose;
var infoBg;
var infoBorder;
var resultBg;
var resultBorder;
$.share = {};
var buttonLocalContainer;
var stageContainer;
var playersContainer;
var playerNameContainer;
var shadowContainer;
var timerContainer;
var statusContainer;
var buttonStart;
var buttonLocal;
var buttonOnline;
var timerShapeBg;
var timerShape;
var itemStatus;
var gameStatusTxt;
var gameMultiStatusTxt;
var scoreTxt;
var fade;
var fadeP;
var roomContainer;
var nameContainer;
var bgRoom;
var gameLogsTxt;
$.players = {};

function buildGameCanvas() {
    canvasContainer = new createjs.Container();
    mainContainer = new createjs.Container();
    gameContainer = new createjs.Container();
    exitContainer = new createjs.Container();
    infoContainer = new createjs.Container();
    resultContainer = new createjs.Container();
    shareContainer = new createjs.Container();
    shareSaveContainer = new createjs.Container();
    socialContainer = new createjs.Container();
    buttonLocalContainer = new createjs.Container();
    stageContainer = new createjs.Container();
    playersContainer = new createjs.Container();
    playerNameContainer = new createjs.Container();
    shadowContainer = new createjs.Container();
    timerContainer = new createjs.Container();
    statusContainer = new createjs.Container();
    bg = new createjs.Bitmap(loader.getResult('background'));
    bgP = new createjs.Bitmap(loader.getResult("backgroundP"));
    logo = new createjs.Bitmap(loader.getResult("logo"));
    centerReg(logo);
    logoP = new createjs.Bitmap(loader.getResult("logoP"));
    centerReg(logoP);
    buttonStart = new createjs.Bitmap(loader.getResult('buttonStart'));
    centerReg(buttonStart);
    buttonLocal = new createjs.Bitmap(loader.getResult("buttonLocal"));
    centerReg(buttonLocal);
    buttonOnline = new createjs.Bitmap(loader.getResult("buttonOnline"));
    centerReg(buttonOnline);
    timerShapeBg = new createjs.Shape();
    timerShape = new createjs.Shape();
    timerContainer.addChild(timerShapeBg, timerShape);
    itemStatus = new createjs.Bitmap(loader.getResult("itemStatus"));
    centerReg(itemStatus);
    for (var timerValue = 0; timerValue < gameData.multi.max; timerValue++) {
        $.players[timerValue] = new createjs.Text();
        $.players[timerValue].font = "25px milky_bobaregular";
        $.players[timerValue].lineHeight = 25;
        $.players[timerValue].color = "#000";
        $.players[timerValue].textAlign = "center";
        $.players[timerValue].textBaseline = "middle";
        $.players[timerValue].text = '';
    }
    gameStatusTxt = new createjs.Text();
    gameStatusTxt.font = "30px milky_bobaregular";
    gameStatusTxt.lineHeight = 35;
    gameStatusTxt.color = '#fff';
    gameStatusTxt.textAlign = 'center';
    gameStatusTxt.textBaseline = "middle";
    gameStatusTxt.text = '';
    gameStatusTxt.y = 2;
    gameMultiStatusTxt = new createjs.Text();
    gameMultiStatusTxt.font = "30px milky_bobaregular";
    gameMultiStatusTxt.lineHeight = 35;
    gameMultiStatusTxt.color = "#000";
    gameMultiStatusTxt.textAlign = 'center';
    gameMultiStatusTxt.textBaseline = "middle";
    gameMultiStatusTxt.text = '';
    statusContainer.addChild(itemStatus, gameStatusTxt);
    scoreTxt = new createjs.Text();
    scoreTxt.font = "50px milky_bobaregular";
    scoreTxt.lineHeight = 35;
    scoreTxt.color = '#000';
    scoreTxt.textAlign = "center";
    scoreTxt.textBaseline = "alphabetic";
    fade = new createjs.Bitmap(loader.getResult('background'));
    fadeP = new createjs.Bitmap(loader.getResult("backgroundP"));
    resultBg = new createjs.Shape();
    resultBorder = new createjs.Shape();
    buttonContinue = new createjs.Bitmap(loader.getResult("buttonContinue"));
    centerReg(buttonContinue);
    createHitarea(buttonContinue);
    resultShareTxt = new createjs.Text();
    resultShareTxt.font = "30px milky_bobaregular";
    resultShareTxt.color = "#000";
    resultShareTxt.textAlign = 'center';
    resultShareTxt.textBaseline = "alphabetic";
    resultShareTxt.text = "SHARE YOUR SCORE";
    resultTitleTxt = new createjs.Text();
    resultTitleTxt.font = "58px milky_bobaregular";
    resultTitleTxt.color = "#000";
    resultTitleTxt.textAlign = "center";
    resultTitleTxt.textBaseline = "alphabetic";
    resultTitleTxt.text = "GAME OVER";
    resultDescTxt = new createjs.Text();
    resultDescTxt.font = "75px milky_bobaregular";
    resultDescTxt.color = "#000";
    resultDescTxt.textAlign = "center";
    resultDescTxt.textBaseline = "alphabetic";
    resultDescTxt.text = '';
    socialContainer.visible = false;
    socialContainer.scale = 0.9;
    shareContainer.addChild(resultShareTxt, socialContainer);
    buttonShare = new createjs.Bitmap(loader.getResult("buttonShare"));
    centerReg(buttonShare);
    var position = {
        'x': 0,
        'y': 45,
        'spaceX': 65
    };
    position.x = -((shareSettings.options.length - 1) * 65 / 2);
    for (let posX = 0; posX < shareSettings.options.length; posX++) {
        var button = shareSettings.options[posX];
        var sprite = String(button[0]).toUpperCase() + String(button).slice(1);
        $.share['button' + posX] = new createjs.Bitmap(loader.getResult("button" + sprite));
        $.share["button" + posX].shareOption = button;
        centerReg($.share['button' + posX]);
        createHitarea($.share['button' + posX]);
        $.share["button" + posX].x = position.x;
        $.share["button" + posX].y = position.y;
        socialContainer.addChild($.share["button" + posX]);
        position.x += position.spaceX;
    }
    buttonShare.y = buttonShare.image.naturalHeight / 2 + 10;
    shareContainer.addChild(buttonShare);
    if (typeof toggleScoreboardSave == "function") {
        buttonSave = new createjs.Bitmap(loader.getResult("buttonSave"));
        centerReg(buttonSave);
        buttonSave.y = buttonSave.image.naturalHeight / 2 + 10;
        shareSaveContainer.addChild(buttonSave);
    }
    buttonFullscreen = new createjs.Bitmap(loader.getResult("buttonFullscreen"));
    centerReg(buttonFullscreen);
    buttonSoundOn = new createjs.Bitmap(loader.getResult("buttonSoundOn"));
    centerReg(buttonSoundOn);
    buttonSoundOff = new createjs.Bitmap(loader.getResult("buttonSoundOff"));
    centerReg(buttonSoundOff);
    buttonSoundOn.visible = false;
    buttonExit = new createjs.Bitmap(loader.getResult("buttonExit"));
    centerReg(buttonExit);
    buttonSettings = new createjs.Bitmap(loader.getResult("buttonSettings"));
    centerReg(buttonSettings);
    createHitarea(buttonFullscreen);
    createHitarea(buttonSoundOn);
    createHitarea(buttonSoundOff);
    createHitarea(buttonExit);
    createHitarea(buttonSettings);
    optionsContainer = new createjs.Container();
    optionsContainer.addChild(buttonFullscreen, buttonSoundOn, buttonSoundOff, buttonExit);
    optionsContainer.visible = false;
    itemExit = new createjs.Bitmap(loader.getResult("itemPop"));
    itemExitP = new createjs.Bitmap(loader.getResult("itemPopP"));
    buttonConfirm = new createjs.Bitmap(loader.getResult("buttonConfirm"));
    centerReg(buttonConfirm);
    buttonCancel = new createjs.Bitmap(loader.getResult("buttonCancel"));
    centerReg(buttonCancel);
    popTitleTxt = new createjs.Text();
    popTitleTxt.font = "58px milky_bobaregular";
    popTitleTxt.color = "#000";
    popTitleTxt.textAlign = "center";
    popTitleTxt.textBaseline = "alphabetic";
    popTitleTxt.text = "EXIT GAME";
    popDescTxt = new createjs.Text();
    popDescTxt.font = "30px milky_bobaregular";
    popDescTxt.lineHeight = 35;
    popDescTxt.color = "#000";
    popDescTxt.textAlign = "center";
    popDescTxt.textBaseline = 'alphabetic';
    popDescTxt.text = "Are you sure\nyou want to\nquit the game?";
    exitContainer.addChild(itemExit, itemExitP, popTitleTxt, popDescTxt, buttonConfirm, buttonCancel);
    exitContainer.visible = false;
    infoBg = new createjs.Shape();
    infoBorder = new createjs.Shape();
    buttonInfoClose = new createjs.Bitmap(loader.getResult("buttonExit"));
    centerReg(buttonInfoClose);
    infoTitleTxt = new createjs.Text();
    infoTitleTxt.font = "48px milky_bobaregular";
    infoTitleTxt.color = "#000";
    infoTitleTxt.textAlign = "center";
    infoTitleTxt.textBaseline = "alphabetic";
    infoTitleTxt.text = "HOW TO PLAY";
    infoDescTxt = new createjs.Text();
    infoDescTxt.font = "22px milky_bobaregular";
    infoDescTxt.lineHeight = 28;
    infoDescTxt.color = "#000";
    infoDescTxt.textAlign = "center";
    infoDescTxt.textBaseline = 'alphabetic';
    infoDescTxt.text = "Find the specific player shown at the top\nbefore time runs out!\n\nClick on the correct player in the crowd\nto advance to the next level.\n\nEach level gets harder with more players\nand less time. Good luck!";
    buttonInfo = new createjs.Bitmap(loader.getResult("buttonInfo"));
    centerReg(buttonInfo);
    createHitarea(buttonInfo);
    infoContainer.addChild(infoBg, infoBorder, infoTitleTxt, infoDescTxt, buttonInfoClose);
    infoContainer.visible = false;
    roomContainer = new createjs.Container();
    nameContainer = new createjs.Container();
    bgRoom = new createjs.Shape();
    bgRoom.graphics.beginFill("#000").drawRect(-(landscapeSize.w / 2), -512, landscapeSize.w, 1024);
    bgRoom.alpha = 0.6;
    gameLogsTxt = new createjs.Text();
    gameLogsTxt.font = "30px milky_bobaregular";
    gameLogsTxt.color = "#000";
    gameLogsTxt.textAlign = "center";
    gameLogsTxt.textBaseline = "alphabetic";
    gameLogsTxt.text = '';
    guideline = new createjs.Shape();
    buttonLocalContainer.addChild(buttonLocal, buttonOnline);
    mainContainer.addChild(logo, logoP, buttonStart, buttonLocalContainer);
    stageContainer.addChild(shadowContainer, playersContainer, playerNameContainer);
    gameContainer.addChild(fade, fadeP, timerContainer, statusContainer, gameMultiStatusTxt, scoreTxt);
    resultContainer.addChild(resultBg, resultBorder, buttonContinue, resultTitleTxt, resultDescTxt, shareContainer, shareSaveContainer);
    canvasContainer.addChild(bg, bgP, stageContainer, bgRoom, mainContainer, gameContainer, gameLogsTxt, resultContainer, exitContainer, infoContainer, optionsContainer, buttonSettings, buttonInfo, guideline);
    stage.addChild(canvasContainer);
    changeViewport(true);
    resizeGameFunc();
}

function changeViewport(condition) {
    console.log("changeViewport called with:", condition);
    
    if (condition) {
        // Landscape mode
        stageW = landscapeSize.w;
        stageH = landscapeSize.h;
        contentW = landscapeSize.cW;
        contentH = landscapeSize.cH;
    } else {
        // Portrait mode - calcular dimensiones dinámicamente
        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;
        var aspectRatio = windowHeight / windowWidth;
        
        console.log("Portrait mode:", {
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            aspectRatio: aspectRatio
        });
        
        if (aspectRatio > 1) {
            // Portrait: usar el ancho y alto de la ventana (97% para dejar un poco de margen)
            stageW = Math.min(windowWidth * 0.97, portraitSize.w);
            stageH = Math.min(windowHeight * 0.97, stageW * aspectRatio);
            
            // Limitar altura máxima
            if (stageH > portraitSize.h * 1.5) {
                stageH = portraitSize.h * 1.5;
                stageW = stageH / aspectRatio;
            }
        } else {
            // Fallback a valores portrait por defecto
            stageW = portraitSize.w;
            stageH = portraitSize.h;
        }
        
        contentW = stageW * 0.75;
        contentH = stageH * 0.88;
        
        console.log("Portrait dimensions:", {
            stageW: stageW,
            stageH: stageH
        });
    }
    
    canvasW = stageW;
    canvasH = stageH;
    changeCanvasViewport();
}

function changeCanvasViewport() {
    if (canvasContainer != undefined) {
        stage.scaleX = stage.scaleY = dpr;
        bgRoom.x = canvasW / 2;
        bgRoom.y = canvasH / 2;
        bg.visible = viewport.isLandscape;
        bgP.visible = !viewport.isLandscape;
        
        // Logo landscape
        logo.visible = viewport.isLandscape;
        logo.x = canvasW / 2;
        logo.y = canvasH / 100 * 30;
        
        // Logo portrait - responsive scaling
        logoP.visible = !viewport.isLandscape;
        logoP.x = canvasW / 2;
        logoP.y = canvasH / 100 * 25;
        
        // Scale logoP to fit canvas width in portrait mode
        if (!viewport.isLandscape && logoP.image) {
            var maxLogoWidth = canvasW * 0.95; // 85% del ancho del canvas (más grande)
            var logoScale = Math.min(1, maxLogoWidth / logoP.image.naturalWidth);
            logoP.scaleX = logoP.scaleY = logoScale;
        }
        
        buttonStart.x = canvasW / 2;
        buttonStart.y = canvasH / 100 * 73;
        buttonLocal.x = canvasW / 2 - 90;
        buttonLocal.y = canvasH / 100 * 73;
        buttonOnline.x = canvasW / 2 + 90;
        buttonOnline.y = canvasH / 100 * 73;
        fade.visible = viewport.isLandscape;
        fadeP.visible = !viewport.isLandscape;
        stageContainer.x = canvasW / 2;
        stageContainer.y = canvasH / 2;
        
        // Responsive result popup dimensions
        var resultPopupWidth = viewport.isLandscape ? Math.min(canvasW * 0.85, 700) : Math.min(canvasW * 0.9, 600);
        var resultPopupHeight = viewport.isLandscape ? Math.min(canvasH * 0.75, 600) : Math.min(canvasH * 0.65, 500);
        var resultPopupX = -resultPopupWidth / 2;
        var resultPopupY = -resultPopupHeight / 2;
        
        // Redraw result popup background with responsive dimensions
        resultBg.graphics.clear();
        resultBg.graphics.beginFill("#FFFFFF").drawRoundRect(resultPopupX, resultPopupY, resultPopupWidth, resultPopupHeight, 20);
        resultBg.alpha = 0.95;
        
        resultBorder.graphics.clear();
        resultBorder.graphics.setStrokeStyle(8).beginStroke("#000000").drawRoundRect(resultPopupX, resultPopupY, resultPopupWidth, resultPopupHeight, 20);
        
        // Position result container
        resultContainer.x = canvasW / 2;
        resultContainer.y = canvasH / 2;
        
        // Responsive font sizes for result texts
        var resultTitleSize = Math.min(58, resultPopupWidth / 11);
        var resultDescSize = Math.min(75, resultPopupWidth / 8);
        var resultShareSize = viewport.isLandscape ? 30 : Math.min(24, resultPopupWidth / 20);
        
        // Espaciado muy compacto en mobile portrait
        var titleOffsetY = viewport.isLandscape ? 90 : Math.max(35, resultPopupHeight * 0.08);
        var scoreOffsetY = viewport.isLandscape ? resultPopupHeight / 2.5 : resultPopupHeight * 0.24;
        var shareOffsetY = viewport.isLandscape ? resultPopupHeight / 1.8 : resultPopupHeight * 0.40;
        var buttonOffsetY = viewport.isLandscape ? 80 : Math.max(45, resultPopupHeight * 0.11);
        
        resultTitleTxt.font = resultTitleSize + "px milky_bobaregular";
        resultTitleTxt.x = 0;
        resultTitleTxt.y = resultPopupY + titleOffsetY;
        
        resultDescTxt.font = resultDescSize + "px milky_bobaregular";
        resultDescTxt.x = 0;
        resultDescTxt.y = resultPopupY + scoreOffsetY;
        
        // Ajustar tamaño del texto "SHARE YOUR SCORE" en mobile
        resultShareTxt.font = resultShareSize + "px milky_bobaregular";
        
        // Escala de los botones sociales más compacta en mobile
        socialContainer.scale = viewport.isLandscape ? 0.9 : 0.75;
        
        // Botones en horizontal en mobile portrait
        if (viewport.isLandscape) {
            buttonContinue.x = 0;
            buttonContinue.y = resultPopupY + resultPopupHeight - buttonOffsetY;
        } else {
            // Portrait: posicionar buttonContinue más abajo para hacer espacio
            buttonContinue.x = 0;
            buttonContinue.y = resultPopupY + resultPopupHeight - buttonOffsetY;
        }
        
        shareContainer.x = shareSaveContainer.x = 0;
        shareContainer.y = shareSaveContainer.y = resultPopupY + shareOffsetY;
        
        itemExit.visible = viewport.isLandscape;
        itemExitP.visible = !viewport.isLandscape;
        buttonConfirm.x = canvasW / 2 - 78;
        buttonConfirm.y = canvasH / 100 * 65;
        buttonCancel.x = canvasW / 2 + 78;
        buttonCancel.y = canvasH / 100 * 65;
        popTitleTxt.x = canvasW / 2;
        popTitleTxt.y = canvasH / 100 * 37;
        popDescTxt.x = canvasW / 2;
        popDescTxt.y = canvasH / 100 * 45;
        
        // Responsive info popup dimensions
        var infoPopupWidth = viewport.isLandscape ? Math.min(canvasW * 0.8, 600) : Math.min(canvasW * 0.88, 550);
        var infoPopupHeight = viewport.isLandscape ? Math.min(canvasH * 0.65, 500) : Math.min(canvasH * 0.65, 480);
        var infoPopupX = -infoPopupWidth / 2;
        var infoPopupY = -infoPopupHeight / 2;
        
        // Redraw info popup background with responsive dimensions
        infoBg.graphics.clear();
        infoBg.graphics.beginFill("#FFFFFF").drawRoundRect(infoPopupX, infoPopupY, infoPopupWidth, infoPopupHeight, 20);
        infoBg.alpha = 0.95;
        
        infoBorder.graphics.clear();
        infoBorder.graphics.setStrokeStyle(8).beginStroke("#000000").drawRoundRect(infoPopupX, infoPopupY, infoPopupWidth, infoPopupHeight, 20);
        
        // Position info container and its elements
        infoContainer.x = canvasW / 2;
        infoContainer.y = canvasH / 2;
        
        // Responsive font sizes and positions
        var infoTitleSize = Math.min(48, infoPopupWidth / 12);
        var infoDescSize = Math.min(22, infoPopupWidth / 25);
        
        // Espaciado más compacto en mobile
        var infoTitleOffsetY = viewport.isLandscape ? 70 : Math.max(40, infoPopupHeight * 0.1);
        var infoDescOffsetY = viewport.isLandscape ? infoPopupHeight / 3 : infoPopupHeight * 0.25;
        var infoButtonOffsetY = viewport.isLandscape ? 60 : Math.max(45, infoPopupHeight * 0.1);
        
        infoTitleTxt.font = infoTitleSize + "px milky_bobaregular";
        infoTitleTxt.y = infoPopupY + infoTitleOffsetY;
        
        infoDescTxt.font = infoDescSize + "px milky_bobaregular";
        infoDescTxt.lineHeight = infoDescSize * 1.3;
        infoDescTxt.y = infoPopupY + infoDescOffsetY;
        
        buttonInfoClose.y = infoPopupY + infoPopupHeight - infoButtonOffsetY;
        
        $('#roomWrapper').removeClass("forPortrait");
        $("#notificationHolder").removeClass("forPortrait");
        $("#roomlists").attr('size', 10);
        $("#namelists").attr('size', 10);
        $("#roomLogs").attr("rows", 10);
    }
}

function resizeCanvas() {
    if (canvasContainer != undefined) {
        if (viewport.isLandscape) {
            buttonSettings.x = canvasW - 50;
            buttonSettings.y = 45;
        } else {
            // En portrait (mobile) posicionar en horizontal
            buttonSettings.x = canvasW - 40;
            buttonSettings.y = 35;
        }
        
        // Configurar posición de botones según orientación
        if (viewport.isLandscape) {
            // Landscape: botones en vertical
            buttonInfo.x = buttonSettings.x;
            buttonInfo.y = buttonSettings.y + 65;
            buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x;
            buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y + 65;
        } else {
            // Portrait: botones en horizontal
            // Info está a -60px (aparece cuando settings está cerrado)
            buttonInfo.x = buttonSettings.x - 60;
            buttonInfo.y = buttonSettings.y;
            // Sound está a -60px (aparece cuando settings está abierto, reemplaza a Info)
            buttonSoundOn.x = buttonSoundOff.x = buttonSettings.x - 60;
            buttonSoundOn.y = buttonSoundOff.y = buttonSettings.y;
        }
        
        var scoreData = 0;
        if (typeof buttonMusicOn != "undefined") {
            if (viewport.isLandscape) {
                buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x;
                buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y + 130;
            } else {
                // Music está a -120px (segundo botón del menú desplegado)
                buttonMusicOn.x = buttonMusicOff.x = buttonSettings.x - 120;
                buttonMusicOn.y = buttonMusicOff.y = buttonSettings.y;
            }
            scoreData = 2;
        } else {
            scoreData = 1;
        }
        if (isDesktop) {
            buttonFullscreen.visible = true;
            buttonFullscreen.x = buttonSettings.x;
            buttonFullscreen.y = buttonSettings.y + 65 * (scoreData + 1);
        } else {
            buttonFullscreen.visible = false;
        }
        if (curPage == 'main' || curPage == "result") {
            buttonExit.visible = false;
            if (isDesktop) {
                buttonFullscreen.x = buttonSettings.x;
                buttonFullscreen.y = buttonSettings.y + 65 * (scoreData + 1);
            }
        } else {
            buttonExit.visible = true;
            if (viewport.isLandscape) {
                // Landscape: botón exit en vertical
                buttonExit.x = buttonSettings.x;
                if (isDesktop) {
                    buttonExit.y = buttonSettings.y + 65 * (scoreData + 2);
                } else {
                    buttonExit.y = buttonSettings.y + 65 * (scoreData + 1);
                }
            } else {
                // Portrait: botón exit en horizontal (espaciado: 60px entre botones)
                buttonExit.x = buttonSettings.x - 60 * (scoreData + 1);
                buttonExit.y = buttonSettings.y;
            }
        }
        resizeGameUI();
        resizeSocketLog();
    }
}

function removeGameCanvas() {
    stage.autoClear = true;
    stage.removeAllChildren();
    stage.update();
    createjs.Ticker.removeEventListener("tick", tick);
    createjs.Ticker.removeEventListener("tick", stage);
}

function tick(delta) {
    updateGame();
    stage.update(gameData);
}

function centerReg(obj) {
    obj.regX = obj.image.naturalWidth / 2;
    obj.regY = obj.image.naturalHeight / 2;
}

function createHitarea(obj) {
    obj.hitArea = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, obj.image.naturalWidth, obj.image.naturalHeight));
}
const player_arr = [{
    'src': "assets/focusplayer0.png",
    'regX': 30,
    'regY': 95
}, {
    'src': 'assets/focusplayer1.png',
    'regX': 30,
    'regY': 95
}, {
    'src': 'assets/focusplayer2.png',
    'regX': 30,
    'regY': 95
}, {
    'src': "assets/focusplayer3.png",
    'regX': 30,
    'regY': 95
}, {
    'src': "assets/focusplayer4.png",
    'regX': 30,
    'regY': 95
}, {
    'src': "assets/focusplayer5.png",
    'regX': 30,
    'regY': 95
}, {
    'src': "assets/focusplayer6.png",
    'regX': 30,
    'regY': 95
}, {
    'src': "assets/focusplayer7.png",
    'regX': 30,
    'regY': 95
}];
const players_arr = [{
    'src': "assets/player0.png",
    'regX': 30,
    'regY': 95
}];
const stage_arr = [{
    'timer': 15000,
    'score': 100,
    'total': 30,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 14000,
    'score': 200,
    'total': 35,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 13000,
    'score': 300,
    'total': 45,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 12000,
    'score': 400,
    'total': 50,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 11000,
    'score': 500,
    'total': 60,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 10000,
    'score': 600,
    'total': 65,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5
}, {
    'timer': 9000,
    'score': 700,
    'total': 70,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.45
}, {
    'timer': 8000,
    'score': 800,
    'total': 75,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.4
}, {
    'timer': 7000,
    'score': 900,
    'total': 80,
    'audio': [5, 10],
    'idle': [1, 3],
    'speed': 0.35
}, {
    'timer': 6000,
    'score': 1000,
    'total': 100,
    'audio': [5, 10],
    'idle': [1, 3],
    'speed': 0.3
}];
const multiSettings = {
    'timer': 16000,
    'score': 100,
    'total': 50,
    'audio': [10, 30],
    'idle': [1, 5],
    'speed': 0.5,
    'findColor': '#000',
    'activeColor': "#FF8000"
};
const gameSettings = {
    'title': {
        'total': 20,
        'audio': [20, 50],
        'idle': [1, 5],
        'speed': 0.5
    },
    'move': {
        'landscape': {
            'x': 500,
            'y': 250
        },
        'portrait': {
            'x': 150,
            'y': 250
        }
    },
    'timer': {
        'color': '#000',
        'width': 400,
        'height': 5,
        'radius': 3
    },
    'score': {
        'speed': 1
    }
};
const textStrings = {
    'stage': "Stage [NUMBER]",
    'stageClear': "Stage clear",
    'score': '+[NUMBER]pts',
    'round': "Round [NUMBER]/[TOTAL]",
    'roundComplete': "Round over",
    'activePlayer': "(YOU)",
    'findPlayers': "YOUR TURN:\nFind all players",
    'hidePlayers': "[PLAYER] TURN:\nStay in the crowd",
    'foundScore': "[NUMBER]/[TOTAL]",
    'timesup': "Time's up!",
    'exitTitle': "EXIT GAME",
    'exitMessage': "Are you sure\nyou want to\nquit the game?",
    'share': "SHARE YOUR SCORE",
    'resultTitle': "GAME OVER",
    'resultDesc': "[NUMBER]pts"
};
const shareSettings = {
    'enable': true,
    'options': ["facebook", "twitter", "whatsapp", "telegram", "reddit", 'linkedin'],
    'shareTitle': "Highscore on Hiddo is [SCORE] points",
    'shareText': "[SCORE] points is mine new highscore on Hiddo! Try it now!",
    'customScore': true,
    'gtag': true
};
$.editor = {
    'enable': false
};
const playerData = {
    'score': 0,
    'stage': 0
};
const gameData = {
    'paused': true,
    'stageNum': 0,
    'players': [],
    'player': [],
    'playerIndex': 0,
    'totalPlayers': 0,
    'shadow': [],
    'playerAudio': 0,
    'stage': {
        'timer': 0,
        'total': 0,
        'speed': 0,
        'rangeX': 0,
        'rangeY': 0,
        'audio': [10, 30]
    },
    'multi': {
        'max': 4,
        'round': 0,
        'found': 0,
        'spaceX': 120,
        'nameY': -80,
        'players': []
    },
    'begin': false,
    'complete': false
};
const tweenData = {
    'score': 0,
    'tweenScore': 0
};
const timeData = {
    'enable': false,
    'startDate': null,
    'sessionDate': null,
    'nowDate': null,
    'sessionTimer': 0,
    'timer': 0,
    'oldTimer': 0,
    'accumulate': 0
};

function buildGameButton() {
    $(window).focus(function() {
        if (!buttonSoundOn.visible) {
            toggleSoundInMute(false);
        }
        if (typeof buttonMusicOn != 'undefined') {
            if (!buttonMusicOn.visible) {
                toggleMusicInMute(false);
            }
        }
    });
    $(window).blur(function() {
        if (!buttonSoundOn.visible) {
            toggleSoundInMute(true);
        }
        if (typeof buttonMusicOn != "undefined") {
            if (!buttonMusicOn.visible) {
                toggleMusicInMute(true);
            }
        }
    });
    if (audioOn) {}
    buttonLocal.cursor = "pointer";
    buttonLocal.addEventListener('click', function(event) {
        playSound("soundButton");
        socketData.online = false;
        goPage("game");
    });
    buttonOnline.cursor = 'pointer';
    buttonOnline.addEventListener('click', function(event) {
        playSound("soundButton");
        checkQuickGameMode();
    });
    buttonStart.cursor = "pointer";
    buttonStart.addEventListener('click', function(event) {
        playSound("soundButton");
        if (typeof initSocket == "function" && multiplayerSettings.enable) {
            if (multiplayerSettings.localPlay) {
                toggleMainButton("local");
            } else {
                checkQuickGameMode();
            }
        } else {
            goPage('game');
        }
    });
    itemExit.addEventListener('click', function(event) {});
    buttonContinue.cursor = "pointer";
    buttonContinue.addEventListener('click', function(event) {
        playSound("soundButton");

        // Acción que se debe ejecutar cuando el anuncio haya terminado
        var doContinue = function() {
            if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online && multiplayerSettings.rejoinRoom) {
                goPage("room");
                $('#roomlists').val(socketData.lastRoom);
                joinSocketRoom();
            } else {
                goPage("main");
            }
        };

        // Si estamos embebidos en una app nativa con WebView, pedir mostrar intersticial
        if (window.ReactNativeWebView && typeof window.ReactNativeWebView.postMessage === 'function') {
            // Registrar callback que la app nativa llamará cuando el anuncio termine o falle
            window.__resumeAfterAd = function(result) {
                try {
                    // result may contain { shown: true/false }
                    doContinue();
                } finally {
                    // limpiar referencia
                    window.__resumeAfterAd = null;
                }
            };
            window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'SHOW_INTERSTITIAL', reason: 'buttonContinue' }));
        } else {
            // Fallback web: continuar inmediatamente
            doContinue();
        }
    });
    buttonShare.cursor = 'pointer';
    buttonShare.addEventListener('click', function(event) {
        playSound("soundButton");
        toggleSocialShare(true);
    });
    for (let shareIndex = 0; shareIndex < shareSettings.options.length; shareIndex++) {
        $.share["button" + shareIndex].cursor = "pointer";
        $.share["button" + shareIndex].addEventListener('click', function(event) {
            playSound("soundButton");
            shareLinks(event.currentTarget.shareOption, addCommas(playerData.score));
        });
    }
    buttonSoundOff.cursor = "pointer";
    buttonSoundOff.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleSoundMute(true);
    });
    buttonSoundOn.cursor = 'pointer';
    buttonSoundOn.addEventListener('click', function(event) {
        event.stopPropagation();
        toggleSoundMute(false);
    });
    if (typeof buttonMusicOff != "undefined") {
        buttonMusicOff.cursor = "pointer";
        buttonMusicOff.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleMusicMute(true);
        });
    }
    if (typeof buttonMusicOn != "undefined") {
        buttonMusicOn.cursor = "pointer";
        buttonMusicOn.addEventListener('click', function(event) {
            event.stopPropagation();
            toggleMusicMute(false);
        });
    }
    buttonFullscreen.cursor = "pointer";
    buttonFullscreen.addEventListener('click', function(event) {
        toggleFullScreen();
    });
    buttonExit.cursor = 'pointer';
    buttonExit.addEventListener('click', function(event) {
        togglePop(true);
        toggleOptions();
    });
    buttonSettings.cursor = "pointer";
    buttonSettings.addEventListener('click', function(event) {
        toggleOptions();
    });
    buttonInfo.cursor = 'pointer';
    buttonInfo.addEventListener('click', function(event) {
        playSound("soundButton");
        toggleInfo(true);
    });
    buttonInfoClose.cursor = 'pointer';
    buttonInfoClose.addEventListener('click', function(event) {
        playSound("soundButton");
        toggleInfo(false);
    });
    buttonConfirm.cursor = 'pointer';
    buttonConfirm.addEventListener('click', function(event) {
        playSound("soundButton");
        togglePop(false);
        stopSound();
        stopGame();
        goPage('main');
        if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
            exitSocketRoom();
        }
    });
    buttonCancel.cursor = "pointer";
    buttonCancel.addEventListener('click', function(event) {
        playSound("soundButton");
        togglePop(false);
    });
    stage.on('stagemousedown', function(container) {
        if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
            var _641209 = playersContainer.globalToLocal(container.stageX / dpr, container.stageY / dpr);
            if (socketData.gameIndex == gameData.multi.round) {
                directPlayers(socketData.gameIndex, _641209.x, _641209.y);
            } else {
                postSocketUpdate("directplayer", {
                    'index': socketData.gameIndex,
                    'x': _641209.x,
                    'y': _641209.y
                }, true);
            }
        }
    });
    for (var loopIndex = 0; loopIndex < player_arr.length; loopIndex++) {
        gameData.player.push(loopIndex);
    }
    shuffle(gameData.player);
    if (viewport.isLandscape) {
        gameData.stage.rangeX = gameSettings.move.landscape.x;
        gameData.stage.rangeY = gameSettings.move.landscape.y;
    } else {
        // Calcular área de movimiento proporcional al tamaño del canvas en portrait
        gameData.stage.rangeX = Math.min(stageW * 0.25, 200);
        gameData.stage.rangeY = Math.min(stageH * 0.3, 300);
    }
}

function toggleMainButton(button1) {
    if (typeof initSocket == "function" && multiplayerSettings.enable) {
        gameLogsTxt.visible = true;
        gameLogsTxt.text = '';
    }
    buttonStart.visible = false;
    buttonLocalContainer.visible = false;
    if (button1 == "start") {
        buttonStart.visible = true;
    } else if (button1 == "local") {
        buttonLocalContainer.visible = true;
    }
}

function checkQuickGameMode() {
    socketData.online = true;
    if (!multiplayerSettings.enterName) {
        buttonStart.visible = false;
        buttonLocalContainer.visible = false;
        addSocketRandomUser();
    } else {
        goPage("name");
    }
}

function resizeSocketLog() {
    if (curPage == "main") {
        gameLogsTxt.x = canvasW / 2;
        gameLogsTxt.y = canvasH / 100 * 73;
    }
}

function toggleSocialShare(posData) {
    buttonShare.visible = !(posData == true);
    shareSaveContainer.visible = !(posData == true);
    socialContainer.visible = posData;
    if (posData) {
        if (typeof buttonSave !== "undefined") {
            TweenMax.to(buttonShare, 3, {
                'overwrite': true,
                'onComplete': toggleSocialShare,
                'onCompleteParams': [false]
            });
        }
    }
}

function positionShareButtons() {
    if (typeof buttonShare !== "undefined") {
        if (typeof buttonSave !== "undefined") {
            if (buttonSave.visible) {
                buttonShare.x = -(buttonShare.image.naturalWidth / 2 + 5);
                buttonSave.x = buttonShare.image.naturalWidth / 2 + 5;
            } else {
                buttonShare.x = 0;
            }
        }
    }
}

function togglePop(container1) {
    exitContainer.visible = container1;
    if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
        if (curPage == 'name' || curPage == 'room') {
            if (container1) {
                $('#roomWrapper').hide();
            } else {
                $('#roomWrapper').show();
            }
        }
    }
}

function toggleInfo(show) {
    infoContainer.visible = show;
}

var curPage = '';

function goPage(page) {
    curPage = page;
    $("#roomWrapper").hide();
    $("#roomWrapper .innerContent").hide();
    gameLogsTxt.visible = false;
    bgRoom.visible = false;
    mainContainer.visible = false;
    gameContainer.visible = false;
    resultContainer.visible = false;
    togglePop(false);
    toggleOptions(false);
    stopPlayers();
    stopSoundLoop("soundRunning");
    var config = null;
    switch (page) {
        case "main":
            config = mainContainer;
            gameData.stage.total = gameSettings.title.total;
            gameData.stage.speed = gameSettings.title.speed;
            gameData.stage.audio = gameSettings.title.audio;
            gameData.stage.idle = gameSettings.title.idle;
            if (typeof initSocket == 'function' && multiplayerSettings.enable) {
                socketData.online = false;
            }
            buildStage();
            toggleMainButton('start');
            break;
        case "name":
            config = nameContainer;
            $("#roomWrapper").show();
            $("#roomWrapper .nameContent").show();
            $("#roomWrapper .fontNameError").html('');
            $("#enterName").show();
            bgRoom.visible = true;
            break;
        case "room":
            config = roomContainer;
            $("#roomWrapper").show();
            $("#roomWrapper .roomContent").show();
            switchSocketRoomContent("lists");
            bgRoom.visible = true;
            break;
        case "game":
            config = gameContainer;
            startGame();
            break;
        case "result":
            config = resultContainer;
            stopGame();
            toggleSocialShare(false);
            playSound("soundResult");
            if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
                playerData.score = $.players[socketData.gameIndex].score;
                if (socketData.host) {
                    postSocketCloseRoom();
                } else {
                    exitSocketRoom();
                }
            }
            tweenData.tweenScore = 0;
            TweenMax.to(tweenData, 0.5, {
                'tweenScore': playerData.score,
                'overwrite': true,
                'onUpdate': function() {
                    resultDescTxt.text = "[NUMBER]pts".replace("[NUMBER]", addCommas(Math.floor(tweenData.tweenScore)));
                }
            });
            saveGame(playerData.score);
            break;
    }
    if (config != null) {
        config.visible = true;
        config.alpha = 0;
        TweenMax.to(config, 0.5, {
            'alpha': 1,
            'overwrite': true
        });
    }
    resizeCanvas();
}

function startGame() {
    gameData.stageNum = 0;
    gameMultiStatusTxt.text = '';
    statusContainer.alpha = 0;
    playerData.score = 0;
    playerData.stage = 0;
    fade.alpha = fadeP.alpha = 0;
    setupGameStage();
    if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
        gameData.multi.round = 0;
        if (socketData.host) {
            gameData.multi.players = [];
            shuffle(gameData.player);
            for (var loopIndex1 = 0; loopIndex1 < multiSettings.total; loopIndex1++) {
                gameData.multi.players.push(gameData.player[loopIndex1]);
            }
            postSocketUpdate("prepare", {
                'players': gameData.player,
                'multiplayers': gameData.multi.players
            });
        }
    } else {
        gameData.totalPlayers = 1;
        prepareStage();
    }
}

function stopGame() {
    toggleGameTimer(false);
    stopSoundLoop("soundRunning");
    gameData.paused = true;
    TweenMax.killAll(false, true, false);
}

function saveGame(gameData1) {
    if (typeof toggleScoreboardSave == "function") {
        $.scoreData.score = gameData1;
        if (typeof type != 'undefined') {
            $.scoreData.type = type;
        }
        toggleScoreboardSave(true);
    }
}

function resizeGameUI() {
    statusContainer.x = canvasW / 2;
    statusContainer.y = canvasH / 100 * 85;
    gameMultiStatusTxt.x = canvasW / 2;
    gameMultiStatusTxt.y = canvasH / 100 * 60;
    timerShape.x = timerShapeBg.x = canvasW / 2 - gameSettings.timer.width / 2;
    timerShape.y = timerShapeBg.y = canvasH / 100 * 85;
    scoreTxt.x = canvasW / 2;
    scoreTxt.y = canvasH / 100 * 84;
    if (viewport.isLandscape) {
        gameData.stage.rangeX = gameSettings.move.landscape.x;
        gameData.stage.rangeY = gameSettings.move.landscape.y;
    } else {
        // Calcular área de movimiento proporcional al tamaño del canvas en portrait
        // Aumentado a 40% de ancho para mejor jugabilidad en mobile
        gameData.stage.rangeX = Math.min(stageW * 0.4, 300);
        gameData.stage.rangeY = Math.min(stageH * 0.3, 300);
    }
    positionLogoPlayer();
}

function positionLogoPlayer() {
    if (curPage == "main") {
        if (gameData.players.length > 0) {
            var position1 = gameData.players[0];
            TweenMax.killTweensOf(position1);
            position1.x = 60;
            position1.y = 20;
        }
    }
}

function setupGameStage() {
    if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
        gameData.stage.timer = 16000;
        gameData.stage.total = 50;
        gameData.stage.speed = 0.5;
        gameData.stage.audio = multiSettings.audio;
        gameData.stage.idle = multiSettings.idle;
        gameData.stage.score = 100;
    } else {
        // Usar el nivel actual (gameData.stageNum) en lugar de siempre el nivel 0
        var currentStage = stage_arr[gameData.stageNum];
        gameData.stage.timer = currentStage.timer;
        gameData.stage.total = currentStage.total;
        gameData.stage.speed = currentStage.speed;
        gameData.stage.audio = currentStage.audio;
        gameData.stage.idle = currentStage.idle;
        gameData.stage.score = currentStage.score;
    }
    timeData.countdown = gameData.stage.timer;
    timeData.sessionTimer = timeData.countdown;
    updateTimerBar();
    gameData.begin = false;
    if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
        gameData.paused = true;
    } else {
        gameData.paused = false;
    }
}

function showMultiPlayers() {
    playersContainer.removeAllChildren();
    shadowContainer.removeAllChildren();
    playerNameContainer.removeAllChildren();
    gameData.players = [];
    gameData.shadow = [];
    var position2 = {
        'x': 0,
        'y': 0
    };
    var xPos = gameData.multi.spaceX;
    var position3 = xPos * -1;
    position2.x = -(position3 / 2);
    for (var settings = 0; settings < player_arr.length; settings++) {
        var tempValue = getSpriteSheet("player", settings);
        playersContainer.addChild(tempValue);
        tempValue.x = 0;
        tempValue.y = 0;
        tempValue.data = position2;
        tempValue.frame = '';
        tempValue.focus = true;
        getPlayerFrame(tempValue, 'stand');
        if (isEven(settings)) {
            tempValue.y -= 50;
        }
        position2.x += xPos;
        gameData.players.push(tempValue);
        var _801813 = new createjs.Bitmap(loader.getResult("itemShadow"));
        centerReg(_801813);
        _801813.x = tempValue.x;
        _801813.y = tempValue.y;
        shadowContainer.addChild(_801813);
        gameData.shadow.push(_801813);
        posPlayerName(settings, tempValue);
        playerNameContainer.addChild($.players[settings]);
        if (settings == gameData.multi.round) {
            $.players[settings].color = "#FF8000";
        } else {
            $.players[settings].color = '#000';
        }
    }
    if (socketData.gameIndex == gameData.multi.round) {
        showMultiGameStatus("find");
    } else {
        showMultiGameStatus("hide");
    }
    showGameStatus("preround");
    TweenMax.to(playersContainer, 4, {
        'onComplete': function() {
            prepareStage();
        }
    });
}

function posPlayerName(position4, position5) {
    $.players[position4].x = position5.x;
    $.players[position4].y = position5.y - $.players[position4].getMeasuredHeight() + gameData.multi.nameY;
}

function prepareStage() {
    TweenMax.to(fade, 0.5, {
        'alpha': 1,
        'onComplete': function() {
            buildStage();
            TweenMax.to(fade, 1, {
                'alpha': 0,
                'onComplete': function() {}
            });
        }
    });
    TweenMax.to(fadeP, 0.5, {
        'alpha': 1,
        'onComplete': function() {
            TweenMax.to(fadeP, 1, {
                'alpha': 0,
                'onComplete': function() {}
            });
        }
    });
}

function buildStage() {
    playersContainer.removeAllChildren();
    shadowContainer.removeAllChildren();
    playerNameContainer.removeAllChildren();
    gameData.players = [];
    gameData.shadow = [];
    gameData.playerAudio = 0;
    for (var playerIndex = 0; playerIndex < gameData.stage.total; playerIndex++) {
        var playerSprite = getSpriteSheet("player", playerIndex);
        playersContainer.addChild(playerSprite);
        var playerPos = getPlayerPos();
        playerSprite.x = playerPos.x;
        playerSprite.y = playerPos.y;
        playerSprite.data = playerPos;
        playerSprite.index = playerIndex;
        playerSprite.frame = '';
        playerSprite.focus = false;
        playerSprite.moveX = playerPos.x;
        playerSprite.moveY = playerPos.y;
        getPlayerFrame(playerSprite, "stand");
        var isReady = false;
        if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
            if (playerIndex < 0) {
                playerSprite.focus = true;
                playerNameContainer.addChild($.players[playerIndex]);
                if (playerIndex == gameData.multi.round) {
                    $.players[playerIndex].color = "#FF8000";
                } else {
                    $.players[playerIndex].color = '#000';
                }
            }
            if (socketData.gameIndex == gameData.multi.round) {
                isReady = true;
            }
        } else {
            if (playerIndex == 0) {
                playerSprite.focus = true;
            }
            isReady = true;
        }
        if (isReady) {
            var sprite2 = curPage == "game" ? 2 : 0;
            loopPlayerIdle(playerSprite, sprite2);
        }
        gameData.players.push(playerSprite);
        playerSprite.cursor = "pointer";
        playerSprite.addEventListener('click', function(event) {
            checkFocusPlayer(event.currentTarget);
        });
        var sprite3 = new createjs.Bitmap(loader.getResult("itemShadow"));
        centerReg(sprite3);
        sprite3.x = playerSprite.x;
        sprite3.y = playerSprite.y;
        shadowContainer.addChild(sprite3);
        gameData.shadow.push(sprite3);
    }
    scoreTxt.text = '';
    gameData.paused = false;
    gameData.complete = false;
    gameData.begin = false;
    gameData.multi.found = 0;
    if (curPage == "game") {
        if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
            for (var playerIndex = 0; playerIndex < gameData.multi.players.length; playerIndex++) {
                var player1 = gameData.players[playerIndex];
                var player2 = gameData.players[item + 4];
                player1.x = player2.x;
                player1.y = player2.y - 1;
                TweenMax.killTweensOf(gameData.players[playerIndex]);
                if (socketData.gameIndex == gameData.multi.round) {
                    $.players[playerIndex].visible = false;
                    if (socketData.gameIndex == playerIndex) {
                        $.players[playerIndex].visible = true;
                    }
                }
                updateMultiScore();
            }
            showGameStatus("round");
        } else {
            var player1 = gameData.players[0];
            var player2 = gameData.players[1];
            player1.x = player2.x;
            player1.y = player2.y - 1;
            showGameStatus('stage');
        }
        playSound("soundStart");
        TweenMax.to(timerContainer, 2, {
            'onComplete': function() {
                gameData.begin = true;
                playSoundLoop("soundRunning");
                if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
                    if (socketData.gameIndex == gameData.multi.round) {
                        toggleGameTimer(true);
                        toggleGameSessionTimer(true);
                    }
                } else {
                    toggleGameTimer(true);
                    toggleGameSessionTimer(true);
                }
            }
        });
    } else {
        playSoundLoop("soundRunning");
    }
}

function getPlayerPos() {
    var position6 = {
        'x': 0,
        'y': 0
    };
    position6.x = Math.floor(Math.random() * (gameData.stage.rangeX - -gameData.stage.rangeX + 1) + -gameData.stage.rangeX);
    position6.y = Math.floor(Math.random() * (gameData.stage.rangeY - -gameData.stage.rangeY + 1) + -gameData.stage.rangeY);
    return position6;
}

function loopPlayerIdle(item1, player2) {
    var item2 = Math.floor(Math.random() * (gameData.stage.idle[1] - gameData.stage.idle[0] + 1) + gameData.stage.idle[0]) * 0.3;
    item2 = !isNaN(player2) == true ? player2 : item2;
    TweenMax.to(item1, item2, {
        'onComplete': movePlayer,
        'onCompleteParams': [item1]
    });
}

function movePlayer(soundConfig) {
    playPlayerAudio();
    var frameConfig = getPlayerPos();
    var audio = getDistance(soundConfig.x, soundConfig.y, frameConfig.x, frameConfig.y) * (gameData.stage.speed * 0.01);
    soundConfig.moveX = frameConfig.x;
    soundConfig.moveY = frameConfig.y;
    TweenMax.to(soundConfig, audio, {
        'x': frameConfig.x,
        'y': frameConfig.y,
        'ease': Linear.easeNone,
        'onComplete': loopPlayerIdle,
        'onCompleteParams': [soundConfig]
    });
}

function directPlayers(container2, container3, container4) {
    return;
    var container1 = gameData.players[container2];
    if (container1.focus && true && curPage == "game") {
        var container5 = getDistance(container1.x, container1.y, container3, container4) * (gameData.stage.speed * 0.01);
        container1.moveX = container3;
        container1.moveY = container4;
        TweenMax.to(container1, container5, {
            'x': container3,
            'y': container4,
            'ease': Linear.easeNone
        });
    }
}

function moveAwayPlayer(sprite4, item3, player3) {
    playPlayerAudio();
    TweenMax.killTweensOf(sprite4);
    var mathValue = Math.floor(Math.random() * (gameData.stage.rangeX / 3 - 50 + 1) + 50);
    var randomY = Math.floor(Math.random() * (gameData.stage.rangeY / 3 - 50 + 1) + 50);
    var shadowSprite = {
        'x': mathValue,
        'y': randomY
    };
    if (sprite4.x < item3.x) {
        shadowSprite.x = -shadowSprite.x;
        sprite4.x -= 1;
    } else {
        sprite4.x += 1;
    }
    if (sprite4.y < item3.y) {
        shadowSprite.y = -shadowSprite.y;
        sprite4.y -= 1;
    } else {
        sprite4.y += 1;
    }
    shadowSprite.x = sprite4.x + shadowSprite.x;
    shadowSprite.y = sprite4.y + shadowSprite.y;
    sprite4.moveX = shadowSprite.x;
    sprite4.moveY = shadowSprite.y;
    var animDuration = getDistance(sprite4.x, sprite4.y, shadowSprite.x, shadowSprite.y) * (gameData.stage.speed * 0.01);
    if (player3) {
        TweenMax.to(sprite4, animDuration, {
            'x': shadowSprite.x,
            'y': shadowSprite.y,
            'ease': Linear.easeNone,
            'onComplete': loopPlayerIdle,
            'onCompleteParams': [sprite4]
        });
    } else {
        TweenMax.to(sprite4, animDuration, {
            'x': shadowSprite.x,
            'y': shadowSprite.y,
            'ease': Linear.easeNone,
            'onComplete': pointToPlayer,
            'onCompleteParams': [sprite4, item3]
        });
    }
}

function playPlayerAudio() {
    gameData.playerAudio = Math.floor(Math.random() * (gameData.stage.audio[1] - gameData.stage.audio[0] + 1) + gameData.stage.audio[0]);
    var player4 = Math.floor(Math.random() * 5);
    playSound("soundPlayer" + (player4 + 1));
}

function animateBounce(item4) {
    TweenMax.to(item4, 0.5, {
        'scaleX': 1.2,
        'scaleY': 1.2,
        'overwrite': true,
        'onComplete': function() {
            TweenMax.to(item4, 0.5, {
                'scaleX': 1,
                'scaleY': 1,
                'overwrite': true,
                'onComplete': animateBounce,
                'onCompleteParams': [item4]
            });
        }
    });
}

function checkFocusPlayer(buttonObj) {
    if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
        if (socketData.gameIndex == gameData.multi.round && true && curPage == "game") {
            if (buttonObj.index != socketData.gameIndex && buttonObj.focus) {
                buttonObj.focus = false;
                getPlayerFrame(buttonObj, 'wave');
                $.players[buttonObj.index].visible = true;
                gameData.multi.found++;
                updateMultiScore();
                postSocketUpdate("caughtplayer", buttonObj.index, true);
            }
            var temp1 = 0;
            for (var loopIndex2 = 0; loopIndex2 < gameData.players.length; loopIndex2++) {
                var item5 = gameData.players[loopIndex2];
                if (item5.focus == false) {
                    temp1++;
                }
            }
            if (temp1 == gameData.players.length - 1) {
                gameData.complete = true;
                toggleGameSessionTimer(false);
                toggleGameTimer(false);
                postSocketUpdate('endround', 0);
            }
        }
    } else if (buttonObj.focus && true && curPage == "game") {
        calculateScore();
        toggleGameSessionTimer(false);
        toggleGameTimer(false);
        allPlayersPointToPlayer();
    }
}

function allPlayersPointToPlayer() {
    stopSoundLoop("soundRunning");
    gameData.complete = true;
    var timeRemaining = [];
    for (var dataArray = 0; dataArray < gameData.players.length; dataArray++) {
        var randomValue = gameData.players[dataArray];
        TweenMax.killTweensOf(randomValue);
        if (typeof initSocket == 'function' && multiplayerSettings.enable && socketData.online) {
            var flag = false;
            if (dataArray < 0 && dataArray != gameData.multi.round) {
                flag = true;
            }
            if (flag) {
                getPlayerFrame(randomValue, 'wave');
                animateBounce(randomValue);
                timeRemaining.push(randomValue);
                $.players[dataArray].visible = true;
            } else {
                getPlayerFrame(randomValue, 'stand');
                var time = Math.floor(Math.random() * timeRemaining.length);
                pointToPlayer(randomValue, timeRemaining[time]);
            }
        } else {
            if (dataArray != 0) {
                getPlayerFrame(randomValue, "stand");
                var distance = getDistance(timeRemaining[0].x, timeRemaining[0].y, randomValue.x, randomValue.y);
                if (distance <= 150) {
                    moveAwayPlayer(randomValue, timeRemaining[0], false);
                } else {
                    pointToPlayer(randomValue, timeRemaining[0]);
                }
            } else {
                getPlayerFrame(randomValue, 'wave');
                animateBounce(randomValue);
                timeRemaining.push(randomValue);
            }
        }
    }
}

function pointToPlayer(shadowIndex, buttonData) {
    if (buttonData == undefined) {
        return;
    }
    var multiData = getDirection(shadowIndex.x, shadowIndex.y, buttonData.x, buttonData.y);
    var mathValue2 = Math.floor(Math.random() * 8 + 1) * 0.1;
    TweenMax.to(shadowIndex, mathValue2, {
        'onComplete': function() {
            if (shadowIndex.x < buttonData.x) {
                if (multiData < 45) {
                    shadowIndex.gotoAndPlay("pointrightup");
                } else if (multiData > 94) {
                    shadowIndex.gotoAndPlay("pointrightdown");
                } else {
                    shadowIndex.gotoAndPlay('pointright');
                }
            } else {
                if (multiData > 315) {
                    shadowIndex.gotoAndPlay('pointleftup');
                } else if (multiData < 225) {
                    shadowIndex.gotoAndPlay('pointleftdown');
                } else {
                    shadowIndex.gotoAndPlay("pointleft");
                }
            }
        }
    });
}

function stopPlayers() {
    for (var loopIndex3 = 0; loopIndex3 < gameData.players.length; loopIndex3++) {
        var item6 = gameData.players[loopIndex3];
        TweenMax.killTweensOf(item6);
    }
}

function getSpriteSheet(sprite6, sprite7) {
    var item7 = 30;
    var item8 = 50;
    var string = {};
    var item9 = '';
    var audioData = '';
    if (sprite6 == "player") {
        var targetPlayer = Math.floor(Math.random() * players_arr.length);
        item7 = players_arr[targetPlayer].regX;
        item8 = players_arr[targetPlayer].regY;
        item9 = 'players' + targetPlayer;
        var flag1 = false;
        if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
            if (sprite7 < 0) {
                gameData.playerIndex = gameData.multi.players[sprite7];
                flag1 = true;
            }
        } else if (sprite7 == 0) {
            flag1 = true;
        }
        if (flag1) {
            if (curPage == 'main') {
                gameData.playerIndex++;
                if (gameData.playerIndex > player_arr.length - 1) {
                    shuffle(gameData.player);
                    gameData.playerIndex = 0;
                }
            }
            targetPlayer = gameData.player[gameData.playerIndex];
            item7 = player_arr[targetPlayer].regX;
            item8 = player_arr[targetPlayer].regY;
            item9 = 'player' + targetPlayer;
        }
        string = {
            'stand': {
                'frames': [10],
                'speed': 1
            },
            'runleft': {
                'frames': [0, 1, 2, 3, 4, 3, 2, 1],
                'speed': 1
            },
            'runright': {
                'frames': [5, 6, 7, 8, 9, 8, 7, 6],
                'speed': 1
            },
            'pointleft': {
                'frames': [11, 12, 13],
                'speed': 1,
                'next': 'pointleftstill'
            },
            'pointleftstill': {
                'frames': [13, 13, 13, 14],
                'speed': 1
            },
            'pointleftup': {
                'frames': [21, 22, 23],
                'speed': 1,
                'next': "pointleftupstill"
            },
            'pointleftupstill': {
                'frames': [23, 23, 23, 24],
                'speed': 1
            },
            'pointleftdown': {
                'frames': [31, 32, 33],
                'speed': 1,
                'next': "pointleftdownstill"
            },
            'pointleftdownstill': {
                'frames': [33, 33, 33, 34],
                'speed': 1
            },
            'pointright': {
                'frames': [16, 17, 18],
                'speed': 1,
                'next': 'pointrightstill'
            },
            'pointrightstill': {
                'frames': [18, 18, 18, 19],
                'speed': 1
            },
            'pointrightup': {
                'frames': [26, 27, 28],
                'speed': 1,
                'next': "pointrightupstill"
            },
            'pointrightupstill': {
                'frames': [28, 28, 28, 29],
                'speed': 1
            },
            'pointrightdown': {
                'frames': [36, 37, 38],
                'speed': 1,
                'next': "pointrightdownstill"
            },
            'pointrightdownstill': {
                'frames': [38, 38, 38, 39],
                'speed': 1
            },
            'wave': {
                'frames': [40, 41, 42, 43, 42, 41],
                'speed': 1
            }
        };
        audioData = "stand";
    }
    var audioData = {
        'regX': item7,
        'regY': item8,
        'height': 100,
        'width': 60,
        'count': 44
    };
    var sprite8 = new createjs.SpriteSheet({
        'images': [loader.getResult(item9)],
        'frames': audioData,
        'animations': string
    });
    var _876906 = new createjs.Sprite(sprite8, audioData);
    _876906.framerate = 20;
    return _876906;
}

function toggleGameTimer(time2) {
    if (time2) {
        timeData.startDate = new Date();
    } else {}
    timeData.enable = time2;
}

function toggleGameSessionTimer(time3) {
    if (time3) {
        timerShape.alpha = 1;
        timeData.oldTimer = -1;
        timeData.accumulate = 0;
        timeData.sessionDate = new Date();
    } else {
        timeData.accumulate = timeData.countdown - 0;
    }
    timeData.enable = time3;
}

function updateGame() {
    if (!gameData.paused && gameData.begin) {
        if (timeData.enable) {
            timeData.nowDate = new Date();
            var elapsedTime = timeData.nowDate - timeData.sessionDate;
            timeData.sessionTimer = timeData.countdown - elapsedTime - timeData.accumulate;
            
            if (timeData.sessionTimer <= 0) {
                timeData.sessionTimer = 0;
                updateTimer();
            } else {
                var currentTimer = Math.floor(timeData.sessionTimer / 1000);
                if (currentTimer != timeData.oldTimer) {
                    timeData.oldTimer = currentTimer;
                    animateTimer();
                }
                updateTimerBar();
            }
        }
        
        loopPlayerAnimation();
        updateChildrenIndex();
    } else if (curPage == 'main') {
        // En la pantalla principal también actualizar animaciones y sombras
        loopPlayerAnimation();
        updateChildrenIndex();
    }
}

function updateTimer() {
    timeData.sessionTimer = 0;
    playSound('soundTimerEnd');
    showGameStatus('timesup');
    if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
        if (socketData.gameIndex == gameData.multi.round) {
            gameData.complete = true;
            toggleGameSessionTimer(false);
            toggleGameTimer(false);
            allPlayersPointToPlayer();
        }
        postSocketUpdate("timesup", socketData.gameIndex);
    } else {
        endGame();
    }
    updateTimerBar();
}

function animateTimer() {
    timerShape.alpha = 0.2;
    TweenMax.to(timerShape, 0.8, {
        'alpha': 1
    });
    timerShapeBg.alpha = 0;
    TweenMax.to(timerShapeBg, 0.8, {
        'alpha': 0.3
    });
}

function updateTimerBar() {
    timerShape.graphics.clear();
    timerShape.graphics.beginFill(gameSettings.timer.color);
    timerShapeBg.graphics.clear();
    timerShapeBg.graphics.beginFill(gameSettings.timer.color);
    timerShapeBg.alpha = 0.3;
    var nameData = timeData.sessionTimer / timeData.countdown * gameSettings.timer.width;
    nameData = nameData < 5 ? 5 : nameData;
    var itemArray = gameSettings.timer.radius;
    timerShape.graphics.drawRoundRectComplex(0, 0, nameData, gameSettings.timer.height, itemArray, itemArray, itemArray, itemArray);
    timerShapeBg.graphics.drawRoundRectComplex(0, 0, gameSettings.timer.width, gameSettings.timer.height, itemArray, itemArray, itemArray, itemArray);
}

function loopPlayerAnimation() {
    var dataObj;
    if (gameData.players.length > 0) {
        dataObj = gameData.players[0];
    }
    for (var shadowId = 0; shadowId < gameData.players.length; shadowId++) {
        var i = gameData.players[shadowId];
        var isMoving = true;
        if (false && i == dataObj) {
            isMoving = false;
        }
        if (isMoving) {
            if (i.x == i.data.x && i.y == i.data.y) {
                getPlayerFrame(i, "stand");
            } else {
                var direction = "right";
                if (i.x < i.data.x) {
                    direction = "left";
                }
                getPlayerFrame(i, "run" + direction);
            }
        }
        i.data.x = i.x;
        i.data.y = i.y;
        var shadowObj = gameData.shadow[shadowId];
        shadowObj.x = i.x;
        shadowObj.y = i.y;
        if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
            if (shadowId < 0) {
                posPlayerName(shadowId, i);
            }
        }
        if (shadowId != 0 && curPage == 'main') {
            var sprite9 = getDistance(dataObj.x, dataObj.y, i.x, i.y);
            if (sprite9 <= 150) {
                moveAwayPlayer(i, dataObj, true);
            }
        }
    }
}

function getPlayerFrame(player6, player7) {
    if (player6.frame != player7) {
        player6.frame = player7;
        player6.gotoAndPlay(player7);
    }
}

function updateChildrenIndex() {
    playersContainer.sortChildren(sortFunction);
}
var sortFunction = function(yPos, obj2, callback) {
    if (yPos.y > obj2.y) {
        return 1;
    }
    if (yPos.y < obj2.y) {
        return -1;
    }
    return 0;
};

function calculateScore() {
    playSound('soundClear');
    playSound("soundScore");
    var scorePerMs = gameData.stage.score / gameData.stage.timer;
    
    // Guardar el tiempo restante cuando se encuentra al jugador correcto
    var timeRemaining = Math.max(0, timeData.sessionTimer);
    
    TweenMax.to(timeData, gameSettings.score.speed, {
        'sessionTimer': 0,
        'overwrite': true,
        'onUpdate': function() {
            // Calcular puntos basados en el tiempo que quedaba cuando acertaste
            var text = Math.floor(timeRemaining * scorePerMs);
            scoreTxt.text = '+[NUMBER]pts'.replace("[NUMBER]", addCommas(text));
            updateTimerBar();
        },
        'onComplete': function() {
            // Añadir puntos basados en el tiempo restante
            var player8 = Math.floor(timeRemaining * scorePerMs);
            playerData.score += player8;
            TweenMax.to(timerContainer, 1, {
                'overwrite': true,
                'onComplete': function() {
                    scoreTxt.text = '';
                    if (typeof initSocket == "function" && multiplayerSettings.enable && socketData.online) {
                        if (socketData.gameIndex == gameData.multi.round) {
                            $.players[gameData.multi.round].score = 0;
                        }
                        postSocketUpdate("playersready", socketData.gameIndex);
                    } else {
                        showGameStatus('clear');
                        TweenMax.to(timerContainer, 2, {
                            'overwrite': true,
                            'onComplete': function() {
                                proceedNextStage();
                            }
                        });
                    }
                }
            });
        }
    });
}

function updateMultiScore() {
    var text1 = "[NUMBER]/[TOTAL]".replace("[NUMBER]", gameData.multi.found);
    text1 = text1.replace("[TOTAL]", -1);
    scoreTxt.text = text1;
}

function showGameStatus(bgContainer) {
    var gameState = 2;
    if (bgContainer == "timesup") {
        gameStatusTxt.text = "Time's up!";
    } else {
        if (bgContainer == "stage") {
            gameState = 1;
            gameStatusTxt.text = "Stage [NUMBER]".replace("[NUMBER]", playerData.stage + 1);
        } else {
            if (bgContainer == 'clear') {
                gameState = 1;
                gameStatusTxt.text = "Stage clear";
            } else {
                if (bgContainer == "round") {
                    gameState = 1;
                    var result = "Round [NUMBER]/[TOTAL]".replace("[NUMBER]", gameData.multi.round + 1);
                    result = result.replace("[TOTAL]", 0);
                    gameStatusTxt.text = result;
                } else {
                    if (bgContainer == "preround") {
                        gameState = 4;
                        var result = "Round [NUMBER]/[TOTAL]".replace("[NUMBER]", gameData.multi.round + 1);
                        result = result.replace("[TOTAL]", 0);
                        gameStatusTxt.text = result;
                    } else if (bgContainer == "roundcomplete") {
                        gameState = 1;
                        gameStatusTxt.text = "Round over";
                    }
                }
            }
        }
    }
    statusContainer.alpha = 0;
    TweenMax.to(statusContainer, 0.5, {
        'alpha': 1,
        'overwrite': true,
        'onComplete': function() {
            TweenMax.to(statusContainer, 0.5, {
                'delay': gameState,
                'alpha': 0,
                'overwrite': true
            });
        }
    });
}

function showMultiGameStatus(string1) {
    if (string1 == "find") {
        gameMultiStatusTxt.text = "YOUR TURN:\nFind all players".replace('[TOTAL]', -1);
    } else if (string1 == "hide") {
        gameMultiStatusTxt.text = "[PLAYER] TURN:\nStay in the crowd".replace('[PLAYER]', $.players[gameData.multi.round].player);
    }
    gameMultiStatusTxt.alpha = 0;
    TweenMax.to(gameMultiStatusTxt, 0.5, {
        'alpha': 1,
        'overwrite': true,
        'onComplete': function() {
            TweenMax.to(gameMultiStatusTxt, 0.5, {
                'delay': 3,
                'alpha': 0,
                'overwrite': true
            });
        }
    });
}

function proceedNextStage() {
    playerData.stage++;
    gameData.stageNum++;
    gameData.stageNum = gameData.stageNum > stage_arr.length - 1 ? stage_arr.length - 1 : gameData.stageNum;
    setupGameStage();
    prepareStage();
}

function endGame() {
    toggleGameSessionTimer(false);
    toggleGameTimer(false);
    allPlayersPointToPlayer();
    playSound("soundFail");
    TweenMax.to(gameContainer, 3, {
        'overwrite': true,
        'onComplete': function() {
            goPage("result");
        }
    });
}

function millisecondsToTimeGame(time7) {
    var _305080 = Math.floor(time7 / 1000 % 60);
    var roomData = Math.floor(time7 / 60000 % 60);
    if (_305080 < 10) {
        _305080 = '0' + _305080;
    }
    if (roomData < 10) {
        roomData = '0' + roomData;
    }
    return roomData + ':' + _305080;
}

function toggleOptions(container6) {
    if (optionsContainer.visible) {
        optionsContainer.visible = false;
        buttonInfo.visible = true;
    } else {
        optionsContainer.visible = true;
        buttonInfo.visible = false;
    }
    if (container6 != undefined) {
        optionsContainer.visible = container6;
        buttonInfo.visible = !container6;
    }
}

function toggleSoundMute(audio1) {
    buttonSoundOff.visible = false;
    buttonSoundOn.visible = false;
    toggleSoundInMute(audio1);
    if (audio1) {
        buttonSoundOn.visible = true;
    } else {
        buttonSoundOff.visible = true;
    }
}

function toggleMusicMute(audio2) {
    buttonMusicOff.visible = false;
    buttonMusicOn.visible = false;
    toggleMusicInMute(audio2);
    if (audio2) {
        buttonMusicOn.visible = true;
    } else {
        buttonMusicOff.visible = true;
    }
}

function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            } else {
                if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            }
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else {
            if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        }
    }
}

function shareLinks(temp, item10) {
    // Solo llamar a gtag si está definido (Google Analytics instalado)
    if (typeof gtag !== 'undefined' && shareSettings.gtag) {
        gtag("event", "click", {
            'event_category': "share",
            'event_label': temp
        });
    }
    // Determinar la URL de compartición según la plataforma
    (function(){
        function detectPlatform() {
            if (typeof window.__HIDDO_PLATFORM !== 'undefined') return window.__HIDDO_PLATFORM;
            var ua = navigator.userAgent || '';
            if (/Android/i.test(ua)) return 'android';
            if (/iPhone|iPad|iPod/i.test(ua)) return 'ios';
            return 'web';
        }
        var platform = detectPlatform();
        if (platform === 'android') {
            nameTextFormat = 'https://play.google.com/store/apps/details?id=appfilia.findme';
        } else if (platform === 'ios') {
            nameTextFormat = 'https://apps.apple.com/app/find-me-the-game/id6449293702';
        } else {
            nameTextFormat = location.href.substring(0, location.href.lastIndexOf('/') + 1);
        }
        nameTextFormat = encodeURIComponent(nameTextFormat);
    })();
    var text2 = "Highscore on Hiddo is [SCORE] points".replace("[SCORE]", item10);
    var socialData = "[SCORE] points is mine new highscore on Hiddo! Try it now!".replace('[SCORE]', item10);
    var uiButton = '';
    if (temp == "facebook") {
        nameTextFormat = decodeURIComponent(nameTextFormat);
        uiButton = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(nameTextFormat + 'share.php?title=' + text2 + "&url=" + nameTextFormat + "&thumb=" + nameTextFormat + "share.jpg");
    } else {
        if (temp == "twitter") {
            uiButton = "https://twitter.com/intent/tweet?text=" + socialData + "&url=" + nameTextFormat;
        } else {
            if (temp == 'whatsapp') {
                uiButton = "https://api.whatsapp.com/send?text=" + socialData + "%20" + nameTextFormat;
            } else {
                if (temp == "telegram") {
                    uiButton = "https://t.me/share/url?url=" + nameTextFormat + "&text=" + socialData;
                } else {
                    if (temp == 'reddit') {
                        uiButton = "https://www.reddit.com/submit?url=" + nameTextFormat + '&title=' + socialData;
                    } else if (temp == "linkedin") {
                        uiButton = 'https://www.linkedin.com/sharing/share-offsite/?url=' + nameTextFormat;
                    }
                }
            }
        }
    }
    window.open(uiButton);
}
var stageWidth;
var stageHeight = 0;
var isLoaded = false;
$(function() {
    var string2 = function() {
        try {
            if (createjs.WebAudioPlugin.context.state === "suspended") {
                createjs.WebAudioPlugin.context.resume();
                window.removeEventListener("click", string2);
            }
        } catch (temp2) {
            console.error("There was an error while trying to resume the SoundJS Web Audio context...");
            console.error(temp2);
        }
    };
    window.addEventListener("click", string2);
    if (window.location.protocol.substr(0, 4) === "file") {
        alert("To install the game just upload folder 'game' to your server. The game won't run locally with some browser like Chrome due to some security mode.");
    }
    $(window).resize(function() {
        resizeLoaderFunc();
    });
    resizeLoaderFunc();
    checkBrowser();
});

function resizeLoaderFunc() {
    stageWidth = $(window).width();
    stageHeight = $(window).height();
    $("#mainLoader").css("left", checkContentWidth($("#mainLoader")));
    $("#mainLoader").css("top", checkContentHeight($("#mainLoader")));
    $("#notSupportHolder").css("left", checkContentWidth($("#mainLoader")));
    $("#notSupportHolder").css("top", checkContentHeight($('#mainLoader')));
}
var browserSupport = false;
var isMobile;
var isTablet;
var isDesktop;

function checkBrowser() {
    if (typeof MobileDetect === "function") {
        var temp3 = new MobileDetect(window.navigator.userAgent);
        isMobile = temp3.mobile();
        isTablet = temp3.tablet();
        if (isMobile == null && isTablet == null) {
            isDesktop = true;
        }
    }
    var text3 = document.createElement('canvas');
    if (text3.getContext) {
        browserSupport = true;
    }
    if (browserSupport) {
        if (!isLoaded) {
            isLoaded = true;
            initPreload();
        }
    } else {
        $("#notSupportHolder").show();
    }
}

function initPreload() {
    toggleLoader(true);
    checkMobileEvent();
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkMobileOrientation, 300);
    });
    resizeGameFunc();
    loader = new createjs.LoadQueue(false);
    manifest = [{
        'src': "assets/background.png",
        'id': "background"
    }, {
        'src': "assets/background_p.png",
        'id': "backgroundP"
    }, {
        'src': "assets/logo.png",
        'id': "logo"
    }, {
        'src': "assets/logo_p.png",
        'id': "logoP"
    }, {
        'src': "assets/button_local.png",
        'id': "buttonLocal"
    }, {
        'src': "assets/button_online.png",
        'id': 'buttonOnline'
    }, {
        'src': "assets/button_start.png",
        'id': "buttonStart"
    }, {
        'src': 'assets/item_status.png',
        'id': "itemStatus"
    }, {
        'src': "assets/shadow.png",
        'id': "itemShadow"
    }, {
        'src': "assets/button_share.png",
        'id': "buttonShare"
    }, {
        'src': "assets/button_save.png",
        'id': "buttonSave"
    }, {
        'src': "assets/social/button_facebook.png",
        'id': 'buttonFacebook'
    }, {
        'src': 'assets/social/button_twitter.png',
        'id': 'buttonTwitter'
    }, {
        'src': 'assets/social/button_whatsapp.png',
        'id': 'buttonWhatsapp'
    }, {
        'src': 'assets/social/button_telegram.png',
        'id': "buttonTelegram"
    }, {
        'src': "assets/social/button_reddit.png",
        'id': "buttonReddit"
    }, {
        'src': "assets/social/button_linkedin.png",
        'id': "buttonLinkedin"
    }, {
        'src': "assets/button_continue.png",
        'id': "buttonContinue"
    }, {
        'src': "assets/item_pop.png",
        'id': 'itemPop'
    }, {
        'src': "assets/item_pop_p.png",
        'id': "itemPopP"
    }, {
        'src': "assets/button_confirm.png",
        'id': "buttonConfirm"
    }, {
        'src': "assets/button_cancel.png",
        'id': "buttonCancel"
    }, {
        'src': "assets/button_fullscreen.png",
        'id': "buttonFullscreen"
    }, {
        'src': "assets/button_sound_on.png",
        'id': "buttonSoundOn"
    }, {
        'src': "assets/button_sound_off.png",
        'id': 'buttonSoundOff'
    }, {
        'src': 'assets/button_exit.png',
        'id': "buttonExit"
    }, {
        'src': 'assets/button_settings.png',
        'id': "buttonSettings"
    }, {
        'src': 'assets/button_info.png',
        'id': "buttonInfo"
    }];
    for (var posY = 0; posY < player_arr.length; posY++) {
        manifest.push({
            'src': player_arr[posY].src,
            'id': 'player' + posY
        });
    }
    for (var posY = 0; posY < players_arr.length; posY++) {
        manifest.push({
            'src': players_arr[posY].src,
            'id': "players" + posY
        });
    }
    if (typeof addScoreboardAssets == "function") {
        addScoreboardAssets();
    }
    audioOn = true;
    if (!isDesktop) {}
    if (audioOn) {
        manifest.push({
            'src': 'assets/sounds/sound_click.ogg',
            'id': 'soundButton'
        });
        manifest.push({
            'src': "assets/sounds/sound_score.ogg",
            'id': 'soundScore'
        });
        manifest.push({
            'src': 'assets/sounds/sound_timer.ogg',
            'id': 'soundTimer'
        });
        manifest.push({
            'src': 'assets/sounds/sound_timer_end.ogg',
            'id': "soundTimerEnd"
        });
        manifest.push({
            'src': "assets/sounds/sound_result.ogg",
            'id': "soundResult"
        });
        manifest.push({
            'src': "assets/sounds/sound_clear.ogg",
            'id': "soundClear"
        });
        manifest.push({
            'src': "assets/sounds/sound_fail.ogg",
            'id': "soundFail"
        });
        manifest.push({
            'src': 'assets/sounds/sound_start.ogg',
            'id': "soundStart"
        });
        manifest.push({
            'src': "assets/sounds/sound_player1.ogg",
            'id': "soundPlayer1"
        });
        manifest.push({
            'src': "assets/sounds/sound_player2.ogg",
            'id': 'soundPlayer2'
        });
        manifest.push({
            'src': "assets/sounds/sound_player3.ogg",
            'id': 'soundPlayer3'
        });
        manifest.push({
            'src': "assets/sounds/sound_player4.ogg",
            'id': "soundPlayer4"
        });
        manifest.push({
            'src': "assets/sounds/sound_player5.ogg",
            'id': "soundPlayer5"
        });
        manifest.push({
            'src': "assets/sounds/sound_running.ogg",
            'id': "soundRunning"
        });
        createjs.Sound.alternateExtensions = ["mp3"];
        loader.installPlugin(createjs.Sound);
    }
    loader.addEventListener("complete", handleComplete);
    loader.addEventListener('fileload', fileComplete);
    loader.addEventListener("error", handleFileError);
    loader.on("progress", handleProgress, this);
    loader.loadManifest(manifest);
}

function fileComplete(temp4) {}

function handleFileError(string3) {
    console.log("error ", string3);
}

function handleProgress() {
    $("#mainLoader span").html(Math.round(loader.progress / 1 * 100) + '%');
}

function handleComplete() {
    toggleLoader(false);
    initMain();
};

function toggleLoader(temp5) {
    if (temp5) {
        $("#mainLoader").show();
    } else {
        $("#mainLoader").hide();
    }
}
var stageW = 1280;
var stageH = 768;
var contentW = 1024;
var contentH = 576;
const viewport = {
    'isLandscape': window.innerWidth > window.innerHeight
};
const landscapeSize = {
    'w': stageW,
    'h': stageH,
    'cW': contentW,
    'cH': contentH
};
const portraitSize = {
    'w': 768,
    'h': 1024,
    'cW': 576,
    'cH': 900
};

function initMain() {
    if (isDesktop) {
        $("#canvasHolder").show();
    }
    initGameCanvas(stageW, stageH);
    buildGameCanvas();
    buildGameButton();
    if (typeof buildScoreBoardCanvas == "function") {
        buildScoreBoardCanvas();
    }
    goPage("main");
    if (typeof initSocket == 'function' && multiplayerSettings.enable) {
        initSocket("findme");
    }
    checkMobileOrientation();
    resizeCanvas();
}
var windowW = windowH = 0;
var scalePercent = 0;
const dpr = window.devicePixelRatio || 1;
const offset = {
    'x': 0,
    'y': 0,
    'left': 0,
    'top': 0
};

function resizeGameFunc() {
    setTimeout(function() {
        $(".mobileRotate").css("left", checkContentWidth($('.mobileRotate')));
        $('.mobileRotate').css("top", checkContentHeight($(".mobileRotate")));
        
        // Calcular padding según orientación
        var paddingPercent;
        if (isDesktop) {
            paddingPercent = 0.02; // 2% en desktop
        } else {
            paddingPercent = viewport.isLandscape ? 0.005 : 0.0025; // 0.5% landscape, 0.25% portrait mobile
        }
        
        var paddingW = window.innerWidth * paddingPercent * 2;
        var paddingH = window.innerHeight * paddingPercent * 2;
        windowW = window.innerWidth - paddingW;
        windowH = window.innerHeight - paddingH;
        scalePercent = Math.min(windowW / stageW, windowH / stageH);
        scalePercent = scalePercent > 1 ? 1 : scalePercent;
        const stageConfig = stageW * scalePercent;
        const uiConfig = stageH * scalePercent;
        offset.left = 0;
        offset.top = 0;
        if (stageConfig > windowW) {
            offset.left = -(stageConfig - windowW);
        } else {
            offset.left = windowW - stageConfig;
        }
        if (uiConfig > windowH) {
            offset.top = -(uiConfig - windowH);
        } else {
            offset.top = windowH - uiConfig;
        }
        offset.x = 0;
        offset.y = 0;
        const animConfig = document.getElementById("gameCanvas");
        animConfig.style.width = stageConfig + 'px';
        animConfig.style.height = uiConfig + 'px';
        animConfig.style.left = (offset.left / 2) + "px";
        animConfig.style.top = (offset.top / 2) + "px";
        animConfig.width = stageW * dpr;
        animConfig.height = stageH * dpr;
        if (typeof initSocket == 'function' && multiplayerSettings.enable) {
            $(".resizeFont").each(function(text4, text5) {
                $(this).css("font-size", Math.round(Number($(this).attr("data-fontsize")) * scalePercent));
            });
            $("#roomWrapper").css("width", stageConfig);
            $("#roomWrapper").css("height", uiConfig);
            $("#roomWrapper").css("left", 0);
            $("#roomWrapper").css("top", 0);
            $('#notificationHolder').css('width', stageConfig);
            $('#notificationHolder').css("height", uiConfig);
            $("#notificationHolder").css('left', 0);
            $("#notificationHolder").css("top", 0);
        }
        $(window).scrollTop(0);
        resizeCanvas();
        if (typeof resizeScore == "function") {
            resizeScore();
        }
    }, 100);
}
var resizeTimer;

function checkMobileEvent() {
    console.log("checkMobileEvent - isDesktop:", isDesktop);
    if (!isDesktop) {
        $(window).off("orientationchange").on("orientationchange", function(string4) {
            console.log("orientationchange event fired");
            $('#canvasHolder').hide();
            $('#rotateHolder').hide();
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(checkMobileOrientation, 300);
        });
        checkMobileOrientation();
    } else {
        // En desktop también debemos ejecutar checkMobileOrientation para inicializar
        checkMobileOrientation();
    }
}

function checkMobileOrientation() {
    var flag2 = false;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    
    // Detectar orientación: landscape si el ancho es mayor que el alto
    if (windowWidth > windowHeight) {
        flag2 = true;
    }
    
    if ($.editor.enable) {
        viewport.isLandscape = edit.isLandscape;
    } else {
        viewport.isLandscape = flag2;
    }
    
    // Debug log
    console.log("Orientation check:", {
        width: windowWidth,
        height: windowHeight,
        isLandscape: viewport.isLandscape,
        isDesktop: isDesktop
    });
    
    changeViewport(viewport.isLandscape);
    resizeGameFunc();
    $("#canvasHolder").show();
}

function toggleRotate(temp6) {
    if (temp6) {
        $("#rotateHolder").fadeIn();
    } else {
        $('#rotateHolder').fadeOut();
    }
    resizeGameFunc();
}

function checkContentHeight(size) {
    var size1 = $(window).height();
    var size2 = size1 / 2 - size.height() / 2;
    return size2;
}

function checkContentWidth(size3) {
    var size4 = $(window).width();
    var size5 = size4 / 2 - size3.width() / 2;
    return size5;
}

function shuffle(playerState) {
    var timerData = playerState.length;
    var time8;
    var time9;
    while (0 !== timerData) {
        time9 = Math.floor(Math.random() * timerData);
        timerData -= 1;
        time8 = playerState[timerData];
        playerState[timerData] = playerState[time9];
        playerState[time9] = time8;
    }
    return playerState;
}

function randomBoolean() {
    return Math.random() < 0.5;
}

function getDistance(mathValue3, mathValue4, mathValue5, mathValue6) {
    var mathValue7 = Math.sqrt(Math.pow(mathValue3 - mathValue5, 2) + Math.pow(mathValue4 - mathValue6, 2));
    return mathValue7;
}

function sortOnObject(callback1, alphaValue, temp7) {
    if (temp7) {
        callback1.sort(function(item11, sortItem1) {
            var item13 = item11[alphaValue];
            var itemValue1 = sortItem1[alphaValue];
            if (item13 == itemValue1) {
                return 0;
            }
            return item13 < itemValue1 ? 1 : -1;
        });
    } else {
        callback1.sort(function(item15, sortItem2) {
            var item17 = item15[alphaValue];
            var item18 = sortItem2[alphaValue];
            if (item17 == item18) {
                return 0;
            }
            return item17 > item18 ? 1 : -1;
        });
    }
    return callback1;
}

function randomIntFromInterval(mathValue8, mathValue9) {
    return Math.floor(Math.random() * (mathValue9 - mathValue8 + 1) + mathValue8);
}

function addCommas(string5) {
    string5 += '';
    x = string5.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var string6 = /(\d+)(\d{3})/;
    while (string6.test(x1)) {
        x1 = x1.replace(string6, "$1,$2");
    }
    return x1 + x2;
}

function swapArray(logData, item19, item20) {
    var item21 = logData[item19];
    logData[item19] = logData[item20];
    logData[item20] = item21;
}

function getCenterPosition(position7, position8, position9, position10) {
    var position11 = {
        'x': 0,
        'y': 0
    };
    position11.x = (position7 + position9) / 2;
    position11.y = (position8 + position10) / 2;
    return position11;
}

function isEven(temp8) {
    if (temp8 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

function getDirection(x1, y1, x2, y2) {
    var radiansToDegrees = 180 / Math.PI;
    var angle = -Math.atan2(x2 - x1, y2 - y1) * radiansToDegrees;
    return Math.round(angle + 180);
}
var audioOn;
var soundMute = false;
var musicMute = false;
$.sound = {};
var soundID = 0;
var soundPushArr = [];
var soundLoopPushArr = [];
var musicPushArr = [];

function playSound(text6, audio3) {
    if (audioOn) {
        var textField = soundID;
        soundPushArr.push(textField);
        soundID++;
        var text7 = audio3 == undefined ? 1 : audio3;
        $.sound[textField] = createjs.Sound.play(text6);
        $.sound[textField].defaultVol = text7;
        setSoundVolume(textField);
        $.sound[textField].removeAllEventListeners();
        $.sound[textField].addEventListener("complete", function() {
            var text8 = soundPushArr.indexOf(textField);
            if (text8 != -1) {
                soundPushArr.splice(text8, 1);
            }
        });
    }
}

function playSoundLoop(options) {
    if (audioOn) {
        if ($.sound[options] == null) {
            soundLoopPushArr.push(options);
            $.sound[options] = createjs.Sound.play(options);
            $.sound[options].defaultVol = 1;
            setSoundLoopVolume(options);
            $.sound[options].removeAllEventListeners();
            $.sound[options].addEventListener("complete", function() {
                $.sound[options].play();
            });
        }
    }
}

function toggleSoundLoop(item22, audio4) {
    if (audioOn) {
        if ($.sound[item22] != null) {
            if (audio4) {
                $.sound[item22].play();
            } else {
                $.sound[item22].paused = true;
            }
        }
    }
}

function stopSoundLoop(totalValue) {
    if (audioOn) {
        if ($.sound[totalValue] != null) {
            $.sound[totalValue].stop();
            $.sound[totalValue] = null;
            var array = soundLoopPushArr.indexOf(totalValue);
            if (array != -1) {
                soundLoopPushArr.splice(array, 1);
            }
        }
    }
}

function playMusicLoop(playerNameText) {
    if (audioOn) {
        if ($.sound[playerNameText] == null) {
            musicPushArr.push(playerNameText);
            $.sound[playerNameText] = createjs.Sound.play(playerNameText);
            $.sound[playerNameText].defaultVol = 1;
            setMusicVolume(playerNameText);
            $.sound[playerNameText].removeAllEventListeners();
            $.sound[playerNameText].addEventListener("complete", function() {
                $.sound[playerNameText].play();
            });
        }
    }
}

function toggleMusicLoop(_657229, audio5) {
    if (audioOn) {
        if ($.sound[_657229] != null) {
            if (audio5) {
                $.sound[_657229].play();
            } else {
                $.sound[_657229].paused = true;
            }
        }
    }
}

function stopMusicLoop(indexValue6) {
    if (audioOn) {
        if ($.sound[indexValue6] != null) {
            $.sound[indexValue6].stop();
            $.sound[indexValue6] = null;
            var array1 = musicPushArr.indexOf(indexValue6);
            if (array1 != -1) {
                musicPushArr.splice(array1, 1);
            }
        }
    }
}

function stopSound() {
    createjs.Sound.stop();
}

function toggleSoundInMute(audio6) {
    if (audioOn) {
        soundMute = audio6;
        for (var value = 0; value < soundPushArr.length; value++) {
            setSoundVolume(soundPushArr[value]);
        }
        for (var value = 0; value < soundLoopPushArr.length; value++) {
            setSoundLoopVolume(soundLoopPushArr[value]);
        }
    }
}

function toggleMusicInMute(audio7) {
    if (audioOn) {
        musicMute = audio7;
        for (var loopIndex4 = 0; loopIndex4 < musicPushArr.length; loopIndex4++) {
            setMusicVolume(musicPushArr[loopIndex4]);
        }
    }
}

function setSoundVolume(text9, text10) {
    if (audioOn) {
        var textData = soundPushArr.indexOf(text9);
        if (textData != -1) {
            var text11 = text10 == undefined ? $.sound[soundPushArr[textData]].defaultVol : text10;
            var text12 = soundMute == false ? text11 : 0;
            $.sound[soundPushArr[textData]].volume = text12;
            $.sound[soundPushArr[textData]].defaultVol = text11;
        }
    }
}

function setSoundLoopVolume(sprite10, sprite11) {
    if (audioOn) {
        var spriteData = soundLoopPushArr.indexOf(sprite10);
        if (spriteData != -1) {
            var sprite12 = sprite11 == undefined ? $.sound[soundLoopPushArr[spriteData]].defaultVol : sprite11;
            var volumeLevel = soundMute == false ? sprite12 : 0;
            $.sound[soundLoopPushArr[spriteData]].volume = volumeLevel;
            $.sound[soundLoopPushArr[spriteData]].defaultVol = sprite12;
        }
    }
}

function setMusicVolume(audio8, item23) {
    if (audioOn) {
        var socketData = musicPushArr.indexOf(audio8);
        if (socketData != -1) {
            var item24 = item23 == undefined ? $.sound[musicPushArr[socketData]].defaultVol : item23;
            var item25 = musicMute == false ? item24 : 0;
            $.sound[musicPushArr[socketData]].volume = item25;
            $.sound[musicPushArr[socketData]].defaultVol = item24;
        }
    }
}