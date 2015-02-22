'use strict';
/**
 * @ngdoc overview
 * @name unchatbar-notification
 * @description
 * # unchatbar-data-chat-connection
 *
 * Main module of the application.
 */
angular.module('unchatbar-notification').run(['$rootScope','Notify',
    function ($rootScope,Notify) {
        Notify._initStreamSound();
        Notify._initMessageSound();
        Notify._getNotificationPermission();
        $rootScope.$on('StreamUpdate', function (event, data) {
            if (data.waitingClients.length > 0) {
                Notify.streamCallStart();
            } else {
                Notify.streamCallStop();
            }
        });
        $rootScope.$on('MessageUpdateUnreadMessage', function (event, message) {
            Notify.textMessage(message);
        });


    }
]);
