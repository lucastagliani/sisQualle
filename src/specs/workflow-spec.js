'use strict';
var WorkflowPage = require('../pages/WorkflowPage.js');

describe('D) Suite case of WorkflowPage:', function () {
    var page;

    beforeAll(function () {
        page = new WorkflowPage();
    });

    beforeEach(function () {
        page.get();
    });

    it('1. Deleta workflow', function () {
        page.deleteWorkflowCreatedByTest();


        // for (var index = 0; index < 10; index++) {
        //     page.get();
        //     page.deleteFirstWorkflow();
        // }
    });
});

