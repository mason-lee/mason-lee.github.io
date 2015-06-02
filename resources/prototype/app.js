animationCurve = "spring(600,40,500)"
spring2 = "spring(600,70,100000)"

// Hide the button touch rects
PSD["NavButton_Intro"].opacity = 0
PSD["Logo"].opacity = 0
PSD["Feed"].opacity = 0
PSD["Text"].opacity = 0
PSD["Feed"].x = 0

PSD["OpenTodayButton"].placeBefore(PSD["NewsFeed"])

PSD["BookmarkScroll"].opacity = 0
PSD["GoalPage"].opacity = 0
utils.delay(1500, function() {
// Fade in the intro view
	PSD["BookmarkScroll"].animate({
		properties: {opacity:1},
		time: 100
	})
})

utils.delay(1500*5.5, function() {
// Fade in the intro view
	PSD["GoalPage"].animate({
		properties: {opacity:1},
		time: 100
	})
})

PSD["RewardPage"].opacity = 0
utils.delay(1500, function() {
// Fade in the intro view
	PSD["RewardPage"].animate({
		properties: {opacity:1},
		time: 100
	})
})

// Set up the navigation menu
PSD.BookmarkScroll.superView = PSD.Screen
PSD.BookmarkScroll.x = 0
PSD.BookmarkScroll.y = PSD.Status.maxY
PSD.BookmarkScroll.height = PSD.Screen.height - PSD.BookmarkScroll.y
PSD["TodayScroll"].y = PSD["Status"].height
PSD["TodayFeed"].superView = PSD["TodayScroll"]
PSD["TodayScroll"].superView = PSD["Screen"]
PSD["Bookmark"].superView = PSD["BookmarkScroll"]

// Set up the news feed views
PSD.NewsFeed.superView = PSD.Screen
PSD.NewsFeed.x = 0
PSD.NewsFeed.y = PSD.Status.maxY
PSD["FeedScroll"].superView = PSD["NewsFeed"]

//Nav button
PSD["NavButton_Intro"].superView = PSD["GoalPage"]
PSD["NavButton_Intro"].x = 0
PSD["NavButton_Intro"].y = 0


start = function() {
	
	// Fade in the intro view
	PSD["Feed"].animate({
		properties: {opacity:1},
		time: 100
	})
	
	// Make the logo appear
	utils.delay(500, function() {
		PSD.Logo.scale = .5
		PSD.Logo.animate({
			properties: {opacity:1, scale:1},
			curve: "spring(1500,30,2000)"
		})
	})

	// Rotate the logo
	utils.delay(1500 * 1, function() {
		PSD.Logo.animate({
			properties: {rotationX:360},
			curve: "spring(150,30,0)"
		})
	})
	
	// Rotate the logo again
	utils.delay(1500 * 2, function() {
		PSD.Logo.animate({
			properties: {rotationY:360},
			curve: "spring(150,30,0)"
		})
	})
	
	// Rotate the logo again
	utils.delay(1500 * 3, function() {
		PSD.Logo.animate({
			properties: {rotationZ:360},
			curve: "spring(150,30,0)"
		})
	})
	
	// Shake the logo
	utils.delay(1500 * 4, function() {
		oldX = PSD.Logo.x
		PSD.Logo.x -= 100
		PSD.Logo.animate({
			properties: {x:oldX},
			curve: "spring(1200,6,500)"
		})
		PSD["Text"].animate({
			properties: {opacity:1},
			curve: "ease-in",
			time: 100
		})
	})

	// Bounce the logo on click
	utils.delay(1500 * 5, function() {
		PSD.Logo.on("click", function() {
			PSD.Logo.scale = 0.5
			PSD.Logo.animate({
				properties: {scale:1},
				curve: "spring(1200,6,500)"
			})
		})
	})

	utils.delay(1500 * 5.5, function() {
		PSD["NewsFeed"].animate({
			properties:{opacity: 0},
			time: 500
		})
		PSD["NewsFeed"].destroy()
	})


}

utils.delay(1000, start)


//Show Goal Page
PSD["GoalPage"].superView = PSD["Screen"]
PSD["GoalPage"].x = PSD["BookmarkScroll"].maxX-4
PSD["GoalPage"].y = PSD["Status"].maxY
PSD["NavButton_Intro"].placeBefore(PSD["GoalPage"])
// PSD["GoalPage"].placeBefore(PSD["NewsFeed"])

