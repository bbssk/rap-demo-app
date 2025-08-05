sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/bhargav/rap/travels/travels/test/integration/FirstJourney',
		'com/bhargav/rap/travels/travels/test/integration/pages/TravelList',
		'com/bhargav/rap/travels/travels/test/integration/pages/TravelObjectPage'
    ],
    function(JourneyRunner, opaJourney, TravelList, TravelObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/bhargav/rap/travels/travels') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheTravelList: TravelList,
					onTheTravelObjectPage: TravelObjectPage
                }
            },
            opaJourney.run
        );
    }
);