/**
 * Created by Feruz.Abdella on 3/21/2016.
 */
(function () {

    'use strict';

    angular
        .module('app.patient')
        .controller('PatientController', PatientController);

    /* @ngInject */
    function PatientController(patientData,verificationInfo,$state){
        var vm = this;
        vm.patientdata = patientData[0];
        vm.states = patientData[1];
        vm.verificationinfo = verificationInfo;
        vm.title = $state.current.data.pageTitle;
    }
})();