// Set up the bookmark animations
showBookmarks = function() {
	PSD.BookmarkScroll.placeBefore(PSD["TodayScroll"])
	// PSD["GoalPage"].placeBefore(PSD["NewsFeed"])
	PSD["NewsFeed"].placeBehind(PSD["GoalPage"])
	PSD["BookmarkScroll"].placeBefore(PSD["GoalPage"])
	PSD["GoalPage"].animate({
		properties: {x:PSD.BookmarkScroll.maxX-4},
		curve: animationCurve
	})
}

hideBookmarks = function() {
	// PSD["GoalPage"].placeBefore(PSD["NewsFeed"])
	PSD["NewsFeed"].placeBehind(PSD["GoalPage"])
	PSD["GoalPage"].placeBefore(PSD["BookmarkScroll"])
	PSD["NavButton_Intro"].placeBefore(PSD["GoalPage"])
	PSD["GoalPage"].animate({
		properties: {x:-4},
		curve: animationCurve
	})	
}

bookmarkToggle = utils.toggle(showBookmarks, hideBookmarks)

PSD["NavButton_Intro"].on("click", function() {
	bookmarkToggle()()
})

/*
	Show nav button in the beginnging
*/
utils.delay(1500*6.5, hideBookmarks) 
// utils.delay(100, hideBookmarks) 

//Intro button
// PSD.Introbutton.x = PSD.FeedScroll.maxX - 143
// PSD.Introbutton.y = PSD.FeedScroll.maxY + 497

// PSD["TodayScroll"].superView = PSD["Screen"]
// PSD["TodayScroll"].maxX = PSD["Screen"].width
// PSD["TodayScroll"].x = PSD["Screen"].width
// PSD["TodayScroll"].y = PSD["Status"].height
// PSD["TodayScroll"].height = PSD["Screen"].height - PSD["TodayScroll"].y

// showToday = function() {
// 	PSD["TodayScroll"].placeBefore(PSD["BookmarkScroll"])
// 	PSD["TodayScroll"].animate({
// 		properties:{ 
// 			x: 0		
// 		},
// 		curve: animationCurve
// 	}),

// 	PSD["NewsFeed"].animate({
// 		properties:{ 
// 			x: 0 - PSD["TodayScroll"].width+1		
// 		},
// 		curve: animationCurve
// 	})
// }

// hideToday = function() {
// 	PSD["NewsFeed"].animate({
// 		properties:{ 
// 			x: 0		
// 		},
// 		curve: animationCurve
// 	})
// }

// todayToggle = utils.toggle(showToday, hideToday)

// PSD["Introbutton"].on("click", function(){
// 	todayToggle()()
// })

/*
	Overlay menu
*/
PSD["AddAction"].opacity = 0
PSD["AddAction"].superView = PSD["TodayFeed"]
PSD["AddAction"].x = PSD["TodayScroll"].width - PSD["AddAction"].width
PSD["AddAction"].y = 0
// PSD["Overlay_bg"].opacity = 0
// PSD["Overlay_bg"].superView = PSD["Screen"]
// PSD["Overlay_bg"].x = 0
// PSD["Overlay_bg"].style['z-index'] = -1
// PSD["Overlay_bg"].y = 0

PSD["Overlay"].superView = PSD["Screen"]
// PSD["Overlay"].style["z-index"] = 1000 + 50
PSD["Overlay"].x = 0
PSD["Overlay"].y = -PSD["Overlay"].height 

addInput = function() {
	PSD["Overlay"].placeBefore(PSD["WeekPage"])
	PSD["Overlay"].placeBefore(PSD["TodayScroll"])

	PSD["Overlay"].animate({
		properties:{ 
			y: PSD["Status"].maxY + 94	
		},
		curve: animationCurve
	})

	// PSD["Overlay_bg"].style['z-index'] = 8
	// // PSD["Overlay"].placeBefore(PSD["Overlay_bg"])
	// utils.delay(5000,function() {
	// 	PSD["Overlay_bg"].animate({
	// 		properties:{
	// 			opacity: 1
	// 		},
	// 		curve: "ease-in"
	// 	})
	// })
}

hideInput = function() {
	PSD["Overlay"].animate({
		properties:{ 
			y: -PSD["Overlay"].height		
		},
		curve: animationCurve
	})
}

overlayToggle = utils.toggle(addInput, hideInput)

PSD["AddAction"].on("click", function() {
	overlayToggle()()
})

