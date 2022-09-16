// ==UserScript==
// @name         学习公社自动学习看视频
// @namespace    学习公社
// @version      0.3
// @description  学习公社自动看视频、自动刷新
// @author       LZJ,wtd修缮。
// @match        *study.enaea.edu.cn/viewerforccvideo*
// @match        *study.enaea.edu.cn/circleIndexRedirect*
// ==/UserScript==
(function() {
	var url = window.location.pathname
	if (url == '/viewerforccvideo.do') {
		localStorage.clear();
		var bl_close = false;

		function Music_No() {
			setTimeout(function() {
				document.getElementsByClassName("xgplayer-icon-muted")[0].click()
			}, 5000)
		}

		function rePlay() {
			setTimeout(function() {
				if (document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")[0].innerHTML == '100%') {
					for (var i = 1; i < document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")
						.length; i++) {
						if (document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")[i].innerHTML !=
							'100%') {
							document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")[i].click()
							break
						}
					}
				}
			}, 2000)
		}


		setInterval(function() {
			bl_close = true;
			for (var i = 0; i < document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")
				.length; i++) {
				if (document.getElementsByClassName("cvtb-MCK-CsCt-studyProgress")[i].innerHTML != '100%') {
					bl_close = false;
					break
				}
			}
			if (document.getElementsByClassName('current')[1].children[0].childNodes[1].innerText ==
				'100%') {
				rePlay()
			}
			if (document.getElementsByClassName("dialog-content")[0].innerText == '学时记录出现异常请检查网络') {
				location.reload()
			}
		}, 5000)

		setInterval(function() {
			console.log('未完成')
			if (bl_close == true) {
				window.close()
			}
		}, 30000)

		setInterval(function() {
			videoPlay()
		}, 1000)

		rePlay()
		Music_No()
	}

	if (url == '/circleIndexRedirect.do') {
		var v_title = ""

		function playVideo_2() {
			document.getElementsByClassName('customcur-tab-text')[1].click()
			setTimeout(function() {
				if (v_title == document.getElementsByClassName('course-title')[1].innerText) {
					console.log("Wait", v_title)
				} else {
					location.reload()
				}
			}, 1000)
		}

		function playVideo_1() {
			document.getElementsByClassName('customcur-tab-text')[1].click()
			setTimeout(function() {
				v_title = document.getElementsByClassName('course-title')[1].innerText
				document.getElementsByClassName('golearn  ablesky-colortip  saveStuCourse')[1].click()
			}, 1000)
		}
        setTimeout(function() {
            playVideo_1()
        }, 2000)

        setInterval(function() {
            playVideo_2()
        }, 1000*20)
        console.log("准备reload")
        setTimeout(function() {
            location.reload()
        }, 1000 * 60 * 10)

	}
})();
*.js linguist-language=java
