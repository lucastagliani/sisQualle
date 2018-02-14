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
        page.deleteWorkflowByIndex(3);
        page.deleteWorkflowByIndex(4);
    });
});