/*
	Add Glucose input
*/
PSD["AddGlucose"].opacity = 0
PSD["AddActivity"].opacity = 0
PSD["AddFoot"].opacity = 0
PSD["FinishGlucoseButton"].opacity = 0
PSD["FinishActivityButton"].opacity = 0
PSD["FinishFootButton"].opacity = 0

PSD["AddGlucosePage"].superView = PSD["Screen"];
PSD["AddGlucosePage"].x = 0
PSD["AddGlucosePage"].y = PSD["Screen"].height
PSD["AddActivityPage"].superView = PSD["Screen"];
PSD["AddActivityPage"].x = 0
PSD["AddActivityPage"].y = PSD["Screen"].height
PSD["AddFootPage"].superView = PSD["Screen"];
PSD["AddFootPage"].x = 0
PSD["AddFootPage"].y = PSD["Screen"].height

addGlucose = function() {
	PSD["Overlay"].animate({
		properties:{ 
			y: -PSD["Overlay"].height, 		
		},
		curve: animationCurve
	}),
	PSD["AddGlucosePage"].placeBefore(PSD["TodayScroll"])

	PSD["AddGlucosePage"].animate({
		properties:{ 
			y: PSD["Status"].height		
		},
		curve: animationCurve
	})
}

hideGlucose = function() {

}

glucoseToggle = utils.toggle(addGlucose, hideGlucose)

PSD["AddGlucose"].on("click", function() {
	glucoseToggle()()
})

PSD["FinishGlucoseButton"].on("click", function() {
	PSD["AddGlucosePage"].animate({
		properties:{ 
			y: PSD["Screen"].height		
		},
		curve: animationCurve
	})
})

/*
	Add Activity Input
*/

PSD["AddActivity"].on("click", function() {
	PSD["AddActivityPage"].placeBefore(PSD["TodayScroll"])
	PSD["Overlay"].animate({
		properties:{ 
			y: -PSD["Overlay"].height		
		},
		curve: animationCurve
	}),
	PSD["AddActivityPage"].animate({
		properties:{ 
			y: PSD["Status"].height		
		},
		curve: animationCurve
	})

})

PSD["FinishActivityButton"].on("click", function() {
	PSD["AddActivityPage"].animate({
		properties:{ 
			y: PSD["Screen"].height		
		},
		curve: animationCurve
	})
})

/*
	Add Foot Input
*/

PSD["AddFoot"].on("click", function() {
	PSD["AddFootPage"].placeBefore(PSD["TodayScroll"])
	PSD["Overlay"].animate({
		properties:{ 
			y: -PSD["Overlay"].height		
		},
		curve: animationCurve
	}),
	PSD["AddFootPage"].animate({
		properties:{ 
			y: PSD["Status"].height		
		},
		curve: animationCurve
	})

})

PSD["FinishFootButton"].on("click", function() {
	PSD["AddFootPage"].animate({
		properties:{ 
			y: PSD["Screen"].height		
		},
		curve: animationCurve
	})
})

/*
	From Today to Journal
*/

PSD["OpenNavButton"].superView = PSD["TodayFeed"]
PSD["OpenNavButton"].opacity = 0
// PSD["OpenNavButton"].style["z-index"] = 1000 + 50 + 50
// PSD["OpenNavButton"].placeBefore(PSD["AddAction"])
showNav = function() {
	// PSD["BookmarkScroll"].placeBefore(PSD["TodayScroll"])
	// PSD["TodayScroll"].animate({
	// 	properties:{ 
					
	// 	}
	// })
	PSD["TodayScroll"].animate({
		properties:{ 
			x: PSD["Bookmark"].width	
		},
		curve: animationCurve
	})
}

hideNav = function() {
	// PSD["TodayScroll"].placeBefore(PSD["Bookmark"])

	PSD["TodayScroll"].placeBefore(PSD["BookmarkScroll"])

	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["TodayScroll"].animate({
		properties: {
			x: 0
		},
		curve: animationCurve
	})
}

navToggle = utils.toggle(showNav, hideNav)

PSD["OpenNavButton"].on("click", function(){
	navToggle()()
})

/*
	Week Page
*/
PSD["WeekPage"].superView = PSD["Screen"]
PSD["WeekPage"].x = PSD["Screen"].width
PSD["WeekPage"].y = PSD["Status"].height
PSD["OpenWeekButton"].opacity = 0
PSD["OpenWeekButton"].superView = PSD["Bookmark"]
/*


	if this button being clicked?????



*/
PSD["OpenWeekButton"].on("click", function() {
	// PSD["WeekPage"].placeBefore(PSD["WeekPage"])
	PSD["WeekPage"].placeBefore(PSD["LearnPage"])
	PSD["WeekPage"].placeBefore(PSD["ReportPage"])
	PSD["WeekPage"].placeBefore(PSD["TodayScroll"])
	PSD["WeekPage"].placeBefore(PSD["BookmarkScroll"])

	// PSD["WeekPage"].style["z-index"] = 4000

	PSD["TodayScroll"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["TodayScroll"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["WeekPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
})

/*
	Open Calendar from Week Page
*/
PSD["CalendarPage"].superView = PSD["Screen"]
PSD["CalendarPage"].x = 0
PSD["CalendarPage"].y = -PSD["CalendarPage"].height
PSD["OpenCalendar"].opacity = 0
PSD["OpenNavFromWeek"].opacity = 0

PSD["OpenCalendar"].on("click", function() {
	PSD["OpenCalendar"].placeBefore(PSD["LearnPage"])
	PSD["CalendarPage"].placeBefore(PSD["BookmarkScroll"])
	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: spring2
	}),

	PSD["CalendarPage"].animate({
		properties:{ 
			y: PSD["Status"].height		
		},
		curve: animationCurve
	})
})

PSD["CloseCalendar"].opacity = 0
PSD["CloseCalendar"].on("click", function() {
	PSD["WeekPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	}),

	PSD["CalendarPage"].animate({
		properties:{ 
			y: -PSD["CalendarPage"].height		
		},
		curve: animationCurve
	})	
})

openNavFromWeek = function(){
	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Bookmark"].width+2		
		},
		curve: animationCurve
	})
}

hideNavFromWeek = function() {
	PSD["WeekPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
}

openNavFromWeekToggle = utils.toggle(openNavFromWeek, hideNavFromWeek)


PSD["OpenNavFromWeek"].on("click", function(){
	openNavFromWeekToggle()()
})

/*
	Learn Page
*/
PSD["LearnPage"].superView = PSD["Screen"]
PSD["LearnPage"].x = PSD["Screen"].width
PSD["LearnPage"].y = PSD["Status"].height
PSD["OpenLearnButton"].opacity = 0

PSD["OpenNavFromLearn"].opacity = 0

PSD["OpenLearnButton"].on("click", function() {
	PSD["LearnPage"].placeBefore(PSD["WeekPage"])
	PSD["LearnPage"].placeBefore(PSD["BookmarkScroll"])
	PSD["TodayScroll"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	})

	PSD["ReportPage"].animate({
		properties: {
			x: PSD["Screen"].width
		},
		curve: animationCurve
	})

	PSD["LearnPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
})

openNavFromLearn = function(){
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["BookmarkScroll"].width	
		},
		curve: animationCurve
	})
}

hideNavFromLearn = function() {
	PSD["LearnPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
}

openNavFromLearnToggle = utils.toggle(openNavFromLearn, hideNavFromLearn)


PSD["OpenNavFromLearn"].on("click", function(){
	openNavFromLearnToggle()()
})



/*
	Report Page
*/
PSD["ReportPage"].superView = PSD["Screen"]
PSD["ReportPage"].x = PSD["Screen"].width
PSD["ReportPage"].y = PSD["Status"].height
PSD["OpenReportButton"].opacity = 0
PSD["OpenNavFromReport"].opacity = 0
PSD["HideReportPage"].opacity = 0

PSD["OpenReportButton"].on("click", function() {
	PSD["ReportPage"].placeBefore(PSD["WeekPage"])
	PSD["ReportPage"].placeBefore(PSD["BookmarkScroll"])
	PSD["TodayScroll"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
})

openNavFromReport = function(){
	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["BookmarkScroll"].width	
		},
		curve: animationCurve
	})
}

hideNavFromReport = function() {
	PSD["ReportPage"].animate({
		properties:{ 
			x: 0		
		},
		curve: animationCurve
	})
}

openNavFromReportToggle = utils.toggle(openNavFromReport, hideNavFromReport)


PSD["OpenNavFromReport"].on("click", function(){
	openNavFromReportToggle()()
})








/*
	open today button
*/

PSD["OpenTodayButton"].opacity = 0
PSD["OpenTodayButton"].on("click", function(){
	PSD["TodayScroll"].placeBefore(PSD["BookmarkScroll"])

	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["TodayScroll"].animate({
		properties: {
			x: 0
		},
		curve: animationCurve
	})
})

/*
	Foot Picture
*/
PSD["FootPicture"].superView = PSD["Screen"]
PSD["DoneFootPicture"].superView = PSD["FootPicture"]
PSD["OpenCamera"].superView = PSD["AddFootPage"]

PSD["FootPicture"].x = 0
PSD["FootPicture"].y = PSD["Screen"].height
PSD["OpenCamera"].opacity = 0
PSD["DoneFootPicture"].opacity = 0
PSD["DoneFootPicture"].placeBefore(PSD["FootPicture"])

PSD["OpenCamera"].on("click", function()  {
	PSD["FootPicture"].placeBefore(PSD["AddFootPage"])
	PSD["FootPicture"].animate({
		properties:{ 
			y: PSD["Status"].height
		},
		curve: animationCurve
	})
})

PSD["DoneFootPicture"].on("click", function() {
	PSD["FootPicture"].animate({
		properties:{ 
			y: PSD["Screen"].height
		},
		curve: animationCurve
	})
})

PSD["RewardPage"].superView = PSD["Screen"]

PSD["RewardPage"].sendToBack()
PSD["RewardPage"].x = 0
PSD["RewardPage"].y = PSD["Status"].height
PSD["CloseReward"].opacity = 0
PSD["CloseReward"].superView = PSD["RewardPage"]
PSD["CloseReward"].placeBefore(PSD["RewardPage"])

PSD["OpenReward"].opacity = 0
PSD["OpenReward"].on("click", function() {
	PSD["RewardPage"].bringToFront()
	PSD["OpenReward"].placeBehind(PSD["RewardPage"])
})

PSD["CloseReward"].on("click", function () {
	PSD["RewardPage"].sendToBack()
})


/*
	Navigation to Goal Page
*/
PSD["OpenGoalButton"].opacity = 0
PSD["OpenGoalButton"].on("click", function () {
	PSD["GoalPage"].placeBefore(PSD["BookmarkScroll"])

	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["GoalPage"].animate({
		properties: {
			x: 0
		},
		curve: animationCurve
	})
})	



PSD["OpenTodayButton"].opacity = 0
PSD["OpenTodayButton"].on("click", function(){
	PSD["TodayScroll"].placeBefore(PSD["BookmarkScroll"])

	PSD["WeekPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),
	PSD["LearnPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["ReportPage"].animate({
		properties:{ 
			x: PSD["Screen"].width		
		},
		curve: animationCurve
	}),

	PSD["TodayScroll"].animate({
		properties: {
			x: 0
		},
		curve: animationCurve
	})
})




/*
	Success - Glucose
*/

PSD["DoneGlucose"].opacity = 0
PSD["DoneGlucose"].x = PSD["Screen"].width
PSD["DoneGlucose"].superView = PSD["TodayScroll"]
PSD["Glucose_number"].superView = PSD["TodayScroll"]

PSD["Glucose_number"].on("click", function(){
	PSD["DoneGlucose"].animate({
		properties:{ 
			x: 317,
			opacity: 1		
		},
		curve: "ease-in",
		time: 500
	})
}) 

PSD["Close_Done_Glucose"].superView = PSD["DoneGlucose"]
PSD["Close_Done_Glucose"].opacity = 0
PSD["Close_Done_Glucose"].placeBefore(PSD["DoneGlucose"])

PSD["Close_Done_Glucose"].on("click", function() {
	PSD["DoneGlucose"].animate({
		properties:{ 
			x: PSD["Screen"].width,
			opacity: 0
		},
		curve: animationCurve
	})
})


/*
	Success - Activity
*/

PSD["DoneActivity"].opacity = 0
PSD["DoneActivity"].x = PSD["Screen"].width
PSD["DoneActivity"].superView = PSD["TodayScroll"]
PSD["Activity_number"].superView = PSD["TodayScroll"]

PSD["Activity_number"].on("click", function(){
	PSD["DoneActivity"].animate({
		properties:{ 
			x: 298,
			opacity: 1		
		},
		curve: "ease-in",
		time: 500
	})
}) 

PSD["Close_Activity_Msg"].superView = PSD["DoneActivity"]
PSD["Close_Activity_Msg"].opacity = 0
PSD["Close_Activity_Msg"].placeBefore(PSD["DoneActivity"])

PSD["Close_Activity_Msg"].on("click", function() {
	PSD["DoneActivity"].animate({
		properties:{ 
			x: PSD["Screen"].width,
			opacity: 0
		},
		curve: animationCurve
	})
})


/*
	Success - Foot
*/

PSD["DoneFoot"].opacity = 0
PSD["DoneFoot"].x = PSD["Screen"].width
PSD["DoneFoot"].superView = PSD["TodayScroll"]
PSD["Foot_number"].superView = PSD["TodayScroll"]

PSD["Foot_number"].on("click", function(){
	PSD["DoneFoot"].animate({
		properties:{ 
			x: 298,
			opacity: 1		
		},
		curve: "ease-in",
		time: 500
	})
}) 

PSD["Close_Foot_Msg"].superView = PSD["DoneFoot"]
PSD["Close_Foot_Msg"].opacity = 0
PSD["Close_Foot_Msg"].placeBefore(PSD["DoneFoot"])

PSD["Close_Foot_Msg"].on("click", function() {
	PSD["DoneFoot"].animate({
		properties:{ 
			x: PSD["Screen"].width,
			opacity: 0
		},
		curve: animationCurve
	})
})


/*
	Notification
*/

PSD["Show_notification"].opacity = 0
PSD["Notification"].opacity = 0
PSD["CloseNotification"].opacity = 0

PSD["Notification"].superView = PSD["Screen"]
PSD["CloseNotification"].superView = PSD["Notification"]
PSD["Show_notification"].superView = PSD["TodayScroll"]
PSD["Show_notification"].placeBefore(PSD["TodayScroll"])
PSD["TodayScroll"].placeBefore(PSD["Notification"])

PSD["Notification"].x = -16
PSD["Notification"].y = -221

PSD["Show_notification"].on("click", function() {
	PSD["Notification"].placeBefore(PSD["TodayScroll"])
	PSD["Notification"].animate({
		properties:{ 
			y: 36,
			opacity: 1		
		},
		curve: animationCurve
	})
}) 

PSD["CloseNotification"].on("click", function() {
	PSD["TodayScroll"].placeBefore(PSD["Notification"])
	PSD["Notification"].animate({
		properties:{ 
			y: -221,
			opacity: 0	
		},
		curve: animationCurve
	})
})

/*
	Report page
*/
PSD["TextBg"].height = 0
PSD["LeaveNote"].opacity = 0
PSD["LeaveNote"].superView = PSD["ReportPage"]
PSD["LastMonths"].superView = PSD["ReportPage"]

PSD["line1"].width = 0
PSD["line2"].width = 0
PSD["line3"].width = 0
PSD["line4"].width = 0

openNote = function(){
	PSD["LastMonths"].animate({
		properties:{ 
			y: 439
		},
		curve: "ease-in",
		time: 500
	})

	PSD["TextBg"].animate({
		properties:{ 
			height: 230		
		},
		curve: "ease-in",
		time: 500
	})

	utils.delay(1000, function() {
	// Fade in the intro view
		PSD["line1"].animate({
			properties: {width:141},
			curve: "ease-in",
			time: 500
		})
	})

	utils.delay(1000+500, function() {
	// Fade in the intro view
		PSD["line2"].animate({
			properties: {width:549},
			curve: "ease-in",
			time: 1000
		})
	})

	utils.delay(1000+1500, function() {
	// Fade in the intro view
		PSD["line3"].animate({
			properties: {width:555},
			curve: "ease-in",
			time: 1000
		})
	})

	utils.delay(1000+2200, function() {
	// Fade in the intro view
		PSD["line4"].animate({
			properties: {width:433},
			curve: "ease-in",
			time: 1000
		})
	})
}

closeNote = function() {
	PSD["TextBg"].animate({
		properties:{ 
			height: 0		
		},
		curve: animationCurve
	})

	PSD["LastMonths"].animate({
		properties:{ 
			y: 216	
		},
		curve: animationCurve,
	})

	PSD["line1"].width = 0
	PSD["line2"].width = 0
	PSD["line3"].width = 0
	PSD["line4"].width = 0
}

openNoteToggle = utils.toggle(openNote, closeNote)


PSD["LeaveNote"].on("click", function(){
	openNoteToggle()()
})


PSD["OpenReminderButton"].opacity = 0
















